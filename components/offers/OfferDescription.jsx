import React from "react";
import { Badge } from "../ui/badge";
import { FaLink } from "react-icons/fa6";
import { Button } from "../ui/button";

const OfferDescription = ({ description, title, postingDate, link }) => {
  return (
    <>
      <div className="flex py-5 items-center border-b-solid border-b-grey200 border-b-2  justify-between w-full px-5 ">
        <div className="flex flex-col gap-4">
          <h1 className="text-grey700 text-2xl font-semibold ">{title}</h1>
          <p className="text-grey600 text-sm font-semibold">{postingDate}</p>
        </div>

        <button>
          <Button
            variant={"soft"}
            className=" rounded-full px-5  py-2 flex items-center gap-2  "
          >
            <FaLink />
            <span className="">copy link</span>
          </Button>
        </button>
      </div>
      <div className="mt-4 p-5 pb-20  border-b-solid border-b-grey200 border-b-2  ">
        <p className="text-gray-600   text-[17px]">{description}.</p>
      </div>
    </>
  );
};

export default OfferDescription;
