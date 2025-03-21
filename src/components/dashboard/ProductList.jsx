import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products }) {
  if (products.length === 0) {
    return (
      <div className="col-12 text-center mt-4 no-products-message">
        <div className="alert alert-warning" role="alert">
          <i className="bi bi-exclamation-circle"></i> No products were found matching your selection.
        </div>
      </div>
    );
  }

  return (
    <>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </>
  );
}
