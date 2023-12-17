"use client";
import Image from "next/image";
import { BiDislike } from "react-icons/bi";
import IconProvider from "../ui/IconProvider";
import { FaRegHeart } from "react-icons/fa6";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
const SingleOfferCard = ({
  postulationDate,
  title,
  description,
  positions,
  businessOwner,
  boJob,
  boImage,
  isLiked,
  isDisliked,
}) => {
  const router = useRouter();
  return (
    <article
      className=" border-solid border-[1px] border-grey400 w-full    max-w-[650px] rounded-md p-4 px-6    "
      onClick={() => router.push("/offer/1")}
    >
      <h5 className=" text-sm text-grey600  inter  font-semibold ">
        {postulationDate}
      </h5>
      <h3 className=" text-xl mt-2 font-semibold inter   text-grey700">
        {title}
      </h3>
      <p className=" text-grey500 mt-4 text-sm  inter  ">{description}</p>
      {/* those are the needed positions */}
      <div className="needed-positions mt-5 flex flex-col gap-5 ">
        <h5 className=" font-semibold inter text-grey700 ">Needed Position</h5>
        <div className="positions_container w-full flex  flex-wrap  items-center justify-between   gap-3 ">
          {positions.map((position, index) => (
            <span
              key={index}
              className=" text-md text-grey700 rounded-sm bg-gray-100 p-3   inter  font-medium text-sm inline-block min-w-[200px]  w-[45%] "
            >
              {position}
            </span>
          ))}
        </div>
      </div>
      {/* this is the bottom section */}
      <div className="bottom-section w-full flex items-center  ">
        {/* this is the profile */}
        <div className="profile w-full  flex justify-between items-center     mt-10">
          {/*  */}
          <div className="left-section flex items-center gap-3">
            <Image
              src={"/my_image.jpg"}
              width={35}
              height={35}
              className=" rounded-full "
            />
            <div className="info flex flex-col items-start justify-start ">
              <span className=" text-grey900  font-semibold text-[15px]  ">
                {businessOwner}
              </span>
              <span className=" text-grey400  font-medium   text-[12px]   ">
                {boJob}
              </span>
            </div>
          </div>
          {/* buttons  */}
          <div className="right-section flex items-center gap-6 ">
            <button>
              <IconProvider>
                <BiDislike size={25} />
              </IconProvider>
            </button>
            <button>
              <IconProvider>
                <FaRegHeart size={25} />
              </IconProvider>
            </button>
            <Button variant={"soft"}>Apply</Button>
          </div>
        </div>
      </div>
    </article>
  );
};
export default SingleOfferCard;
