import React from "react";
import Footer from "../components/Footer"
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Map from "../components/Map";

export default function Home() {
  return (
    <>
      <Hero hero="timesHero">
        <Banner
          title="Opening Hours" subtitle1="Monday - Friday: 10am - 6pm" subtitle2="Saturday & Sunday: 9am - 6pm"
        >
      </Banner>
          </Hero>
          <Map />
      <Footer />
      </>
  );
};