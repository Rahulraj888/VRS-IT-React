// src/components/LoginForm.jsx
import React from 'react';

export default function LoginForm({ onSubmit }) {
  return (
    <form className="mt-4" onSubmit={onSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="loginEmail">
          Username or email address <span className="text-danger">*</span>
        </label>
        <input type="email" className="form-control" id="loginEmail" required />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="loginPassword">
          Password <span className="text-danger">*</span>
        </label>
        <input type="password" className="form-control" id="loginPassword" required />
      </div>
      <div className="form-group form-check mb-3">
        <input type="checkbox" className="form-check-input" id="rememberMe" />
        <label className="form-check-label" htmlFor="rememberMe">
          Remember me
        </label>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Log in
      </button>
      <a href="#" className="d-block mt-2">
        Lost your password?
      </a>
    </form>
  );
}
