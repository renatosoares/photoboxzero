import React from "react";

import "./styles.scss";

import Header from "components/organisms/Header";
// import Footer from "components/organisms/Footer";
import Hero from "components/atoms/Hero";
import Collection from "components/molecules/Collection";
import publicationProps from "models/types/publicationProps";
// import Marketing from "components/organisms/Marketing";
// import Emphasis from "components/organisms/Emphasis";
// import BoxEmphasis from "components/organisms/BoxEmphasis";

type HomeProps = {
  publications: publicationProps[];
};

const Home = ({ publications }: HomeProps) => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Collection publications={publications} />
        {/* <Emphasis /> */}
        {/* <BoxEmphasis /> */}
        {/* <hr className="my-5" /> */}
        {/* <Marketing /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
