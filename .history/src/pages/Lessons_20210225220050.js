import React from "react";
import Footer from "../components/Footer"
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import ProLessons from "../components/ProLessons.js";

export default function Home() {
  return (
    <>
      {/* <Hero hero="lessonHero">
      <Banner title="Lessons with a pro">
      </Banner>
      </Hero> */}
      <ProLessons />
      <Footer />
      </>
  );
};