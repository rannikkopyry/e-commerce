import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import PropTypes from 'prop-types';
import Slide from '@mui/material/Slide';
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Button from "@mui/material/Button";
import FilterProduct from "../FilterProduct/FilterProduct";
import { styled } from "@mui/material/styles";
import logo from "../../assets/Rnk-sport.fi.png";
import useStyles from "./styles";
import useScrollTrigger from '@mui/material/useScrollTrigger';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


function PrimarySearchAppBar({
  totalItems,
  categories,
  menuOpen,
  setMenuOpen,
  addProduct,
  props
}) {
  const [searchResult, setSearchResult] = useState("");
  const classes = useStyles();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

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
      <nav className={"topbar " + (menuOpen && "active")}>
      <HideOnScroll {...props}>
        <AppBar position="sticky" className={classes.appBar} color="inherit">
            <Toolbar id="topbar-anchor">
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
                  height="37px"
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
              <div className={classes.menuitem}>
                <BootstrapButton
                  component={Link}
                  id="basic-button"
                  to="/rotokit"
                >
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
              <div className={classes.hamburger}>
                <MenuIcon onClick={()=>setMenuOpen(!menuOpen)} className="btn" />
              </div>

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
        </HideOnScroll>
      </nav>
    </>
  );
};

export default PrimarySearchAppBar;
