import { expect } from "chai";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { ethers } from "hardhat";

describe("deploy NFT Contract", function () {
  async function deployTokenFixture() {
    const NFT = await ethers.getContractFactory("TTM_NFT");
    const [owner, addr1, addr2] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("TTM");
    // owner holding 1k B token
    const tokenContract = await Token.deploy(owner.address);

    // const marketPlace = await ethers.getContractFactory("Marketplace");
    // const marketPlaceContract = await marketPlace.deploy(ethers.utils.parseEther("0.1"));


    const nftContract = await NFT.deploy("Astronauts NFT", "ASTR", tokenContract.address, "2000000000000000000000000000", "http://localhost/api/nft/", addr2.address);
    await nftContract.deployed();
    return { tokenContract, nftContract, owner, addr1, addr2 };
    // return { tokenContract, marketPlaceContract, marketPlace, nftContract, owner, addr1, addr2 };
  }

  describe("test NFT", function () {
    it("check public mint", async function () {
      const { addr2, tokenContract, nftContract, owner, addr1 } = await loadFixture(deployTokenFixture);
      await tokenContract.connect(owner).transfer(nftContract.address, ethers.utils.parseEther("600000000000"));
      const tokenId = 10;
      await expect(nftContract.connect(addr1).mint(tokenId, { value: ethers.utils.parseEther("3") })).to.be.revertedWith("Not allowed public mint");

      await nftContract.connect(owner).setAllowPublicMint(true);
      await nftContract.connect(addr1).mint(tokenId, { value: ethers.utils.parseEther("3") });
      let uri = await nftContract.tokenURI(tokenId);
      expect(uri == ("http://localhost/api/nft/" + tokenId))
    });


    it("test mint", async function () {
      const { addr2, tokenContract, nftContract, owner, addr1 } = await loadFixture(deployTokenFixture);
      await tokenContract.connect(owner).transfer(nftContract.address, ethers.utils.parseEther("600000000000"));
      await nftContract.connect(owner).setAllowPublicMint(true);

      const tokenId = 10;

      await nftContract.connect(addr1).mint(tokenId, { value: ethers.utils.parseEther("3") });
      await nftContract.connect(addr1).mint(tokenId + 1, { value: ethers.utils.parseEther("3") });

      // receive 6 BNB
      expect(await ethers.provider.getBalance(addr2.address)).to.equal(ethers.utils.parseEther("10006"));

      // receive 2 nft + 4B token
      expect(await nftContract.balanceOf(addr1.address)).to.equal(2);
      expect(await tokenContract.balanceOf(addr1.address)).to.equal(ethers.utils.parseEther("4000000000"));
    });
  });

  it("test token URI", async function () {
    const { tokenContract, nftContract, owner, addr1 } = await loadFixture(deployTokenFixture);
    await tokenContract.connect(owner).transfer(nftContract.address, ethers.utils.parseEther("600000000000"));
    await nftContract.connect(owner).setAllowPublicMint(true);
    const tokenId = 10;
    await nftContract.connect(addr1).mint(tokenId, { value: ethers.utils.parseEther("3") });
    await nftContract.connect(owner).setAllowPublicMint(true);

    let uri = await nftContract.tokenURI(tokenId);
    expect(uri == ("http://localhost/api/nft/" + tokenId))
  });

  it("test give away", async function () {
    const { tokenContract, nftContract, owner, addr1 } = await loadFixture(deployTokenFixture);
    await tokenContract.connect(owner).transfer(nftContract.address, ethers.utils.parseEther("600000000000"));
    const tokenId = 1;
    await nftContract.connect(owner).giveAway(addr1.address, tokenId);
    await nftContract.connect(owner).giveAway(addr1.address, tokenId + 1);
    expect(await nftContract.balanceOf(addr1.address)).to.equal(2);
    expect(await tokenContract.balanceOf(addr1.address)).to.equal(ethers.utils.parseEther("4000000000"));
  });


  describe(" check token transfered to owner", function () {
    it("test transfer", async function () {
      const { tokenContract, owner } = await loadFixture(deployTokenFixture);
      let value = await tokenContract.balanceOf(owner.address)
      expect(value).to.equal(ethers.utils.parseEther("1000000000000"));
    });
  });
});
