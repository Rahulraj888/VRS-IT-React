// src/pages/Login.jsx
import React, { useState } from 'react';
import '../styles/login.css';
import '../styles/styles.css';
import LoginForm from '../components/login/LoginForm';
import RegisterForm from '../components/login/RegisterForm';
import ToastNotification from '../components/login/ToastNotification';

function Login() {
  // Toggle between Login and Register
  const [isRegister, setIsRegister] = useState(false);

  // Registration form state
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  // Handler for toggling between login and register
  const handleToggle = () => {
    setIsRegister(!isRegister);
    // Reset register fields if toggling away
    setRegisterEmail('');
    setRegisterPassword('');
    setRegisterError('');
  };

  // Handler for login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert('Logged in successfully (demo)!');
  };

  // Handler for register form submission
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Basic email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!registerEmail || !emailPattern.test(registerEmail)) {
      setRegisterError('Please enter a valid email address.');
    } else {
      setRegisterError('');
      setToastVisible(true);
      setRegisterEmail('');
      setRegisterPassword('');

      // Hide toast after 3 seconds
      setTimeout(() => {
        setToastVisible(false);
      }, 3000);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <div className="card p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-center">{isRegister ? 'Register' : 'Login'}</h2>

        {!isRegister ? (
          <LoginForm onSubmit={handleLoginSubmit} />
        ) : (
          <RegisterForm
            registerEmail={registerEmail}
            registerPassword={registerPassword}
            registerError={registerError}
            setRegisterEmail={setRegisterEmail}
            setRegisterPassword={setRegisterPassword}
            onSubmit={handleRegisterSubmit}
          />
        )}

        <div className="text-center mt-3">
          {!isRegister ? (
            <p>
              Don’t have an account?{' '}
              <button type="button" className="btn btn-link p-0" onClick={handleToggle}>
                Register
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button type="button" className="btn btn-link p-0" onClick={handleToggle}>
                Login
              </button>
            </p>
          )}
        </div>
      </div>

      <ToastNotification visible={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
}

export default Login;
