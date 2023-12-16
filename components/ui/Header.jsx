"use client";
import Image from "next/image";
import VersionBadge from "./VersionBage";
import { MdOutlineNotificationsNone } from "react-icons/md";
import Link from "next/link";
import IconProvider from "./IconProvider";

import AccountDropDown from "../user/AccountDropDown";
import { usePathname } from "next/navigation";
const Header = () => {
  const loggedInLinks = [
    {
      text: "Collaboration Space",
      link: "",
    },
    {
      text: "Support",
      link: "",
    },
  ];
  const notLoggedInLinks = [
    {
      text: "For Freelancers",
      link: "",
    },
    {
      text: "Support",
      link: "",
    },
    {
      text: "About",
      link: "",
    },
  ];
  const roomsLinks = [
    {
      text: "Home",
      link: "/rooms",
    },
    {
      text: "Support",
      link: "",
    },
    {
      text: "About",
      link: "",
    },
  ];
  let toShowLinks = "";
  const path = usePathname();
  if (path.includes("/rooms")) {
    toShowLinks = roomsLinks;
  } else if (path == "/") {
    toShowLinks = notLoggedInLinks;
  } else if (path.includes("/users") || path.includes("/offers")) {
    toShowLinks = notLoggedInLinks;
  }
  return (
    <header className=" flex items-center justify-between ">
      {/* this is the right section */}
      <div className="left-section flex items-center justify-between w-fit gap-20  ">
        <div className="logo-container flex items-center gap-5 ">
          <Image
            src={"/Logo.svg"}
            width={130}
            height={30}
          />
          <VersionBadge />
        </div>
        {/* this is the version */}
        <ul className="links flex items-center gap-10 list-none">
          {toShowLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.link}
                className=" text-grey600  text-sm font-medium duration-300 hover:underline "
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/*  this si the right section */}
      <div className="right-section flex items-center gap-6 ">
        {/* if  the user is logged in */}
        <Link href={""}>
          <IconProvider>
            <MdOutlineNotificationsNone size={25} />
          </IconProvider>
        </Link>
        <AccountDropDown />
      </div>
    </header>
  );
};
export default Header;
