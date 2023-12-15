import React from "react";
import { Badge } from "../ui/badge";
import { FaLink } from "react-icons/fa6";

const OfferDescription = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-4">
          <h1 className="text-gray-700 text-3xl">
            Creating A plateform For my Hotel
          </h1>
          <p className="text-gray-600 font-semibold">Posted 1d ago</p>
        </div>

        <button>
          <Badge className="flex items-center gap-4">
            <FaLink />
            Copy link
          </Badge>
        </button>
      </div>
      <div className="mt-4">
        <p className="text-gray-600 text-[17px]">
          In today's digital landscape, a captivating and user-friendly online
          platform is essential for any hotel's success. This project aims to
          create a bespoke platform tailored to your specific hotel's needs,
          providing guests with an exceptional experience from booking to
          checkout.
        </p>
      </div>
    </>
  );
};

export default OfferDescription;
