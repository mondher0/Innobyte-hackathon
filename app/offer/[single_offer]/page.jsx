import ApplyCard from "@/components/offers/ApplyCard";
import OfferDescription from "@/components/offers/OfferDescription";
import Role from "@/components/offers/Role";
import Header from "@/components/ui/Header";

const SingleOfferPage = ({ params }) => {
  // this is an offet description just for testing
  const offer = {
    description: " In today's digital landscape, a captivating and user-friendly online platform is essential for any hotel's success. This project aims to create a bespoke platform tailored to your specific hotel's needs, providing guests with an exceptional experience from booking to checkout.",
    title: "Front-end Developer",
    postingDate: "Posted 2 days ago",
  };
  // some roles for testing
  const roles = [
    {
      roleName: "Front-end Developer",
      roles: ["Develop new user-facing features", "Build reusable code and libraries for future use", "Ensure the technical feasibility of UI/UX designs", "Optimize application for maximum speed and scalability", "Assure that all user input is validated before submitting to back-end", "Collaborate with other team members and stakeholders"],
      skills: ["React", "Javascript", "HTML", "CSS"],
    },
    {
      roleName: "Front-end Developer",
      roles: ["Develop new user-facing features", "Build reusable code and libraries for future use", "Ensure the technical feasibility of UI/UX designs", "Optimize application for maximum speed and scalability", "Assure that all user input is validated before submitting to back-end", "Collaborate with other team members and stakeholders"],
      skills: ["React", "Javascript", "HTML", "CSS"],
    },
    {
      roleName: "Front-end Developer",
      roles: ["Develop new user-facing features", "Build reusable code and libraries for future use", "Ensure the technical feasibility of UI/UX designs", "Optimize application for maximum speed and scalability", "Assure that all user input is validated before submitting to back-end", "Collaborate with other team members and stakeholders"],
      skills: ["React", "Javascript", "HTML", "CSS"],
    },
  ];
  return (
    <>
      <Header />
      <div className="flex   mt-8">
        <div className="flex-col w-3/4  gap-10 border-solid border-grey200 border-2  rounded-sm ">
          <OfferDescription
            description={offer?.description}
            title={offer?.title}
            postingDate={offer?.postingDate}
          />
          {roles?.map((role, index) => (
            <Role
              key={index}
              roles={role?.roles}
              title={role?.roleName}
              isLast={index === roles.length - 1}
              skills={role?.skills}
            />
          ))}
        </div>
        <ApplyCard />
      </div>
    </>
  );
};

export default SingleOfferPage;
