"use  client";
import { CiFilter } from "react-icons/ci";
import { Button } from "../ui/button";
import { IoIosSearch } from "react-icons/io";
const UserSearchInput = () => {
  return (
    <div className=" w-full lg:w-3/4    ">
      {/* this is the left side */}
      <div className="border-solid border-[1px] flex items-center justify-between border-grey400 rounded-md      ">
        <div className="input_container flex  px-2 justify-between w-full ">
          <input
            type="text"
            className=" w-full outline-none"
            placeholder="Search for Jobs, Projects types...etc"
          />
          {/* this is the filter button */}
          <button className="   border-solid border-[1px] duration-300 text-grey400 hover:text-grey600 flex items-center gap-1  hover:border-grey600  border-grey400 rounded-md py-1 px-4   ">
            <span className="  ">Filter</span>
            <CiFilter size={20} />
          </button>
        </div>
        {/* this is the button */}
        <Button className={"rounded-tl-none rounded-bl-none py-6 "}>
          <IoIosSearch size={30} />
        </Button>
      </div>
    </div>
  );
};
export default UserSearchInput;
