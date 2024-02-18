require("@nomicfoundation/hardhat-toolbox");
// import { HardhatUserConfig } from "hardhat/types";
// import "@nomiclabs/hardhat-ethers";


const config = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      chainId: 1337
    }
  },
  typechain: {
    outDir: "app/typechain",
    target: "ethers-v5",

  },


};

export default config;
