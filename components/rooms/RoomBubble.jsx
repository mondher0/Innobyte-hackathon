"use client";
import Link from "next/link";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
const RoomBubble = ({ id, image, name }) => {
  const { single_product_owner } = useParams();
  const roomLink = `/productOwners/${single_product_owner}/rooms?active_room=${id}&active_section=${"tasks"}`;
  const searchParams = useSearchParams();
  const activeRoom = searchParams.get("active_room");

  return (
    <Link
      href={roomLink}
      className=" flex items-center gap-4   "
    >
      {/* this is the left span with the height of the container */}
      <span className={` duration-300   h-[40px] rounded-r-sm  w-[6px] min-w-[6px] bg-indigo600 ${id == activeRoom ? "opacity-100" : "opacity-0"} `}></span>
      <Image
        src={image}
        width={50}
        height={50}
        className=" h-[50px] w-[50px] object-cover rounded-full     "
      />
    </Link>
  );
};
export default RoomBubble;
