// src/pages/OrderHistory.jsx
import React, { useState, useEffect } from "react";

function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/orders", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const ordersData = await response.json();
          setOrders(ordersData);
        } else {
          console.error("Failed to fetch orders");
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;

  return (
    <div>
      <h2 className="mb-4">Your Order History</h2>
      {orders.length === 0 ? (
        <p>You have no orders.</p>
      ) : (
        orders.map((order) => (
          <div className="card mb-4 shadow-sm" key={order._id} style={{ borderRadius: "0.5rem" }}>
            <div className="card-header bg-white" style={{ borderBottom: "none" }}>
              <h5 className="mb-0">
                <strong>Order ID:</strong> {order._id}
              </h5>
            </div>
            <div className="card-body">
              <p className="mb-1">
                <strong>Date:</strong> {new Date(order.orderDate).toLocaleString()}
              </p>
              <p className="mb-3">
                <strong>Total:</strong> ${order.totalPrice.toFixed(2)}
              </p>
              <h6 className="mb-3">Items:</h6>
              {order.items.map((item, idx) => (
                <div 
                  className="d-flex align-items-center border p-2 mb-3"
                  style={{ borderRadius: "0.5rem" }}
                  key={idx}
                >
                  {/* Image Snapshot from your stored 'image' field */}
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      marginRight: "15px",
                      borderRadius: "0.3rem"
                    }}
                  />
                  <div>
                    <strong>{item.name}</strong>
                    <p className="mb-0 text-muted">
                      Qty: {item.quantity} @ ${item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default OrderHistory;
