import africa from "../assets/images/africa.png";

const Sectin5 = () => {
  return (
    <div className="bg-hero-pattern mt-[32px] px-[110px] py-[64px] bg-cover bg-no-repeat">
      <div className="max-w-[1221px] mx-auto">
        <div className="max-w-[630px] mx-auto flex flex-col gap-2">
          <h3 className="font-semibold font-polySans text-[32px] leading-[44.29px] text-white text-center">
            Explore mining projects across Africa
          </h3>
          <p className="font-normal text-[18px] font-Poppins leading-8 text-center text-white">
            Lorem ipsum dolor sit amet consectetur. Ac sem magna habitant
            elementum justo. Mauris fusce lobortis ipsum est aliquet vestibulum.
          </p>
        </div>

        <img src={africa} alt="" className="h-[541.54px] mx-auto mt-[56px]" />
      </div>
    </div>
  );
};

export default Sectin5;
