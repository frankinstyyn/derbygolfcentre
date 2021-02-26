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
      <Banner title="Lessons with a pro">
      </Banner>
      </Hero>
      <Footer />
      </>
  );
};