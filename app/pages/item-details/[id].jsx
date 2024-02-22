import React from "react";
import ItemDetailsComponent from "../../components/item-details";
import LiveAuctions from "../../components/minted-nft";
import { useRouter } from "next/router";

export default function ItemDetailsPage() {
  const router = useRouter();
  const id = parseInt(router.query.id);

  return (
    <div className="item_details_page">
      <ItemDetailsComponent id={id} />
      <LiveAuctions />
    </div>
  );
}
