import React from "react";
import Footer from "../components/Footer"
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Map from "../components/Map";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Hero hero="timesHero">
        <Banner
          title="Opening Hours"
          subtitle1="Monday - Friday: 10am - 6pm"
          subtitle2="Saturday & Sunday: 9am - 6pm"
        >
        </Banner>
      </Hero>
      <Link to="tel:01332661414" className="callButton">Call us: 01332 661414</Link>
          <Map />
      <Footer />
      </>
  );
};