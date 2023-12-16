import React from "react";

const Role = ({ roles, title, skills, isLast }) => {
  return (
    <div className={`  flex flex-col gap-5 w-full p-5  ${!isLast && "border-b-solid border-b-grey200 border-b-2"} `}>
      <p className="text-gray-700 font-semibold">Front-end Developer</p>
      <div className="flex flex-col gap-5  ">
        <ul className=" ml-10 ">
          {roles?.map((role, index) => (
            <li
              key={index}
              className="text-gray-700   list-disc"
            >
              {role}
            </li>
          ))}
        </ul>
        <div className="flex items-center ">
          <p className="text-gray-700  font-bold ">Skills :</p>
          <span className="text-gra">{skills?.join(" , ")}</span>
        </div>
      </div>
    </div>
  );
};

export default Role;
