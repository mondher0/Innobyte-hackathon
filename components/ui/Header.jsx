"use client";
import Image from "next/image";
import VersionBadge from "./VersionBage";
import { MdOutlineNotificationsNone } from "react-icons/md";
import Link from "next/link";
import IconProvider from "./IconProvider";
const Header = () => {
  const links = [
    {
      text: "Collaboration Space",
      link: "",
    },
    {
      text: "Support",
      link: "",
    },
  ];
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
        <ul className="links flex items-center gap-10  ">
          {links.map((link, index) => (
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
      <div className="right-section">
        <Link href={""}>
          <IconProvider>
            <MdOutlineNotificationsNone size={25} />
          </IconProvider>
        </Link>
      </div>
    </header>
  );
};
export default Header;
