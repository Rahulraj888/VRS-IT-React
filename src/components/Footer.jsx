import React from 'react'

function Footer() {
  return (
    <div className="container-fluid footer-custom">
      <footer className="pt-5">
        <div className="row">
          <div className="col-md-3 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#">Refund Policy</a></li>
              <li className="nav-item mb-2"><a href="#">Terms and Conditions</a></li>
              <li className="nav-item mb-2"><a href="#">Privacy Policy</a></li>
              <li className="nav-item mb-2"><a href="/html/about-us.html">About Us</a></li>
              <li className="nav-item mb-2"><a href="/html/ContactUs.html">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h5>Address</h5>
            <address>
              VRS IT SMART SOLUTIONS PVT LTD<br /><br />
              1-11-252/49, 1st Floor, Flat No 102,<br />
              Arcot House, ICICI Bank Line, Motilal Nehru Nagar,<br />
              Beside Public Park,<br />
              Begumpet Hyderabad, Telangana,<br />
              Pin: 500016.<br /><br />
              Call us: +91 8125457760 <br />
              Support: support@vrsitrentals.com
            </address>
          </div>

          <div className="col-md-6 mb-3">
            <p>
              VRS IT Smart Solutions Pvt Ltd delivers reliable and significant IT Rental Services
              in India, UAE and Canada. Our Hands-On experience, Best principles, Qualified
              Technical team, guaranteed On-time Services, Affordable Prices, and Durable terms
              remain Efficient and Evergreen..
            </p>
          </div>
        </div>

        <div className="d-flex flex-sm-row py-4 border-top">
          <p>© COPYRIGHT 2024 VRS IT Smart Solutions Pvt Ltd. All Right Reserved.</p>
          <ul className="list-unstyled d-flex mx-4">
            <li className="mx-4 mt-2">
              <a className="btn btn-outline-primary" href="#"><i className="bi bi-twitter"></i></a>
            </li>
            <li className="mx-4 mt-2">
              <a className="btn btn-outline-primary" href="#"><i className="bi bi-instagram"></i></a>
            </li>
            <li className="mx-4 mt-2">
              <a className="btn btn-outline-primary" href="#"><i className="bi bi-facebook"></i></a>
            </li>
            <li className="mx-4 mt-2">
              <a className="btn btn-outline-primary" href="#"><i className="bi bi-youtube"></i></a>
            </li>
            <li className="mx-4 mt-2">
              <a className="btn btn-outline-primary" href="#"><i className="bi bi-linkedin"></i></a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
