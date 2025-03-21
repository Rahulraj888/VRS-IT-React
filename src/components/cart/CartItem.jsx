import React from 'react';

function CartItem({ product, index, onDelete, onIncrease, onDecrease }) {
  const productSubtotal = product.price * product.quantity;
  return (
    <tr>
      <td>
        <button
          className="btn btn-danger btn-sm delete-btn"
          onClick={() => {
            console.log("Delete clicked for index", index);
            onDelete(index);
          }}
        >
          Delete
        </button>
      </td>
      <td>
        <img src={product.image} alt={product.name} className="cart-img" />
      </td>
      <td>{product.name}</td>
      <td>
        <button
          className="btn btn-secondary btn-sm decrease-quantity"
          onClick={() => {
            console.log("Decrease clicked for index", index);
            onDecrease(index);
          }}
        >
          -
        </button>
        <span className="quantity mx-2">{product.quantity}</span>
        <button
          className="btn btn-secondary btn-sm increase-quantity"
          onClick={() => onIncrease(index)}
        >
          +
        </button>
      </td>
      <td>₹{productSubtotal.toFixed(2)}</td>
    </tr>
  );
}

export default CartItem;
