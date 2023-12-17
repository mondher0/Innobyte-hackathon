import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa";

const Work = () => {
  return (
    <div className="flex items-center justify-center gap-20 m-40">
      <div className="flex flex-col items-start justify-center gap-4">
        <h1 className="font-bold ">
          Work in the best Projects
          <br /> while, collaborate with
          <br /> TOP teams
        </h1>
        <p className="text-gray-400">
          Work in the best Projects while,
          <br /> collaborate with TOP teams
        </p>
        <Button className="flex items-center gap-4">
          Get a project Now
          <FaArrowRight />
        </Button>
      </div>
      <Image src="/work-img.png" width={400} height={400} />
    </div>
  );
};

export default Work;
