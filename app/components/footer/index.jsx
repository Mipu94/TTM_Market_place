import React from "react";
import styles from "./footer.module.sass";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { RiSendPlane2Fill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={styles.app_footer}>
      <div className="container py-5">
        <div className="row">
          <div className="py-3 col-12 col-xl-3">
            <div className="app_logo pb-3">
              <Link href={"/"}>
                <a>
                  {theme && (
                    <Image
                      alt="app_logo"
                      src={`/static/assets/images/TTM_dark.png`}
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
            <p className="m-0 pe-5">
              <h4>Fly me <a href="https://twitter.com/Openttm">#Tothemoon</a></h4>
            </p>
          </div>
          <div className="py-3 col-6 col-lg-4 col-xl-2">
            <p className={`${styles.footer_col_title} m-0 py-3`}>To The Moon</p>
            <ul className={styles.footer_nav_list}>
              <li className={styles.footer_nav_list_item}>
                <Link href="/minted">
                  <a className={styles.footer_nav_link}>minted NFT</a>
                </Link>
              </li>
              <li className={styles.footer_nav_list_item}>
                <Link href="/explore">
                  <a className={styles.footer_nav_link}>Explore</a>
                </Link>
              </li>

            </ul>
          </div>
          <div className="py-3 col-6 col-lg-4 col-xl-2">
            <p className={`${styles.footer_col_title} m-0 py-3`}>Resources</p>
            <ul className={styles.footer_nav_list}>
              <li className={styles.footer_nav_list_item}>
                <Link href="/roadmaps">
                  <a className={styles.footer_nav_link}>Roadmaps</a>
                </Link>
              </li>
              <li className={styles.footer_nav_list_item}>
                <Link href="/whitepaper">
                  <a className={styles.footer_nav_link}>White Paper</a>
                </Link>
              </li>
              <li className={styles.footer_nav_list_item}>
                <Link href="/contact">
                  <a className={styles.footer_nav_link}>Contact us</a>
                </Link>
              </li>
              {/* <li className={styles.footer_nav_list_item}>
                <Link href="/blog">
                  <a className={styles.footer_nav_link}>Our Blog</a>
                </Link>
              </li> */}
              <li className={styles.footer_nav_list_item}>
                <Link href="/faq">
                  <a className={styles.footer_nav_link}>FAQ</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="py-3 col-12 col-md-6 col-xl-3">
            <p className={`${styles.footer_col_title} m-0 py-3`}>
              Subscribe Us
            </p>
            <div className="subscribe_us_form_wrapper py-2">
              <form
                className={styles.footer_form}
                onSubmit={(e) => e.preventDefault()}
              >
                <input type="email" required placeholder="info@yourgmail.com" />
                <button type="submit">
                  <RiSendPlane2Fill />
                </button>
              </form>
            </div>
            <div className="social_media_links_wrapper pt-4">
              <ul className={styles.footer_social_list}>
                <li>
                  <a
                    className={styles.footer_social_link}
                    href="https://t.me/openttm"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <FaTelegram />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.footer_social_link}
                    href="https://twitter.com/Openttm"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <BsTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
