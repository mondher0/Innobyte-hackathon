import Image from "next/image";
import React from "react";

const EcoSystemSection = () => {
  return (
    <div className="relative mt-10 middle w-full flex flex-col gap-10 lg:w-8/12 m-auto items-center  justify-between">
      <h1 className="text-cente text-gray-800 text-[30px] font-bold leading-120 tracking-[1px] LETTER">
        Full Eco-System, all in one place !
      </h1>
      <Image
        src={"/eco.png"}
        width={150}
        height={100}
        className="absolute bottom-[-5px] right-14"
      />
    </div>
  );
};

export default EcoSystemSection;
