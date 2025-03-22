// src/components/login/ToastNotification.jsx
import React from 'react';

export default function ToastNotification({ visible, onClose }) {
  if (!visible) return null;

  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <strong className="me-auto">Registration Successful</strong>
          <button type="button" className="btn-close" onClick={onClose}></button>
        </div>
        <div className="toast-body">
          You have been registered successfully.
        </div>
      </div>
    </div>
  );
}
