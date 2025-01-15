import React from "react";

interface SmallCardProps {
  title: string;
  count: number;
}

const SmallCard: React.FC<SmallCardProps> = ({ title, count }) => {
  return (
    <div className="lg:w-64 p-4 bg-white rounded-lg shadow-md flex flex-col  gap-3  items-center">
      <h3 className="text-lg font-semibold text-gray-700 font-Poppins">
        {title}
      </h3>
      <span className="text-3xl font-bold text-primary font-polySans text-left">
        {count}
      </span>
    </div>
  );
};

export default SmallCard;
