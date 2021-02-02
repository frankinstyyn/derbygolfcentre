import React from "react";
import Footer from "../components/Footer"
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import MainWording from "../components/MainWording";

export default function Home() {
  return (
    <>
      <Hero hero="shopHero">
      <Banner title="A Fully stocked pro shop">
      </Banner>
      </Hero>
      <MainWording
        paragraph="At Derby Golf Centre we have many new and used items for sale beating any internet price out there with a friendly and warm welcome to go with it."
        paragraph="We have every brand and stock gloves, coats, shoes, bags and many more, come in and see us."
      >
      </MainWording>
      <Footer />
      </>
  );
};
