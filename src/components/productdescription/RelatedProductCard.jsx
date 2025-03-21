// src/components/RelatedProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function RelatedProductCard({ product }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
      <div className="card" style={{ width: '18rem' }}>
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">₹{product.price}</p>
          <Link
            to={`/product-description?id=${encodeURIComponent(product.name)}`}
            className="btn btn-primary"
          >
            Select Options
          </Link>
        </div>
      </div>
    </div>
  );
}
