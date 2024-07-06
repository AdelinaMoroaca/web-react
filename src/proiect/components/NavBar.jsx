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
    <nav id = 'nav'>
      <div id='freeShippingBanner'>
        <p>Free Standard shipping to Romania over RON360</p>
        <p>XXXX just pulled up, and you can only get it here. Sign up now to shop it first. | SHOP NOW</p>
      </div>
      <ul className = 'nav-list' id='brandMenu'>
        <li>Country</li>
        <li>LOGO BRAND</li>
        <li>UserAccount</li>

      </ul>
      <ul className = 'nav-list' id='ecommerceMenu'>
        <li className = 'nav-item'>
          <a onClick = {handleHomeClick} href = {homePageLink} className = 'nav-link'>
            New + Bestsellers
          </a>
        </li>
        <li className = 'nav-item'>
          <a onClick = {handleAboutClick} href = {aboutPageLink} className = 'nav-link'>
            Makeup
          </a>
        </li>
        <li className = 'nav-item'>
          <a onClick={handleContactClick} href={contactPageLink} className = 'nav-link'>
            Skincare
          </a>
        </li>

        <li className = 'nav-item'>
          <a onClick={handleContactClick} href={contactPageLink} className = 'nav-link'>
            Hair
          </a>
        </li>

        <li className = 'nav-item'>
          <a onClick={handleContactClick} href={contactPageLink} className = 'nav-link'>
            Fragrance
          </a>
        </li>

        <li className = 'nav-item'>
          <a onClick={handleContactClick} href={contactPageLink} className = 'nav-link'>
            XXX beauty box
          </a>
        </li>


        <li className = 'nav-item'>
          <a onClick={handleContactClick} href={contactPageLink} className = 'nav-link'>
            Virtual Services
          </a>
        </li>

        <li className = 'nav-item'>
          <a onClick={handleContactClick} href={contactPageLink} className = 'nav-link'>
            Replen + Save
          </a>
        </li>

        <li className = 'nav-item'>
          <a onClick={handleContactClick} href={contactPageLink} className = 'nav-link'>
            Discover
          </a>
        </li>

        <li className = 'nav-item'>
          <a onClick={handleContactClick} href={contactPageLink} className = 'nav-link'>
            Sale
          </a>
        </li>

   
      </ul>
    </nav>
  );
}

export default NavBar;