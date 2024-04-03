import React from "react";
import { Link } from "react-router-dom";
import "./house.css";
// Make sure to create a corresponding CSS file for your styles

const House = () => {
  return (
    <div className="h_wrapper">
      <header className="h_header">
        <div className="h_container1">
          <h1 className="ka">ಕರ್ನಾಟಕ</h1>
          <img
            className="log"
            src="https://ahvs.karnataka.gov.in/frontend/opt1/images/center_logo/kar_main_logo.png"
            alt="logo"
          />
          <h1>ಸರ್ಕಾರ</h1>
        </div>
        <div className="h_container2">
          <p>ಪಶುಪಾಲನಾ ಮತ್ತು ಪಶುವೈದ್ಯಕೀಯ ಸೇವಾ ಇಲಾಖೆ</p>
        </div>
      </header>

      <div className="h_container21">
        <p>ಪಶು ಆಸ್ಪತ್ರೆ ರಾಯಬಾಗ</p>
      </div>
      <br></br>
      <div className="h_container4">
        <div className="menu 1">
          <Link to="/hospitals">Hospitals</Link>
        </div>
        <div className="menu 2">
          <Link to="/awareness">Awareness</Link>
        </div>
        <div className="menu 3">
          <Link to="/menu">Menu</Link>
        </div>
      </div>

      <div className="imag">
        {/* <img src="https://ahvs.karnataka.gov.in/storage/slids/1658906702.jpg" alt="1694841649.jpg" style={{ width: '100%', height: '290px' }} /> */}
      </div>

      <img
        className="imag01"
        src="C:\Users\Yogesh N\Desktop\desktop folders\final\Home1\Home1\WhatsApp Image 2023-11-10 at 10.02.23_fcb34984.jpg"
        alt=""
      />
      <img
        className="imag02"
        src="C:\Users\Yogesh N\Desktop\desktop folders\final\Home1\Home1\Screenshot 2023-11-11 000334.png"
        alt=""
      />

      <div className="inside">
        <div className="inside1">
          <div className="imag1">
            <img
              className="imag3"
              src="https://www.iskonremedies.com/wp-content/uploads/2018/12/Veterinary-678-x-471.jpg"
              style={{ borderRadius: "300px" }}
              alt=""
            />
          </div>

          <div className="h_container3">
            <p>PARICHAYA</p>
            <p className="p1">
              ಪಶುಪಾಲನಾ ಮತ್ತು ಪಶುವೈದ್ಯ ಸೇವಾ ಇಲಾಖೆಯು 1945 ರಲ್ಲಿ ಸ್ವತಂತ್ರ ಇಲಾಖೆಯಾಗಿ
              ರೂಪುಗೊಂಡಿತು. ರಾಜ್ಯದ ಜಾನುವಾರು ಸಂಪತ್ತಿಗೆ ಅರೋಗ್ಯ ರಕ್ಷಣೆ ನೀಡುವ
              ಹೊಣೆಗಾರಿಕೆಯ ಜೊತೆಗೆ ಜಾನುವಾರು ಅಭಿವೃದ್ಧಿ ಚಟುವಟಿಕೆ, ವಿಸ್ತರಣಾ ಸೇವೆಗಳು
              ಮತ್ತು ತರಬೇತಿ, ಸಾಮಾಜಿಕ ಮತ್ತು ಆರ್ಥಿಕ ಕಾರ್ಯಕ್ರಮಗಳ ಅನುಷ್ಠಾನ, ಮಾದರಿ
              ಸಮೀಕ್ಷೆ ಮತ್ತು ಜಾನುವಾರು ಗಣತಿ ಮುಂತಾದ ಕಾರ್ಯಾಕ್ರಮಗಳನ್ನು ಇಲಾಖೆಯು ತನ್ನ
              ವಿವಿಧ ಸ್ತರದ ಪಶುವೈದ್ಯ ಸಂಸ್ಥೆಗಳ ಜಾಲದ ಮೂಲಕ ಯಶಸ್ವಿಯಾಗಿ
              ನಿರ್ವಹಿಸುತ್ತಿದೆ.
            </p>
            <p>
              ಪ್ರಸ್ತುತ ರಾಯಬಾಗ ತಾಲೂಕಿನಲ್ಲಿ ಒಟ್ಟು 3 ಪಶು ಆಸ್ಪತ್ರೆಗಳು 10- ಪಶು
              ಚಿಕಿತ್ಸಾಲಯಗಳು ಹಾಗೂ 3- ಪ್ರಾಥಮಿಕ ಪಶು ಚಿಕತ್ಸಾ ಕೇಂದ್ರಗಳಿಂದ ರೈತರಿಗೆ
              ಸೇವೆ ಸಲ್ಲಸುತ್ತಿದ್ದಾರೆ.
            </p>
          </div>
        </div>
      </div>

      <h2>ಆನ್ಲೈನ್ ಸೇವೆಗಳು</h2>
      <div className="marquee">
        <div className="lst 1">
          <Link
            to="https://punyakoti.karahvs.in"
            title="ಪುಣ್ಯಕೋಟಿ ದತ್ತು ಯೋಜನೆ"
            target="_blank"
          >
            ಪುಣ್ಯಕೋಟಿ ದತ್ತು ಯೋಜನೆ
          </Link>
        </div>
        {/* Add more links as needed */}
        <div class="lst 2">
          <a
            title="ರಾಷ್ಟ್ರೀಯ ಜಾನುವಾರು ಮಿಷನ್"
            href=" https://www.nlm.udyamimitra.in "
            target="_blank"
          >
            ರಾಷ್ಟ್ರೀಯ ಜಾನುವಾರು ಮಿಷನ್
          </a>
        </div>

        <div class="lst 3">
          <a
            title="ಪಶುಸಂಗೋಪನೆ ಮೂಲಸೌಕರ್ಯ ಅಭಿವೃದ್ಧಿ ನಿಧಿ"
            href=" https://ahidf.udyamimitra.in/ "
            target="_blank"
          >
            ಪಶುಸಂಗೋಪನೆ ಮೂಲಸೌಕರ್ಯ ಅಭಿವೃದ್ಧಿ ನಿಧಿ
          </a>
        </div>

        <div class="lst 4">
          <a
            title="ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್"
            href=" https://www.unionbankofindia.co.in/english/kisan-credit-card-animal-husbandry-fishery.aspx "
            target="_blank"
          >
            ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್
          </a>
        </div>

        <div class="lst 5">
          <a title="ಸಕಾಲ" href=" http://sakala.kar.nic.in/ " target="_blank">
            ಸಕಾಲ
          </a>
        </div>

        <div class="lst 6">
          <a
            title="ಪಶು ಔಷಧ"
            href=" http://pashuaushadha.kar.nic.in/ "
            target="_blank"
          >
            ಪಶು ಔಷಧ
          </a>
        </div>

        <div class="lst 7">
          <a
            title="ಫ್ರೂಟ್ಸ್"
            href=" https://fruits.karnataka.gov.in/ "
            target="_blank"
          >
            ಫ್ರೂಟ್ಸ್
          </a>
        </div>

        <div class="lst 8">
          <a
            title="ಸೇವಾ ಸಿಂಧು"
            href=" https://sevasindhu.karnataka.gov.in/ "
            target="_blank"
          >
            ಸೇವಾ ಸಿಂಧು
          </a>
        </div>

        <div class="lst 9">
          <a
            title="ಇ ಪ್ರಕ್ಯೂರ್&zwnj;ಮೆಂಟ್"
            href=" https://eproc.karnataka.gov.in/ "
            target="_blank"
          >
            ಇ ಪ್ರಕ್ಯೂರ್&zwnj;ಮೆಂಟ್
          </a>
        </div>
      </div>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="designn.js" charSet="utf-8"></script>
    </div>
  );
};

export default House;
