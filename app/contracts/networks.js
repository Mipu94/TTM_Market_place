const networks = {
  "dev": {
    rpcUrls: ["http://127.0.0.1:8545/"],
    chainId: "0x539",
    chainName: "Localhost 8541",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18
    },
  },
  "prod": {
    chainId: "0x89",
    rpcUrls: ["https://rpc-mainnet.matic.network/"],
    chainName: "Matic Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
    },
    blockExplorerUrls: ["https://polygonscan.com/"]

  }
}

export default networks;
