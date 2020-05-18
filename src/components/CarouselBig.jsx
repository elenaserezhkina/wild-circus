import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  width: 60%;
  @media only screen and (max-width: 520px) {
    transition: all 0.3s linear;
    width: 80%;
  }
  //   TODO
  &.carousel .slide .legend {
    background: none !important;
  }
  .thumbs {
    display: flex;
    justify-content: space-between;
  }
`;

const CarouselBig = () => {
  return (
    <Container>
      <Carousel>
        <div>
          <img src="circus-1.jpg" />
          <p className="legend">World of magic animals</p>
        </div>
        <div>
          <img src="circus-2.jpg" />
          <p className="legend">Corona Time</p>
        </div>
        <div>
          <img src="circus-3.jpg" />
          <p className="legend">Set it on fire!</p>
        </div>
      </Carousel>
    </Container>
  );
};

export default CarouselBig;
