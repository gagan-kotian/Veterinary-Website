import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Otp.css";
import { useNavigate } from "react-router-dom";

function Otp() {
  const navigate = useNavigate("");
  const { email } = useParams(); // Retrieve email from route parameters
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleVerify = async () => {
    console.log("OTP:", otp); // Log the OTP value
    console.log("Email:", email);
    try {
      // Send the OTP and email to the backend
      const response = await axios.post("http://localhost:3000/verifyotp", {
        otp: otp,
      });

      if (response.status === 200) {
        // Verification successful, show a success message
        setMessage("OTP verification successful.");
        navigate(`/password/${email}`);
      } else {
        // OTP verification failed, show an error message
        setMessage("OTP verification failed.");
      }
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

  return (
    <div className="otp">
      <div className="wrap">
        <div className="otp-card">
          <h2>OTP Verification</h2>
          <br></br>
          <p>Enter the OTP sent to {email}.</p>
          <br></br>
          <input
            className="otp-card-inputs"
            type="text"
            placeholder="Enter the OTP"
            value={otp}
            onChange={handleOtpChange}
          />
          <button onClick={handleVerify}>Verify</button>
          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default Otp;
