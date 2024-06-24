import React from 'react';
import './NavBar.css';
import About from '../About';


function NavBar({homePageLink, aboutPageLink, contactPageLink}) {
    function handleHomeClick(event){
      event.preventDefault();
      window.open('../Home', '_blank');
    }

    function handleAboutClick(event){
      console.log('aboutPageLink');
      event.preventDefault();
      window.open({About}, '_blank');
    }

    function handleContactClick(event){
      console.log('contactPageLink');
      event.preventDefault();
      window.open('../Contact', '_blank');
    }
  return (
    <nav className = 'nav'>
      <ul className = 'nav-list'>
        <li className = 'nav-item'>
          <a onClick = {handleHomeClick} href = {homePageLink} className = 'nav-link'>
            Home
          </a>
        </li>
        <li className = 'nav-item'>
          <a onClick = {handleAboutClick} href = {aboutPageLink} className = 'nav-link'>
            About
          </a>
        </li>
        <li className = 'nav-item'>
          <a onClick={handleContactClick} href={contactPageLink} className = 'nav-link'>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;