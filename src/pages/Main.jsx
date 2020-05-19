import React from "react";
import PropTypes from "prop-types";
import { Header, SmallHeader } from "./style";
import CarouselBig from "../components/CarouselBig";
import FoodPrev from "../components/mainPreviews/FoodPrev";
import ReviewPrev from "../components/mainPreviews/ReviewPrev";

const Main = (props) => {
  return (
    <div>
      <Header>Welcome to the Wild Circus </Header>
      <CarouselBig />
      <SmallHeader>Gastronomy</SmallHeader>
      <FoodPrev />
      <SmallHeader>Reviews</SmallHeader>
      <ReviewPrev />
    </div>
  );
};

Main.propTypes = {};

export default Main;
