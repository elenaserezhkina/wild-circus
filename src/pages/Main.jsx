import React from "react";
import PropTypes from "prop-types";
import { Header, SmallHeader } from "./style";
import CarouselBig from "../components/CarouselBig";
import FoodPrev from "../components/mainPreviews/FoodPrev";
import ReviewPrev from "../components/mainPreviews/ReviewPrev";

const Main = (props) => {
  const [reviews, setReviews] = React.useState("");

  // Get information about shows
  React.useEffect(() => {
    fetch("https://wild-circus-backend.herokuapp.com/shows")
      .then((res) => res.json())
      .then((res) => {
        setReviews(res.result[0].reviews.slice(-3));
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);
  return (
    <div>
      <Header>Welcome to the Wild Circus </Header>
      <CarouselBig />
      <SmallHeader>Gastronomy</SmallHeader>
      <FoodPrev />
      <SmallHeader>Reviews</SmallHeader>
      <ReviewPrev reviews={reviews} />
    </div>
  );
};

Main.propTypes = {};

export default Main;
