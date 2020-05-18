import React from "react";
import PropTypes from "prop-types";
import _Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Color from "../../utils/Colors";

const Container = styled.div`
  margin: 0 auto;
  width: 60%;
  max-width: 500px;
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
    background-color: ${Color.mainYellow};
    border-radius: 40px;
    color: ${Color.mainDark};
  }
`;
const reviews = [1, 2, 3];

const ReviewPrev = (props) => {
  return (
    <Container>
      <Card>
        {reviews.map(() => (
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Mia
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                The show was amazing! I would definitely recommend
              </Typography>
            </CardContent>
          </CardActionArea>
        ))}
      </Card>
    </Container>
  );
};

ReviewPrev.propTypes = {};

export default ReviewPrev;
