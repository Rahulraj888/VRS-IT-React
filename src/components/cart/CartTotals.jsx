// src/components/cart/CartTotals.jsx
import React from 'react';

function CartTotals({ subtotal, depositFee, gst, total, onPlaceOrder }) {
  return (
    <div className="border-effect">
      <h3>Cart Totals</h3>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between">
          <span>Subtotal</span>
          <strong>₹{subtotal.toFixed(2)}</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Deposit Fee</span>
          <strong>₹{depositFee.toFixed(2)}</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>GST (10%)</span>
          <strong>₹{gst.toFixed(2)}</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Total</span>
          <strong>₹{total.toFixed(2)}</strong>
        </li>
      </ul>
      <button className="btn btn-primary w-100" onClick={onPlaceOrder}>
        Place Order
      </button>
    </div>
  );
}

export default CartTotals;
