import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartItem from '../components/cart/CartItem';
import CartTotals from '../components/cart/CartTotals';
import UploadModal from '../components/cart/UploadModal';
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
    console.log("Deleting item at index:", index);
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
              <tbody>
                {cartItems.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center">
                      Your cart is empty
                    </td>
                  </tr>
                ) : (
                  cartItems.map((product, index) => (
                    <CartItem
                      key={index}
                      product={product}
                      index={index}
                      onDelete={handleDelete}
                      onIncrease={handleIncrease}
                      onDecrease={handleDecrease}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cart Totals Section */}
        <div className="col-md-5">
          <CartTotals
            subtotal={subtotal}
            depositFee={depositFee}
            gst={gst}
            total={total}
            onUploadClick={() => setShowUploadModal(true)}
          />
        </div>
      </div>

      {/* Modal for Document Upload */}
      {showUploadModal && (
        <UploadModal
          onClose={() => setShowUploadModal(false)}
          onSubmit={handleUploadSubmit}
        />
      )}
    </div>
  );
}

export default Cart;
