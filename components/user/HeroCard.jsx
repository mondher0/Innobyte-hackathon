import Image from "next/image";
import React from "react";

const HeroCard = ({ image, text }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-indigo-50 rounded-sm flex items-center justify-center w-8 h-8">
        <Image src={image} width={25} height={25} />
      </div>
      <p className="text-indigo-800 font-semibold">{text}</p>
    </div>
  );
};

export default HeroCard;
