import Image from "next/image";
import React from "react";

const EcoSystemCard = ({ firstText, secondText, image }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="flex items-center justify-center bg-indigo-50 p-3 rounded-sm">
        <Image src={image} width={50} height={50} />
      </div>
      <p className="text-gray-800 font-bold">{firstText}</p>
      <p className="text-gray-500 font-medium">{secondText}</p>
    </div>
  );
};

export default EcoSystemCard;
