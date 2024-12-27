interface CompanyNameDescriptionProps {
  datas?: any;
  name: string;
  meta: any;
  id?: any;
}

const ComapnyNameDescription: React.FC<CompanyNameDescriptionProps> = ({
  datas,
  name,
  meta,
  id,
}) => {
  return (
    <div className="w-full xl:px-[110px] px-[24px] xl:py-[32px] py-6 bg-[#7F55DA0A]">
      <div className="w-full  max-w-[1750px] mx-auto">
        <div className="w-full mx-auto flex flex-col gap-12 max-w-[897px]">
          <h3 className="font-Poppins xl:text-[42px] text-[32px] font-semibold xl:leading-[72px] leading-12 text-center text-gradient p-0 m-0 ">
            {name}
          </h3>
          <p className=" font-Satoshi text-[18px] font-medium leading-8 text-center text-[#434343]">
            {meta !== undefined && meta}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComapnyNameDescription;
