import React from "react";
import Footer from "../components/Footer"
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import DrivingRangeInfo from "../components/DrivingRangeInfo";

export default function Home() {
  return (
    <>
      <Hero hero="rangeHero">
      <Banner title="Professional Driving Range">
      </Banner>
      </Hero>
      <DrivingRangeInfo />
      <Footer />
      </>
  );
};