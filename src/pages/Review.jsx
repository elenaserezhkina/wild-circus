import React from "react";
import PropTypes from "prop-types";
import { Header, Form, ButtonsContainer, NavigationButton } from "./style";
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
  const [value, setValue] = React.useState("");
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleAgeChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <Header>Your review is important!</Header>
      <Form>
        <FormControl variant="outlined" fullWidth>
          <Select value={age} onChange={handleAgeChange} autoWidth>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Click to select a show</FormHelperText>
        </FormControl>
        <br />
        <TextField
          required
          label="Type here"
          variant="outlined"
          style={{ width: "100%" }}
          value={value}
          onChange={handleChange}
          multiline
          rows={4}
        />
        <ButtonsContainer>
          <NavigationButton>Submit review</NavigationButton>
        </ButtonsContainer>
      </Form>
    </div>
  );
};

Review.propTypes = {};

export default Review;
