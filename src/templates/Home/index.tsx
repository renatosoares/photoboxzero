import React from "react";

import Hero from "components/Hero";
import Collection from "components/Collection";
import PublicationProps from "types/publication-props";
// import Marketing from "components/Marketing";
// import Emphasis from "components/Emphasis";
// import BoxEmphasis from "components/BoxEmphasis";

import styles from "./Home.module.scss";

type HomeProps = {
  publications: PublicationProps[];
};

const Home = ({ publications }: HomeProps) => {
  return (
    <>
      <Hero />
      <Collection publications={publications} />
      {/* <Emphasis /> */}
      {/* <BoxEmphasis /> */}
      {/* <hr className="my-5" /> */}
      {/* <Marketing /> */}
    </>
  );
};

export default Home;
