import React from "react";
import Footer from "../components/Footer"
import Hero from "../components/Hero";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <>
      <Hero hero="shopHero">
      <Banner title="A Fully stocked pro shop">
      </Banner>
      </Hero>
      
      <Footer />
      </>
  );
};
