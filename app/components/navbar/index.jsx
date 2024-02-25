import React from "react";
import styles from "./navbar.module.sass";
import Link from "next/link";

const siteMap = [
  { id: 0, name: "home", route: "/" },
  { id: 1, name: "explore", route: "/explore" },
  { id: 2, name: "Minted NFT", route: "/minted" },
  { id: 3, name: "contact", route: "/contact" },
  { id: 4, name: "Roadmaps", route: "/roadmaps" },
  { id: 3, name: "White Paper", route: "/white-paper" },
  // { id: 5, name: "my NFT", route: "/my-nft" },
];

export default function Navbar() {
  return (
    <div>
      <nav className={`${styles.main_navbar_lg} d-none d-xl-block`}>
        <ul className={styles.navigation_list}>
          {siteMap.map((el, i) => {
            return (
              <li key={i} className={styles.nav_item}>
                <Link href={el.route}>
                  <a className={styles.nav_link}>{el.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <nav className={`${styles.main_navbar_mobile}  d-xl-none`}>
        <ul className={styles.navigation_list_mobile}>
          {siteMap.map((el, i) => {
            return (
              <li key={i} className={styles.nav_item_mobile}>
                <Link href={el.route}>
                  <a className={styles.nav_link_mobile}>{el.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
