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
  width: 200px;
  //   @media only screen and (max-width: 520px) {
  //     transition: all 0.3s linear;
  //   }
`;
const dishes = [1, 2, 3];

const FoodPrev = (props) => {
  return (
    <Container>
      {dishes.map(() => (
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="food image"
              height="140"
              image="./food.jpg"
              title="food image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Container>
  );
};

FoodPrev.propTypes = {};

export default FoodPrev;
