"use client";
import { getPages } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { FiChevronsLeft } from "react-icons/fi";
import { FiChevronsRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
const PaginationSinglePage = ({ setPage, page, currentPage }) => {
  return (
    <li>
      <button
        onClick={() => {
          setPage(page);
        }}
        className={` ${currentPage == page ? " bg-indigo50 text-indigo600 border-solid border-[1px] border-indigo600 " : "font-bold  duration-300 hover:text-brand-primary"}  text-three w-9 h-9 rounded-md `}
      >
        {page}
      </button>
    </li>
  );
};
const PaginationContainer = ({ setPage, nextPage, prevPage, totalPages, currentPage }) => {
  if (totalPages <= 1) return <></>;
  return (
    <div className=" my-10 w-full flex justify-center items-center ">
      <div className="pagination flex gap-3 items-center ">
        {/* those are the prev buttons */}
        <div className="prev-buttons flex items-center gap-3 ">
          {/* this is the start button */}

          <button
            disabled={currentPage == totalPages}
            onClick={() => {
              prevPage();
            }}
            className=" flex items-center gap-2 duration-300 text-grey600 hover:text-grey400 font-semibold    "
          >
            <FiChevronLeft
              size={15}
              className=" -mb-1 "
            />
            <span className="  ">Précédent</span>
          </button>
        </div>
        {/* those are the pages for the big screens */}
        <ul className="big-screens-pages list-none hidden md:flex gap-3 ">
          {getPages(currentPage, totalPages, 7)?.map((page, index) => {
            return (
              <PaginationSinglePage
                key={index}
                page={page}
                currentPage={currentPage}
                setPage={setPage}
              />
            );
          })}
        </ul>
        {/* those are for the small screens */}
        <ul className="small-screens-pages flex md:hidden gap-3 ">
          {getPages(currentPage, totalPages, 3).map((page, index) => {
            return (
              <PaginationSinglePage
                key={index}
                page={page}
                currentPage={currentPage}
                setPage={setPage}
              />
            );
          })}
        </ul>
        {/* those are the next buttons */}
        <div className="prev-buttons flex items-center gap-3 ">
          {/* this is the start button */}

          <button
            disabled={currentPage == totalPages}
            onClick={() => {
              nextPage();
            }}
            className=" flex items-center gap-2 duration-300 text-grey600 hover:text-grey400 font-semibold    "
          >
            <span className="  ">Suivant</span>
            <FiChevronRight
              size={15}
              className=" -mb-1 "
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default PaginationContainer;
