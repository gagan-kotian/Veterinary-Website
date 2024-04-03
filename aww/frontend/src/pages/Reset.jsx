import React, { useState } from "react";
import "./Reset.css"; // Make sure to import your CSS file
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Reset() {
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // To display success or error messages

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the email to the backend to generate and send an OTP
      const response = await axios.post("http://localhost:3000/generateotp", {
        email,
      });

      if (response.status === 200) {
        // OTP sent successfully
        setMessage("OTP sent to your email.");
        navigate(`/otp/${email}`);
      } else {
        // There was an error generating or sending the OTP
        setMessage("Failed to send OTP. Please check your email address.");
      }
    } catch (error) {
      // Handle any network errors or exceptions
      setMessage("An error occurred. Please try again later.");
      console.error(error);
    }
  };

  return (
    <div className="reset">
      <div className="wrapp">
        <div className="container">
          <div className="title-section">
            <h2 className="title">Reset Password</h2>
            <p className="para">Enter your email to reset your password.</p>
          </div>
          <form className="form">
            <div className="input-group">
              <label htmlFor="email" className="label-title">
                Enter your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
                value={email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <button
                className="submit-btn"
                type="submit"
                onClick={handleSubmit}
              >
                Submit your Email
              </button>
            </div>
          </form>
          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default Reset;
