import EachBannerCard from "./eachbannercard";
import img from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import folder from "../assets/images/folder.png";

const Section3 = () => {
  return (
    <div className="px-[110px] py-9  w-full flex justify-center">
      <div className="flex flex-wrap gap-[32px]  w-full max-w-[1221px] mx-auto h-[369px]">
        <EachBannerCard
          text={"100"}
          link={"https://m"}
          image={img}
          logoImage={folder}
          undertext="Countries"
          linktext="View countries"
        />
        <EachBannerCard
          text={"2000"}
          link={"https://m"}
          image={img2}
          logoImage={folder}
          undertext="Mining sites"
          linktext="View Sites"
        />
        <EachBannerCard
          text={"50"}
          link={"https://m"}
          image={img3}
          logoImage={folder}
          undertext="Mineral types"
          linktext="View Minerals"
        />
      </div>
    </div>
  );
};

export default Section3;
