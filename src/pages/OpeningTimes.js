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
          subtitle1="Monday - Friday: 10am - 8pm"
          subtitle2="Saturday & Sunday: 10am - 7pm"
          subtitle2="Last baskets 45 minutes before closing"
        >
        </Banner>
      </Hero>
      <a href="tel:01332661414">
                            <button className="callButton">
                                Call us: 01332 661414
                            </button>
                        </a>
          <Map />
      <Footer />
      </>
  );
};
