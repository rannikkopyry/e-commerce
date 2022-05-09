import React from "react";
import "./menu.scss";

export default function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="/">Etusivu</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="/luistovoiteet">Luistovoiteet</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="/pitovoiteet">Pitovoiteet</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="/rotokit">Roto Kit</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="/muut">Muut tuotteet</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="/yhteystiedot">Yhteystiedot</a>
        </li>
      </ul>
    </div>
  );
}