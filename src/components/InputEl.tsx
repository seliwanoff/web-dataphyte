import info from "../assets/images/help-circle.png";

interface InputElProps {
  label: string;
  placeholder?: string;
  helperText?: string;
}

const InputEl: React.FC<InputElProps> = ({
  label,
  placeholder = "John Doe",
  helperText,
}) => {
  return (
    <div className="flex flex-col gap-4 w-full flex-grow basis-[320px] bg-white">
      <label
        htmlFor={label}
        className="font-Inter text-[14px] font-medium leading-6 text-left text-[#344054]"
      >
        {label}
      </label>
      <div className="w-full rounded-md h-[40px] border border-[#d0d5dd] py-[6px] px-[4px] shadow-input-shadow flex items-center justify-between">
        <input
          type="text"
          placeholder={placeholder}
          className="outline-none border-none w-full font-Inter text-[16px] font-normal leading-6 text-left text-[#667085]"
        />
        <img src={info} alt="Info icon" className="h-[16px]" />
      </div>

      {helperText && (
        <span className="text-[#475467] font-Inter text-[14px] font-normal leading-[20px] text-left">
          {helperText}
        </span>
      )}
    </div>
  );
};

export default InputEl;
