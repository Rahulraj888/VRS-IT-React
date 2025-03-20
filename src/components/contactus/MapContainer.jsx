import React from "react";
import "../../styles/contact-us.css";

export default function MapContainer() {
  return (
    <>
      <div className="container">
        <h1 className="map text-center">Location Map</h1>
      </div>
      <div id="map" style={{ height: "400px" }}>
        <iframe
          src="https://maps.google.com/maps?q=VRSIT%20Rentals%20-%20Hire%20Laptops%2C%20MacBooks%20in%20Hyderabad%20and%20Secunderabad%2C%201-11-252%2F49%2C%201st%20Floor%2C%20Flat%20No%20102%2C%20Arcot%20House%20ICICI%20Bank%20Line%2C%20beside%20Public%20Park%2C%20Motilal%20Nehru%20Nagar%2C%20Begumpet%2C%20Hyderabad%2C%20Telangana%20500016&t=m&z=10&output=embed&iwloc=near"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </>
  );
}
