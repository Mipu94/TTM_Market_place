import React from "react";
import styles from "./explore.module.sass";
import NFTCard from "../../components/nft-card";
import ViewRow from "../../components/view-row";
import { useWebStore } from "../../store/web3Store";
import { useState, useEffect } from "react";

export default function ExplorePage() {
  const { isConnected, freeItems } = useWebStore();
  const [renderIndex, setRenderIndex] = useState(0);

  const [loadedItems, setLoadedItems] = useState([]);
  const pageSize = 12;

  function fetchMore() {
    let newItems = freeItems.slice(renderIndex, pageSize + renderIndex);
    if (newItems.length != 0) {
      setRenderIndex(renderIndex + newItems.length);
      setLoadedItems([...loadedItems, ...newItems]);
    }
  }

  useEffect(async () => {
    if (isConnected) {
      fetchMore();
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
            <h3 className="section_head">Mint New NFTs</h3>
            <p className="section_sub_head">
              Mint your own NFTs and get free 2B TTM token!
            </p>
          </div>
        </div>
      </div>
      <ViewRow>
        {loadedItems.map((i) => (
          <NFTCard key={i} id={i} fullWidth={true} live={true} />
        ))}
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
