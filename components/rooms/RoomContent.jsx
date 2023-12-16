"use client";

import { useParams, useSearchParams } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { IoStatsChart } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import Link from "next/link";
import { FaHashtag } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import IconProvider from "../ui/IconProvider";
import { Button } from "../ui/button";
const RoomContent = () => {
  const searchParams = useSearchParams();
  const { single_product_owner } = useParams();
  const activeSection = searchParams.get("active_section");
  // some testing info about the current room
  const roomInfo = {
    roomId: "room1",
    roomName: "Carnaval Project",
    icon: "/room_1.png",
    logo: "",
    //   some testing tasks
    tasks: [
      {
        taskId: "task1",
        taskName: "task1",
        taskDescription: "task1",
        taskStatus: "task1",
        taskPriority: "task1",
        taskAssignee: "task1",
      },
      {
        taskId: "task2",
        taskName: "task2",
        taskDescription: "task2",
        taskStatus: "task2",
        taskPriority: "task2",
        taskAssignee: "task2",
      },
    ],
    //   some testing members
    members: [
      {
        memberId: "member1",
        memberName: "member1",
        memberRole: "member1",
        memberAvatar: "member1",
      },
      {
        memberId: "member2",
        memberName: "member2",
        memberRole: "member2",
        memberAvatar: "member2",
      },
    ],
  };
  // the tasks
  const sections = [
    {
      sectionId: "tasks",
      sectionName: "Tasks",
      icon: <FaRegCheckCircle size={20} />,
    },
    {
      sectionId: "members",
      sectionName: "Members",
      icon: <HiOutlineUsers size={20} />,
    },
    {
      sectionId: "statistics",
      sectionName: "Statistics",
      icon: <IoStatsChart size={20} />,
      additionalIcon: <CiLock size={20} />,
    },
  ];
  const channels = [
    {
      channelId: "channel1",
      channelName: "Backend",
      channelDescription: "channel1",
      channelMembers: [
        {
          memberId: "member1",
          memberName: "member1",
          memberRole: "member1",
          memberAvatar: "member1",
        },
        {
          memberId: "member2",
          memberName: "member2",
          memberRole: "member2",
          memberAvatar: "member2",
        },
      ],
    },
    {
      channelId: "channel1",
      channelName: "Ui Ux Design",
      channelDescription: "channel1",
      channelMembers: [
        {
          memberId: "member1",
          memberName: "member1",
          memberRole: "member1",
          memberAvatar: "member1",
        },
        {
          memberId: "member2",
          memberName: "member2",
          memberRole: "member2",
          memberAvatar: "member2",
        },
      ],
    },
    {
      channelId: "channel2",
      channelName: "Frontend",
      channelDescription: "channel2",
      channelMembers: [
        {
          memberId: "member1",
          memberName: "member1",
          memberRole: "member1",
          memberAvatar: "member1",
        },
        {
          memberId: "member2",
          memberName: "member2",
          memberRole: "member2",
          memberAvatar: "member2",
        },
      ],
    },
  ];

  return (
    <div className=" flex flex-1 min-h-full  bg-white rounded-xl    ">
      {/* first small column */}
      <div className="small-column w-2/12 pb-7  flex items-center  flex-col gap-5 ">
        {/* this is the left section */}
        <div className="first-section py-[30px]  border-grey200 border-b-solid border-b-2  text-grey700 w-full flex items-center px-5 gap-5  ">
          <h5 className="  font-bold  ">{roomInfo?.roomName}</h5>
          <IoIosArrowDown size={20} />
        </div>
        {/* this is the second section */}
        <ul className=" second-section pb-7 border-b-solid border-grey200 border-b-2 w-full flex flex-col gap-4   list-none ">
          {sections.map((section, index) => {
            const link = `/productOwners/${single_product_owner}/rooms?active_room=${roomInfo?.roomId}&active_section=${section?.sectionId}`;
            return (
              <li key={index}>
                <Link
                  href={link}
                  className={`${activeSection.toLowerCase() == section?.sectionId.toLowerCase() ? " text-indigo600 " : " text-grey700 "} font-medium     flex items-center gap-2  py-2 cursor-pointer hover:text-indigo600 duration-300  `}
                >
                  <span className={` w-[6px] min-w-[3px] h-[25px] min-h-[30px] bg-indigo600 ${activeSection.toLowerCase() == section?.sectionName?.toLowerCase() ? "opacity-100" : "opacity-0"} duration-300  rounded-r-sm  `}></span>
                  {section?.icon}
                  <span>{section?.sectionName}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        {/* the channels section */}
        <div className="channels-container w-full flex flex-col gap-5 ">
          <div className="title-container text-grey600  w-full px-5 flex items-center justify-between ">
            <h5>Channels</h5>
            <button className="  ">
              <IconProvider>
                <IoMdAdd size={20} />
              </IconProvider>
            </button>
          </div>
          <ul className="flex  flex-col px-5  w-full list-none   gap-5">
            {channels.map((channel, index) => {
              return (
                <li key={index}>
                  <Link
                    className="flex-1 flex items-center gap-2 text-grey700 duration-300 hover:text-grey600  text-sm  w-full "
                    href={""}
                  >
                    <FaHashtag size={20} />
                    <h5 className="font-bold ">{channel?.channelName}</h5>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* this is the big column */}
      <div className="big-column  border-l-solid border-grey200 border-l-2  flex-1 pb-7  flex items-center  flex-col gap-5 ">
        {/* this is the top section */}
        <div className="first-section py-5  border-grey200 border-b-solid border-b-2  text-grey700 w-full flex items-center px-5 gap-5  justify-between ">
          {/* this is the left-section */}
          <div className="left-side flex items-center gap-2 ">
            <span className=" font-semibold text-grey400    ">Personal Projects</span>
            <span className="  font-semibold text-grey400    "> /</span>
            <span className="  text-grey600 font-semibold  ">Tasks</span>
          </div>
          {/* this is the right section */}
          <div className="buttons-container flex items-center gap-5 ">
            <Button variant={"outline"}>Share</Button>
            <Button className="flex items-center gap-5">
              <span>Add Task</span>
              <IoMdAdd size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RoomContent;
