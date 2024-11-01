import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import search from "../../assets/images/search-normal.png";
interface SearchBarProps {
  style?: string;
  bg?: string;
  border?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ style, bg, border }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };
  return (
    <div
      className={`xl:py-[6px] py-[3.54px] pl-6 ${bg} rounded-[46px] shadow-custom-heavy ${border}   xl:h-[52px] w-full xl:max-w-[577px] ${style} flex gap-[10px] items-center`}
    >
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        className="outline-none border-none text-[#828282] bg-inherit text-[14px] leading-6 font-normal font-Poppins xl:w-3/4 w-full"
        placeholder="Search minerals, mining sites, Documents"
      />
      <button
        className="bg-[#7F55DA] h-full py-2 xl:mr-0  mr-1 px-6 rounded-[26px] text-white text-[14px] leading-6 font-normal flex items-center justify-center font-Poppins"
        type="button"
        onClick={handleSearch}
      >
        <img src={search} alt="Search" className="h-[18px] mr-1" />
        <span>Search</span>
      </button>
    </div>
  );
};

export default SearchBar;
