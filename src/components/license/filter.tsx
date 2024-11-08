import close from "../../assets/images/close.png";
import filterLogo from "../../assets/images/filter-lines.png";

const FilterLicense = () => {
  return (
    <div className="flex w-full items-center justify-between cursor-pointer">
      <div className="flex w-full gap-3 items-center">
        <div className="py-[14px] px-[10px] flex items-center gap-[12px] rounded-sm border border-[#d0d5dd] ">
          <span className="text-[14px] font-Inter font-semibold leading-5">
            Lagos
          </span>
          <img src={close} alt="" className="h-[20px]" />
        </div>
        <div className="py-[14px] px-[10px] flex items-center gap-[12px] rounded-sm border border-[#d0d5dd] ">
          <span className="text-[14px] font-Inter font-bold leading-5">
            Filter
          </span>
          <img src={filterLogo} alt="" className="h-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default FilterLicense;
