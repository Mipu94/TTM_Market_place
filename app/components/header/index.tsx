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
import { FiSearch } from "react-icons/fi";
import { useWebStore } from "../../store/web3Store";
import networks from "../../networks";
type Props = {};

declare global {
  interface Window {
    ethereum: any;
    web3: any
  }
}

export default function Header() {

  const { changeNetwork, walletAddress, connect, isConnected } = useWebStore();
  const chainId = useRef(typeof window !== 'undefined' ? window.ethereum?.chainId : null)
  if (chainId.current == null) {
    chainId.current = process.env.NODE_ENV == "development" ? networks.dev.chainId : networks.prod.chainId
  }
  const [isSticky, setIsSticky] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    window && window.scrollY >= 1 ? setIsSticky(true) : setIsSticky(false);
    window.onscroll = () => {
      window.scrollY >= 1 ? setIsSticky(
        true) : setIsSticky(false);
    };
  }, []);

  return (
    <div
      className={`${styles.main_header_wrapper}  ${isSticky && styles.sticky_top
        }`}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-2">
            <div className="app_brand_logo d-flex">
              <Link href={"/"}>
                <a className="d-inline-flex">
                  {theme && (
                    <Image
                      alt="app_logo"
                      src={`/static/assets/images/logo_${theme}.png`}
                      width={168}
                      height={60}
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
              <button className="d-none d-sm-block">
                <FiSearch />
              </button>
              <div className="mx-3 mx-sm-4 d-none d-sm-block">
                {
                  chainId.current != (process.env.NODE_ENV == "development" ? networks.dev.chainId : networks.prod.chainId) ?
                    <div onClick={changeNetwork}>
                      <CtaButton href={""} >
                        <IoWallet className="me-md-2" />
                        <span className="d-none d-md-block"> {"Change network "}</span>
                      </CtaButton>
                    </div>
                    :
                    <div onClick={() => { if (!isConnected) connect() }}>
                      <CtaButton href={""} >
                        <IoWallet className="me-md-2" />
                        <span className="d-none d-md-block"> {isConnected ? walletAddress?.slice(0, 4) + "..." + walletAddress?.slice(38) : "Wallet connect"}</span>
                      </CtaButton>
                    </div>
                }
              </div>
              <button
                className={styles.mode_toggle_btn}
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                }}
              >
                <ThemeIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


