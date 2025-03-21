// src/components/FooterLinks.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterLinks() {
  return (
    <div className="col-md-3 mb-3">
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link to="/refund-policy">Refund Policy</Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/terms-and-conditions">Terms and Conditions</Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/aboutus">About Us</Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}
