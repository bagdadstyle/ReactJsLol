import React from "react";
import "../Styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="container">
      <div className="img-container">
        <img
          className="logo"
          src="https://spng.pinpng.com/pngs/s/435-4358559_group-logo-of-league-of-legends-aces-league.png"
          alt="logo"
        />
      </div>
      <ul className="menu">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Help!</li>
      </ul>
    </div>
  );
}
