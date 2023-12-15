import React from "react";

const Role = () => {
  return (
    <div className="mt-10">
      <p className="text-gray-700 font-[16px] font-semibold">
        Front-end Developer
      </p>
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
        <p className="text-gray-700 font-[16px] font-bold ">Skills : </p>
        <span className="text-gra">
          HTML, CSS, js(react), Material UI, Tailwind CSS, Responsive
          Design:Mobile-first approach
        </span>
      </div>
    </div>
  );
};

export default Role;
