import React from "react";
import styled, { css } from "styled-components";
import styles from "./Footer.module.scss";

const FooterWrap = styled.footer`
  ${(props) => css``}
`;

const Footer = () => {
  return (
    <FooterWrap
      className={`footer mt-auto py-3 w-100 fixed-bottom ${styles.footer}`}
    >
      <div className="container">
        <span className="text-muted">Place sticky footer content here.</span>
      </div>
    </FooterWrap>
  );
};

export default Footer;
