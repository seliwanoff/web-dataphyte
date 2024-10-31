import Banner from "../components/banner";
import Footer from "../components/footer";
//import Header from "../components/header";
import Section3 from "../components/section3";
import Section4 from "../components/section4";
import Sectin5 from "../components/section5";
import Section6 from "../components/Section6";
import Section7 from "../components/section7";
import { PreloaderProvider } from "../preloaderContext/preloaderContext";
import africa from "../assets/images/lgmap.png";
import africa2 from "../assets/images/africa2.png";
import bgleftbanner from "../assets/images/bg-left-banner.jpg";
import star from "../assets/images/star.png";
import img from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import folder from "../assets/images/folder.png";
import d1 from "../assets/images/d1.png";
import d2 from "../assets/images/d2.png";
import d21 from "../assets/images/d21.png";
import d3 from "../assets/images/d3.png";
import d4 from "../assets/images/access.png";
import d5 from "../assets/images/d5.png";
import banner from "../assets/images/banner.png";
import search from "../assets/images/search-normal.png";
const Home = () => {
  const images = [
    africa,
    africa2,
    bgleftbanner,
    banner,
    search,
    star,
    img,
    img2,
    img3,
    folder,
    d1,
    d2,
    d21,
    d3,
    d4,
    d5,
  ];
  return (
    <>
      <PreloaderProvider images={images}>
        {/**  <Header /> */}
        <Banner />
        <Section3 />
        <Section4 />
        <Sectin5 />
        <Section6 />
        <Section7 />
        <Footer />
      </PreloaderProvider>
    </>
  );
};

export default Home;
