import React from "react";
import "./footer.css";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter backgroundColor="dark" className="text-center text-lg-left">
      <div className="footer">
        <div className="upper">
          <div className="links">
          <li>
                <a href="/kayttoehdot">Käyttöehdot</a>
              </li>
              <li>
                <a href="/tietosuojaseloste">Tietosuojaseloste</a>
              </li>
              <li>
                <a href="/yhteystiedot">Yhteystiedot</a>
              </li>
          </div>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: "grey" }}>
          &copy; {new Date().getFullYear()}{" "}
          <p>
            Yes Skiwax Finland
          </p>
        </div>
        <div className="bottom">
          <h3 className="rpsolutions">
            Site created by<a href="https://rpsolutions.tech/">RP-Solutions</a>
          </h3>
        </div>
      </div>
    </MDBFooter>
  );
};

export default Footer;
