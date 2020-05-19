import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Color from "../utils/Colors";

const Container = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 15px;
  background-color: ${Color.mainDark};
  color: ${Color.mainWhite};
  a {
    color: ${Color.mainYellow};
  }
`;

const Footer = (props) => {
  return (
    <Container>
      Icons made by{" "}
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
        Freepik
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        {" "}
        www.flaticon.com
      </a>
      <br />
      Photos by: Becky Phan, Cyrus Crossan, Conor Samuel, emy on Unsplash
    </Container>
  );
};

Footer.propTypes = {};

export default Footer;
