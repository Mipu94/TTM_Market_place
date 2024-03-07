// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.

import { Contract } from "@ethersproject/contracts";
import { artifacts, ethers, network } from "hardhat";
const addresses = require("../app/contracts/contract-address.json");

const path = require("path");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(
        "runing the contracts with the account:",
        await deployer.getAddress()
    );


    const Token = await ethers.getContractFactory("TTM");
    const tokenContract = await Token.connect(deployer).attach(addresses.tokenAddress);


    // const nft = await ethers.getContractFactory("TTM_NFT");
    // const nftContract = await nft.connect(deployer).attach(addresses.nftAddress);
    // let x = await nftContract.setAllowPublicMint(true);
    // console.log(x);

    const Airdrop = await ethers.getContractFactory("TTM_Airdrop");
    const AirdropContract = await Airdrop.connect(deployer).attach(addresses.airdropAddress);
    await AirdropContract.connect(deployer).setAllowPublicMint(true);
    await tokenContract.connect(deployer).transfer(AirdropContract.address, ethers.utils.parseEther("2000000000"));
}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
