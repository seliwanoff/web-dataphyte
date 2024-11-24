import uploadicon from "../assets/images/uploadicon.png";

interface UploadElProps<T> {
  label: string;
  placeholder?: string;
  helperText?: string;
  name: keyof T; // Ensures the name matches a key in the form data type
  value: File | string; // Updated to allow File type (not just string)
  setForm: React.Dispatch<React.SetStateAction<T>>; // Matches the form data type
  accept: any;
}

const UploadEl = <T extends Record<string, any>>({
  label,
  placeholder = "John Doe",
  helperText,
  name,
  value,
  setForm,
  accept,
}: UploadElProps<T>) => {
  const handleChange = (e: any) => {
    const file = e.target.files?.[0];

    if (file) {
      // Set the file object to form state
      setForm((prev) => ({ ...prev, [name]: file }));
    }
  };

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
          name={name as string}
          id={label}
          className="h-full absolute top-0 w-full z-50 opacity-0"
          onChange={handleChange}
          accept={accept}
        />
        <div className="outline-none border-none w-full font-Inter text-[16px] font-normal leading-6 text-left text-[#667085] relative px-[12px] py-[12px]">
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
      {/* Check if a file has been selected, then display its name */}
      {value && typeof value !== "string" && value.name && (
        <div className="w-full bg-[#475467] rounded-md py-2 text-white font-Poppins px-4  overflow-hidden text-ellipsis text-nowrap">
          {value.name}
        </div>
      )}
      <span className="text-[#475467] font-Inter text-[14px] font-normal leading-[20px] text-left">
        40 characters maximum
      </span>
    </div>
  );
};

export default UploadEl;
