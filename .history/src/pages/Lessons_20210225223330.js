import React from "react";
import Footer from "../components/Footer"
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import ProLessons from "../components/ProLessons";

export default function Home() {
  return (
    <>
      <ProLessons />
      <Hero hero="lessonHero">
        <Banner>
          <button>Book a Lesson Now</button>
      </Banner>
      </Hero>
      <Footer />
      </>
  );
};