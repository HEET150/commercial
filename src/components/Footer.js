// Footer.js

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-column">
        <h2>Contact Information</h2>
        <p>Email: aryan.rrr@rediffmail.com</p>
        <p>Phone 1: 9825059271</p>
        <p>Phone 2: 9426363979</p>
      </div>

      <div className="footer-column">
        <h2> Address</h2>
        <p>101, Aakash Complex, B/h. CITY Bank ,</p>
        <p>Dharamraj Jewellers, Nr. Municipal Market,</p>
        <p>C.G Road, Navrangpura, Ahmedabad-09</p>
      </div>

      <div className="footer-column">
        <h2>Business Hours</h2>
        <p>Monday - Friday: 9 AM - 8 PM</p>
        <p>Saturday: 9 AM - 5 PM</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  );
};

export default Footer;
