import uploadicon from "../assets/images/uploadicon.png";

interface TextareaProps {
  label: string;
  placeholder?: string;
  helperText?: string;
}

const UploadEl: React.FC<TextareaProps> = ({
  label,
  placeholder = "John Doe",
  helperText,
}) => {
  return (
    <div className="flex flex-col gap-4 w-full xl:max-w-[45%] max-w-[500px] flex-grow xl:basis-[480px] bg-white ">
      <div className="flex flex-col gap-1">
        <label
          htmlFor={label}
          className="font-Inter text-[14px] font-medium leading-6 text-left text-[#344054]"
        >
          {label}
        </label>
        {helperText && (
          <span className="text-[#475467] font-Inter text-[14px] font-normal leading-[20px] text-left">
            {helperText}
          </span>
        )}
      </div>
      <div className="w-full rounded-md h-[120px] border border-[#d0d5dd] py-[6px] px-[4px] shadow-input-shadow flex items-center justify-between relative">
        <input
          type="file"
          name=""
          id=""
          className="h-full absolute top-0 w-full z-50 opacity-0"
        />
        <div className="outline-none border-none w-full font-Inter  text-[16px] font-normal leading-6 text-left text-[#667085] relative px-[12px] py-[12px]">
          <div className="h-full flex flex-col gap-[12px] justify-center items-center">
            <img src={uploadicon} alt="" className="h-10" />
            <div className="flex flex-col gap-2 font-Inter text-[12px] font-normal leading-[18px] text-center text-[#475467]">
              <span className="w-full">
                <span className="text-[#6941C6] font-semibold">
                  Click to upload{" "}
                </span>
                or drag and drop
              </span>
              <span>SVG, PNG, JPG or GIF (max. 800x400px)</span>
            </div>
          </div>
        </div>
      </div>
      <span className="text-[#475467] font-Inter text-[14px] font-normal leading-[20px] text-left">
        40 characters maximum
      </span>
    </div>
  );
};

export default UploadEl;
