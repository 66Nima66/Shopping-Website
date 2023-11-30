// SignUp.js

import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retryPassword, setRetryPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password || !retryPassword || !firstName || !lastName || !phoneNumber) {
      alert("Please fill in all required fields.");
      return;
    }

    if (password !== retryPassword) {
      alert("Passwords do not match. Please enter matching passwords.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Sign up successful!");
        console.log(userCredential);
        navigate("/auth/SignIn");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="auth-container">
      <h1>Sign Up</h1>
      <form className="auth-form" onSubmit={signUp}>
        <input
          className="auth-input"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          className="auth-input"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          className="auth-input"
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <input
          className="auth-input"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className="auth-input"
          type="password"
          placeholder="Retry Password"
          value={retryPassword}
          onChange={(e) => setRetryPassword(e.target.value)}
          required
        />
        <button className="auth-button" type="submit">
          Sign Up
        </button>
        <Link className="auth-link" to="/auth/SignIn">
          Already have an account? Sign in here!
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
