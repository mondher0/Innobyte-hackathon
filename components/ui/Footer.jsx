"use client";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import Link from "next/link";
import IconProvider from "./IconProvider";
const Footer = () => {
  const socialLinks = [
    {
      name: "facebook",
      link: "https://www.facebook.com/",
      icon: <FaFacebookSquare size={25} />,
    },
    {
      name: "twitter",
      link: "https://www.twitter.com/",
      icon: <FaSquareTwitter size={25} />,
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/",
      icon: <FaLinkedin size={25} />,
    },
  ];
  return (
    <div className="min-w-screen border-t-solid border-t-grey400 bg-white bg- py-5">
      <div className="Container flex flex-col gap-5 ">
        <div className="top-section w-full flex items-center justify-between  ">
          <Image
            src={"/logo.svg"}
            width={130}
            height={40}
          />
          {/* account links */}
          <div className="links-container flex items-center gap-5 ">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.link}
                className="hover:text-blue-500"
              >
                <IconProvider>{link.icon}</IconProvider>
              </a>
            ))}
          </div>
        </div>
        <div className="bottom-section">
          <p className=" w-full text-center text-grey600 text-sm  font-medium ">All Copyrights reserved</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
