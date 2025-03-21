// src/components/RelatedProducts.jsx
import React from 'react';
import RelatedProductCard from './RelatedProductCard';

export default function RelatedProducts({ products }) {
  return (
    <div className="col-md-9">
      <div className="row" id="product-list">
        {products.map((prod, idx) => (
          <RelatedProductCard key={idx} product={prod} />
        ))}
      </div>
    </div>
  );
}
