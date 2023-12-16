"use client";
import Image from "next/image";
import VersionBadge from "./VersionBage";
import { MdOutlineNotificationsNone } from "react-icons/md";
import Link from "next/link";
import IconProvider from "./IconProvider";

import AccountDropDown from "../user/AccountDropDown";

import { useParams, usePathname, useRouter } from "next/navigation";
import { Button } from "./button";

const Header = () => {
  const loggedInLinks = [
    {
      text: "Collaboration Space",
      link: "/productOwners/test/rooms?active_room=room1&active_section=statistics",
    },
    {
      text: "Support",
      link: "",
    },
    {
      text: "For Freelancers",
      link: "",
    },
    {
      text: "About",
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
  } else if (path.includes("/users") || path.includes("/offers")) {
    toShowLinks = loggedInLinks;
  } else {
    toShowLinks = notLoggedInLinks;
  }

  const pathName = usePathname();
  console.log(pathName);
  const router = useRouter();

  return (
    <header className=" flex items-center justify-between ">
      {/* this is the right section */}
      <div className="left-section flex items-center justify-between w-fit gap-20  ">
        <div className="logo-container flex items-center gap-5 ">
          <Image
            src={"/Logo.svg"}
            width={130}
            height={30}
            onClick={() => router.push("/")}
            className="hover:cursor-pointer"
          />
          <VersionBadge />
        </div>
        {/* this is the version */}
        <ul className="links flex items-center gap-10 list-none">
          {toShowLinks.map((link, index) => (
            <li key={index}>{pathName === "/" && link.text === "Collaboration Space" ? null : <Link href={link.link}>{link.text}</Link>}</li>
          ))}
        </ul>
      </div>
      {/*  this si the right section */}
      {pathName === "/" || pathName === "/login" || pathName === "/register" ? (
        <div className="flex items-center gap-3">
          <Button>
            <Link href={"/login"}>Login</Link>
          </Button>
          <Button variant="soft">
            <Link href={"/register"}>Register</Link>
          </Button>
        </div>
      ) : (
        <div className="right-section flex items-center gap-6 ">
          {/* if  the user is logged in */}
          <Link href={""}>
            <IconProvider>
              <MdOutlineNotificationsNone size={25} />
            </IconProvider>
          </Link>
          <AccountDropDown />
        </div>
      )}
    </header>
  );
};
export default Header;
