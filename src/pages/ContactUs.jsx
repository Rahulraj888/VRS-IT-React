import React, { useEffect } from 'react';
import '../styles/contact-us.css';
import '../styles/styles.css';

function ContactUs() {
  return (
    <>
      {/* Header is handled elsewhere */}
      <section className="background-image-section">
        <div className="overlay">
          <div className="heading">
            <h1>Contact Us</h1>
            <p>Feel free to contact Us</p>
          </div>
        </div>
      </section>

      <div className="container-p">
        <h1>Let's start a project together</h1>
        <p>
          VRS IT Rentals have been in the world of rentals since ages. We have a huge customer base
          around the world who utilize our services. We provide solutions to all your rental problems at
          VRS IT Rentals which is considered to be a one stop shop for our esteemed customers.
        </p>
      </div>

      <div className="contact-container">
        <div className="left">
          <h2>Contact Us</h2>
          <p>
            We would love to hear from you. Please reach out to us using the information below or fill out
            the form on the right.
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

      <br />
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

export default ContactUs;
