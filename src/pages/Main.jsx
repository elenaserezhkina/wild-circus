import React from "react";
import PropTypes from "prop-types";
import { Header } from "./style";
import CarouselBig from "../components/CarouselBig";

const Main = (props) => {
  return (
    <div>
      <Header>Welcome to the Wild Circus </Header>
      <CarouselBig />
    </div>
  );
};

Main.propTypes = {};

export default Main;
