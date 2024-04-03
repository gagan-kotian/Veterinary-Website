// Import React and any other necessary modules
import React from "react";
import "./kudachi.css"; // Assuming you have a CSS file for styling
import logoImage from "./Ellipse 1.png";

// Define the React component
const Kudachi = () => {
  return (
    <div className="wrapper">
      <div className="container1">
        <br></br>
        <br></br>
        <h1>ಕರ್ನಾಟಕ</h1>
        <img className="log" src={logoImage} alt="logo" />
        <h1>ಸರ್ಕಾರ</h1>
        <br></br>
        <br></br>
      </div>

      <div className="inside">
        <div className="container2">
          <br></br>
          <p>ಪಶು ಪಾಲನಾ ಮತ್ತು ಪಶು ಸಂಗೋಪನಾ ಇಲಾಖೆ</p>
          <br></br>
        </div>
      </div>

      <div className="details">
        <br></br>
        <h1 className="h1">ಪಶು ಚಿಕಿತ್ಸಾಲಯ ಅಳಗವಾಡಿ</h1>
        <h1 className="head">ಸಿಬ್ಬಂದಿಗಳು</h1>
        <br></br>
        <br />
        <br />
      </div>
      <br></br>
      <br></br>
      <br></br>

      <table>
        <thead>
          <tr>
            <th>SI no.</th>
            <th>Name of Employee</th>
            <th>Designation</th>
            <th>Phone No.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ಡಾ|| ಕರೇಪ್ಪ ಗುಡೋಡಗಿ</td>
            <td>ಮುಖ್ಯ ಪಶು ವೈದ್ಯಾಧಿಕಾರಿ</td>
            <td>9845985250</td>
          </tr>

          <tr>
            <td>4</td>
            <td>ಶ್ರೀ ವಸಂತ ಗಲಗಲಿ</td>
            <td>ಜಾನುವಾರು ಅಧಿಕಾರಿ</td>
            <td>9886249690</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Export the component
export default Kudachi;
