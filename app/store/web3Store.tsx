import { create } from 'zustand';
import { TTM_NFT__factory, TTM_NFT, TTM_Airdrop__factory, TTM_Airdrop } from "../typechain"
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
    AirdropContract: TTM_Airdrop | null;
    // MarketplaceContract: Marketplace | null;
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
    mintNFT: (tokenId: number) => void;

}



export const useWebStore = create<Web3ModalStorage>((set, get) => ({
    isConnected: false,
    setIsConnected: (isConnected: boolean) => set({ isConnected }),
    connect: async () => {
        if (!window.ethereum) {
            enqueueSnackbar("Please install MetaMask Wallet", { variant: 'error' });
            return;
        }
        var chainId = await window.ethereum.request({ method: "eth_chainId" });
        // chainId = ethers.utils.hexlify(chainId)
        if (chainId != (process.env.NODE_ENV == "development" ? networks.dev.chainId : networks.prod.chainId)) {
            let changeNetwork = get().changeNetwork;
            return changeNetwork()
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        set({ signer });
        set({
            isConnected: true
        });
        set({ walletAddress: await signer.getAddress() });
        // set({ NFTContract: TTM_NFT__factory.connect(addresses.nftAddress, provider), MarketplaceContract: Marketplace__factory.connect(addresses.marketplaceAddress, signer) });
        set({ NFTContract: TTM_NFT__factory.connect(addresses.nftAddress, signer) });
        set({ AirdropContract: TTM_Airdrop__factory.connect(addresses.airdropAddress, signer) });
        enqueueSnackbar("Connected", { variant: 'success' });
    },
    disconnect: () => set({ isConnected: false }),
    NFTContract: null,
    AirdropContract: null,
    // MarketplaceContract: null,
    init: async () => {
        if (!window.ethereum) {
            enqueueSnackbar("Please install MetaMask Wallet", { variant: 'error' });
            return;
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


        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.listAccounts();
        if (accounts.length == 0) {
            // set({ NFTContract: TTM_NFT__factory.connect(addresses.nftAddress, provider), MarketplaceContract: Marketplace__factory.connect(addresses.marketplaceAddress, provider) });
            set({ NFTContract: TTM_NFT__factory.connect(addresses.nftAddress, provider) });
            set({ AirdropContract: TTM_Airdrop__factory.connect(addresses.airdropAddress, provider) });

            return set({ isConnected: false, walletAddress: null });

        }
        const signer = provider.getSigner();
        // set({ NFTContract: TTM_NFT__factory.connect(addresses.nftAddress, signer), MarketplaceContract: Marketplace__factory.connect(addresses.marketplaceAddress, signer) });
        set({ NFTContract: TTM_NFT__factory.connect(addresses.nftAddress, signer) });
        set({ AirdropContract: TTM_Airdrop__factory.connect(addresses.airdropAddress, signer) });

        set({ isConnected: true, walletAddress: accounts[0] });
        // check is develop env

        const chainId = (await provider.getNetwork()).chainId;
        if (process.env.NODE_ENV === "development") {
            if (chainId != parseInt(networks.dev.chainId, 16)) {
                set({ isConnected: false, walletAddress: null });
                enqueueSnackbar("Dev Please connect to the correct network", { variant: 'error' });
            }
        }
        else {
            if (chainId != parseInt(networks.prod.chainId, 16)) {
                set({ isConnected: false, walletAddress: null });
                enqueueSnackbar("Please connect to the correct network", { variant: 'error' });
            }
        }
    },
    isInit: false,
    walletAddress: null,
    changeNetwork: () => {
        try {
            if (!window.ethereum) {
                enqueueSnackbar("Please install MetaMask Wallet", { variant: 'error' });
                return;
            }

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
        } catch (e) {
            console.log(e)
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
    getRemainAirdrop: async () => {
        let AirdropContract = get().AirdropContract;
        let wallet = get().walletAddress;
        if (AirdropContract != null && wallet != null) {
            let remain = await AirdropContract?.getMintedCount(wallet);
            return 5 - remain;
        }
        return 0;
    },
    claimAirdrop: async () => {
        // return alert("not ready to mint, please wait for the release.");
        let isConnected = get().isConnected;
        let AirdropContract = get().AirdropContract;
        if (isConnected && AirdropContract != null) {
            try {
                let price = await AirdropContract?.gasValue();
                let tx = await AirdropContract?.mint(
                    {
                        value: price,
                    }
                );
                enqueueSnackbar("claiming airdrop, please wait... ", {
                    variant: "success",
                });
                await tx.wait();
                window.location.reload();

            } catch (e: any) {
                if (e.message.includes("Not allowed public mint")) {
                    return enqueueSnackbar("this NFT is not ready to mint, please wait for the release.", { variant: "error" });
                }
                if (e.message.includes("Insufficient funds sent")) {
                    return enqueueSnackbar("Insufficient funds sent", { variant: "error" })
                }

                if (e.message.includes("Insufficient token amount in the contract")) {
                    return enqueueSnackbar("No more token to claim, please wait for next airdrop.", { variant: "error" })
                }

                if (e.data?.message?.includes("insufficient funds")) {
                    return enqueueSnackbar("Insufficient funds.", { variant: "error" })
                }

                if (e.message.includes("user rejected transaction ")) {
                    // return enqueueSnackbar("user rejected transaction ", { variant: "error" })
                }
                else {
                    enqueueSnackbar(e.message, { variant: "error" });
                }
                console.log(e)
            }
        } else {
            enqueueSnackbar("wallet is not connected", { variant: "error" });
        }

    },
    mintNFT: async (id: number) => {
        // return alert("not ready to mint, please wait for the release.");
        let isConnected = get().isConnected;
        let NFTContract = get().NFTContract;
        if (isConnected && NFTContract != null) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            // console.log(await NFTContract.totalNFT())
            console.log(NFTContract.mintingPrice())
            try {
                let price = await NFTContract?.mintingPrice();
                let tx = await NFTContract?.mint(
                    id,
                    {
                        value: price,
                    }
                );
                enqueueSnackbar("minting 1 NFT to " + tx.to, {
                    variant: "success",
                });
                await tx.wait();
                window.location.reload();

                setTimeout(() => {
                    window.location.reload();
                }, 5000);
            } catch (e: any) {
                if (e.message.includes("Not allowed public mint")) {
                    return enqueueSnackbar("this NFT is not ready to mint, please wait for the release.", { variant: "error" });
                }
                if (e.message.includes("only Owner can use this tokenId")) {
                    return enqueueSnackbar("only Owner can use this tokenId", { variant: "error" })
                }
                if (e.message.includes("Insufficient funds sent")) {
                    return enqueueSnackbar("Insufficient funds sent", { variant: "error" })
                }

                if (e.message.includes("Can't mint this token")) {
                    return enqueueSnackbar("Can't mint this token", { variant: "error" })
                }
                if (e.message.includes("Token already minted")) {
                    return enqueueSnackbar("Token already minted", { variant: "error" })
                }
                if (e.data?.message?.includes("insufficient funds")) {
                    return enqueueSnackbar("Insufficient funds.", { variant: "error" })
                }

                if (e.message.includes("user rejected transaction ")) {
                    // return enqueueSnackbar("user rejected transaction ", { variant: "error" })
                }
                else {
                    enqueueSnackbar(e.message, { variant: "error" });
                }
                console.log(e)
            }
        } else {
            console.log("wallet is not connected");
        }
    }
}));

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
    const init = useWebStore((state) => state.init);
    const { NFTContract, isConnected, totalsNFT, setTotalsNFT, totalMinted, setTotalMinted, mintedItems, setMintedItems, freeItems, setFreeItems } = useWebStore((state) => state);

    async function checkMintedItems() {
        if (NFTContract != null) {
            try {

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

                    let notMint = [];
                    for (let i = 10; i < _totalsNFT; i++) {
                        if (!_totalMinted.includes(i)) {
                            notMint.push(i);
                        }
                    }


                    setFreeItems(notMint);
                }
            } catch (e) {
                console.log(e);

            }
        }
        else {
            let random = Array.from({ length: 300 }, (_, i) => i + 1);
            random.sort(() => Math.random() - 0.5);
            setFreeItems(random);
        }
    }



    useEffect(() => {
        if (!window.ethereum) {
            return;

        }

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
