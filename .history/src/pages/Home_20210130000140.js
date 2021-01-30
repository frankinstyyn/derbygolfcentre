import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services"
import Footer from "../components/Footer";
import NewNav from "../components/NewNav";

export default function Home() {
  return (
    <>
      <NewNav />
      <Banner />
      <Services />
      <Footer />
      </>
  );
}
