// src/components/login/LoginForm.jsx
import React from 'react';

export default function LoginForm({
  onSubmit,
  loginEmail,
  setLoginEmail,
  loginPassword,
  setLoginPassword,
  loginError,
}) {
  return (
    <form className="mt-4" onSubmit={onSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="loginEmail">
          Email address <span className="text-danger">*</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="loginEmail"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="loginPassword">
          Password <span className="text-danger">*</span>
        </label>
        <input
          type="password"
          className="form-control"
          id="loginPassword"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          required
        />
      </div>
      {loginError && <div className="alert alert-danger">{loginError}</div>}
      <button type="submit" className="btn btn-primary w-100">
        Log in
      </button>
    </form>
  );
}
