import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Map from "../components/Map";
import GolfServices from "../components/GolfServices";

export default function Home() {
  return (
    <>
      <Hero hero="servicesHero">
      <Banner title="Welcome to the Derby Golf Centre">
      </Banner>
      </Hero>
      <GolfServices />
      <Map />
      <Footer />
      </>
  );
}
