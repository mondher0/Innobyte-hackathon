import Image from "next/image";
import React from "react";

const SingleSolution = ({ title, desc }) => {
  return (
    <div className="flex items-center gap-3">
      <Image src="/veirify.svg" width={24} height={24} />
      <span className="flex flex-col">
        <p className="text-white font-bold">{title}</p>
        <p className="text-white font-normal">{desc}</p>
      </span>
    </div>
  );
};

export default SingleSolution;
