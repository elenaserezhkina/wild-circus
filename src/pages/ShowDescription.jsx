import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Color from "../utils/Colors.js";
import { Header, SmallHeader } from "./style";

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 50%;
    margin-right: 10px;
    @media only screen and (max-width: 750px) {
      margin-right: 0px;
      transition: all 0.3s linear;
      width: 100%;
    }
  }
`;
const Description = styled.div`
  width: 50%;
  @media only screen and (max-width: 750px) {
    transition: all 0.3s linear;
    width: 100%;
  }
`;
const SectionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 750px) {
    transition: all 0.3s linear;
    align-items: center;
    flex-direction: column;
  }
`;

const showsArray = [
  { id: 1, title: "Show number 1", img: "/circus-1.jpg" },
  {
    id: 2,
    title: "Second Show with a long title",
    img: "/circus-2.jpg",
  },
  { id: 3, title: "here we go", img: "/circus-3.jpg" },
  { id: 4, title: "show number 4", img: "/circus-1.jpg" },
];

const ShowDescription = (props) => {
  const [show, setShow] = useState("");
  const showId = props.match.params.id;
  useEffect(() => {
    console.log("here is", showId);
    const selectedShow = showsArray.filter((show) => show.id === +showId);
    setShow(selectedShow[0]);
  }, [showId]);
  show && console.log(show);
  return (
    <Container>
      {show && (
        <>
          <Header>{show.title}</Header>
          <SectionContainer>
            <img src={show.img} />
            <Description>
              {" "}
              Here is a description Here is a description Here is a description
              Here is a description Here is a description Here is a
              descriptionHere is a descriptionHere is a description
            </Description>
          </SectionContainer>
        </>
      )}
      <SmallHeader>Our Artists</SmallHeader>
      <SmallHeader>Latest Reviews</SmallHeader>
    </Container>
  );
};

ShowDescription.propTypes = {};

export default ShowDescription;
