import image from "../assets/images/Image.png";
import arrow from "../assets/images/arrow-up-right.png";
import avater from "../assets/images/Avatar.png";
import {
  calculateMinutesToRead,
  fixLinkSlashes,
  getExcerpt,
} from "../utils/readTimeCalculator";
import { useNavigate } from "react-router-dom";

type SelectElProps = {
  data: any;
};

const EachNewsCard: React.FC<SelectElProps> = ({ data }) => {
  const navigate = useNavigate();
  const navigateToBllog = () => {
    navigate(`/report/blog?id=${data.id}`);
  };
  return (
    <div
      className="w-full flex flex-col cursor-pointer  xl:max-w-[480px] h-fit lg:basis-[calc((100%-72px)/3)] xl:flex-grow-0  lg:flex-1 xl:flex-shrink-0  gap-6 "
      onClick={navigateToBllog}
    >
      <img
        src={
          data.article_picture !== "1"
            ? `https://cardri.s3.eu-west-1.amazonaws.com/${fixLinkSlashes(
                data.article_picture
              )}`
            : image
        }
        alt=""
        className="h-[222PX] mb-3 object-cover"
      />

      <div className="flex flex-col gap-[32px]">
        <div className="inline-flex items-center p-[4px] pr-[9.29px] bg-[#F5F1FF] rounded-full gap-4 basis-auto flex-grow-0 flex-shrink-0 w-fit">
          <div className="bg-white py-[6px] px-[7.6px] rounded-full h-full text-center text-[11.14px] font-medium font-Satoshi text-[#8B5CF6] leading-[16.7px]">
            {data.meta && JSON.parse(data.meta)}
          </div>
          <span className="text-center text-[11.14px] font-medium font-Satoshi text-[#8B5CF6] leading-[16.7px]">
            {data.article && calculateMinutesToRead(data.article)} min read
          </span>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-center  justify-between gap-4">
            <h3 className="font-bold text-[20px] leading-8 font-Satoshi text-left m-0 p-0 ">
              {data?.title}
            </h3>

            <img src={arrow} alt="" className="h-[26.29]" />
          </div>

          <p className="font-Inter text-[16px] leading-6  font-normal text-[#475467] p-0 m-0">
            {data.article && getExcerpt(data.article, 20)}
          </p>
        </div>
        <div className="flex gap-[24px] items-center">
          <img
            src={
              data.display_picture !== ""
                ? `https://cardri.s3.eu-west-1.amazonaws.com/${fixLinkSlashes(
                    data.display_picture
                  )}`
                : avater
            }
            alt=""
            className="h-[37.14px] rounded-full w-[37.14px] object-cover"
          />

          <div className="">
            <h3 className="text-[#101828] p-0 m-0 text-[13px]  font-semibold  leading-[18.57px] font-Satoshi">
              {data.name}
            </h3>
            <span className="text-[#475467] font-normal text-[13px] font-Satoshi">
              {new Date(data.created_at).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachNewsCard;
