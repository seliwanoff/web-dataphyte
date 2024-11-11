import { Link, useLocation } from "react-router-dom";
import close from "../assets/images/close.png";
import menu from "../assets/images/Hamburger_LG.svg";
import { useEffect } from "react";

interface DropDownMenuProps {
  setIshowDrop: (value: boolean) => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ setIshowDrop }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <div
        className="fixed w-full h-[100vh] bg-black top-0 z-50 opacity-35 overflow-y-hidden"
        onClick={() => setIshowDrop(false)}
      ></div>

      <div className="w-3/4 bg-white h-full p-6 opacity-100 z-50 fixed top-0 transition-transform duration-300 ease-in-out">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-[#7F55DA] text-2xl leading-6 font-semibold font-Poppins">
            <Link to={"/"}> Dataphyte</Link>
          </h2>

          <img
            src={close}
            alt="Close menu"
            className="h-6 xl:hidden block cursor-pointer"
            onClick={() => setIshowDrop(false)} // Handle click to hide the dropdown
          />
        </div>

        <nav className="w-full mt-8">
          <ul className="flex flex-col gap-8 text-[#525252] text-[16px] leading-6 font-normal font-Poppins list-none cursor-pointer">
            <li>
              <Link
                to="/map"
                className={`${
                  currentPath === "/map" ? "text-[#7F55DA] font-semibold" : ""
                }`}
                onClick={() => setIshowDrop(false)}
              >
                Interactive Map
              </Link>
            </li>
            <li>
              <Link
                to="/country-overview"
                className={`${
                  currentPath === "/country-overview"
                    ? "text-[#7F55DA] font-semibold"
                    : ""
                }`}
                onClick={() => setIshowDrop(false)}
              >
                Country Overview
              </Link>
            </li>
            <li
              className={`${
                currentPath === "/regulation"
                  ? "text-[#7F55DA] font-semibold"
                  : ""
              }`}
              onClick={() => setIshowDrop(false)}
            >
              <Link to={"/regulation"}> Regulation & Policies</Link>
            </li>
            <li
              className={`${
                currentPath === "/licenses"
                  ? "text-[#7F55DA] font-semibold"
                  : ""
              }`}
              onClick={() => setIshowDrop(false)}
            >
              <Link to={"/License"}>Licenses</Link>
            </li>
            <li
              className={`${
                currentPath === "/investigations"
                  ? "text-[#7F55DA] font-semibold"
                  : ""
              }`}
              onClick={() => setIshowDrop(false)}
            >
              <Link to={"/reports"}> Investigations & Reports</Link>
            </li>
            <li
              className={`${
                currentPath === "/data-visualization"
                  ? "text-[#7F55DA] font-semibold"
                  : ""
              }`}
              onClick={() => setIshowDrop(false)}
            >
              <Link to={"/data"}> Data & Visualization</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default DropDownMenu;
