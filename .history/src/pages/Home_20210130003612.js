import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services"
import Footer from "../components/Footer";
import NewNav from "../components/NewNav";
import Map from "../components/Map";

export default function Home() {
  return (
    <>
      <Hero hero="servicesHero">
      <Banner title="Welcome to the Derby Golf Centre">
      </Banner>
      </Hero>
      <GolfServices />
      <Map />
      </>
  );
}
