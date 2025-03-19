import React, { useState } from 'react';
import '../styles/login.css';
import '../styles/styles.css';

function Login() {
  // State for registration form
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  // Handler for register form submission
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Simple email validation pattern
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!registerEmail || !emailPattern.test(registerEmail)) {
      setRegisterError('Please enter a valid email address.');
    } else {
      setRegisterError('');
      // Prevent actual submission and show toast
      setToastVisible(true);
      setRegisterEmail(''); // clear the input field

      // Hide toast after 3 seconds (optional)
      setTimeout(() => {
        setToastVisible(false);
      }, 3000);
    }
  };

  return (
    <div className="container my-5">
      <div className="row equal-height">
        {/* Login Form */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h2>Login</h2>
          <div className="form-container mt-5">
            <form>
              <div className="form-group">
                <label htmlFor="loginEmail">
                  Username or email address <span className="text-danger">*</span>
                </label>
                <input type="email" className="form-control" id="loginEmail" />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="loginPassword">
                  Password <span className="text-danger">*</span>
                </label>
                <input type="password" className="form-control" id="loginPassword" />
              </div>
              <div className="form-group form-check mt-3">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Log in
              </button>
              <a href="#" className="d-block mt-2">
                Lost your password?
              </a>
            </form>
          </div>
        </div>

        {/* Registration Form */}
        <div className="col-md-6">
          <h2>Register</h2>
          <div className="form-container mt-5">
            <form id="registerForm" onSubmit={handleRegisterSubmit}>
              <div className="form-group mt-3">
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
              <p className="mt-3">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="mt-3">
                Your personal data will be used to support your experience throughout this website,
                to manage access to your account, and for other purposes described in our{' '}
                <a href="#">privacy policy</a>.
              </p>
              <button type="submit" className="btn btn-primary btn-sm mt-3">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toastVisible && (
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
          <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
              <strong className="me-auto">Registration Successful</strong>
              <button
                type="button"
                className="btn-close"
                onClick={() => setToastVisible(false)}
              ></button>
            </div>
            <div className="toast-body">
              A link to set a new password has been sent to your email address.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
