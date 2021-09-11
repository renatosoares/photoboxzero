import React from "react";

import "./styles.scss";

import Header from "components/organisms/Header";
import Footer from "components/organisms/Footer";
import Hero from "components/atoms/Hero";
import Marketing from "components/organisms/Marketing";
import Emphasis from "components/organisms/Emphasis";
import BoxEmphasis from "components/organisms/BoxEmphasis";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Emphasis />
        <BoxEmphasis />
        <hr className="my-5" />
        <Marketing />
      </main>
      <Footer />
    </>
  );
};

export default Home;
