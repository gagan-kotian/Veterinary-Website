import React from "react";
import "./harugeri.css"; // Assuming you have a CSS file for styling
import logoImage from "./Ellipse 1.png";

const Harugeri = () => {
  return (
    <div className="wrapper">
      <div className="container1">
        <h1>ಕರ್ನಾಟಕ</h1>
        <img className="log" src={logoImage} alt="logo" />
        <h1>ಸರ್ಕಾರ</h1>
      </div>

      <div className="inside">
        <div className="container2">
          <br></br>
          <p>ಪಶು ಪಾಲನಾ ಮತ್ತು ಪಶು ಸಂಗೋಪನಾ ಇಲಾಖೆ</p>
          <br></br>
        </div>
      </div>
      <br></br>
      <div className="details">
        <h1 className="h1">ಪಶು ಆಸ್ಪತ್ರೆ, ಹಾರೂಗೇರಿ</h1>
        <h1 className="head">ಸಿಬ್ಬಂದಿಗಳು</h1>
        <br />
        {/* 
        <form method="GET" action="#">
          <div className="search">
            <input id="search-box" type="search-box" placeholder="Search" />
            <input id="submit" type="submit" name="searchview" />
          </div>
          <br />
        </form> 
        */}
      </div>
      <br></br>
      <br></br>

      <table>
        <thead>
          <tr>
            <th>SI no.</th>
            {/* <th>Institution</th> */}
            <th>Name of Employee</th>
            <th>Designation</th>
            <th>Phone No.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {/* <td>harugeri</td> */}
            <td>ಡಾ|| ಎಮ್ ವಿ ಪತ್ತಾರ</td>
            <td>ಪಶು ವೈದ್ಯಾಧಿಕಾರಿ</td>
            <td>8904793358</td>
          </tr>
          <tr>
            <td>4</td>
            {/* <td>harugeri</td> */}
            <td>ಶ್ರೀಮತಿ ಜಯಶ್ರೀ ತೇರದಾಳ</td>
            <td>ಹಿರಿಯ ಪಶು ವೈದ್ಯಕೀಯ ಪರೀಕ್ಷಕರು</td>
            <td>9739814431</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Harugeri;
