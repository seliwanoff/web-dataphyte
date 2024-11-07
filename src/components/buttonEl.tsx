import { useNavigate } from "react-router-dom";

const ButtonEl = () => {
  const navigate = useNavigate();
  return (
    <button
      className="py-[16px] px-[32px] w-[166px] rounded-[36px] bg-[#7F55DA] text-[#fff] font-Satoshi text-[16px] font-bold leading-[21.6px] outline-none border-none"
      onClick={() => {
        navigate("/regulation/profile");
      }}
    >
      Continue
    </button>
  );
};

export default ButtonEl;
