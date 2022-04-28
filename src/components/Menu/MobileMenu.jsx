import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

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

export default function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Etusivu</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Palvelut</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Meistä</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Ota yhteyttä</a>
        </li>
      </ul>
    </div>
  );
}
