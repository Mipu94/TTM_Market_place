// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.

import { Contract } from "@ethersproject/contracts";
import { artifacts, ethers, network } from "hardhat";

const path = require("path");

async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
      "gets automatically created and destroyed every time. Use the Hardhat" +
      " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());


  // const marketplace = await ethers.getContractFactory("Marketplace");
  // const marketplaceContract = await marketplace.deploy(ethers.utils.parseEther("0.1"));
  // await marketplaceContract.deployed();

  const Token = await ethers.getContractFactory("TTM");
  // owner holding 1k B token
  const tokenContract = await Token.deploy(deployer.address);


  const nft = await ethers.getContractFactory("TTM_NFT");
  const nftContract = await nft.deploy("Astronauts NFT", "ASTR", tokenContract.address, "2000000000000000000000000000", "https://localhost.com/nft", "0x976EA74026E726554dB657fA54763abd0C3a0aa9");
  await nftContract.deployed();
  await tokenContract.connect(deployer).transfer(nftContract.address, ethers.utils.parseEther("600000000000"));
  await tokenContract.deployed();


  console.log("NFT address:", nftContract.address);
  console.log("Token address:", tokenContract.address);

  // We also save the contract's artifacts and address in the frontend directory
  // saveFrontendFiles({ nftContract, nftName: "TTM_NFT", marketplaceContract, MarketplaceName: "Marketplace" });
  saveFrontendFiles({ nftContract, nftName: "TTM_NFT" });


}

// function saveFrontendFiles({ nftContract, nftName, marketplaceContract, MarketplaceName }
function saveFrontendFiles({ nftContract, nftName }
  : { nftContract: Contract, nftName: string }
) {
  const fs = require("fs");
  const contractsDir = path.join(__dirname, "..", "app", "contracts");

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, "contract-address.json"),
    // JSON.stringify({ nftAddress: nftContract.address, marketplaceAddress: marketplaceContract.address }, undefined, 2)
    JSON.stringify({ nftAddress: nftContract.address }, undefined, 2)
  );

  const NFTArtifact = artifacts.readArtifactSync(nftName);
  // const MarketplaceArtifact = artifacts.readArtifactSync(MarketplaceName);

  fs.writeFileSync(
    path.join(contractsDir, nftName + ".json"),
    JSON.stringify(NFTArtifact, null, 2)
  );

  // fs.writeFileSync(
  //   path.join(contractsDir, MarketplaceName + ".json"),
  //   JSON.stringify(MarketplaceArtifact, null, 2)
  // );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
