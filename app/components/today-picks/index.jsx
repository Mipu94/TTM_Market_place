import React from "react";
import NFTCard from "../nft-card";
import ViewRow from "../view-row";
import { useWebStore } from "../../store/web3Store";
import { useState, useEffect } from "react";

export default function TodayPicks() {
  const { freeItems } = useWebStore();
  const [loadedItems, setLoadedItems] = useState([]);

  useEffect(async () => {
    setLoadedItems(freeItems.slice(0, 8));
  }, [freeItems]);
  return (
    <div className="today_picks_wrapper">
      <ViewRow title={"Today's Picks"} link={"/explore"}>
        {loadedItems.map((_, i) => (
          <NFTCard key={i} id={i + 1} fullWidth={true} live={true} />
        ))}
      </ViewRow>
    </div>
  );
}
