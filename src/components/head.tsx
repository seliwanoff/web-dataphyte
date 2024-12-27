import { Link, useLocation, useNavigate } from "react-router-dom";
import arrow from "../assets/images/Arrow_Left_LG.svg";
import close from "../assets/images/Close_LG.svg";
import { useState } from "react";

const Head = () => {
  const location = useNavigate();
  return (
    <div className="w-full relative">
      <header className=" h-[60px]  justify-center  flex w-full items-center bg-white max-w-[1750px] mx-auto lg:px-[100px] px-[24px] ">
        <div className="flex w-full justify-between items-center">
          <img
            src={arrow}
            alt=""
            className="h-6"
            onClick={() => {
              location(-1);
            }}
          />
          <img
            src={close}
            alt=""
            className="h-6"
            onClick={() => {
              location("/");
            }}
          />
        </div>
      </header>
    </div>
  );
};

export default Head;
