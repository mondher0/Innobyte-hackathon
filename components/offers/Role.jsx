import React from "react";

const Role = ({ roles, title, skills, isLast }) => {
  return (
    <div className="mt-10">
      <p className="text-gray-700 font-semibold">Front-end Developer</p>
      <ul>
        <li>
          Translate UI/UX designs into functional and responsive web pages
        </li>
        <li>
          Implement front-end features like booking engine, guest portal, and
          interactive elements.
        </li>
        <li>Ensure cross-browser compatibility and optimize performance</li>
      </ul>
      <div className="flex items-center mt-4">
        <p className="text-gray-700  font-bold ">Skills : </p>
        <span className="text-gra">
          HTML, CSS, js(react), Material UI, Tailwind CSS, Responsive
          Design:Mobile-first approach
        </span>
        <div
          className={` p-5 flex flex-col gap-5  ${
            !isLast && "border-b-solid border-b-grey200 border-b-2"
          } `}
        >
          <p className="text-gray-700 font-semibold"></p>
          <ul className=" ml-10 ">
            {roles?.map((role, index) => (
              <li key={index} className="text-gray-700   list-disc">
                {role}
              </li>
            ))}
          </ul>
          <div className="flex items-center mt-4">
            <p className="text-gray-700  font-bold ">Skills :</p>
            <span className="text-gra">{skills?.join(" , ")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Role;
