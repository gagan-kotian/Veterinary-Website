import React, { useState } from "react";
import "./Descriptive.css";
import { Link } from "react-router-dom";
import logoImage from "./logo.jpg";

const Azola = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="des">
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
              <Link to="/" className="active">
                {" "}
                {/* Replace <a> with <Link> */}
                <span className="icon">
                  <i className="fas fa-home"></i>
                </span>
                <span className="item">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/">
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
              <Link to="/">
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
          <div className="info">
            <h2 className="kan" style={{ fontSize: "50px" }}>
              CeÉÆ¯Áè- ¥ÀAiÀiÁðAiÀÄ ¥À±ÀÄ DºÁgÀ
            </h2>
            <br />
            <h1 className="kan">n</h1>
            <div className="kan">
              * ¥À±ÀÄ DºÁgÀzÀ ªÉZÀÑ 60%.
              <br />
              * ¹zÀÞ¥Àr¹zÀ ¥À±ÀÄ CºÁgÀzÀ ¨É¯É PÀZÁÑ ¥ÀzÁxÀðUÀ¼À ¨É¯ÉAiÀÄ£ÀÄß
              CªÀ®A©vÀ .<br />
              * ¥À±ÀÄ DºÁgÀzÀ ¨É¯É KjPÉAiÀÄ £ÉÃgÀ ¥ÀjuÁªÀÄ ºÁ°£À GvÁàzÀ£Á
              ªÉZÀÑzÀ ªÉÄÃ¯É.
              <br />
              * EzÀ£ÀÄß ¤AiÀÄAwæ¸À®Ä C¸ÁA¥ÀæzÁ¬ÄPÀ DºÁgÀUÀ¼À£ÀÄß §¼À¸À§ºÀÄzÀÄ.
              <br />
              * EzÀgÀ°èCeÉÆ¯Áè §¼ÀPÉ MAzÀÄ ªÀÄÄRå PÀæªÀÄ.
              <br />
            </div>
            <br />
            <h1 className="kan">CeÉÆ¯Áè JAzÀgÉÃ£ÀÄ?</h1>
            <div className="kan">
              <br />
              <img src="az1.png" width="100px" height="200px" alt="Image1" />
              <img src="az2.png" width="100px" height="200px" alt="Image2" />
              <br />
              * EzÉÆAzÀÄ ¤Ã° - ºÀ¹gÀÄ ¥Áa eÁwAiÀÄ ¸À¸Àå. ¨sÀvÀÛzÀ UÀzÉÝUÀ¼À°è
              ªÁvÁªÀgÀtzÀ ¸ÁgÀd£ÀPÀªÀ£ÀÄß »r¢qÀÄªÀ UÉÆ§âgÀzÀAvÉ
              §¼À¸À¯ÁUÀÄwÛvÀÄÛ.
              <br />
              * CeÉÆ¯ÁèªÀ£ÀÄß EwÛÃZÉUÉ ¥À±ÀÄ DºÁgÀªÁV §¼À¸À¯ÁUÀÄwÛzÉ.
              <br />
            </div>
            <br />
            <h1 className="kan">CeÉÆ¯Áè ¨É¼É¸ÀÄªÀÅzÀÄ ºÉÃUÉ?</h1>
            <div className="kan">
              * ªÀÄ£ÉAiÀÄ »vÀÛ®°è,CAUÀ¼ÀzÀ°è,vÉÆÃlzÀ°è vÉÆnÖUÀ¼À£ÀÄß ¤«Äð¹
              ¨É¼É¸À§ºÀÄzÀÄ.
              <br />
              * ¨É¼É¸À®Ä ±ÀæªÀÄ ªÉZÀÑUÀ¼ÉgÀqÀÆ PÀrªÉÄ.
              <br />
              * 7.5 Cr x 5 Cr GzÀÝUÀ®PÉÌ 10 CAUÀÄ® D¼À«gÀÄªÀ vÉÆnÖ
              vÉUÉAiÀÄ¨ÉÃPÀÄ.
              <br />
              * vÉÆnÖAiÀÄ°è 9 Cr x 6 Cr C¼ÀvÉAiÀÄ ¥Áè¹ÖPï ºÁ¼É ºÀgÀqÀ¨ÉÃPÀÄ.
              <br />
              * vÉÆnÖAiÀÄ vÀ¼À ¸ÀªÀÄvÀmÁÖVgÀ¨ÉÃPÀÄ.
              <br />
              * F «zsÀzÀ°è ¤«Äð¹zÀ vÉÆnÖAiÀÄ°è ¤ÃgÀÄ ¤®ÄèªÀAwgÀ¨ÉÃPÀÄ.
              <br />
              * vÉÆnÖAiÀÄ°è ¸ÀÄªÀiÁgÀÄ 30-35 PÉf ¥sÀ®ªÀvÁÛzÀ ªÀÄtÄÚ
              ºÀgÀqÀ¨ÉÃPÀÄ. 10 °Ã ¤Ãj£À°è :--
              <br /> 1) 4-5 PÉf ¸ÀUÀtÂ
              <br />
              2) 0-20 UÁæA ¸ÀÆ¥Àgï ¥sÁ¸ÉáÃmï <br />
              3) 50 UÁæA ®ªÀt.
              <br />
              * vÉÆnÖAiÀÄ°è 10 ¸ÉA.«ÄÃ. D¼À«gÀÄªÀAvÉ ¤ÃgÀÄ ¤°è¸À¨ÉÃPÀÄ. «Ä±Àæt
              vÀAiÀiÁj¹ vÉÆnÖAiÀÄ°è ºÀgÀrgÀÄªÀ ªÀÄtÂÚ£À ªÉÄÃ¯É ¸ÀÄjAiÀÄ¨ÉÃPÀÄ.
              <br />
              * F jÃw ¹zÀÞ¥Àr¹zÀ ©vÀÛ£É vÉÆnÖAiÀÄ°è 1-1.5 PÉf CeÉÆ¯Áè ©vÀÛ£É
              ªÀiÁqÀ§ºÀÄzÀÄ.
              <br />
              * ©vÀÛ£ÉAiÀÄ 8 £ÉÃ ¢£À¢AzÀ ¥Àæw¢£À 1 PÉf CeÉÆ¯Áè ®¨sÀå.
              <br />
            </div>
            <br />
            <h1 className="kan">CeÉÆ¯Áè ºÉÃUÉ §¼À¸À¨ÉÃPÀÄ ?</h1>
            <div className="kan">
              * ¥Àæw¢£À ¥Àæw ºÀ¸ÀÄ«UÉ UÀjµÀÖ 2 PÉf ¥ÀæªÀiÁt.
              <br />
              * ¥À±ÀÄ DºÁgÀzÉÆA¢UÉ ¨ÉgÉ¹ CxÀªÁ ¥ÀævÉåÃPÀªÁV.
              <br />
              * ¥ÁægÀA¨sÀ 100 UÁæA ¥ÀæªÀiÁt¢AzÀ.
              <br />
              * ¨É®èzÀ ¤ÃgÀ£ÀÄß ¸Àé®à ¥ÀæªÀiÁtzÀ°è ¸ÉÃj¹ w¤ß¸À§ºÀÄzÀÄ.
              <br />
              * ¥Àæw ¢£À 100 UÁæA £ÀµÀÄÖ ºÉZÀÄÑªÀj.
              <br />
              * CeÉÆÃ¯Áè ¤ÃrzÀ ºÀ¸ÀÄUÀ¼À°è
              <br /> - ºÁ®Ä GvÁàzÀ£É
              <br />
              - ºÁ°£À PÉÆ©â£ÀA±À PÉÆ§ÄâgÀ»vÀ WÀ£ÀªÀ¸ÀÄÛUÀ¼À ¥ÀæªÀiÁt
              KjPÉAiÀiÁUÀÄvÀÛzÉ
              <br />
            </div>
            <br />
            <h1 className="kan">CeÉÆ¯Áè §¼ÀPÉAiÀÄ G¥ÀAiÉÆÃUÀUÀ¼ÉÃ£ÀÄ?</h1>
            <div className="kan">
              ºÁ°£À GvÁàzÀ£ÉAiÀÄ ¥ÀæªÀiÁtzÀ°è 10-12% ºÉZÀÑ¼À.
              <br />
              ¥À±ÀÄ DºÁgÀzÀ ªÉZÀÑzÀ°è 20-25 % PÀrvÀ.
              <br />
              PÉÆÃ½UÀ¼À zÉÃºÀzÀ vÀÆPÀ ºÉZÀÑ¼À.
              <br />
              ªÉÆmÉÖUÀ¼À°è£À ºÀ¼À¢ ¥ÀæªÀiÁtzÀ ºÉZÀÑ¼À.
              <br />
              ºÉÆ¼À¥ÀÅ¼Àî ªÉÆmÉÖ a¥ÀÅöàUÀ¼ÀÄ.
              <br />
            </div>
            <br />
            <h1 className="kan">
              CeÉÆ¯Áè ¨É¼É¸ÀÄªÀ°è UÀªÀÄ¤¸À¨ÉÃPÁzÀ CA±ÀUÀ¼ÀÄ
            </h1>
            <div className="kan">
              CeÉÆ¯Áè ¨É¼ÉUÉ 20-25 ¸É ªÁvÁªÀgÀt C¥ÉÃQëvÀ.
              <br />
              GµÀÚvÉ ºÉZÁÑzÀgÉ ¨É¼ÀªÀtÂUÉ QëÃt.
              <br />
              QÃlUÀ¼ÀÄ ¨É¼ÉAiÀÄ£ÀÄß DªÀj¸ÀÄvÀÛªÉ.
              <br />
              £ÉÃgÀªÁzÀ ¸ÀÆAiÀÄð£À QgÀtªÁUÀ°Ã ¸ÀA¥ÀÇtð £ÉgÀ¼ÁUÀ°Ã ¨É¼ÉAiÀÄ£ÀÄß
              PÀrªÉÄ ªÀiÁqÀÄvÀÛzÉ.
              <br />
              CeÉÆ¯Áè vÉÆnÖUÉ MtVzÀ ªÀÄgÀzÀ J¯É , PÀrØUÀ¼ÀÄ ©Ã¼ÀzÀAwgÀ¨ÉÃPÀÄ.
              <br />
              vÉÆnÖAiÀÄ°è£À ¤Ãj£À ªÀÄlÖ 5 ¸ÉA.«ÄÃ.VAvÀ PÀrªÉÄ DUÀ¨ÁgÀzÀÄ.
              <br />
              ¥Àæw ªÁgÀ 5 °Ã ¤Ãj£À°è 1 PÉf ¸ÀUÀtÂ ªÀÄvÀÄÛ 20 UÁæA ®ªÀt ¨ÉgÉ¹
              vÉÆnÖUÉ ºÁPÀ¨ÉÃPÀÄ.
              <br />
              ¨É¼ÀªÀtÂUÉ E½ªÀÄÄRªÁzÀgÉ 2 wAUÀ¼À £ÀAvÀgÀ vÉÆnÖAiÀÄ°è£À ¨sÁUÀµÀ:
              CxÀªÁ 6 wAUÀ¼À £ÀAvÀgÀ ¥ÀÇtð ªÀÄtÄÚ §zÀ¯Á¬Ä¹.
              <br />
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Azola;
