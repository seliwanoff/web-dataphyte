import { useState } from "react";

// Define the shape of the props
interface CountryTitleProps {
  countryName?: string;
  image?: string;
  regions?: string;
  subdivisions?: string;
  miningSites?: string;
  description?: string;
}

const CountryTitle = ({
  countryName,
  image,
  regions,
  subdivisions,
  miningSites,
  description,
}: CountryTitleProps) => {
  const [query, setQuery] = useState(countryName);

  return (
    <div className="mx-auto w-full max-w-[1750px] flex flex-col gap-4">
      <div className="flex gap-[40px] items-center border-b-2 border-[#cecece] pb-2">
        <div className="gap-[8px]">
          <h3 className="text-[#161616] text-[40px] font-polySans font-semibold leading-[55.36px] p-0 m-0">
            {countryName}
          </h3>
          <p className="text-[#515151] text-[16px] leading-6 font-normal font-Poppins">
            {regions} | {subdivisions} | {miningSites}
          </p>
        </div>

        <img
          src={`https://cardri.s3.eu-west-1.amazonaws.com/${image}`}
          alt={query}
          className="xl:h-14 h-9"
        />
      </div>
      <p className="font-Poppins text-[16px] leading-6 font-normal text-[#595757] w-full max-w-[917px] text-left">
        {countryName} {description}
      </p>
    </div>
  );
};

export default CountryTitle;
