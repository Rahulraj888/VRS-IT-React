// src/pages/Login.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login/LoginForm";
import RegisterForm from "../components/login/RegisterForm";
import ToastNotification from "../components/login/ToastNotification";
import "../styles/login.css";
import * as jwtDecode from "jwt-decode";

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Registration form state
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const navigate = useNavigate();

  // If a token is found, redirect user to profile (optional).
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // If you want to check validity, decode or verify token
      // const decoded = jwtDecode(token);
      // If valid, redirect to profile
      navigate("/profile");
    }
  }, [navigate]);

  // Toggle between login and register
  const handleToggle = () => {
    setIsRegister(!isRegister);
    setRegisterEmail("");
    setRegisterPassword("");
    setRegisterError("");
    setLoginEmail("");
    setLoginPassword("");
    setLoginError("");
  };

  // ---- LOGIN SUBMIT ----
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
        // Store the token in localStorage
        localStorage.setItem("token", data.token);

        // (Optional) If you want the user's email for display
        // const decodedToken = jwtDecode(data.token);
        // console.log("Decoded Token:", decodedToken);

        navigate("/profile"); // redirect to profile or wherever you prefer
      } else {
        setLoginError(data.error || "Login failed");
      }
    } catch (error) {
      setLoginError("Login error: " + error.message);
    }
  };

  // ---- REGISTER SUBMIT ----
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!registerEmail || !emailPattern.test(registerEmail)) {
      setRegisterError("Please enter a valid email address.");
      return;
    }
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
        // Clear form
        setRegisterEmail("");
        setRegisterPassword("");
        // After registration, automatically switch to login form
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
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}
    >

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
              <button
                type="button"
                className="btn btn-link p-0"
                onClick={handleToggle}
              >
                Register
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                type="button"
                className="btn btn-link p-0"
                onClick={handleToggle}
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>

      <ToastNotification
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}

export default Login;
