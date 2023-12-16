import EcoSystemSection from "@/components/home/EcoSystemSection";
import HomeHero from "@/components/home/HomeHero";
import SolutionsSection from "@/components/home/SolutionsSection";
import Work from "@/components/home/Work";
import Header from "@/components/ui/Header";
import HeroSection from "@/components/user/HeroSection";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <EcoSystemSection />
      <SolutionsSection />
      <Work />
    </>
  );
};

export default HomePage;
