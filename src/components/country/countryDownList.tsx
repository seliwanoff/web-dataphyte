import React, { useState } from "react";
import check from "../../assets/images/check.png";
import search from "../../assets/images/search-lg.png";

type Country = {
  name: string;
  code: string;
};

type CountryDownListProps = {
  title: string;
  items: Country[];
  selectedItem: string;
  onSelect: (countryName: string) => void;
};

const CountryDownList: React.FC<CountryDownListProps> = ({
  title,
  items,
  selectedItem,
  onSelect,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter items based on search query
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-[400px] h-[420px] border  py-[10px] px-[14px] rounded-md shadow-custom-1 border-[#EAECF0] scrollbar-rounded">
      <label className="block font-Inter text-[14px] font-medium leading-5 text-[#344053] mb-2">
        {title}
      </label>
      <div className="bg-white py-[10px] px-[14px] flex items-center border-[#EAECF0] gap-3 border rounded-lg h-[44px]">
        <img src={search} alt="" className="h-[20px]" />
        <input
          type="text"
          placeholder="Search country..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-2 py-1 mb-2     rounded-md outline-none  "
        />
      </div>

      <div className="border-t border-[#EAECF0] mt-2 pt-2 max-h-[340px] overflow-y-auto scrollbar-rounded">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item.code}
              className={`flex justify-between items-center px-2 py-2 cursor-pointer ${
                selectedItem === item.name ? "bg-[#f9fafb]" : ""
              }`}
              onClick={() => onSelect(item.name)}
            >
              <span className="text-[#101828] font-Inter font-medium leading-6 text-left">
                {item.name}
              </span>
              {selectedItem === item.name && (
                <img src={check} alt="Selected" className="h-[20px]" />
              )}
            </div>
          ))
        ) : (
          <p className="text-[#667085] text-sm text-center">No results found</p>
        )}
      </div>
    </div>
  );
};

export default CountryDownList;
