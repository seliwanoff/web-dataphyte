import { useProfileContext } from "../../context/ProfileContext";
import profiledata from "../../assets/images/profiledata.png";
import ellipse from "../../assets/images/ellipse.png";
interface SearchResultProps {
  //setCurrentTab: (tab: string) => void;
  //currentTab: string;
  datas?: any;
}
const PeopleProfile: React.FC<SearchResultProps> = ({
  //setCurrentTab,
  //currentTab,
  datas,
}) => {
  // const { profiles } = useProfileContext();

  return (
    <>
      <div className="flex flex-col gap-8 xl:mb-0 mb-5">
        <img src={profiledata} alt="" className="h-[100px] w-[100px]" />

        <div className="flex gap-[10px] items-center ">
          <div className="flex flex-col gap-[4px]">
            <h3 className="p-0 m-0 font-semibold font-Poppins text-[16px] leading-6 text-[#000]">
              {datas.data.title}
              {datas.data.first_name} {datas.data.last_name}
            </h3>
            <div className="flex gap-[8px] items-center">
              <span className="flex gap-[4px] text-[14px] font-Poppins leading-[21px] text-[#828282]">
                <p className="font-medium text-[#000]">{"Cobalt"}</p>
              </span>
              <img src={ellipse} alt="" className="h-[8px]" />
              <span className="flex gap-[4px] text-[14px] font-Poppins leading-[21px] items-center text-[#828282]">
                <p className="font-medium text-[#000]">{"CEO"}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeopleProfile;
