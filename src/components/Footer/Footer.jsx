import React from "react";
import "./footer.css";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter backgroundColor="dark" className="text-center text-lg-left">
      <div className="footer">
        <div className="upper">
          <div className="links">
            <ul>
              <li>
                <a href="/privacy-policy">Tietosuojaseloste</a>
              </li>
              <li>
                <a href="/terms-and-conditions">Käyttöehdot</a>
              </li>
              <li>
                <a href="/yhteystiedot">Yhteystiedot</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: "grey" }}>
          &copy; {new Date().getFullYear()}{" "}
          <p>
            Yes Skiwax Finland Oy
          </p>
        </div>
        <div className="bottom">
          <h3>
            Site created by <a href="https://rpsolutions.tech/">RP-Solutions</a>
          </h3>
        </div>
      </div>
    </MDBFooter>
  );
};

export default Footer;
