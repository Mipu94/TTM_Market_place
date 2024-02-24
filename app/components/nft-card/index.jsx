import React from "react";
import styles from "./nft-card.module.sass";
import Link from "next/link";
import Image from "next/image";
import { useWebStore } from "../../store/web3Store";

import { SiHiveBlockchain } from "react-icons/si";
import { enqueueSnackbar } from "notistack";
import { useState, useEffect } from "react";
import fetch from "node-fetch";

export default function NFTCard({ id, fullWidth, live }) {
  const { NFTContract, walletAddress, isConnected, mintNFT, connect } =
    useWebStore();
  const [metaData, setMetaData] = useState(null);
  useEffect(async () => {
    let url = process.env.NEXT_PUBLIC_DOMAIN + "/api/nft/" + id;
    let res = await fetch(url);
    let data = await res.json();
    setMetaData(data);
  }, []);

  return (
    <div className={`my-3 ${fullWidth && "col-12 col-md-6 col-lg-4 col-xl-3"}`}>
      {metaData && (
        <div className={styles.nft_card_styled}>
          <div className={styles.nft_img_wrapper}>
            <Link href={"/item-details/[id]"} as={`/item-details/${id}`}>
              <a>
                <Image
                  objectPosition={"center"}
                  objectFit="cover"
                  layout="fill"
                  src={metaData.image}
                  quality={100}
                  alt="nft-card"
                />
              </a>
            </Link>
            {/* <span className={styles.nft_likes}>
            <AiOutlineHeart className="me-1" />
            <span>100</span>
          </span> */}
            {/* {live && (
            <span className={styles.nft_comming_soon}>comming soon</span>
          )} */}
          </div>

          <div className={`${styles.nft_info_row}`}>
            <Link href={`/item-details/${id}`}>
              <a className={styles.nft_name}>{metaData.name}</a>
            </Link>
            <span className={styles.nft_BSC}>BSC</span>
          </div>
          <div className={`${styles.nft_info_row}`}>
            <div className={styles.nft_owner_wrapper}>
              <div className={styles.nft_owner_avatar}>
                <Image
                  alt="user-avatar"
                  objectPosition={"center"}
                  objectFit="cover"
                  width={45}
                  height={45}
                  layout="fixed"
                  src={`/static/assets/images/avatars/${
                    live ? "none" : id % 8
                  }.jpg`}
                  quality={100}
                />
              </div>
              <div className={styles.nft_owner_info}>
                {live ? (
                  <>
                    <span className={styles.owned_by}>status</span>
                    <Link href={""}>
                      <span className={styles.nft_owner_link}>
                        ready to mint
                      </span>
                    </Link>
                  </>
                ) : (
                  <>
                    <span className={styles.owned_by}>authors</span>
                    <Link href={""}>
                      <a className={styles.nft_owner_link}>0x....</a>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className={styles.nft_bid_wrapper}>
              <span className={styles.current_bid}>Price</span>
              <span className={styles.current_bid_value}>3 BNB</span>
            </div>
          </div>
          {live && (
            <div className={`${styles.nft_info_row}`}>
              <div className={styles.nft_place_bid_wrap}>
                <button
                  className={styles.nft_place_bid_btn}
                  onClick={() => {
                    if (isConnected) mintNFT(id);
                    else connect();
                  }}
                >
                  <SiHiveBlockchain className="me-2" />
                  <span>{isConnected ? "Mint Now" : "Connect To Mint"}</span>
                </button>
              </div>
              {/* <Link href={"/login"}>
              <a className={styles.nft_activity_link}>
                <MdLoop className="me-2" />
                <span>view history</span>
              </a>
            </Link> */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
