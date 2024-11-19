interface CompanyNameDescriptionProps {
  datas?: any;
}

const ComapnyNameDescription: React.FC<CompanyNameDescriptionProps> = ({
  datas,
}) => {
  return (
    <div className="w-full xl:px-[110px] px-[24px] py-[32px]">
      <div className="w-full  max-w-[1750px] mx-auto">
        <div className="w-fit mx-auto flex flex-col gap-12 max-w-[897px]">
          <h3 className="font-Poppins xl:text-[42px]  text-[32px] font-semibold leading-[72px] text-center text-gradient p-0 m-0">
            {datas.data.name}
          </h3>
          <p className=" font-Satoshi text-[18px] font-medium leading-8 text-center text-[#434343]">
            Lorem ipsum dolor sit amet consectetur. Ac sem magna habitant
            elementum justo. Mauris fusce lobortis ipsum est aliquet vestibulum
            lore convallis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComapnyNameDescription;
