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
  let devWallet = deployer.address;
  const nftContract = await nft.deploy("Astronauts NFT", "ASTR", tokenContract.address, "2000000000000000000000000000", "https://devv.openmoon.co/api/nft/", devWallet);
  await nftContract.deployed();
  await tokenContract.connect(deployer).transfer(nftContract.address, ethers.utils.parseEther("600000000000"));
  await tokenContract.deployed();

  const airdrop = await ethers.getContractFactory("TTM_Airdrop");
  const airdropContract = await airdrop.deploy(tokenContract.address, "1000000000000000000000000", devWallet);

  await airdropContract.connect(deployer).setAllowPublicMint(true);
  await tokenContract.connect(deployer).transfer(airdropContract.address, ethers.utils.parseEther("2000000000"));




  console.log("NFT address:", nftContract.address);
  console.log("Token address:", tokenContract.address);
  console.log("airdropContract address:", airdropContract.address);

  // We also save the contract's artifacts and address in the frontend directory
  // saveFrontendFiles({ nftContract, nftName: "TTM_NFT", marketplaceContract, MarketplaceName: "Marketplace" });
  saveFrontendFiles({ nftContract, nftName: "TTM_NFT", tokenContract, tokenName: "TTM", airdropContract, airdropName: "TTM_Airdrop" });
}

// function saveFrontendFiles({ nftContract, nftName, marketplaceContract, MarketplaceName }
function saveFrontendFiles({ nftContract, nftName, tokenContract, tokenName, airdropContract, airdropName }
  : { nftContract: Contract, nftName: string, tokenContract: Contract, tokenName: string, airdropContract: Contract, airdropName: string }
) {
  const fs = require("fs");
  const contractsDir = path.join(__dirname, "..", "app", "contracts");

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, "contract-address.json"),
    // JSON.stringify({ nftAddress: nftContract.address, marketplaceAddress: marketplaceContract.address }, undefined, 2)
    JSON.stringify({ nftAddress: nftContract.address, tokenAddress: tokenContract.address, airdropAddress: airdropContract.address }, undefined, 2)
  );

  const NFTArtifact = artifacts.readArtifactSync(nftName);
  const TokenArtifact = artifacts.readArtifactSync(tokenName);
  const AirdropArtifact = artifacts.readArtifactSync(airdropName);

  fs.writeFileSync(
    path.join(contractsDir, nftName + ".json"),
    JSON.stringify(NFTArtifact, null, 2)
  );

  fs.writeFileSync(
    path.join(contractsDir, tokenName + ".json"),
    JSON.stringify(TokenArtifact, null, 2)
  );

  fs.writeFileSync(
    path.join(contractsDir, airdropName + ".json"),
    JSON.stringify(AirdropArtifact, null, 2)
  );

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
