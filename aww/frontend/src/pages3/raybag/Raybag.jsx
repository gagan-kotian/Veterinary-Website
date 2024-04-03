// Import React and any other necessary modules
import React from "react";
import "./raybag.css"; // Assuming you have a CSS file for styling
import logoImage from "./Ellipse 1.png";

// Define the React component
const Raybag = () => {
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

            <th>Institution</th>

            <th>Name of Employee</th>
            <th>Designation</th>
            <th>Phone No.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>

            <td>harugeri</td>

            <td>ಡಾ|| ಸಚೀನ ಸೌಂದಲಗಿ</td>
            <td>ಮುಖ್ಯ ಪಶು ವೈದ್ಯಾಧಿಕಾರಿ (ಆಡಳಿತ)</td>
            <td>9663060949</td>
          </tr>
          <tr>
            <td>2</td>

            <td>raibag</td>

            <td>ಡಾ|| ಎಂ ಬಿ ಪಾಟೀಲ್‌</td>
            <td>ಮುಖ್ಯ ಪಶು ವೈದ್ಯಾಧಿಕಾರಿ</td>
            <td>9448420399</td>
          </tr>
          <tr>
            <td>3</td>

            <td>harugeri</td>

            <td>ಡಾ|| ಸುರೇಶ ಕದ್ದು</td>
            <td>ಮುಖ್ಯ ಪಶು ವೈದ್ಯಾಧಿಕಾರಿ</td>
            <td>9741599273</td>
          </tr>

          <tr>
            <td>4</td>

            <td>harugeri</td>

            <td>ಶ್ರೀ ಎ ಬಿ ಕದಮ್</td>
            <td>ಜಾನುವಾರು ಅಧಿಕಾರಿ</td>
            <td>9449108036</td>
          </tr>

          <tr>
            <td>5</td>

            <td>harugeri</td>

            <td>ಶ್ರೀ ಶ್ರೀಕಾಂತ ಹುಕ್ಕೇರಿ</td>
            <td>ಕಿರಿಯ ಪಶು ವೈದ್ಯಕೀಯ ಪರೀಕ್ಷಕರು</td>
            <td>7829256923</td>
          </tr>

          <tr>
            <td>6</td>

            <td>harugeri</td>

            <td>ಶ್ರೀ ಪ್ರಶಾಂತ ಕಾಂಬಳೆ</td>
            <td>ಕಿರಿಯ ಪಶು ವೈದ್ಯಕೀಯ ಪರೀಕ್ಷಕರು</td>
            <td>9148739847</td>
          </tr>
          <tr>
            <td>7</td>

            <td>harugeri</td>

            <td>ಶ್ರೀ ಹಣುಮಂತ ವರ್ಲಿ</td>
            <td>ಕಿರಿಯ ಪಶು ವೈದ್ಯಕೀಯ ಪರೀಕ್ಷಕರು</td>
            <td>9980268575</td>
          </tr>
          <tr>
            <td>8</td>

            <td>harugeri</td>

            <td>ಶ್ರೀ ಎಸ್.ಆರ್.ಆಲಕನೂರ</td>
            <td>ದ್ವಿತೀಯ ದರ್ಜೆ ಸಹಾಯಕ</td>
            <td>9901080184</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Export the component
export default Raybag;
