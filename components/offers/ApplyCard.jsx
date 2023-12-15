"use client";
import React from "react";
import { Button } from "../ui/button";
import { MdFavoriteBorder } from "react-icons/md";

import { IoStarSharp } from "react-icons/io5";
import ApplyModal from "./ApplyModal";

import { BiDislike } from "react-icons/bi";


import { FaFontAwesomeFlag } from "react-icons/fa";
const ApplyCard = ({ rating, totalReviews, city, since, numberOfProjects }) => {

  return (

    <div className="flex  min-h-full   flex-col items-start justify-start w-full gap-4 border-solid border-#6B7280 border-2  p-5 rounded-sm border-l-transparent  ">
      <Button className={"w-full "}>Apply now</Button>
      <Button
        variant={"soft"}
        className="flex w-full items-center gap-2"
      >
        Save Project
        <MdFavoriteBorder />
      </Button>
      <span className="flex items-center gap-2  text-indigo-700">
        <FaFontAwesomeFlag />
        <span>Flag as inappropriate</span>
      </span>
      <p className="text-gray-700 font-bold">About the client</p>

      <p className="text-gray-500 font-medium">
        ${rating} of {totalReviews} reviews
      </p>
      <span className="mt-5">
        <p className="text-gray-500">Alger, Algiers</p>
        <p className="text-gray-500">12 Project Posted</p>
        <p className="mt-5 text-gray-500">Member since 20 dec 2023 </p>
        <span className="flex items-center text-gray-500 gap-3">Dislike</span>
      </span>
    </div>

  );
};

export default ApplyCard;
