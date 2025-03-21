// src/components/ProductMainSection.jsx
import React from 'react';
import RentalPeriodSelector from './RentalPeriodSelector';

export default function ProductMainSection({
  mainImage,
  product,
  computedPrice,
  selectedPeriod,
  quantity,
  onQuantityChange,
  onPeriodChange,
  onAddToCart
}) {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Left Column: Product Image */}
        <div className="col-md-6">
          <img
            id="main-product-image"
            src={mainImage}
            className="img-fluid"
            alt="Product"
          />
        </div>
        {/* Right Column: Product Details */}
        <div className="col-md-6">
          <div className="product-price-range">
            <h3>
              ₹{computedPrice}{" "}
              <small>Exc GST per month + A Refundable Deposit to be added in Cart</small>
            </h3>
          </div>
          <div className="product-key-features">
            <h5>Key Features:</h5>
            <p>{`Processor: ${product.processor}, Brand: ${product.brand}`}</p>
          </div>
          <RentalPeriodSelector
            selectedPeriod={selectedPeriod}
            onPeriodChange={onPeriodChange}
          />
          <div className="add-to-cart">
            <input
              type="number"
              value={quantity}
              min="1"
              className="form-control quantity-input"
              onChange={(e) => onQuantityChange(e.target.value)}
            />
            <button className="btn btn-primary mt-2" onClick={onAddToCart}>
              Add to Cart
            </button>
          </div>
          <div className="product-meta">
            <p>{`Category: ${product.category}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
