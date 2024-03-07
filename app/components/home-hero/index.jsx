import React from "react";
import styles from "./hero.module.sass";
import CtaButton from "../cta-button";
import { IoIosRocket } from "react-icons/io";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { useTheme } from "next-themes";
import Image from "next/image";
import Countdown from 'react-countdown';
import { useWebStore } from "../../store/web3Store";
import { useEffect, useState } from "react";
import { enqueueSnackbar } from 'notistack';

export default function Hero() {
  const { mintedItems, isConnected, claimAirdrop, getRemainAirdrop } = useWebStore();
  const { theme, setTheme } = useTheme();
  const [remainClaims, setRemainClaims] = useState(0);

  useEffect(async () => {
    if (isConnected) {
      let x = await getRemainAirdrop();
      setRemainClaims(x);
    }
  }, [isConnected]);

  async function handleClaimAirdrop() {
    if (!isConnected) {
      return enqueueSnackbar("Please connect wallet to claim.", { variant: "error" });
    }

    if (remainClaims > 0)
      await claimAirdrop()
    else {
      return enqueueSnackbar("This wallet can't claim airdrop anymore.", { variant: "error" });
    }
  }
  let id = 1;
  return (
    <section className={styles.home_page_hero_section}>
      <div className="container">
        <div className="row h-100">
          <div className="col-12 col-xl-6">
            <div className="position-relative h-100 d-flex align-items-center">
              {theme === "dark" && (
                <img
                  alt="bg_gradient_shadow"
                  className={styles.bg_gradient}
                  src={"/static/assets/images/gradient_bg_1.png"}
                />
              )}
              <div className="section_content pt-5">
                <Countdown

                  date={new Date('2024-02-29T20:00:00+07:00')}
                  intervalDelay={0}
                  precision={1}
                  renderer={({ days, hours, minutes, seconds, completed }) => {
                    if (completed) {
                      if (isConnected)
                        return <h2 className="heading">Minted NFTs: {mintedItems.length}/ 300</h2>
                      else
                        return <h2 className="heading">Please connect wallet to check minted NFTs.</h2>
                    } return (<><h2 className="heading">Ready to mint after <br /></h2><h3> {days} day, {hours} hours, {minutes} mins, {seconds}s</h3></>)
                  }}

                ></Countdown>



                <h2 className="heading gradient_text" style={{ marginTop: 20 }}>Buy extraordinary</h2>
                <h2 className="heading">Astronauts NFTs</h2>
                <p className="sub_heading my-4">
                  A Place For Astronauts Character Collections Non Fungible
                  Token NFTs
                </p>
                <div className="cta_btns_wrapper d-sm-flex">
                  <CtaButton href={"/explore"}>
                    <IoIosRocket className="me-2" />
                    Explore
                  </CtaButton>
                  <div className=" my-3 my-sm-0 mx-sm-3">
                    <CtaButton href={"/white-paper"}>
                      <HiOutlineDocumentDuplicate className="me-2" />
                      White Paper
                    </CtaButton>
                  </div>
                  <div className=" my-3 my-sm-0 mx-sm-3" onClick={handleClaimAirdrop}>
                    <CtaButton href={""}  >
                      <HiOutlineDocumentDuplicate className="me-2" />
                      Claim Airdrop {isConnected ? "(" + remainClaims + ")" : ""}
                    </CtaButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-xl-block col-6">
            <div className="position-relative h-100">
              {theme === "dark" && (
                <img
                  alt="bg-gradient-shadow"
                  className={`${styles.bg_gradient} ${styles.bottom_right}`}
                  src={"/static/assets/images/gradient_bg_1.png"}
                />
              )}
              <div className={styles.animated_images_wrapper}>
                <img
                  width={620}
                  height={450}
                  alt={"track-bg"}
                  src={"/static/assets/images/track.png"}
                  loading="eager"
                />
                <Image
                  width={354}
                  height={588}
                  layout="fixed"
                  src={`/static/assets/images/char${id}.png`}
                  alt="toy"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div >
      </div >
    </section >
  );
}
