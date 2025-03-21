import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

function HeaderNav() {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#1F51FF' }}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse nav-items" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/home">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                RENTALS
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/dashboard?category=Laptop">
                    LAPTOP
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/dashboard?category=Ipad">
                    IPADS
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/dashboard?category=Printer">
                    PRINTER
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/dashboard?category=MacBook">
                    MacBooks
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/dashboard?category=Projector">
                    PROJECTOR
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                BLOG
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">
                CONTACT US
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center header-icons">
            <Link className="btn btn-outline-primary" to="/login">
              <i className="bi bi-person"></i>
            </Link>
            <Link className="btn btn-outline-primary position-relative" to="/cart">
              <i className="bi bi-cart"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                {cartItems.length}
              </span>
            </Link>
            <Link className="btn btn-primary" to="#">
              Call Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderNav;
