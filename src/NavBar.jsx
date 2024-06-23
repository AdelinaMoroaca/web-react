import React from "react";
import "./NavBar.css";

function NavBar({homePageLink, aboutPageLink, contactPageLink}) {
    console.log(homePageLink, aboutPageLink, contactPageLink);
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <a href={homePageLink} className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href={aboutPageLink} className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href={contactPageLink} className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;