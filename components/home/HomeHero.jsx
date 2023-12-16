import Image from "next/image";

import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa";
import EcoSystemSection from "../home/EcoSystemSection";
import HeroCard from "../user/HeroCard";
const HomeHero = () => {
  return (
    <main className=" pt-32 relative   ">
      {/* this is the top section */}
      <div className="middle w-full flex flex-col gap-10 lg:w-8/12 m-auto items-center  justify-between    ">
        <h1 className=" sora text-5xl font-bold leading-[128%] text-center       ">
          Building Algeria's brightest <br /> freelance ecosystem,{" "}
          <span className="w-fit relative">
            <span className="relative inline-block  w-fit">
              <span>brick</span>
              <Image
                src={"/under_brick.png"}
                width={102}
                height={5}
                className=" w-[102px] absolute  "
              />
            </span>
          </span>{" "}
          by <br /> brilliant{" "}
        </h1>

        <ul className="flex items-center list-none gap-10">
          <li>
            <HeroCard image={"/ideat.svg"} text={"Ideate"} />
          </li>
          <li>
            <HeroCard image={"/hire.svg"} text={"Hire"} />
          </li>
          <li>
            <HeroCard image={"/collaborate.svg"} text={"Collaborate"} />
          </li>
          <li>
            <HeroCard image={"/excute.svg"} text={"Execute"} />
          </li>
        </ul>
        <h2 className=" text-grey500 text-center  ">
          The first platform that Combines business owners with freelancers to{" "}
          <br />
          collaborate in building ambitious ideas
        </h2>
        <Button>
          Build Your Project Now
          <FaArrowRight className="ml-2" />
        </Button>
        <Image
          src={"/right_image.png"}
          width={150}
          height={100}
          className=" absolute right-0 bottom-40  "
        />
        <Image
          src={"/left_image.png"}
          width={130}
          height={200}
          className=" absolute left-20 top-20 "
        />
      </div>
      {/* those are the images */}
    </main>
  );
};
export default HomeHero;
