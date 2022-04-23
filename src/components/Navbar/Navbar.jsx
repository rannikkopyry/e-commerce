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
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import FilterProduct from "../FilterProduct/FilterProduct";
import { styled } from "@mui/material/styles";

import logo from "../../assets/yesskiwax.png";
import useStyles from "./styles";

const PrimarySearchAppBar = ({
  totalItems,
  categories,
  menuOpen,
  setMenuOpen,
  items,
  addProduct,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchResult, setSearchResult] = useState("");

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
      <MenuItem>
        <MenuItem>
          <IconButton
            component={Link}
            to="/cart"
            aria-label="Show cart items"
            color="inherit"
          >
            <Badge badgeContent={totalItems} color="secondary">
              <MenuIcon />
            </Badge>
          </IconButton>
          <p>Cart</p>
        </MenuItem>
      </MenuItem>
    </Menu>
  );

  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    lineHeight: 1.5,
    color: "#000000",
    backgroundColor: "#fffff",
    fontFamily: ["font-family: 'Arimo', sans-serif"].join(","),
    "&:hover": {
      boxShadow: "none",
      color: "#C83532",
    },
    "&:active": {
      boxShadow: "0 0 0 0.2rem #C83532",
      borderColor: "#C83532",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem #C83532",
    },
  });

  return (
    <>
      <div className={"topbar " + (menuOpen && "active")}>
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
              <BootstrapButton component={Link} id="basic-button" to="/">
                Etusivu
              </BootstrapButton>
            </div>
            <div className={classes.menuitem}>
              <div className={classes.menuitem}>
                <BootstrapButton
                  component={Link}
                  id="basic-button"
                  to="/luistovoiteet"
                >
                  Luistovoiteet
                </BootstrapButton>
              </div>
            </div>
            <div className={classes.menuitem}>
              <BootstrapButton
                component={Link}
                id="basic-button"
                to="/pitovoiteet"
              >
                Pitovoiteet
              </BootstrapButton>
            </div>
            <div className={classes.menuItem}>
              <BootstrapButton component={Link} id="basic-button" to="/rotokit">
                Roto Kit
              </BootstrapButton>
            </div>
            <div className={classes.menuitem}>
              <BootstrapButton component={Link} id="basic-button" to="/muut">
                Muut tuotteet
              </BootstrapButton>
            </div>
            <div className={classes.menuitem}>
              <BootstrapButton
                component={Link}
                id="basic-button"
                to="/yhteystiedot"
              >
                Yhteystiedot
              </BootstrapButton>
            </div>
            <div className={classes.search}>
              <FilterProduct
                placeholder="Etsi tuotteita"
                categories={categories}
                searchResult={searchResult}
                setSearchResult={setSearchResult}
                addProduct={addProduct}
              />
            </div>
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
      </div>
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;
