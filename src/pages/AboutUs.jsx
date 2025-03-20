import React from 'react';
import '../styles/aboutus.css'; 
import MainContent from '../components/aboutus/MainContent';

function AboutUs() {
  return (
    <>
      {/* Header Section for About Us */}
      <div className="header-aboutus">
        <h1>About Us</h1>
        <p>Home / About Us</p>
      </div>
      <MainContent/>
    </>
  );
}

export default AboutUs;
