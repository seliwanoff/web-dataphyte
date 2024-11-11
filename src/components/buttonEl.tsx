import { useNavigate } from "react-router-dom";

type ButtonElProps = {
  selectedCountry: string;
  selectedContinent: string;
  link: string;
  text: string;
  size?: string;
};

const ButtonEl: React.FC<ButtonElProps> = ({
  selectedCountry,
  selectedContinent,
  link,
  text,
  size,
}) => {
  const navigate = useNavigate();
  return (
    <button
      className={`py-[16px] h-[55px] text-unwrap flex justify-center items-center px-[32px] w-full ${
        size ? size : "max-w-[166px]"
      } rounded-[36px] bg-[#7F55DA] text-[#fff] font-Satoshi text-[16px] font-bold leading-[21.6px] outline-none border-none`}
      onClick={() => {
        navigate(`${link}?c=${selectedCountry}&r=${selectedContinent}`);
      }}
    >
      {text}
    </button>
  );
};

export default ButtonEl;
