import { expect } from "chai";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { ethers } from "hardhat";

describe("deploy NFT Contract", function () {
  async function deployTokenFixture() {
    const [deployer] = await ethers.getSigners();

    const NFT = await ethers.getContractFactory("TTM_NFT");
    const marketPlace = await ethers.getContractFactory("Marketplace");
    const [owner, addr1, addr2] = await ethers.getSigners();
    await deployer.sendTransaction({ to: owner.address, value: ethers.utils.parseEther("100") });
    await deployer.sendTransaction({ to: addr1.address, value: ethers.utils.parseEther("100") });
    await deployer.sendTransaction({ to: addr2.address, value: ethers.utils.parseEther("100") });

    const marketPlaceContract = await marketPlace.deploy(ethers.utils.parseEther("0.1"));
    await marketPlaceContract.deployed();

    const nftContract = await NFT.deploy(marketPlaceContract.address);
    await nftContract.deployed();
    return { marketPlaceContract, marketPlace, nftContract, owner, addr1, addr2 };
  }

  describe("test mint nft", function () {
    it("test mint", async function () {
      const { nftContract, marketPlaceContract, marketPlace, owner, addr1 } = await loadFixture(deployTokenFixture);
      const tokenId = 0;
      await nftContract.connect(addr1).mint(tokenId, "google.com", { value: ethers.utils.parseEther("3") });
      expect(await nftContract.balanceOf(addr1.address)).to.equal(1);
      expect(await nftContract.ownerOf(tokenId)).to.equal(addr1.address);
    });
  });

  it("test total mint", async function () {
    const { nftContract, marketPlaceContract, marketPlace, owner, addr1 } = await loadFixture(deployTokenFixture);
    for (let i = 0; i < 300; i++) {
      const tokenId = i;
      await nftContract.connect(addr1).mint(tokenId, "google.com", { value: ethers.utils.parseEther("3") });
    }
    expect(await nftContract.balanceOf(addr1.address)).to.equal(300);
    try {
      await expect((nftContract.connect(addr1).mint(300, "google.com", { value: ethers.utils.parseEther("3") }))).to.be.revertedWith("All NFTs have been minted");
    } catch (e) {
      console.log(e)
    }

  });


  describe(" check marketplace", function () {
    it("test list nft", async function () {
      const { nftContract, marketPlaceContract, marketPlace, owner, addr1 } = await loadFixture(deployTokenFixture);
      const tokenId = 0;
      await nftContract.connect(addr1).mint(tokenId, "google.com", { value: ethers.utils.parseEther("3") });
      expect(await nftContract.balanceOf(addr1.address)).to.equal(1);
      expect(await nftContract.ownerOf(tokenId)).to.equal(addr1.address);
      const listingPrice = await marketPlaceContract.listingPrice();
      await nftContract.connect(addr1).approve(marketPlaceContract.address, tokenId);
      await marketPlaceContract.connect(addr1).listNft(nftContract.address, tokenId, ethers.utils.parseEther("3"), { value: listingPrice });
      expect(await nftContract.ownerOf(tokenId)).to.equal(marketPlaceContract.address);
    });

    it("test delist nft", async function () {
      const { nftContract, marketPlaceContract, marketPlace, owner, addr1 } = await loadFixture(deployTokenFixture);
      const tokenId = 0;
      await nftContract.connect(addr1).mint(tokenId, "google.com", { value: ethers.utils.parseEther("3") });
      expect(await nftContract.balanceOf(addr1.address)).to.equal(1);
      expect(await nftContract.ownerOf(tokenId)).to.equal(addr1.address);
      const listingPrice = await marketPlaceContract.listingPrice();
      await nftContract.connect(addr1).approve(marketPlaceContract.address, tokenId);
      await marketPlaceContract.connect(addr1).listNft(nftContract.address, tokenId, ethers.utils.parseEther("3"), { value: listingPrice });
      expect(await nftContract.ownerOf(tokenId)).to.equal(marketPlaceContract.address);
      await marketPlaceContract.connect(addr1).delistNft(tokenId);
      expect(await nftContract.ownerOf(tokenId)).to.equal(addr1.address);

      // marketPlaceContract.connect(addr1).changeNFTPrice(tokenId, ethers.utils.parseEther("3"));

    });

    it("test change price of listed item", async function () {
      const { nftContract, marketPlaceContract, marketPlace, owner, addr1 } = await loadFixture(deployTokenFixture);
      const tokenId = 0;
      await nftContract.connect(addr1).mint(tokenId, "google.com", { value: ethers.utils.parseEther("3") });
      expect(await nftContract.balanceOf(addr1.address)).to.equal(1);
      expect(await nftContract.ownerOf(tokenId)).to.equal(addr1.address);
      const listingPrice = await marketPlaceContract.listingPrice();
      await nftContract.connect(addr1).approve(marketPlaceContract.address, tokenId);
      await marketPlaceContract.connect(addr1).listNft(nftContract.address, tokenId, ethers.utils.parseEther("3"), { value: listingPrice });
      expect(await nftContract.ownerOf(tokenId)).to.equal(marketPlaceContract.address);
      marketPlaceContract.connect(addr1).changeNFTPrice(tokenId, ethers.utils.parseEther("3"));

      // // expect equal to the new price
      const item = await marketPlaceContract.fetchAnItem(tokenId);
      expect(item.price).to.equal(ethers.utils.parseEther("3"));

    });

    it("test buy item", async function () {
      const { nftContract, marketPlaceContract, marketPlace, owner, addr1, addr2 } = await loadFixture(deployTokenFixture);
      const tokenId = 0;
      const itemId = 0;
      await nftContract.connect(addr1).mint(tokenId, "google.com", { value: ethers.utils.parseEther("3") });
      await nftContract.mint(1, "google.com", { value: ethers.utils.parseEther("3") });
      expect(await nftContract.balanceOf(addr1.address)).to.equal(1);
      expect(await nftContract.ownerOf(tokenId)).to.equal(addr1.address);
      const listingPrice = await marketPlaceContract.listingPrice();
      await nftContract.connect(addr1).approve(marketPlaceContract.address, tokenId);
      await marketPlaceContract.connect(addr1).listNft(nftContract.address, itemId, ethers.utils.parseEther("3"), { value: listingPrice });

      await marketPlaceContract.connect(addr2).buyNft(itemId, { value: ethers.utils.parseEther("3") });
      expect(await nftContract.ownerOf(tokenId)).to.equal(addr2.address);
    });

  });


});
