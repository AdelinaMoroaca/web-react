import React from 'react';
import { useState } from 'react';
import './NavBar.css';
import About from '../About';



function NavBar({homePageLink, aboutPageLink, contactPageLink}) {
  const[isOn, setIsOn] = useState(false);

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
        <p id='freeShipping'>Free Standard shipping to Romania over RON360</p>
        <p id='offerShipping'>XXXX just pulled up, and you can only get it here. Sign up now to shop it first. | SHOP NOW</p>
      </div>

      <ul className = 'nav-list' id='brandMenu'>
        <li id='country'>Country</li>
        <li id='logo'>LOGO BRAND</li>
        <li id='userAccount'>UserAccount</li>

      </ul>

      <ul className = 'nav-list' id='ecommerceMenu'>
      

        
        <li className = 'nav-item'>
          <a 
          // onMouseEnter={() => setIsVisibl(!isVisibl)}
          onMouseEnter={() => setIsOn(!isOn)}
          onClick = {handleHomeClick} href = {homePageLink} className = 'nav-link'>
            New + Bestsellers
            {/* {isVisibl ? 'Hide' : 'New  Bestsellers'} */}
          </a>
          {/* {isVisibl && <p>iiiiii</p>} */}
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

      {isOn && <About/>}
    </nav>
  );
}

export default NavBar;