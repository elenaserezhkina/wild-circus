import React from "react";
import PropTypes from "prop-types";
import _AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";

const BigLogo = styled.div`
  img {
    width: 100px;
    position: absolute;
    left: 10%;
    top: 0px;
    @media only screen and (max-width: 520px) {
      transition: all 0.3s linear;
      width: 70px;
    }
  }
`;
const AppBar = styled(_AppBar)`
  &.MuiAppBar-root {
    justify-content: flex-end;
    flex-direction: row;
    background-color: #590515;
  }
`;

const Navbar = (props) => {
  return (
    <div>
      <br />
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <BigLogo>
        <img src="./Logo.svg" />
      </BigLogo>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
