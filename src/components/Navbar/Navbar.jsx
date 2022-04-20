import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Search from "../Search/Search";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Popover from "@mui/material/Popover";

import logo from "../../assets/yesskiwax.png";
import useStyles from "./styles";

const PrimarySearchAppBar = ({ totalItems, products }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          component={Link}
          to="/cart"
          aria-label="Show cart items"
          color="inherit"
        >
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Yesskiwax logo"
              height="45px"
              className={classes.image}
            />
          </Typography>
          <div className={classes.menuitem}>
            <Button component={Link} id="basic-button" to="/">
              Etusivu
            </Button>
          </div>
          <div className={classes.menuitem}>
          <div className={classes.menuitem}>
            <Button component={Link} id="basic-button" to="/categories?categoryName=luistovoiteet">
              Luistovoiteet
            </Button>
          </div>
          </div>
          <div className={classes.menuitem}>
            <Button component={Link} id="basic-button" to="/pitovoiteet">
              Pitovoiteet
            </Button>
          </div>
          <div className={classes.menuItem}>
            <Button component={Link} id="basic-button" to="/rotokit">
              Roto Kit
            </Button>
          </div>
          <div className={classes.menuitem}>
            <Button component={Link} id="basic-button" to="/muut">
              Muut tuotteet
            </Button>
          </div>
          <div className={classes.menuitem}>
            <Button component={Link} id="basic-button" to="/yhteystiedot">
              Yhteystiedot
            </Button>
          </div>
          <Search placeholder="Etsi tuotteita" data={products} />

          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;
