// src/components/Footer.jsx
import React from 'react';
import FooterLinks from './footer/FooterLinks';
import FooterAddress from './footer/FooterAddress';
import FooterInfo from './footer/FooterInfo';
import FooterBottom from './footer/FooterBottom';

function Footer() {
  return (
    <div className="container-fluid footer-custom mt-1">
      <footer className="pt-5">
        <div className="row">
          <FooterLinks />
          <FooterAddress />
          <FooterInfo />
        </div>
        <FooterBottom />
      </footer>
    </div>
  );
}

export default Footer;
