import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
  }
  h4 {
    width: 200px;
    text-align: center;
  }
  img {
    width: 200px;
    margin: 10px;
  }
`;

const ShowsContainer = (props) => {
  return (
    <Container>
      {props.shows &&
        props.shows.map((show) => (
          <Link
            to={`/shows/${show._id}`}
            //   style={{ textDecoration: "none" }}
          >
            <div>
              <h4>{show.title}</h4>
              <img src={show.image} />
            </div>
          </Link>
        ))}
    </Container>
  );
};

ShowsContainer.propTypes = {};

export default ShowsContainer;
