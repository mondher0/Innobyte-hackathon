import React from "react";
import { Button } from "../ui/button";
import { MdFavoriteBorder } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import { SlDislike } from "react-icons/sl";

const FlagIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14 9L13 7H7V5.72C7.6 5.38 8 4.74 8 4C8 2.9 7.1 2 6 2C4.9 2 4 2.9 4 4C4 4.74 4.4 5.38 5 5.72V21H7V17H12L13 19H20V9H14ZM18 17H14L13 15H7V9H12L13 11H18V17Z"
        fill="#4338CA"
      />
    </svg>
  );
};
const DislikeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 3H6.693C6.28611 3.00135 5.88922 3.12616 5.55478 3.35792C5.22035 3.58969 4.96413 3.91749 4.82 4.298L2.063 11.649C2.02114 11.7613 1.9998 11.8802 2 12V14C2 15.103 2.897 16 4 16H9.612L8.49 19.367C8.38997 19.6676 8.36264 19.9877 8.41027 20.301C8.4579 20.6142 8.57913 20.9117 8.764 21.169C9.14 21.689 9.746 22 10.388 22H12C12.297 22 12.578 21.868 12.769 21.64L17.469 16H20C21.103 16 22 15.103 22 14V5C22 3.897 21.103 3 20 3ZM11.531 20H10.386L11.948 15.316C11.998 15.1657 12.0117 15.0058 11.9878 14.8492C11.9639 14.6926 11.9032 14.544 11.8106 14.4155C11.7181 14.287 11.5963 14.1823 11.4554 14.1101C11.3144 14.0379 11.1584 14.0001 11 14H4V12.181L6.693 5H16V14.638L11.531 20ZM18 14V5H20L20.001 14H18Z"
        fill="#6B7280"
      />
    </svg>
  );
};

const ApplyCard = () => {
  return (
    <div className="flex flex-col items-start justify-center f gap-4 border-solid border-#6B7280 border-2 p-5">
      <Button>Apply now</Button>
      <Button className="flex items-center gap-2">
        Save Project
        <MdFavoriteBorder />
      </Button>
      <span className="flex items-center text-indigo-700">
        <FlagIcon /> Flag as inappropriate
      </span>
      <p className="text-gray-700 font-bold">About the client</p>
      <div className="flex items-center">
        <IoStarSharp color="#F1C323" size={25} />
        <IoStarSharp color="#F1C323" size={25} />
        <IoStarSharp color="#F1C323" size={25} />
        <IoStarSharp color="#F1C323" size={25} />
      </div>
      <p className="text-gray-500 font-medium">5.00 of 5 reviews</p>
      <span className="mt-5">
        <p className="text-gray-500">Alger, Algiers</p>
        <p className="text-gray-500">12 Project Posted</p>
        <p className="mt-5 text-gray-500">Member since 20 dec 2023 </p>
        <span className="flex items-center text-gray-500 gap-3">
          <DislikeIcon />
          Dislike
        </span>
      </span>
    </div>
  );
};

export default ApplyCard;
