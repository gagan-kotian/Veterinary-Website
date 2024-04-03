import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const Staff = () => {
  const navigate = useNavigate("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("");
  const [id, setId] = useState("");

  const [registrationMessage, setRegistrationMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object to hold the registration data
    const registrationData = {
      name: name,
      mobile: mobile,
      role: role,
      id: id,
    };

    try {
      // Send the registration data to the server's registration endpoint
      const response = await axios.post(
        "http://localhost:3000/staff/add",
        registrationData
      );

      if (response.status === 201) {
        // Registration successful
        navigate("/");
        alert("Registration Successfull");

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
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              id="name"
              type="text"
              required
            />
            <span></span>
            <label>Name</label>
          </div>
          <div className="text-field">
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              name="mobile"
              id="mobile"
              type="number"
              required
            />
            <span></span>
            <label>Mobile no.</label>
          </div>
          <div className="text-field">
            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              name="role"
              id="role"
              type="text"
              required
            />
            <span></span>
            <label>Role:</label>
          </div>
          <div className="text-field">
            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              name="id"
              id="id"
              type="text"
              required
            />
            <span></span>
            <label>Id:</label>
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
