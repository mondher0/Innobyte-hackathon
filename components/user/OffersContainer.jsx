"use client";
import { useState } from "react";
import SingleOfferCard from "../offers/SingleOfferCard";
import PaginationContainer from "../ui/PaginationContainer";

const OffersContainer = () => {
  // some offers to tst
  const offers = [
    {
      postulationDate: "posted 3  days ago",
      title: "React Developer",
      description: "Creating A website For my Hotel so can manage all the employees of the hotel, also i can manage bookings and all the necessary stuff.",
      positions: ["React Developer", "Nodejs Developer", "UI/UX Designer"],
      businessOwner: "Allaoua Youcef",
      boImage: "https://picsum.photos/200/300",
      isLiked: true,
      isDisliked: false,
      boJob: "CEO at Hotel",
    },
    {
      postulationDate: "posted 3  days ago",
      title: "React Developer",
      description: "Creating A website For my Hotel so can manage all the employees of the hotel, also i can manage bookings and all the necessary stuff.",
      positions: ["React Developer", "Nodejs Developer", "UI/UX Designer"],
      businessOwner: "Allaoua Youcef",
      boImage: "https://picsum.photos/200/300",
      isLiked: true,
      isDisliked: false,
      boJob: "CEO at Hotel",
    },
  ];
  const totalPages = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const setPage = (page) => {
    setCurrentPage(page);
  };
  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  return (
    <section className=" flex flex-col items-center justify-center gap-10 ">
      <div className=" flex  justify-between flex-wrap gap-7 pb-10 pt-24 w-full    ">
        {offers.map((offer, index) => (
          <SingleOfferCard
            key={index}
            {...offer}
          />
        ))}
      </div>
      <PaginationContainer
        currentPage={currentPage}
        totalPages={totalPages}
        setPage={setPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </section>
  );
};
export default OffersContainer;
