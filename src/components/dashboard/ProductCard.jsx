// ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="card h-100">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">₹{product.price}</p>
        </div>
        <Link
          to={`/product-description?id=${encodeURIComponent(product.name)}`}
          className="btn btn-primary mt-2"
        >
          Select Options
        </Link>
      </div>
    </div>
  );
}
