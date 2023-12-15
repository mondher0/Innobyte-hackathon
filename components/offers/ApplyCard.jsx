import React from "react";
import { Button } from "../ui/button";
import { MdFavoriteBorder } from "react-icons/md";
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

const ApplyCard = () => {
  return (
    <div className="flex flex-col items-center justify-between f gap-5">
      <Button>Apply now</Button>
      <Button className="flex items-center gap-2">
        Save Project
        <MdFavoriteBorder />
      </Button>
      <span></span>
    </div>
  );
};

export default ApplyCard;
