"use client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
const AccountDropDown = ({ user_image }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex outline-none  items-center gap-2 ">
          <Image
            src={"/my_image.jpg"}
            width={50}
            height={50}
            alt=""
            className=" rounded-full w-8 h-8 "
          />
          <IoIosArrowDown size={15} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white absolute z-50 -right-9 top-2 ">
        <DropdownMenuLabel>
          <button className=" hover:text-indigo600 duration-300 text-indigo-900 ">Se Déconnecter</button>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountDropDown;
