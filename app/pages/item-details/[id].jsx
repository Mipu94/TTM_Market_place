import React from "react";
import ItemDetailsComponent from "../../components/item-details";
import BuyNow from "../../components/buynow";
import { useRouter } from "next/router";

export default function ItemDetailsPage() {
  const router = useRouter();
  const id = parseInt(router.query.id);

  return (
    <div className="item_details_page">
      <ItemDetailsComponent id={id} />
      {/* <BuyNow /> */}
    </div>
  );
}
