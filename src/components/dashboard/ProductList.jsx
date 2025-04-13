// ProductList.jsx
import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  if (products.length === 0) {
    return (
      <div className="row">
        <div className="col-12 text-center mt-4 no-products-message">
          <div className="alert alert-warning" role="alert">
            <i className="bi bi-exclamation-circle"></i> No products found.
          </div>
        </div>
      </div>
    );
  }
    return (
      <div className="row g-3">
        {products.map((product, index) => (
          <div className="col-sm-6 col-md-4" key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    );
}
