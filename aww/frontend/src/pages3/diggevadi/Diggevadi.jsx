import React from "react";
import "./diggevadi.css"; // Assuming you have a CSS file for styling
import logoImage from "./Ellipse 1.png";

const Diggevadi = () => {
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
        <h1 className="h1">ಪಶು ಚಿಕಿತ್ಸಾಲಯ, ದಿಗ್ಗೇವಾಡಿ</h1>
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
            <td>ಡಾ|| ಪ್ರಮೋದ ತಳವಾರ</td>
            <td>ಪಶು ವೈದ್ಯಾಧಿಕಾರಿ</td>
            <td>9964204190</td>
          </tr>
          <tr>
            <td>2</td>
            {/* <td>harugeri</td> */}
            <td>ಶ್ರೀ ಆರ್ ಎನ್ ಭಾಗೋಜಿ</td>
            <td>ಪಶು ವೈದ್ಯಕೀಯ ಪರೀಕ್ಷಕರು</td>
            <td>8951929005</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Diggevadi;
