import React from "react";
import MainServices from "../components/MainServices"; 
import Footer from "../components/Footer"
import Hero from "../components/Hero";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <>
      <Hero hero="servicesHero">
      <Banner title="A Fully stocked pro shop">
      </Banner>
      </Hero>
      <Footer />
      </>
  );
};
