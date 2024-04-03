import React, { useState } from "react";
import "./Password.css"; // Make sure to import your CSS file
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Password() {
  const navigate = useNavigate("");
  const { email } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  console.log(email);

  const handleUpdatePassword = async (event) => {
    event.preventDefault();

    try {
      // Check if passwords match
      if (newPassword !== confirmPassword) {
        setMessage("Passwords do not match");
        return;
      }

      const response = await axios.put("http://localhost:3000/reset", {
        email: email,
        password: newPassword,
      });

      if (response.status === 200) {
        setMessage("Password updated successfully");
        alert("Password updated successfully");
        navigate("/");
      } else {
        setMessage("Failed to update password");
      }
    } catch (error) {
      console.error("An error occurred during password update", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="password">
      <div className="wrapp">
        <div className="container">
          <div className="title-section">
            <h2 className="title">Change Password</h2>
            <p className="para">Enter the Password</p>
          </div>
          <form action="" className="form" onSubmit={handleUpdatePassword}>
            <div className="input-group">
              <label htmlFor="newPassword" className="label-title">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                id="newPassword"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />

              <label htmlFor="confirmPassword" className="label-title">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Enter Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="input-group">
              <button className="submit-btn" type="submit">
                Update Password
              </button>
            </div>
          </form>
          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default Password;
