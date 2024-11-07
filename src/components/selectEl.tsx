import chevron_down from "../assets/images/chevron-down.png";

const SelectEl = () => {
  return (
    <div className="flex flex-col gap-3">
      <label
        htmlFor="country"
        className="font-Inter text-[14px] font-medium leading-5 text-[#344053]"
      >
        Select Country
      </label>
      <div className="w-full max-w-[320px] border py-[10px] px-[14px] rounded-md flex items-center justify-between select-shadow">
        <section className="w-full font-Inter text-[16px] font-normal leading-6 text-[#667085]">
          <option
            value=""
            className="font-Inter text-[16px] font-normal leading-6 text-[#667085]"
          >
            Select country
          </option>
        </section>
        <img src={chevron_down} alt="" className="h-[20px]" />
      </div>
    </div>
  );
};

export default SelectEl;
