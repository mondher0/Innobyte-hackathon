import { Button } from "@/components/ui/button";
import Header from "@/components/ui/Header";
import HeroSection from "@/components/user/HeroSection";
import OffersContainer from "@/components/user/OffersContainer";

export const metadata = {
  title: "Acceuil",
  description: "mosaic page d'acceuil",
};
export default function Home() {
  return (
    <>
      <HeroSection />
      <OffersContainer />
    </>
  );
}
