import { useNavigate } from "react-router-dom";

type ButtonElProps = {
  selectedCountry: string;
  selectedContinent: string;
};

const ButtonEl: React.FC<ButtonElProps> = ({
  selectedCountry,
  selectedContinent,
}) => {
  const navigate = useNavigate();
  return (
    <button
      className="py-[16px] px-[32px] w-[166px] rounded-[36px] bg-[#7F55DA] text-[#fff] font-Satoshi text-[16px] font-bold leading-[21.6px] outline-none border-none"
      onClick={() => {
        navigate(
          `/regulation/profile?c=${selectedCountry}&r=${selectedContinent}`
        );
      }}
    >
      Continue
    </button>
  );
};

export default ButtonEl;
