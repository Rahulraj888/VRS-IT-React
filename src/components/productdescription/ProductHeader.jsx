// src/components/ProductHeader.jsx
import React from 'react';
import '../../styles/productdescription.css';

export default function ProductHeader({ product }) {
  return (
    <section
      className="background-image-section"
      style={{ backgroundImage: product ? `url(${product.background})` : 'none' }}
    >
      <div className="overlay">
        <div className="heading">
          <h1>{product?.name}</h1>
        </div>
      </div>
    </section>
  );
}
