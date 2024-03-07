const networks = {
  // "dev": {
  //   rpcUrls: ["http://127.0.0.1:8545/"],
  //   chainId: "0x539",
  //   chainName: "Localhost 8541",
  //   nativeCurrency: {
  //     name: "ETH",
  //     symbol: "ETH",
  //     decimals: 18
  //   }
  // },
  "dev": {
    rpcUrls: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"],
    chainId: "0x61",
    chainName: "BSC testnet",
    nativeCurrency: {
      name: "TBNB",
      symbol: "tBNB",
      decimals: 18
    }
  },
  "prod": {
    rpcUrls: ["https://bsc-dataseed1.binance.org/", "https://bsc-dataseed2.binance.org/"],
    chainId: "0x38",
    chainName: "BNB Smart Chain",
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18
    }
  },
}

export default networks;
