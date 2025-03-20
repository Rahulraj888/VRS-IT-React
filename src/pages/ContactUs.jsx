import React from "react";
import "../styles/contact-us.css";
import BackgroundImage from "../components/contactus/BackgroundImage";
import ContactContainer from "../components/contactus/ContactContainer";
import MapContainer from "../components/contactus/MapContainer";

function ContactUs() {
  return (
    <>
      <BackgroundImage />
      <div className="container-p">
        <h1>Let's start a project together</h1>
        <p>
          VRS IT Rentals have been in the world of rentals since ages. We have a
          huge customer base around the world who utilize our services. We
          provide solutions to all your rental problems at VRS IT Rentals which
          is considered to be a one stop shop for our esteemed customers.
        </p>
      </div>
      <ContactContainer/>
      <br />
      <MapContainer/>
    </>
  );
}

export default ContactUs;
