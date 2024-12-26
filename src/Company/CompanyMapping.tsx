import { Link, useLocation } from "react-router-dom";

const Companymapping = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("id") || "" || "";

  return (
    <div className="font-Poppins text-[18px] font-semibold leading-5  text-center xl:text-right text-[#7F55DA] w-full xl:px-[110px] px-[24px]">
      <div className="w-full max-w-[1750px]">
        <Link to={`/company/organization-mapping?id=${queryName}`}>
          View Company Mapping{" "}
        </Link>
      </div>
    </div>
  );
};

export default Companymapping;
