import React from "react";
import styles from "./explore.module.sass";
import NFTCard from "../../components/nft-card";
import ViewRow from "../../components/view-row";
import { useWebStore } from "../../store/web3Store";
import { useState, useEffect } from "react";

export default function ExplorePage() {
  const { NFTContract, walletAddress, isConnected } = useWebStore();
  const [mintedItems, setMintedItems] = useState([]);
  const [freeItems, setFreeItems] = useState([]);
  var idx = 0;
  const [loadedItems, setLoadedItems] = useState([]);
  const pageSize = 12;

  function fetchMore() {
    let newItems = freeItems.slice(idx, idx + pageSize);
    setLoadedItems([...loadedItems, ...newItems]);
    idx += pageSize;
  }
  useEffect(async () => {
    if (isConnected) {
      // let totalsNFT = await NFTContract.totalNFT();
      let totalsNFT = 8;
      let totalMinted = await NFTContract.getAllMintedTokens();
      setMintedItems(totalMinted);
      let notMint = Array.from(
        { length: totalsNFT },
        (_, index) => index + 1
      ).filter((x) => !totalMinted.includes(x));
      setFreeItems(notMint);
    }
  }, [isConnected]);

  useEffect(() => {
    fetchMore();
  }, [freeItems]);

  return (
    <section className="explore_page py-5">
      <div className="container py-4">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 text-center">
            <h3 className="section_head">NFTs Marketplace</h3>
            <p className="section_sub_head">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
              asperiores sit.
            </p>
          </div>
        </div>
      </div>
      <ViewRow>
        {loadedItems.map((_, i) => (
          <NFTCard key={i} id={i + 1} fullWidth={true} live={true} />
        ))}
        {/* {[...Array(8)].map((_, i) => (
          <NFTCard key={i} id={i + 1} fullWidth={true} />
        ))}{" "}
        {[...Array(8)].map((_, i) => (
          <NFTCard key={i} id={i + 1} fullWidth={true} />
        ))} */}
      </ViewRow>
      {loadedItems.length < freeItems.length ? (
        <div className="text-center" onClick={fetchMore}>
          <a className={styles.load_more}>Load More</a>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}
