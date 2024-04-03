import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";

export const Register = () => {
  const [hospitalname, setHospitalname] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [registrationMessage, setRegistrationMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object to hold the registration data
    const registrationData = {
      hospitalname: hospitalname,
      username: username,
      address: address,
      email: email,
      password: password,
    };

    try {
      // Send the registration data to the server's registration endpoint
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        registrationData
      );

      if (response.status === 201) {
        // Registration successful

        setRegistrationMessage("Registration successful");
        console.log("Registration successful");
        <Link to="/"></Link>; // Add a log message
        // You can also add logic to redirect the user or show a success message.
      } else {
        // Registration failed
        setRegistrationMessage(
          "An error occurred during registration. Please try again later."
        );
        console.error("Registration failed"); // Add a log message
      }
    } catch (error) {
      console.error("Registration error:", error);
      console.error("Axios error:", error);
      // Display or log the specific error message and details
      console.error("Axios error details:", error.response);
      setRegistrationMessage(
        "An error occurred during registration. Please try again later."
      );
    }
  };

  return (
    <div className="every">
      <div className="signup-center">
        <h1>SignUp</h1>
        <form method="post" onSubmit={handleSubmit}>
          <div className="text-field">
            <input
              value={hospitalname}
              onChange={(e) => setHospitalname(e.target.value)}
              name="NOH"
              id="NOH"
              type="text"
              required
            />
            <span></span>
            <label>Name of Hospital</label>
          </div>
          <div className="text-field">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="Username"
              id="Username"
              type="text"
              required
            />
            <span></span>
            <label>Username</label>
          </div>
          <div className="text-field">
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              name="address"
              id="address"
              type="text"
              required
            />
            <span></span>
            <label>Address</label>
          </div>
          <div className="text-field">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id="email"
              type="email"
              required
            />
            <span></span>
            <label>Email</label>
          </div>

          <div className="text-field">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              id="password"
              type="password"
              required
            />
            <span></span>
            <label>Password</label>
          </div>
          <input type="submit" value="SignUp" className="signup" />
        </form>

        <p>{registrationMessage}</p>

        <Link to="/">
          <button className="Signup-link-button">
            Already have an account? Login here.
          </button>
        </Link>
      </div>
    </div>
  );
};
