import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card h-100">
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
