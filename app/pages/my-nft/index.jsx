import React from "react";
import NFTCard from "../../components/nft-card";
import ViewRow from "../../components/view-row";
import { useWebStore } from "../../store/web3Store";
import { useState, useEffect } from "react";

export default function MyNFTPage() {
  const [items, setItems] = useState(1);
  const { NFTContract, walletAddress, isConnected } = useWebStore();

  useEffect(() => {
    if (isConnected) {
      console.log(isConnected, NFTContract);
      NFTContract.balanceOf(walletAddress).then((res) => {
        setItems(res.toNumber());
      });
      // NFTContract.
    }
  }, [isConnected]);

  return (
    <section className="explore_page py-5">
      <div className="container py-4">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 text-center">
            <h3 className="section_head">My NFT</h3>
            <p className="section_sub_head">
              you have {items} NFTs in your collection
            </p>
          </div>
        </div>
      </div>
      <ViewRow>
        {[...Array(8)].map((i) => (
          <NFTCard key={i} id={i} fullWidth={true} />
        ))}
        {[...Array(8)].map((_, i) => (
          <NFTCard key={i} id={i} fullWidth={true} />
        ))}{" "}
        {[...Array(8)].map((_, i) => (
          <NFTCard key={i} id={i} fullWidth={true} />
        ))}
      </ViewRow>
    </section>
  );
}
