import React from "react";

// import "./styles.scss";

import Hero from "components/Hero";
import Collection from "components/Collection";
import PublicationProps from "types/publication-props";
// import Marketing from "components/Marketing";
// import Emphasis from "components/Emphasis";
// import BoxEmphasis from "components/BoxEmphasis";

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
