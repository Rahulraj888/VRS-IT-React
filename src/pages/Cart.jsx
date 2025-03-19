import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import '../styles/Cart.module.css';

function Cart() {
  // Get cart items and updater from context.
  const { cartItems, setCartItems } = useContext(CartContext);
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Compute totals.
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const depositFee = 10;
  const gst = subtotal * 0.10;
  const total = subtotal + depositFee + gst;

  // Handler for deleting an item.
  const handleDelete = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  // Handler for increasing quantity.
  const handleIncrease = (index) => {
    const newCart = [...cartItems];
    newCart[index].quantity += 1;
    setCartItems(newCart);
  };

  // Handler for decreasing quantity.
  const handleDecrease = (index) => {
    const newCart = [...cartItems];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    } else {
      newCart.splice(index, 1);
    }
    setCartItems(newCart);
  };

  // Handler for document upload submission.
  const handleUploadSubmit = (e) => {
    e.preventDefault();
    alert("Documents uploaded successfully!");
    setShowUploadModal(false);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Cart Items Section */}
        <div className="col-md-7">
          <div className="border-effect">
            <h3>Items in Cart</h3>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Action</th>
                  <th scope="col">Product</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Subtotal</th>
                </tr>
              </thead>
              <tbody id="cart-items">
                {cartItems.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center">
                      Your cart is empty
                    </td>
                  </tr>
                ) : (
                  cartItems.map((product, index) => {
                    const productSubtotal = product.price * product.quantity;
                    return (
                      <tr key={index}>
                        <td>
                          <button
                            className="btn btn-danger btn-sm delete-btn"
                            onClick={() => handleDelete(index)}
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
                            onClick={() => handleDecrease(index)}
                          >
                            -
                          </button>
                          <span className="quantity mx-2">{product.quantity}</span>
                          <button
                            className="btn btn-secondary btn-sm increase-quantity"
                            onClick={() => handleIncrease(index)}
                          >
                            +
                          </button>
                        </td>
                        <td>₹{productSubtotal.toFixed(2)}</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cart Totals Section */}
        <div className="col-md-5">
          <div className="border-effect">
            <h3>Cart Totals</h3>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between">
                <span>Subtotal</span>
                <strong id="subtotal">₹{subtotal.toFixed(2)}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Deposit Fee</span>
                <strong id="deposit-fee">₹{depositFee.toFixed(2)}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>GST (10%)</span>
                <strong id="gst">₹{gst.toFixed(2)}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total</span>
                <strong id="total">₹{total.toFixed(2)}</strong>
              </li>
            </ul>
            <button id="modify" className="btn btn-block mb-3">
              Proceed to Checkout
            </button>
            <div className="alert alert-info" role="alert">
              Before proceeding to checkout, please provide the required documents.
            </div>
            <button
              className="btn btn-secondary btn-block"
              id="uploadButton"
              onClick={() => setShowUploadModal(true)}
            >
              Upload Documents
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Document Upload */}
      {showUploadModal && (
        <div className="modal show fade" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="uploadModalLabel">
                  Upload Documents
                </h5>
                <button type="button" className="btn-close" onClick={() => setShowUploadModal(false)}></button>
              </div>
              <div className="modal-body">
                <form id="documentUploadForm" onSubmit={handleUploadSubmit} encType="multipart/form-data">
                  <div className="mb-3">
                    <label htmlFor="document" className="form-label">
                      Choose File
                    </label>
                    <input type="file" className="form-control" id="document" name="document" required />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Upload
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </div>
      )}
    </div>
  );
}

export default Cart;
