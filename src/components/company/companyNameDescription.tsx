interface CompanyNameDescriptionProps {
  datas?: any;
  name: string;
  meta: any;
}

const ComapnyNameDescription: React.FC<CompanyNameDescriptionProps> = ({
  datas,
  name,
  meta,
}) => {
  return (
    <div className="w-full xl:px-[110px] px-[24px] py-[32px] bg-[#7F55DA0A]">
      <div className="w-full  max-w-[1750px] mx-auto">
        <div className="w-fit mx-auto flex flex-col gap-12 max-w-[897px]">
          <h3 className="font-Poppins xl:text-[42px]  text-[32px] font-semibold leading-[72px] text-center text-gradient p-0 m-0">
            {name}
          </h3>
          <p className=" font-Satoshi text-[18px] font-medium leading-8 text-center text-[#434343]">
            {meta !== undefined && JSON.parse(meta)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComapnyNameDescription;
