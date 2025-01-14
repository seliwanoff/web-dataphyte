import EachBannerCard from "./eachbannercard";
import img from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import folder from "../assets/images/folder.png";

type SelectElProps = {
  data: any;
};
const Section3: React.FC<SelectElProps> = ({ data }) => {
  return (
    <div className="xl:px-[110px] py-12  w-full flex justify-center px-[24px]">
      <div className="flex flex-wrap gap-[32px]  w-full max-w-[1750px] mx-auto xl:h-[369px]">
        <EachBannerCard
          text={data?.document || 0}
          link={"/document/view"}
          image={img}
          logoImage={folder}
          undertext="Documents"
          linktext="View documents"
        />
        <EachBannerCard
          text={data?.mining_site || 0}
          link={"/site/view"}
          image={img2}
          logoImage={folder}
          undertext="Mining sites"
          linktext="View Sites"
        />
        <EachBannerCard
          text={data?.mineral || 0}
          link={"/mineral/view"}
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
