import React from "react";

import "./styles.scss";

import Header from "components/organisms/Header";
import Footer from "components/organisms/Footer";
import Hero from "components/atoms/Hero";
import Marketing from "components/organisms/Marketing";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marketing />
      </main>
      <Footer />
    </>
  );
};

export default Home;
