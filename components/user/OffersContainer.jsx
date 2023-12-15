import SingleOfferCard from "../offers/SingleOfferCard";

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
  return (
    <div className=" flex  justify-between flex-wrap gap-7 pb-10 pt-24 w-full    ">
      {offers.map((offer, index) => (
        <SingleOfferCard
          key={index}
          {...offer}
        />
      ))}
    </div>
  );
};
export default OffersContainer;
