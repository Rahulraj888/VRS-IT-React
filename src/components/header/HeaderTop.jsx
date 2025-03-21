import React from 'react';
import { Link } from 'react-router-dom';

function HeaderTop() {
  return (
    <nav className="navbar navbar-light bg-light navbar-custom">
      <div className="container-fluid d-flex justify-content-between">
        <Link className="navbar-brand" to="/home">
          <img src="/images/vrsitlogo.jpeg" alt="Bootstrap" />
          VRS Technologies L.L.C
        </Link>
        <div className="d-flex align-items-center px-5 info-section">
          <div className="me-4 d-flex align-items-center">
            <i className="bi bi-geo-alt px-2 icon"></i>
            <div className="d-flex flex-column address">
              <p className="header-item">Begumpet</p>
              <p>Hyderabad</p>
            </div>
            <div className="divider"></div>
          </div>
          <div className="me-4 d-flex align-items-center">
            <i className="bi bi-telephone px-2 icon"></i>
            <div className="d-flex flex-column address">
              <p className="header-item">Mobile</p>
              <p>+91 8123457760</p>
            </div>
            <div className="divider"></div>
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-envelope px-2 icon"></i>
            <div className="d-flex flex-column address">
              <p className="header-item">Mail us</p>
              <p>support@vrsit.com</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderTop;
