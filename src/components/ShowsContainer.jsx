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
  div {
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
const showsArray = [
  { id: 1, description: "Show number 1", img: "/circus-1.jpg" },
  {
    id: 2,
    description: "Second Show with a long description",
    img: "/circus-2.jpg",
  },
  { id: 3, description: "here we go", img: "/circus-3.jpg" },
  { id: 4, description: "show number 4", img: "/circus-1.jpg" },
];

const ShowsContainer = (props) => {
  return (
    <Container>
      {showsArray.map((show) => (
        <Link
          to={`/shows/${show.id}`}
          //   style={{ textDecoration: "none" }}
        >
          <div>
            <h4>{show.description}</h4>
            <img src={show.img} />
          </div>
        </Link>
      ))}
    </Container>
  );
};

ShowsContainer.propTypes = {};

export default ShowsContainer;
