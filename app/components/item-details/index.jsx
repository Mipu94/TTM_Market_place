import React from "react";
import styles from "./item-details.module.sass";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import SellerCard from "../seller-card";
import Link from "next/link";
import { SiHiveBlockchain } from "react-icons/si";
import Image from "next/image";
import { useRouter } from "next/router";
import { useWebStore } from "../../store/web3Store";
import { useState, useEffect } from "react";
import { enqueueSnackbar } from "notistack";

export default function ItemDetailsComponent({ id }) {
  const { freeItems, isConnected, NFTContract } = useWebStore();
  const [metaData, setMetaData] = useState(null);
  const [live, setLive] = useState(false);
  useEffect(async () => {
    if (!id) return;
    let url = process.env.NEXT_PUBLIC_DOMAIN + "/api/nft/" + id;
    let res = await fetch(url);
    let data = await res.json();
    if (!freeItems.includes(id) && isConnected)
      data.owner = await NFTContract.ownerOf(id);
    else data.owner = "Pending";

    setMetaData(data);
    setLive(freeItems.includes(id));
  }, [freeItems]);

  async function mintNFT() {
    if (isConnected) {
      try {
        let price = await NFTContract.mintingPrice();
        let tx = await NFTContract.mint(
          id,
          process.env.NEXT_PUBLIC_DOMAIN + "/nft/" + id,
          {
            value: price,
          }
        );

        enqueueSnackbar("minted 1 NFT to " + tx.to, {
          variant: "success",
        });
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } catch (e) {
        enqueueSnackbar(e.message, { variant: "error" });
      }
      await NFTContract.getAllMintedTokens();
    } else {
      console.log("wallet is not connected");
    }
  }
  return (
    <div className={styles.item_details_component}>
      {metaData && (
        <div className="container py-5">
          <div className="row">
            <div className=" py-5 col-12 col-lg-6">
              <div className={styles.item_image_wrapper}>
                <Image
                  alt="item_image"
                  layout="fill"
                  loading="eager"
                  quality={100}
                  src={metaData.image}
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </div>
            <div className="py-md-5 col-12 col-lg-6">
              <div className={styles.item_details}>
                <h3 className={styles.item_title}>{metaData.name}</h3>
                <div className={`${styles.item_facts} pt-3 pb-2`}>
                  {/* <span className={styles.item_views}>
                    <AiOutlineEye className="me-2" />
                    <span>100</span>
                  </span>
                  <span className={styles.item_likes}>
                    <AiOutlineHeart className="me-2" />
                    <span>100</span>
                  </span> */}
                </div>
                <div className={styles.items_owner_and_seller}>
                  <div className="row">
                    <div className="col">
                      <SellerCard
                        id={1}
                        metaData={JSON.stringify(metaData)}
                        own
                        summary
                      />
                    </div>
                    <div className="col">
                      <SellerCard
                        id={2}
                        metaData={JSON.stringify(metaData)}
                        seller
                        summary
                      />
                    </div>
                  </div>
                </div>
                <p className={styles.item_overview}>{metaData.description}</p>
                <div className={styles.item_facts}>
                  <div className="row">
                    <div className="my-3 col-12 col-sm-6">
                      <div className={styles.item_fact}>
                        <span className={styles.item_fact_label}>Price</span>
                        <span className={styles.item_fact_value}>3 BNB</span>
                      </div>
                    </div>
                    <div className="my-3 col-12 col-sm-6">
                      <div className={styles.item_fact}>
                        <span className={styles.item_fact_label}>Status</span>
                        <span className={styles.item_fact_value}>
                          {live ? "Mintable" : "Not Mintable"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-4">
                  {live && (
                    <a className={styles.place_bid_btn} onClick={mintNFT}>
                      <SiHiveBlockchain className="me-2" />
                      <span>
                        {isConnected ? "Mint Now" : "Connect To Mint"}
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
