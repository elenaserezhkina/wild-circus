import React from "react";
import PropTypes from "prop-types";
import { Header } from "./style";
import ShowsContainer from "../components/ShowsContainer";

const Shows = (props) => {
  const [shows, setShows] = React.useState([]);

  React.useEffect(() => {
    fetch("https://wild-circus-backend.herokuapp.com/shows")
      .then((res) => res.json())
      .then((res) => {
        setShows(res.result);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);
  return (
    <div>
      <Header>Our Shows</Header>
      <ShowsContainer shows={shows}></ShowsContainer>
    </div>
  );
};

Shows.propTypes = {};

export default Shows;
