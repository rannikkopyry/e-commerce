import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Button from "@mui/material/Button";
import FilterProduct from "../FilterProduct/FilterProduct";
import { styled } from "@mui/material/styles";
import logo from "../../assets/yesskiwax.png";
import useStyles from "./styles";
import MobileMenu from "../Menu/MobileMenu";

const PrimarySearchAppBar = ({
  totalItems,
  categories,
  menuOpen,
  setMenuOpen,
  addProduct,
}) => {
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
      </nav>
    </>
  );
};

export default PrimarySearchAppBar;
