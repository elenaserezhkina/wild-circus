import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import _Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Color from "../../utils/Colors";
import { ButtonsContainer, NavigationButton } from "../../pages/style";

const Container = styled.div`
  margin: 0 auto;
  width: 70%;
  max-width: 650px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: ${Color.mainDark};
  @media only screen and (max-width: 747px) {
    transition: all 0.3s linear;
    width: 90%;
  }
`;
const Card = styled(_Card)`
  margin: 10px;
  width: 100%;
  &.MuiPaper-root {
    // background-color: ${Color.mainYellow};
    border-radius: 40px;
    color: ${Color.mainDark};
  }
`;

const ReviewPrev = (props) => {
  return (
    <Container>
      <Card>
        {props.reviews &&
          props.reviews.map((review) => (
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {review.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {review.text}
                </Typography>
              </CardContent>
            </CardActionArea>
          ))}
      </Card>

      <ButtonsContainer>
        <Link to="/review">
          <NavigationButton>more reviews</NavigationButton>
        </Link>
      </ButtonsContainer>
    </Container>
  );
};

ReviewPrev.propTypes = {};

export default ReviewPrev;
