import { create } from 'zustand';
import { TTM_NFT__factory, Marketplace__factory, TTM_NFT, Marketplace } from "../typechain"
import { ethers } from 'ethers';
import { useEffect, useRef } from 'react';
const addresses = require("../contracts/contract-address.json");
import { enqueueSnackbar } from 'notistack';
import networks from "../contracts/networks";


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
        set({
            isConnected: true
        });
        set({ walletAddress: await signer.getAddress() });
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
        set({ NFTContract: TTM_NFT__factory.connect(addresses.nftAddress, provider), MarketplaceContract: Marketplace__factory.connect(addresses.marketplaceAddress, provider) });
        const accounts = await provider.listAccounts();
        if (accounts.length == 0) {
            return set({ isConnected: false, walletAddress: null });
        }

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

    }
}));

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
    const init = useWebStore((state) => state.init);
    useEffect(() => {
        if (!window.ethereum)
            return

        init();
    }, [ethers]);


    const web3 = useWebStore((state) => state);
    return <>{children}</>;
}
