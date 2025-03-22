// src/pages/Login.jsx
import React, { useState } from "react";
import "../styles/login.css";
import LoginForm from "../components/login/LoginForm";
import RegisterForm from "../components/login/RegisterForm";
import ToastNotification from "../components/login/ToastNotification";
import { useNavigate } from "react-router-dom";

function Login() {
  // Toggle between Login and Register
  const [isRegister, setIsRegister] = useState(false);

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Registration form state
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  // For redirection after login (optional)
  const navigate = useNavigate();

  // Toggle handler: when toggling, reset all fields
  const handleToggle = () => {
    setIsRegister(!isRegister);
    setRegisterEmail("");
    setRegisterPassword("");
    setRegisterError("");
    setLoginEmail("");
    setLoginPassword("");
    setLoginError("");
  };

  // Login form submission handler
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
      const data = await response.json();
      if (response.ok) {
        // Store the email as a demo of authentication (could be replaced with a token)
        localStorage.setItem("userEmail", loginEmail);
        navigate('/login');
      } else {
        setLoginError(data.error || "Login failed");
      }
    } catch (error) {
      setLoginError("Login error: " + error.message);
    }
  };

  // Register form submission handler
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!registerEmail || !emailPattern.test(registerEmail)) {
      setRegisterError("Please enter a valid email address.");
    } else {
      setRegisterError("");
      try {
        const response = await fetch("http://localhost:5000/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: registerEmail,
            password: registerPassword,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          setToastVisible(true);
          setRegisterEmail("");
          setRegisterPassword("");
          // After registration, automatically switch to the login form
          setTimeout(() => {
            setToastVisible(false);
            setIsRegister(false);
          }, 3000);
        } else {
          setRegisterError(data.error || "Registration failed");
        }
      } catch (error) {
        setRegisterError("Registration error: " + error.message);
      }
    }
  };

  // Check if user is already logged in (optional)
  const loggedInUser = localStorage.getItem("userEmail");

  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
      {loggedInUser ? (
        <div className="card p-4" style={{ maxWidth: "500px", width: "100%" }}>
          <h2 className="text-center">Welcome, {loggedInUser}!</h2>
        </div>
      ) : (
        <div className="card p-4" style={{ maxWidth: "500px", width: "100%" }}>
          <h2 className="text-center">{isRegister ? "Register" : "Login"}</h2>

          {!isRegister ? (
            <LoginForm
              onSubmit={handleLoginSubmit}
              loginEmail={loginEmail}
              setLoginEmail={setLoginEmail}
              loginPassword={loginPassword}
              setLoginPassword={setLoginPassword}
              loginError={loginError}
            />
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
                Don’t have an account?{" "}
                <button type="button" className="btn btn-link p-0" onClick={handleToggle}>
                  Register
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button type="button" className="btn btn-link p-0" onClick={handleToggle}>
                  Login
                </button>
              </p>
            )}
          </div>
        </div>
      )}

      <ToastNotification visible={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
}

export default Login;
