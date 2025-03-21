// src/components/FooterBottom.jsx
import React from 'react';

export default function FooterBottom() {
  return (
    <div className="d-flex flex-sm-row py-4 border-top">
      <p>© COPYRIGHT 2024 VRS IT Smart Solutions Pvt Ltd. All Right Reserved.</p>
      <ul className="list-unstyled d-flex mx-4">
        <li className="mx-4 mt-2">
          <a className="btn btn-outline-primary" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter"></i>
          </a>
        </li>
        <li className="mx-4 mt-2">
          <a className="btn btn-outline-primary" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
        </li>
        <li className="mx-4 mt-2">
          <a className="btn btn-outline-primary" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
        </li>
        <li className="mx-4 mt-2">
          <a className="btn btn-outline-primary" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-youtube"></i>
          </a>
        </li>
        <li className="mx-4 mt-2">
          <a className="btn btn-outline-primary" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
