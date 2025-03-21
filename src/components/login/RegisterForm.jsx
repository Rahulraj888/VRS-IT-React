// src/components/RegisterForm.jsx
import React from 'react';

export default function RegisterForm({
  registerEmail,
  registerPassword,
  registerError,
  setRegisterEmail,
  setRegisterPassword,
  onSubmit
}) {
  return (
    <form className="mt-4" onSubmit={onSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="registerEmail">
          Email address <span className="text-danger">*</span>
        </label>
        <input
          type="email"
          className={`form-control ${registerError ? 'is-invalid' : ''}`}
          id="registerEmail"
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        {registerError && <div className="invalid-feedback">{registerError}</div>}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="registerPassword">
          Password <span className="text-danger">*</span>
        </label>
        <input
          type="password"
          className="form-control"
          id="registerPassword"
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Register
      </button>
    </form>
  );
}
