import info from "../assets/images/help-circle.png";

interface TextareaProps<T> {
  label: string;
  placeholder?: string;
  helperText?: string;
  name: keyof T; // Ensures the name is a key of the form data type
  value: string;
  setForm: React.Dispatch<React.SetStateAction<T>>; // Matches the form data type
}

const Textarea = <T extends Record<string, any>>({
  label,
  placeholder = "John Doe",
  helperText,
  name,
  value,
  setForm,
}: TextareaProps<T>) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value })); // Type-safe update
  };

  return (
    <div className="flex flex-col gap-4 w-full xl:max-w-[45%] max-w-[500px] flex-grow xl:basis-[480px] bg-white">
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
      <div className="w-full rounded-md h-[110px] border border-[#d0d5dd] py-[6px] px-[4px] shadow-input-shadow">
        <textarea
          name={name as string} // Ensure the name is passed to the textarea
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className="outline-none border-none w-full font-Inter text-[16px] font-normal leading-6 text-left text-[#667085]"
        ></textarea>
      </div>
      <span className="text-[#475467] font-Inter text-[14px] font-normal leading-[20px] text-left">
        40 characters maximum
      </span>
    </div>
  );
};

export default Textarea;
