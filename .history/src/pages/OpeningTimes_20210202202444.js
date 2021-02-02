import React from "react";
import Footer from "../components/Footer"
import Hero from "../components/Hero";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <>
      <Hero hero="timesHero">
              <Banner title="Opening Hours">
                  <div><h2>10:00 - 12:00</h2></div>
      </Banner>
      </Hero>
      <Footer />
      </>
  );
};