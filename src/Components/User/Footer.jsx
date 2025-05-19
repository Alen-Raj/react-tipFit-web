import React from "react";
import "./Footer.css";  

import facebookIcon from "../Images/facebook.webp";
import twitterIcon from "../Images/twitter.webp";
import instagramIcon from "../Images/instagram.jpg";

import razorpayIcon from "../Images/rupay.webp";
import visaIcon from "../Images/visa.webp";
import mastercardIcon from "../Images/master-card.webp";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>TIP FIT</h2>
          <p>Premium watches that fit your style and time.</p>
          <p>Contact us: support@tipfit.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com/tipfit" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://twitter.com/tipfit" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://instagram.com/tipfit" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>We Accept</h3>
          <div className="payment-icons">
            <img src={razorpayIcon} alt="Razorpay" />
            <img src={visaIcon} alt="Visa" />
            <img src={mastercardIcon} alt="Mastercard" />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TIP FIT. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
