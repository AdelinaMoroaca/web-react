import React from 'react';
import { useState } from 'react';
import './NavBar.css';
import NavCategoryDetails from './NavNewBestsellers';
import card1 from '../assets/paleta1.png';
import card2 from '../assets/palleta-2.jpg';
import card3 from '../assets/paleta1.png';



function NavBar({homePageLink, aboutPageLink, contactPageLink}) {
  const[showBestsellers, setBestsellers] = useState(false);
  const[showMakeup, setMakeup] = useState(false);
  const[showSkincare, setIsSkincare] = useState(false);
  const[isOnHair, setIsHair] = useState(false);
  const[isOnFragrance, setIsFragrance] = useState(false);
  const[isOnBeautyBox, setIsBeautyBox] = useState(false);
  const[isOnVirtual, setIsVirtual] = useState(false);
  const[isOnReplen, setIsReplen] = useState(false);
  const[isOnDiscover, setIsDiscover] = useState(false);
  const[isOnSale, setIsSale] = useState(false);


    function handleHomeClick(event){
      event.preventDefault();
      window.open('../Home', '_blank');
    }

    function handleAboutClick(event){
      console.log('aboutPageLink');
      event.preventDefault();
      //window.open({About}, '_blank');
    }

    function handleContactClick(event){
      console.log('contactPageLink');
      event.preventDefault();
      window.open('../Contact', '_blank');
    }

  return (
    <nav id = 'nav'>
      <div id='freeShippingBanner'>
        <p id='freeShipping'>Free Standard shipping to Romania over RON400</p>
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
          
          onMouseOver={() => setBestsellers(!showBestsellers, console.log('in'))}
          onMouseLeave={() => setBestsellers(false)}
          onClick={() => setBestsellers(!showBestsellers, console.log('in'))}
    
          href = {homePageLink} className = 'nav-link'>
            New + Bestsellers
            {/* {isVisibl ? 'Hide' : 'New  Bestsellers'} */}
          </a>
          {/* {isVisibl && <p>iiiiii</p>} */}
          
        </li>
        <li className = 'nav-item'>

          <a 
          onMouseOver={() => setMakeup(!showMakeup)}
          onMouseLeave={() => setMakeup(false)}
          onClick={() => setMakeup(!showMakeup, console.log('in'))}>
          
            Makeup
          </a>
        </li>

        <li className = 'nav-item'>
          <a href={contactPageLink} className = 'nav-link'
          onMouseOver={() => setIsSkincare(!showSkincare)}
          onMouseLeave={() => setIsSkincare(false)}
          onClick={() => setIsSkincare(!showSkincare, console.log('in'))}>
  {/* const[isOnSkincare, setIsSkincare] = useState(false); */}
          
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
      {/* productCategory, imgCategory,cardCategory */}
      {showBestsellers && < NavCategoryDetails
          productCategory = 'list'
          imgCategory = { card2 }
        
          cardCategory = 'card'
          // { card2 }
      />}

{/* {!isOn && < NavCategoryDetails
          productCategory = 'list'
          imgCategory = { card2 }
        
          cardCategory = 'card'
          // { card2 }
      />} */}

      {showMakeup && < NavCategoryDetails

          productCategory = 'list'
          imgCategory = { card3 }      
          cardCategory = 'card'
      />}

      {showSkincare && < NavCategoryDetails

      productCategory = 'list'
      imgCategory = { card2 }      
      cardCategory = 'card'
      />}
    </nav>
  );
}

export default NavBar;