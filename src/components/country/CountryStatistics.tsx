import EachRowStat from "./EachRowStat";

const CountryStatistics = () => {
  return (
    <div className="w-full max-w-[1750px] mx-auto py-[32px]">
      <div className="flex-col flex gap-[32px]">
        <span className="font-Poppins text-[32px] font-semibold leading-[44.29px] text-left">
          Key Statistics
        </span>

        <div className="w-full max-w-[1048px]">
          <table className="w-full">
            <thead className="h-[47px] bg-[#272727] text-left font-Poppins text-white text-[24px] font-semibold leading-9  ">
              <th role="col" className="pl-2 border-r border-[#9B9B9B]">
                Titles
              </th>
              <th role="col" className="pl-2">
                Figures
              </th>
            </thead>
            <tbody className="h-[64px] bg-[#EDE4FF] text-left font-Poppins text-black text-[14px] xl:text-[18px] font-medium leading-4 xl:leading-[27px] ">
              <EachRowStat
                title="Total Number of Operational Mining Sites"
                figure={85}
              />
              <EachRowStat
                title="Contribution of Mining to National GDP"
                figure={`₦700 billion (10% of GDP)`}
              />
              <EachRowStat
                title="Employment in Mining Sector"
                figure={`75,000 direct jobs`}
              />
              <EachRowStat
                title="Major Mining Companies"
                figure={`15 multinational and 20 domestic companies`}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CountryStatistics;
