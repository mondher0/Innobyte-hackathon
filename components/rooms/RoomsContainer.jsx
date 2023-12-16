"use client";

import RoomContent from "./RoomContent";
import RoomsSideBar from "./RoomsSideBar";
const RoomsContainer = ({ rooms }) => {
  return (
    <div className=" w-full  bg-grey100 py-10  flex justify-between gap-10 ">
      <RoomsSideBar rooms={rooms} />
      <RoomContent />
    </div>
  );
};
export default RoomsContainer;
