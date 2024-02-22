import Hero from "../components/home-hero";
import Features from "../components/features";
import MintedNFT from "../components/minted-nft";
import TopSellsers from "../components/top-sellers";
import TodayPicks from "../components/today-picks";
import PopularCollection from "../components/popular-collection";
import CategoriesSlider from "../components/categories-slider";

export default function Home() {
  return (
    <div className="home_page">
      <Hero />
      {/* <TopSellsers /> */}
      <TodayPicks />
      <MintedNFT />
      {/* <CategoriesSlider /> */}
      {/* <PopularCollection /> */}
      {/* <Features /> */}
    </div>
  );
}
