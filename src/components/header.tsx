import { Link, useLocation } from "react-router-dom";
import menu from "../assets/images/Hamburger_LG.svg";
import { useState } from "react";
import DropDownMenu from "./dropdownMenu";

const Header = () => {
  const [showDrop, setIshowDrop] = useState<boolean>(false);
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="w-full relative">
      <header className=" h-[98px] border-b-2 border-[#d6d6d6] justify-center  flex w-full items-center bg-white max-w-[1750px] mx-auto lg:px-[100px] px-[24px] ">
        <div className="w-full  flex justify-between items-center">
          <h2 className="text-[#7F55DA]  text-2xl leading-6 font-semibold font-Poppins">
            <Link to={"/"}>Dataphyte</Link>
          </h2>
          <nav className="xl:block hidden">
            <ul className="flex gap-8 items-center text-[#525252] text-[16px] leading-6 font-normal font-Poppins list-none cursor-pointer">
              <li
                className={`${
                  currentPath === "/map" ? "text-[#7F55DA] font-semibold" : ""
                }`}
              >
                <Link to={"/map"}>Interactive Map</Link>
              </li>
              <li
                className={`${
                  currentPath === "/country-overview"
                    ? "text-[#7F55DA] font-semibold"
                    : ""
                }`}
              >
                <Link to={"/country"}>Country Overview</Link>
              </li>
              <li
                className={`${
                  currentPath === "/regulation"
                    ? "text-[#7F55DA] font-semibold"
                    : ""
                }`}
              >
                <Link to={"/regulation"}>Regulation & Policies</Link>
              </li>
              <li
                className={`${
                  currentPath === "/License"
                    ? "text-[#7F55DA] font-semibold"
                    : ""
                }`}
              >
                <Link to={"/License"}>Licenses</Link>
              </li>
              <li
                className={`${
                  currentPath === "/reports"
                    ? "text-[#7F55DA] font-semibold"
                    : ""
                }`}
              >
                <Link to={"/reports"}>Investigations & Reports</Link>
              </li>
              {/**
              <li
                className={`${
                  currentPath === "/data" ? "text-[#7F55DA] font-semibold" : ""
                }`}
              >
                <Link to={"/data"}>Data & Visualization</Link>
              </li>
              */}
            </ul>
          </nav>
          <img
            src={menu}
            alt=""
            className="h-6 xl:hidden block cursor-pointer"
            onClick={() => setIshowDrop(!showDrop)}
          />
        </div>
      </header>

      {showDrop && <DropDownMenu setIshowDrop={setIshowDrop} />}
    </div>
  );
};

export default Header;
