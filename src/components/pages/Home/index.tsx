import React from "react";

import "./styles.scss";

import Header from "components/organisms/Header";
// import Footer from "components/organisms/Footer";
import Hero from "components/atoms/Hero";
import Collection from "components/molecules/Collection";
import PostProps from "models/types/PostProps";
// import Marketing from "components/organisms/Marketing";
// import Emphasis from "components/organisms/Emphasis";
// import BoxEmphasis from "components/organisms/BoxEmphasis";

type HomeProps = {
  posts: PostProps[];
};

const Home = ({ posts }: HomeProps) => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Collection posts={posts} />
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
