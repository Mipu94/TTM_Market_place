import { create } from 'zustand';
import { TTM_NFT__factory, Marketplace__factory, TTM_NFT, Marketplace } from "../typechain"
import { ethers } from 'ethers';
import { useEffect, useRef } from 'react';
const addresses = require("../contracts/contract-address.json");
import { enqueueSnackbar } from 'notistack';
import networks from "../networks";


interface Web3ModalStorage {
    isConnected: boolean;
    setIsConnected: (isConnected: boolean) => void;
    connect: () => void;
    disconnect: () => void;
    NFTContract: TTM_NFT | null;
    MarketplaceContract: Marketplace | null;
    init(): void;
    isInit: boolean;
    walletAddress: string | null;
    changeNetwork: () => void;
    signer: ethers.Signer | null;
    totalsNFT: number;
    setTotalsNFT: (totalsNFT: number) => void;
    totalMinted: number;
    setTotalMinted: (totalMinted: number) => void;
    mintedItems: number[];
    setMintedItems: (mintedItems: number[]) => void;
    freeItems: number[];
    setFreeItems: (freeItems: number[]) => void;

}



export const useWebStore = create<Web3ModalStorage>((set, get) => ({
    isConnected: false,
    setIsConnected: (isConnected: boolean) => set({ isConnected }),
    connect: async () => {
        if (!window.ethereum) {
            enqueueSnackbar("Please install MetaMask Wallet", { variant: 'error' });
            return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        set({ signer });
        set({
            isConnected: true
        });
        set({ walletAddress: await signer.getAddress() });
        set({ NFTContract: TTM_NFT__factory.connect(addresses.nftAddress, provider), MarketplaceContract: Marketplace__factory.connect(addresses.marketplaceAddress, signer) });
        enqueueSnackbar("Connected", { variant: 'success' });
    },
    disconnect: () => set({ isConnected: false }),
    NFTContract: null,
    MarketplaceContract: null,
    init: async () => {

        if (!window.ethereum) {
            enqueueSnackbar("Please install MetaMask Wallet", { variant: 'error' });
            return;
        }
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const accounts = await provider.listAccounts();
        if (accounts.length == 0) {
            set({ NFTContract: TTM_NFT__factory.connect(addresses.nftAddress, provider), MarketplaceContract: Marketplace__factory.connect(addresses.marketplaceAddress, provider) });
            return set({ isConnected: false, walletAddress: null });
        }

        set({ NFTContract: TTM_NFT__factory.connect(addresses.nftAddress, signer), MarketplaceContract: Marketplace__factory.connect(addresses.marketplaceAddress, signer) });

        set({ isConnected: true, walletAddress: accounts[0] });
        // check is develop env

        const chainId = (await provider.getNetwork()).chainId;
        if (process.env.NODE_ENV === "development") {
            if (chainId != parseInt(networks.dev.chainId, 16))
                enqueueSnackbar("Dev Please connect to the correct network", { variant: 'error' });
        }
        else {
            if (chainId != parseInt(networks.prod.chainId, 16))
                enqueueSnackbar("Please connect to the correct network", { variant: 'error' });
        }


        window.ethereum.on('accountsChanged', (accounts: string[]) => {
            if (accounts.length > 0) {
                set({ isConnected: true, walletAddress: accounts[0] });
                // enqueueSnackbar("Connected", { variant: 'success' });
            } else {
                set({ isConnected: false, walletAddress: null });
                enqueueSnackbar("Disconnected", { variant: 'error' });
            }
        });

        window.ethereum.on('chainChanged', (chainId: string) => {
            window.location.reload();
        });


    },
    isInit: false,
    walletAddress: null,
    changeNetwork: () => {
        if (process.env.NODE_ENV === "development") {
            window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [networks.dev]
            });
        }
        else {
            window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [networks.prod]
            });
        }
    },
    signer: null,
    mintedItems: [],
    freeItems: [],
    totalsNFT: -1,
    totalMinted: -1,
    setTotalsNFT: (totalsNFT: number) => set({ totalsNFT }),
    setTotalMinted: (totalMinted: number) => { console.log("setting", totalMinted); set({ totalMinted }) },
    setMintedItems: (mintedItems: number[]) => set({ mintedItems }),
    setFreeItems: (freeItems: number[]) => set({ freeItems }),
}));

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
    const init = useWebStore((state) => state.init);
    const { NFTContract, isConnected, totalsNFT, setTotalsNFT, totalMinted, setTotalMinted, mintedItems, setMintedItems, freeItems, setFreeItems } = useWebStore((state) => state);

    async function checkMintedItems() {
        if (NFTContract != null) {
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                // await provider.send("eth_requestAccounts", []);


                let _totalsNFT = (await NFTContract.totalNFT()).toNumber();
                if (totalsNFT != _totalsNFT) {
                    setTotalsNFT(_totalsNFT);
                }

                let _mintedItems = await NFTContract.getAllMintedTokens()
                if (_mintedItems.length != totalMinted) {
                    setTotalMinted(_mintedItems.length);

                    let _totalMinted: number[] = _mintedItems.map((x) => {
                        return x.toNumber();
                    });

                    setMintedItems(_totalMinted);
                    console.log(_totalMinted);

                    let notMint = [];
                    for (let i = 0; i < _totalsNFT; i++) {
                        console.log();
                        if (!_totalMinted.includes(i)) {
                            notMint.push(i);
                        }
                    }
                    console.log(_totalMinted);

                    setFreeItems(notMint);
                }
            } catch (e) {
                console.log(e);

            }
        }
    }

    // setInterval(checkMintedItems, 5000);

    useEffect(() => {
        if (!window.ethereum)
            return;

        init();

    }, [ethers]);

    useEffect(() => {
        checkMintedItems();

    }, [NFTContract]);

    // for debug only
    // useEffect(() => { console.log(freeItems) }, [freeItems]);

    const web3 = useWebStore((state) => state);
    return <>{children}</>;
}
