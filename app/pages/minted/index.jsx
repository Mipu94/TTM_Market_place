import React from "react";
import styles from "./minted.module.sass";
import NFTCard from "../../components/nft-card";
import ViewRow from "../../components/view-row";
import { useWebStore } from "../../store/web3Store";
import { useState, useEffect } from "react";

export default function ExplorePage() {
  const { isConnected, mintedItems } = useWebStore();
  const [renderIndex, setRenderIndex] = useState(0);

  const [loadedItems, setLoadedItems] = useState([]);
  const pageSize = 12;

  function fetchMore() {
    let newItems = mintedItems.slice(renderIndex, pageSize + renderIndex);
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
    setLoadedItems([]);
    setRenderIndex(0);
    fetchMore();
  }, [mintedItems]);

  return (
    <section className="explore_page py-5" >
      <div className="container py-4">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 text-center">
            <h3 className="section_head">Minted NFTs</h3>
            <p className="section_sub_head">
              {mintedItems.length == 0 ? "No minted NFTs found" : "These are the NFTs that have been minted by the users."}
            </p>
          </div>
        </div>
      </div>
      <ViewRow>
        {loadedItems.map((i) => (
          <NFTCard key={i} id={i} fullWidth={true} live={false} />
        ))}
      </ViewRow>
      {loadedItems.length < mintedItems.length ? (
        <div className="text-center" onClick={fetchMore}>
          <a className={styles.load_more}>Load More</a>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}
