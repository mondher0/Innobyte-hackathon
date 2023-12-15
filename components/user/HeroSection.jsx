import Image from "next/image";
import UserSearchInput from "./UserSearchInput";
const HeroSection = () => {
  return (
    <main className=" pt-32 relative   ">
      {/* this is the top section */}
      <div className="middle w-full flex flex-col gap-10 lg:w-8/12 m-auto items-center  justify-between    ">
        <h1 className=" sora text-5xl font-bold leading-[128%] text-center       ">
          Building Algeria's brightest <br /> freelance ecosystem,{" "}
          <span className="    w-fit relative  ">
            <span className=" relative inline-block  w-fit ">
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

        <h2 className=" text-grey500 text-center  ">You can Search For the type of projects that fits you, just type in the search bar</h2>
        <UserSearchInput />
      </div>
      {/* those are the images */}
      <Image
        src={"/right_image.png"}
        width={150}
        height={100}
        className=" absolute right-0  -z-2  bottom-10  "
      />
      <Image
        src={"/left_image.png"}
        width={130}
        height={200}
        className=" absolute left-20 z-0 top-20 "
      />
    </main>
  );
};
export default HeroSection;
