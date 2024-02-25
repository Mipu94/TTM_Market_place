import React, { useState, useEffect, useRef } from "react";

import styles from "./header.module.sass";
import Link from "next/link";
import Image from "next/image";
import CtaButton from "../cta-button";
import Navbar from "../navbar";
import { useTheme } from "next-themes";
// ICONS
import ThemeIcon from "../../public/static/icons/app-mode-icon";
import { IoWallet } from "react-icons/io5";
import { useWebStore } from "../../store/web3Store";
import networks from "../../networks";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { enqueueSnackbar } from 'notistack';
import { ethers } from 'ethers';

type Props = {};

declare global {
  interface Window {
    ethereum: any;
    web3: any
  }
}

export default function Header() {
  const [isOpenHam, setIsOpenHam] = useState(false);
  const [chainId, setChainId] = useState("");

  const { changeNetwork, walletAddress, connect, isConnected } = useWebStore();


  const [isSticky, setIsSticky] = useState(false);
  const { theme, setTheme } = useTheme();

  async function fetchChainId() {
    var chainId = await window.ethereum.request({ method: "eth_chainId" });
    chainId = ethers.utils.hexlify(chainId)
    setChainId(chainId)
  }
  useEffect(() => {
    window && window.scrollY >= 1 ? setIsSticky(true) : setIsSticky(false);
    window.onscroll = () => {
      window.scrollY >= 1 ? setIsSticky(
        true) : setIsSticky(false);
    };

    fetchChainId();

  }, []);

  async function clickWallet() {
    if (chainId != (process.env.NODE_ENV == "development" ? networks.dev.chainId : networks.prod.chainId)) {
      changeNetwork();
    }
    else {
      if (!isConnected) connect()
      else {
        enqueueSnackbar("Connected", { variant: 'success' });

      }
    }

  }

  return (
    <div
      className={`${styles.main_header_wrapper}  ${isSticky && styles.sticky_top
        }`}
    >


      <div className="container">
        <div className="row align-items-center">
          <div className="col-2">
            <div className="app_brand_logo d-flex" onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}>
              <Link href={"/"}>
                <a className="d-inline-flex">
                  {theme && (
                    <Image
                      alt="app_logo"
                      src={`/static/assets/images/TTM_${theme}.png`}
                      width={235}
                      height={30}
                      layout="fixed"
                      quality={100}
                      loading="eager"
                    />
                  )}
                </a>
              </Link>
            </div>
          </div>
          <div className="d-none d-xl-block col-6">
            <Navbar />
          </div>

          <div className="col-10 col-xl-4">

            <div className="d-flex justify-content-end align-items-center">
              <div className="mx-3 mx-sm-4 d-none d-md-block">
                {
                  chainId != (process.env.NODE_ENV == "development" ? networks.dev.chainId : networks.prod.chainId) ?
                    <div onClick={clickWallet}>
                      <CtaButton href={""} >

                        <IoWallet className="me-md-2" />
                        <span > {"Change network"}</span>
                      </CtaButton>

                    </div>
                    :
                    <div onClick={() => { if (!isConnected) connect() }}>
                      <CtaButton href={""} >
                        <IoWallet className="me-md-2" />
                        <span > {isConnected ? walletAddress?.slice(0, 4) + "..." + walletAddress?.slice(38) : "Wallet connect"}</span>
                      </CtaButton>
                    </div>
                }
              </div>

              <button
                className={styles.mode_toggle_btn + " d-none d-md-block"}
                style={{ marginRight: "4px" }}
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                }}
              >
                <ThemeIcon />
              </button>

              {/* mobile wallet */}
              <button
                style={{ marginRight: "4px", background: isConnected ? "#28B67A" : "linear-gradient(#E250E5 5.32%, #4B50E6 94.32%)" }}
                className={"d-block d-md-none " + styles.mode_toggle_btn}
                onClick={clickWallet}
              >
                <IoWallet className="me-md-2" />
              </button>
              <button className={"d-block d-xl-none " + styles.mode_toggle_btn} onClick={() => setIsOpenHam(!isOpenHam)}>
                {isOpenHam ?
                  <MdOutlineClose></MdOutlineClose>
                  :
                  <GiHamburgerMenu ></GiHamburgerMenu>
                }
              </button>

            </div>
          </div>

          <div>


          </div>
        </div>
        {isOpenHam && <Navbar />}
      </div>
    </div>
  );
}


