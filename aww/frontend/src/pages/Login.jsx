import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object to hold the login data
    const loginData = {
      username: Username,
      password: password,
    };

    try {
      // Send the login data to the server for authentication
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        loginData
      );

      if (response.status === 200) {
        // Authentication successful
        console.log("Login successful");
        setLoginError("Login Successfull");
        navigate("/home");
        // Add a log message
        // Navigate to the homepage or perform other actions
        // You can add logic here to redirect the user or update the UI accordingly
      } else {
        // Authentication failed
        setLoginError("Login failed. Please check your credentials.");
        console.error("Login failed"); // Add a log message
      }
    } catch (error) {
      // Handle network errors or other errors here
      console.error("Login error:", error);
      setLoginError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="every">
      <div className="center">
        <h1>Login</h1>
        <form method="post" onSubmit={handleSubmit}>
          <div className="text-field">
            <input
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              name="Username"
              id="Username"
              type="text"
            />
            <span></span>
            <label>Username</label>
          </div>
          <div className="text-field">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              id="password"
              type="password"
            />
            <span></span>
            <label>Password</label>
          </div>
          <Link to="/reset">
            <div className="pass">Forgot Password?</div>
          </Link>

          <input type="submit" value="Login" />
        </form>
        <p className="error-message">{loginError}</p>
        <Link to="/register">
          <button className="Signup-link-button">
            Not Registered? Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};
