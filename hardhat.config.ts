import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/types";
// import "@nomiclabs/hardhat-ethers";

const { mnemonic } = require('./secrets.json');

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      chainId: 1337
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: { mnemonic: mnemonic }
    },
    mainnet: {
      url: "https://bsc-dataseed.bnbchain.org/",
      chainId: 56,
      gasPrice: 20000000000,
      // accounts: { mnemonic: mnemonic }
    }
  },
  typechain: {
    outDir: "app/typechain",
    target: "ethers-v5",
  },


};

export default config;
