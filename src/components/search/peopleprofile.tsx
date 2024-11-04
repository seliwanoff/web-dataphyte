import { useProfileContext } from "../../context/ProfileContext";
import profiledata from "../../assets/images/profiledata.png";
import ellipse from "../../assets/images/ellipse.png";

const PeopleProfile = () => {
  const { profiles } = useProfileContext();

  return (
    <>
      {profiles.map((profile, index) => (
        <div className="flex flex-col gap-8 xl:mb-0 mb-5">
          <img src={profiledata} alt="" className="h-[100px] w-[100px]" />

          <div className="flex gap-[10px] items-center ">
            <div className="flex flex-col gap-[4px]">
              <h3 className="p-0 m-0 font-semibold font-Poppins text-[16px] leading-6 text-[#000]">
                {profile.mineralName}
              </h3>
              <div className="flex gap-[8px] items-center">
                <span className="flex gap-[4px] text-[14px] font-Poppins leading-[21px] text-[#828282]">
                  <p className="font-medium text-[#000]">{profile.mineral}</p>
                </span>
                <img src={ellipse} alt="" className="h-[8px]" />
                <span className="flex gap-[4px] text-[14px] font-Poppins leading-[21px] items-center text-[#828282]">
                  <p className="font-medium text-[#000]">{profile.role}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PeopleProfile;
