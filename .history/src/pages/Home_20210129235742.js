import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services"
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
    {/* <Hero hero="defaultHero" > */}
      <Banner title="Welcome to Derby Golf Centre">
      </Banner>
      {/* </Hero> */}
      <Services />
      <Footer />
      </>
  );
}
