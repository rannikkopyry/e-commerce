import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "./styles.css";

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Etusivu
      </a>
      <a className="menu-item" href="/luistovoiteet">
        Luistovoiteet
      </a>
      <a className="menu-item" href="/pitovoiteet">
        Pitovoiteet
      </a>
      <a className="menu-item" href="/rotokit">
        Roto Kit
      </a>
      <a className="menu-item" href="/muut">
        Muut tuotteet
      </a>
      <a className="menu-item" href="/yhteystiedot">
        Yhteystiedot
      </a>
    </Menu>
  );
};