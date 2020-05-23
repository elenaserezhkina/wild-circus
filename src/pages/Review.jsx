import React from "react";
import PropTypes from "prop-types";
import {
  Header,
  SmallHeader,
  Form,
  BigForm,
  ButtonsContainer,
  NavigationButton,
  AllReviews,
  UserReview,
  XsHeader,
  AddBorder,
} from "./style";
import styled from "styled-components";
import Color from "../utils/Colors";
import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

const Review = (props) => {
  const [review, setReview] = React.useState("");
  const [submittedReview, setSubmittedReview] = React.useState();
  const [userName, setUserName] = React.useState("");
  const [showName, setShowName] = React.useState("");
  const [shows, setShows] = React.useState([]);
  const [showId, setShowId] = React.useState([]);

  const handleChange = (event) => {
    setReview(event.target.value);
  };
  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };
  const handleShowChange = (event) => {
    setShowName(event.target.value);
    console.log("value", event.target.value);
    let selectedShow = shows.filter(
      (show) => show.title === event.target.value
    );
    setShowId(selectedShow[0]._id);
  };

  // Get information about shows
  React.useEffect(() => {
    fetch("https://wild-circus-backend.herokuapp.com/shows")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.result);
        setShows(res.result);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  // Submit review for the show
  const submitReview = () => {
    fetch(`https://wild-circus-backend.herokuapp.com/shows/${showId}/reviews`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        text: review,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.result);
        setSubmittedReview(data.result);
      });
  };

  // Submit review

  const submitFormReview = () => {
    if (showName.length && userName.length && review.length) {
      submitReview();
      console.log("done");
      setReview("");
      setShowName("");
      setUserName("");
    } else {
      console.log("error");
    }
  };

  // const handleUpload = (event) => {
  //   const reader = new FileReader();
  //   setFileName(event.target.files[0].name);
  //   reader.onloadend = function (event) {
  //     setSelectedFile(reader.result);
  //   };
  //   reader.readAsDataURL(event.target.files[0]);
  // };

  return (
    <div>
      <Header>Your review is important!</Header>
      <Form>
        <FormControl variant="outlined" fullWidth>
          <Select value={showName} onChange={handleShowChange} autoWidth>
            {shows &&
              shows.map((show) => (
                <MenuItem value={show.title}>{show.title}</MenuItem>
              ))}
          </Select>
          <FormHelperText>Click to select a show</FormHelperText>
        </FormControl>
        <br />
        <TextField
          required
          label="Your name"
          variant="outlined"
          style={{ width: "100%" }}
          value={userName}
          onChange={handleNameChange}
        />
        <br />
        <TextField
          required
          label="Type review here"
          variant="outlined"
          style={{ width: "100%" }}
          value={review}
          onChange={handleChange}
          multiline
          rows={4}
        />

        <ButtonsContainer>
          <NavigationButton onClick={submitFormReview}>
            Submit review
          </NavigationButton>
        </ButtonsContainer>
      </Form>
      <SmallHeader>All reviews</SmallHeader>
      <BigForm>
        <UserReview>
          {submittedReview && (
            <>
              <XsHeader>Your review was submitted</XsHeader>
              <AddBorder> {submittedReview.text}</AddBorder>
            </>
          )}
        </UserReview>
        <AllReviews>
          {shows.length &&
            shows.map((show) => (
              <>
                <XsHeader>Reviews for {show.title}</XsHeader>
                <>
                  {show.reviews.map((rev) => (
                    <AddBorder>
                      <p>From {rev.name}</p>
                      <p>{rev.text}</p>
                    </AddBorder>
                  ))}
                </>
              </>
            ))}
        </AllReviews>
      </BigForm>
    </div>
  );
};

Review.propTypes = {};

export default Review;
