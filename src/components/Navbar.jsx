import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import _AppBar from "@material-ui/core/AppBar";
import _Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";
import _Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Color from "../utils/Colors";

const BigLogo = styled.div`
  img {
    width: 100px;
    position: absolute;
    left: 5%;
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
const Toolbar = styled(_Toolbar)`
  &.MuiToolbar-gutters {
    margin-right: 5%;
  }
`;
const Menu = styled(_Menu)`
  &.MuiPaper-root {
    background-color: ${Color.mainYellow};
  }
`;

const Navbar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <br />
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/" onClick={handleClose}>
                Main Page
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/shows" onClick={handleClose}>
                Shows
              </Link>
            </MenuItem>
            {/* <MenuItem onClick={handleClose}>
              <Link to="/tickets" onClick={handleClose}>
                Tickets
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/food" onClick={handleClose}>
                Gastronomy
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/location" onClick={handleClose}>
                Location
              </Link>
            </MenuItem> */}
            <MenuItem onClick={handleClose}>
              <Link to="/review" onClick={handleClose}>
                Review
              </Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <BigLogo>
        <Link to="/" onClick={handleClose}>
          <img src="/Logo.svg" />
        </Link>
      </BigLogo>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
