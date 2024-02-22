import React from "react";
import ViewRow from "../view-row";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import NFTCard from "../nft-card";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useWebStore } from "../../store/web3Store";
import { useState, useEffect } from "react";

export default function MintedNFT() {
  const { isConnected, mintedItems } = useWebStore();
  const [loadedItems, setLoadedItems] = useState([]);

  useEffect(async () => {
    setLoadedItems(mintedItems.slice(0, 6));
  }, [mintedItems]);

  return (
    <div className="live_aucations_slider pt-5">
      <ViewRow link={"/minted"} title={"Minted NFTs"} g_0={true}>
        <Swiper
          data-swiper-autoplay="2000"
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          speed={1000}
          pagination={{
            el: ".live_aucations_slider .swiper-pagination_wrapper",
            clickable: true,
          }}
          loop={true}
          autoplay={{ delay: "3000" }}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {loadedItems.map((_, i) => (
            <SwiperSlide key={i}>
              <NFTCard id={i + 1} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="possition-relative text-center pt-4">
          <div className="swiper-pagination_wrapper"></div>
        </div>
      </ViewRow>
    </div>
  );
}
