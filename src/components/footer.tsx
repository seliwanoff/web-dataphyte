import twitter from "../assets/images/twitter.png";
import facebook from "../assets/images/facebook.png";
import imstagram from "../assets/images/instagram.png";

const Footer = () => {
  const title = process.env.REACT_APP_TITLE;

  return (
    <footer className="w-full bg-[#462F78] xl:px-[110px] xl:py-[32px] py-[16px] px-[24px]">
      <div className=" xl:pt-[52px] pt-[20px] max-w-[1750px] mx-auto flex xl:flex-nowrap flex-wrap gap-[32px] justify-between">
        <div className="flex gap-[23px] flex-col w-full max-w-[286px]">
          <h1 className="font-Poppins text-[24px]  font-semibold leading-6 text-white">
            {title}
          </h1>
          <p className="font-Satoshi text-white text-[14px] font-bold leading-6">
            Lorem ipsum dolor sit amet consectetur. Aliquet sed scelerisque id
            cursus interdum.
          </p>
        </div>
        <div className="flex gap-[115px]">
          <div className="flex flex-col">
            <h2 className="font-bold text-white text-[16px] leading-6 font-Satoshi">
              Company
            </h2>

            <ul className="list-none flex flex-col mt-[40px] gap-4 font-medium text-[14px]  leading-[20px] text-[#F2EEFB]">
              <li>About Us</li>
              <li>FAQ</li>
              <li>Blog (coming soon)</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-white text-[16px] leading-6 font-Satoshi">
              Legal
            </h2>

            <ul className="list-none flex flex-col mt-[40px] gap-4 font-medium text-[14px]  leading-[20px] text-[#F2EEFB]">
              <li>Privacy</li>
              <li>Term and conditions</li>
              <li>Security</li>
            </ul>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <div className="flex items-center gap-[32px]  xl:justify-end justify-start">
            <img src={facebook} alt="" className="h-6" />
            <img src={twitter} alt="" className="h-6" />
            <img src={imstagram} alt="" className="h-6" />
          </div>
          <ul className="list-none flex flex-col mt-[40px] gap-4 font-medium text-[14px] xl:text-end  leading-[20px] text-[#F2EEFB]">
            <li>Company address goes here</li>
            <li>contact@nubia.com</li>
            <li>+234 (909) 060 6099</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
