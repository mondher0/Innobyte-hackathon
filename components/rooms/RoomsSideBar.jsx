import { Button } from "../ui/button";
import RoomBubble from "./RoomBubble";
import { IoMdAdd } from "react-icons/io";

const RoomsSideBar = ({ rooms }) => {
  return (
    <aside>
      {/* this is the rooms list */}
      <ul className="rooms-list list-none  flex flex-col justify-center items-end gap-4  ">
        {rooms.map((room) => (
          <li
            className=" p-0 "
            key={room?.roomId}
          >
            <RoomBubble
              id={room?.roomId}
              image={room?.icon}
            />
          </li>
        ))}
        {/* this is the add room button */}
        <li>
          <Button
            className={"rounded-full p-1 h-[50px] w-[50px] bg-indigo-100 hover:indigo600 duration-300    "}
            variant={"soft"}
          >
            <IoMdAdd size={20} />
          </Button>
        </li>
      </ul>
    </aside>
  );
};
export default RoomsSideBar;
