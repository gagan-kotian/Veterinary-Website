import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import logoImage from "./logo.jpg";

const Home = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="home">
      <div className={`wrapper ${isActive ? "active" : ""}`}>
        <div className="section">
          <div className="top_navbar">
            <div className="hamburger" onClick={toggleSidebar}>
              <Link to="/">
                <i className="fa-solid fa-bars"></i>
              </Link>
              <h2>ರೋಗಗಳು ಮತ್ತು ಯೋಜನೆಗಳ ಅರಿವು</h2>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <div className="logo">
            <img src={logoImage} alt="logo" />
            <h3>Name</h3>
            <p>Menu</p>
          </div>
          <ul>
            <li>
              <Link to="/house" className="active">
                {" "}
                {/* Replace <a> with <Link> */}
                <span className="icon">
                  <i className="fas fa-home"></i>
                </span>
                <span className="item">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/employ">
                {" "}
                {/* Replace <a> with <Link> */}
                <span className="icon">
                  <i className="fa-solid fa-hospital"></i>
                </span>
                <span className="item">Hospitals</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                {" "}
                {/* Replace <a> with <Link> */}
                <span className="icon">
                  <i className="fa-solid fa-newspaper"></i>
                </span>
                <span className="item">Schemes</span>
              </Link>
            </li>
            <li>
              <Link to="/awareness">
                {" "}
                {/* Replace <a> with <Link> */}
                <span className="icon">
                  <i className="fa-solid fa-hand-sparkles"></i>
                </span>
                <span className="item">Awareness</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                {" "}
                {/* Replace <a> with <Link> */}
                <span className="icon">
                  <i className="fa-solid fa-address-card"></i>
                </span>
                <span className="item">AboutUs</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                {" "}
                {/* Replace <a> with <Link> */}
                <span className="icon">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <span className="item">ContactUs</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="data">
          <h2>
            ಕೆಳಕಂಡ ವಿಷಯಗಳ ಬಗ್ಗೆ ಹೆಚ್ಚಿನ ಮಾಹಿತಿ ಪಡೆಯಲು ಹೆಸರಿನ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ
          </h2>
          <div className="names">
            <ol>
              <li className="name">
                <Link to="/bovine">ಪಶುಗಳ ಆಹಾರ ಮತ್ತು ಪೌಷ್ಟಿಕತೆ</Link>
              </li>
            </ol>
            <ol>
              <li className="name">
                <Link to="/disease">ನಿರ್ವಹಣಾರೋಗಗಳು-ನಿವಾರಣೋಪಾಯಗಳು</Link>
              </li>
            </ol>
            <ol>
              <li className="name">
                <Link to="/mastitis">ಕೆಚ್ಚಲ ಬಾವು</Link>
              </li>
            </ol>
            <ol>
              <li className="name">
                <Link to="/fodder">
                  ಮೇವು ಬೆಳೆಗಳ ಪೌಷ್ಟೀಕರಣ, ಸಂರಕ್ಷಣೆ ಹಾಗೂ ಸಂಗ್ರಹಣೆ
                </Link>
              </li>
            </ol>
            <ol>
              <li className="name">
                <Link to="/fodderdev">ಮೇವಿನ ಬೆಳೆಗಳು</Link>
              </li>
            </ol>
            <ol>
              <li className="name">
                <Link to="/goat">
                  ಆಡುಗಳಲ್ಲಿ ಕಂಡು ಬರುವ ರೋಗಗಳು ಮತ್ತು ನಿವಾರಣೋಪಾಯಗಳು
                </Link>
              </li>
            </ol>
            <ol>
              <li className="name">
                <Link to="/azola">ಅಜೋಲಾ</Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
