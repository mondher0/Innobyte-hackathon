import Image from "next/image";
import React from "react";
import "./solutions.css";
import SingleSolution from "./SingleSolution";
import { Button } from "../ui/button";

const SolutionsSection = () => {
  const solutions = [
    {
      title: "Mosaic Pro",
      desc: "Benefit from amazing features for collaboration & hiring",
    },
    {
      title: "Mosaic Certified",
      desc: "Build your own branded certified track",
    },
    {
      title: "Mosaic Enterprise",
      desc: "Manage your freelance workforce and onboard additional talent with an end-to-end SaaS solution",
    },
  ];
  return (
    <section className="solutions-container  bg-indigo900 py-4 p-10 mt-10 flex items-center relative">
      <div className="flex flex-col items-start justify-center gap-4">
        <Image src="/outline-logo.svg" width={100} height={100} />
        <h1 className="text-white font-semibold">
          Advanced solutions and
          <br /> professional talent for <br />
          businesses
        </h1>
        <div className="flex flex-col items-start justify-center gap-4">
          {solutions.map((item, index) => {
            return <SingleSolution key={index} {...item} />;
          })}
        </div>
        <Button variant="white">Learn More</Button>
      </div>
      <Image
        src="/solution-img.png"
        width={550}
        height={550}
        className="absolute right-0 top-20"
      />
    </section>
  );
};

export default SolutionsSection;
