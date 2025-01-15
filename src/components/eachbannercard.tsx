import React, { useState, useEffect } from "react";
import arrow from "../assets/images/arrow-right.png";
import { Link } from "react-router-dom";

interface EachBannerCardProps {
  image?: string;
  text: string; // This should represent a numeric value (e.g., "20")
  link: string;
  logoImage?: string;
  undertext?: string;
  linktext?: string;
}

const EachBannerCard: React.FC<EachBannerCardProps> = ({
  image,
  text,
  link,
  logoImage,
  undertext,
  linktext,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = parseInt(text, 10); // Convert text to a number
    if (isNaN(target)) return; // If text is not a number, exit early

    const increment = target / 50;
    const interval = setInterval(() => {
      setCount((prev) => {
        const nextValue = prev + increment;
        if (nextValue >= target) {
          clearInterval(interval);
          return target;
        }
        return nextValue;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="flex-grow basis-[340px] xl:basis-[200px] relative bg-[#000000] bg-blend-darken rounded-full bg-opacity-45 saturate-[30px]">
      <div className="absolute bg-[#00000075] h-full rounded-3xl w-full"></div>
      <img
        src={image}
        alt=""
        className="object-cover rounded-[24px] h-[369px] w-full"
      />
      <div className="absolute w-full top-0 p-8 flex flex-col gap-[57px]">
        <img src={logoImage} alt="" className="w-16" />
        <div className="flex flex-col gap-4">
          {/*** Counter */}
          <h2 className="font-bold text-[53px] font-Poppins text-white leading-[79.5px] m-0">
            {Math.floor(count)} {/* Display the current count */}
          </h2>
          {/*** End Counter */}
          <span className="font-medium text-2xl leading-6 font-Poppins text-white">
            {undertext}
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 p-8">
        <Link
          to={`${link}`}
          className="text-white font-semibold text-[14px] leading-6 font-Poppins flex items-center gap-2"
        >
          {linktext}
          <img src={arrow} alt="" className="h-[14px]" />
        </Link>
      </div>
    </div>
  );
};

export default EachBannerCard;
