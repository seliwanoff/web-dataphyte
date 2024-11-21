import MapComponent from "../components/country/countryMap";
import CountryMap from "../components/country/countryMap";
import CountryStatistics from "../components/country/CountryStatistics";
import CountryTitle from "../components/country/CuntryTitle";
import DocumentSearchMobileWidget from "../components/search/DocumentMobileSearchWidget";
import Maintable from "../Search/mainTableSearch";
import MiningsampleResponse from "../data/singleminingSampleResponse.json";
import CompanySearchWidget from "../components/search/CompnySearchWidget";
import EachComponent from "../components/search/SearchEachComponent";
import PeopleSearchWidget from "../components/search/peopleSearch";
import { ProfileProvider } from "../context/ProfileContext";
import picture1 from "../assets/images/picture1.png";
import picture2 from "../assets/images/picture2.png";
import picture3 from "../assets/images/picture3.png";
import picture4 from "../assets/images/picture4.png";

const MiningSiteWrapper = () => {
  console.log(MiningsampleResponse);
  return (
    <div className="w-full px-[24px] xl:px-[100px] py-[32px]">
      <CountryTitle />

      <div className="w-full mt-[46px] flex flex-col gap-8">
        <span className="text-[#373737] font-semibold text-[18px] leading-6 font-Poppins  ">
          Photos and Videos
        </span>
        <div className="flex  overflow-x-auto gap-[24px] scrollbar-rounded parent-scroll">
          <img src={picture1} alt="" className="h-[240px]" />
          <img src={picture2} alt="" className="h-[240px]" />
          <img src={picture3} alt="" className="h-[240px]" />
          <img src={picture4} alt="" className="h-[240px]" />
          <img src={picture1} alt="" className="h-[240px]" />
          <img src={picture1} alt="" className="h-[240px]" />
        </div>
      </div>

      <div className="w-full mt-[46px]">
        <span className="text-[#373737] font-semibold text-[18px] leading-6 font-Poppins ">
          Documents
        </span>
        <div className="xl:block hidden w-full mt-[32px]">
          <Maintable datas={{ data: MiningsampleResponse.data.document }} />
        </div>
        <div className="xl:hidden block w-full mt-[32px]">
          {MiningsampleResponse.data.document &&
            MiningsampleResponse?.data?.document.map(
              (data: any, index: any) => (
                <DocumentSearchMobileWidget
                  mineralName={data.name}
                  countries={data.location}
                  miningCount={4}
                  mineral={"Maganese"}
                  docCount={5}
                  key={index}
                />
              )
            )}
        </div>
      </div>

      <div className="w-full mt-[46px] flex flex-col gap-8">
        <span className="text-[#373737] font-semibold text-[18px] leading-6 font-Poppins  ">
          People
        </span>
        <div className="flex flex-wrap gap-[24px]">
          <ProfileProvider>
            {MiningsampleResponse?.data.people.map((data: any, index: any) => (
              <PeopleSearchWidget
                mineralName={data.name}
                countries={`${data.location}, ${data.country}`}
                miningCount={4}
                mineral={"Dataphyte Limited"}
                docCount={1500}
                key={index}
                role={data.role}
              />
            ))}
          </ProfileProvider>
        </div>
      </div>

      <div className="w-full mt-[46px] flex flex-col gap-8">
        <span className="text-[#373737] font-semibold text-[18px] leading-6 font-Poppins  ">
          Company
        </span>
        <div className="flex flex-wrap gap-[24px]">
          {MiningsampleResponse?.data.company.map((data: any, index: any) => (
            <CompanySearchWidget
              mineralName={data.name}
              countries={data.country}
              miningCount={4}
              mineral={"Maganese"}
              docCount={5}
            />
          ))}
        </div>
      </div>

      <div className="w-full mt-[46px] flex flex-col gap-8">
        <span className="text-[#373737] font-semibold text-[18px] leading-6 font-Poppins  ">
          Mineral
        </span>
        <div className="flex flex-wrap gap-[24px]">
          {MiningsampleResponse?.data.mineral.map((data: any, index: any) => (
            <EachComponent
              key={index}
              mineralName={data.name}
              countries="Nigeria, Ghana"
              miningCount={4}
              docCount={1500}
            />
          ))}
        </div>
      </div>
      <CountryStatistics />
    </div>
  );
};

export default MiningSiteWrapper;
