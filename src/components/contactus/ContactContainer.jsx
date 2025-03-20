import React from "react";
import "../../styles/contact-us.css";

export default function ContactContainer() {
  return (
    <div className="contact-container">
      <div className="left">
        <h2>Contact Us</h2>
        <p>
          We would love to hear from you. Please reach out to us using the
          information below or fill out the form on the right.
        </p>
        <div className="card">
          <i className="fas fa-map-marker-alt" style={{ color: "#217d08" }}></i>
          <br />
          <div>
            <address style={{ fontWeight: "bold" }}>
              1-11-252/49, 1st Floor, Flat No 102,
              <br />
              Arcot House, ICICI Bank Line, Motilal Nehru Nagar,
              <br />
              Beside Public Park,
              <br />
              Begumpet Hyderabad, Telangana,
              <br />
              Pin: 500016.
              <br />
              Call us: +91 8125457760
              <br />
              Support: support@vrsitrentals.com
            </address>
          </div>
        </div>
      </div>
      <div className="right">
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Mobile Number" required />
          <textarea placeholder="Message" rows="4" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
