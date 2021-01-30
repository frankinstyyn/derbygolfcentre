import React from "react";
import Hero from "../components/Hero"
import Banner from "../components/Banner";
import About from "../components/About"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Hero hero="servicesHero">
      <Banner title="Derby Driving Range">
      </Banner>
      </Hero>
        <AboutNigel />
        <Footer />
    </>
  );
};