import React from "react";
import PropTypes from "prop-types";
import { Header } from "./style";
import ShowsContainer from "../components/ShowsContainer";

const Shows = (props) => {
  return (
    <div>
      <Header>Our Shows</Header>
      <ShowsContainer></ShowsContainer>
    </div>
  );
};

Shows.propTypes = {};

export default Shows;
