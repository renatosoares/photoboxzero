import React from "react";
import styled, { css } from "styled-components";

import HeroStyles from "./Hero.module.scss";
import "./styles.scss";

const HeroWrap = styled.div`
  --hero-bg: url("//picsum.photos/1366/210");
  ${(props) =>
    css`
      cursor: pointer;
    `}
`;

const Hero = () => {
  return (
    <HeroWrap className={[HeroStyles.hero, "hero"].join(" ")}>
      <div className="container">
        <h1 className="title">
          Find the perfect asset for your next creative project
        </h1>
      </div>
    </HeroWrap>
  );
};

export default Hero;
