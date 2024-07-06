import React from 'react';
import NavBar from "./components/NavBar";
import { ContactList, PassValidator} from "./components/PassValidator";
import './Contact.css';

function Contact() {
    return (
        <div id='contactContainer'>
            <h2 style={{backgroundColor: 'rgba(127, 255, 212, 0.813)', paddingLeft:'20px'}}>Contact Us</h2>
            <div id='mainContainer'>

                <div id='leftContainer' >
                    <ul>
                        <li>CUSTOMER SERVICE</li>
                        <li style={{backgroundColor: 'rgba(127, 255, 212, 0.813)'}}>CONTACT US</li>
                        <li>EMAIL PREFERENCES</li>
                        <li>RETURNS</li>
                        <li>SHIPPING INFORMATION</li>
                        <li>FAQS</li>
                        <li>PRIVACY</li>
                        <li>TERMS OF USE</li>
                        <li>ACCESSIBILITY</li>
                        <li>MY ACCOUNT</li>
                        <li>BEAUTY STORE LOCATOR</li>
                        <li>SKIN STORE LOCATOR</li>
                        <li>AFTERPAY + KLARNA</li>

                    </ul>
                </div>

                <div id='rightContainer'>
                    <ContactList/>
                    <PassValidator/>
                </div>
            </div>
        </div>
  
    );
}

export default Contact;