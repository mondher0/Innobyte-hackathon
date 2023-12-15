import ApplyCard from "@/components/offers/ApplyCard";
import OfferDescription from "@/components/offers/OfferDescription";
import Role from "@/components/offers/Role";
import Header from "@/components/ui/Header";

const SingleOfferPage = ({ params }) => {
  return (
    <>
      <Header />
      <div className="flex items-start justify-between mt-8">
        <div className="flex-col w-4/5 p-7 gap-10 border-solid border-#6B7280 border-2 p-5">
          <OfferDescription />
          <Role />
          <Role />
          <Role />
        </div>
        <ApplyCard />
      </div>
    </>
  );
};

export default SingleOfferPage;
