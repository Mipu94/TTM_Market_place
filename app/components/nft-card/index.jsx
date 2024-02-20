import React from "react";
import styles from "./nft-card.module.sass";
import Link from "next/link";
import Image from "next/image";

import { SiHiveBlockchain } from "react-icons/si";
import { AiOutlineHeart } from "react-icons/ai";

export default function NFTCard({ id, fullWidth, live }) {
  return (
    <div className={`my-3 ${fullWidth && "col-12 col-md-6 col-lg-4 col-xl-3"}`}>
      <div className={styles.nft_card_styled}>
        <div className={styles.nft_img_wrapper}>
          <Link href={"/item-details"}>
            <a>
              <Image
                objectPosition={"center"}
                objectFit="cover"
                layout="fill"
                src={`/static/assets/images/nft-cards/${id}.jpg`}
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
          <Link href={"/item-details"}>
            <a className={styles.nft_name}>{id}</a>
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
                src={`/static/assets/images/avatars/${live ? "none" : id}.jpg`}
                quality={100}
              />
            </div>
            <div className={styles.nft_owner_info}>
              {live ? (
                <>
                  <span className={styles.owned_by}>status</span>
                  <Link href={""}>
                    <span className={styles.nft_owner_link}>ready to mint</span>
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
              <button className={styles.nft_place_bid_btn}>
                <SiHiveBlockchain className="me-2" />
                <span>Mint Now</span>
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
    </div>
  );
}
