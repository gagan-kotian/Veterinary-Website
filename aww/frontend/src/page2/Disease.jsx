import React, { useState } from "react";
import "./Descriptive.css";
import { Link } from "react-router-dom";
import logoImage from "./logo.jpg";

const Disease = () => {
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
            <div className="kan">
              <h2 className="kan" style={{ fontSize: "50px" }}>
                ¤ªÀðºÀuÁgÉÆÃUÀUÀ¼ÀÄ - ¤ªÁgÀuÉÆÃ¥ÁAiÀÄUÀ¼ÀÄ
              </h2>
              <br />
              <h1 className="kan">¤ªÀðºÀuÁ gÉÆÃUÀUÀ¼ÀÄ -¥ÀjZÀAiÀÄ </h1>
              <div className="kan">
                DzsÀÄ¤PÀ ºÉÊ£ÀÄUÁjPÉAiÀÄ°è ¤ªÀðºÀuÁ «zsÁ£ÀUÀ½UÉ ¥ÀæªÀÄÄR ¸ÁÜ£À.
                <br />
                ¤ªÀðºÀuÁ «zsÁ£ÀUÀ¼À ¥Á®£ÉAiÀÄ°è£À ¯ÉÆÃ¥ÀUÀ½AzÀ eÁ£ÀÄªÁgÀÄUÀ¼À°è
                ºÀ®ªÀÅ gÉÆÃUÀUÀ¼ÀÄ PÁtÂ¹PÉÆ¼ÀÄîvÀÛªÉ.
                <br />
                ¥ÀjuÁªÀÄ GvÁàzÀ£ÉAiÀÄ°è E½ªÀÄÄR , DyðPÀ £ÀµÀÖ.
                <br />
                EªÀÅUÀ½UÀ aQvÉì ¤ÃqÀ®Ä ªÀiÁqÀÄªÀ ªÉZÀÑ ºÉÊ£ÀÄUÁjPÉUÉ DyðPÀ
                ºÉÆgÉ.
                <br />
                ¸ÀªÀÄAiÉÆÃavÀ/¸ÀÆPÀÛ ¤ªÀðºÀuÁ «zsÁ£ÀUÀ¼À C£ÀÄ¸ÀgÀuÉ¬ÄAzÀ
                EªÀÅUÀ¼À£ÀÄß ¤ªÁj¸À§ºÀÄzÀÄ.
                <br />
              </div>
              <br />
              <h1 className="kan">¤ªÀðºÀuÁ «zsÁ£ÀUÀ¼ÀÄ AiÀiÁªÀÅªÀÅ?</h1>
              <div className="kan">
                DzsÀÄ¤PÀ ºÉÊ£ÀÄUÁjPÉAiÉÄ°è GvÀÛªÀÄ ¤ªÀðºÀuÉ «zsÁ£ÀUÀ¼ÀÄ
                UÀ¨sÀðzsÀj¹zÀ ºÀ¸ÀÄUÀ¼À ¤ªÀðºÀuÉ¬ÄAzÀ ¥ÁægÀA¨sÀ.
                <br />
                £ÀAvÀgÀ ºÀÄnÖzÀ PÀgÀÄ«£À ¤ªÀðºÀuÉ¬ÄAzÀ ¥ÁægÀA©ü¹ CzÀÄ ¨É¼ÉzÀÄ
                zÉÆqÀØzÁV UÀ¨sÀðzsÀj¹ PÀgÀÄ ºÁPÀÄªÀªÀgÉUÉ J¯Áè ºÀAvÀzÀ®Æè
                M¼ÀUÉÆArzÉ.
              </div>
              <br />
              <h1 className="kan">UÀ¨sÀð zsÀj¹zÀ ºÀ¸ÀÄ«£À ¤ªÀðºÀuÉ.</h1>
              <div className="kan">
                ¸ÀÆ°£À ¸ÀA¥ÀÇtð ¢£ÀUÀ¼À°è GvÀÛªÀÄ ¸ÀªÀÄvÉÆÃ®£À DºÁgÀ.
                <br />
                PÀæªÀÄ§zÀÞ ®¹PÁ PÁAiÀÄðPÀæªÀÄ.
                <br />
                PÀ¤µÀÖ 8 ªÁgÀUÀ¼À PÁ® ºÁ®ÄPÀgÉAiÀÄÄªÀÅzÀÄ ¤°è¸ÀÄªÀÅzÀÄ.
                <br />
                UÀ¨sÀðzsÀj¹zÀ ºÀ¸ÀÄ«UÉ CªÀ±ÀåPÀ DgÁªÀÄ.
                <br />
                ¸ÁPÀµÀÄÖ ¸ÀÜ¼ÁªÀPÁ±À, ®WÀÄ ªÁåAiÀiÁªÀÄ.
                <br />
              </div>
              <br />
              <h1 className="kan">vÀÄA§Ä UÀ¨sÀðzÀ ºÀ¸ÀÄ«£À ¤ªÀðºÀuÉ .</h1>
              <div className="kan">
                * PÀgÀÄ ºÁPÀÄªÀ ¸ÀªÀÄAiÀÄ ¸À«ÄÃ¦¹zÀAvÉ ºÀ¸ÀÄªÀ£ÀÄß ¥ÀævÉåÃQ¹.
                <br />
                * PÀgÀÄ d¤¸ÀÄªÀ PÉÆnÖUÉ ¸ÁzsÀåªÁzÀµÀÄÖ ±ÀÄaAiÀiÁVgÀ¨ÉÃPÀÄ.
                <br />
                * ¸ÀUÀtÂ, ªÀÄtÄÚ, ªÀÄ°£ÀªÁzÀ DºÁgÀ ¥ÀzÁxÀðUÀ¼ÀÄ ¤µÉÃzsÀ.
                <br />
                * PÀgÀÄ d£À£ÀzÀ ¸ÀAzÀ¨sÀð ¥À±ÀÄªÉÊzÀåQÃAiÀÄ ¸ÉÃªÉ
                ®¨sÀåªÁVgÀ¨ÉÃPÀÄ.
                <br />
                * ºÀ¸ÀÄ«£À ªÉÄÊ ªÀÄvÀÄÛ ¥Àj¸ÀgÀ ¸ÀéZÀÑªÁVgÀ¨ÉÃPÀÄ.
                <br />
              </div>
              <br />
              <h1 className="kan">
                £ÀªÀeÁvÀ PÀgÀÄ«£À ªÉÆzÀ® 3 ¢£ÀUÀ¼À ¤ªÀðºÀuÉ
              </h1>
              <div className="kan">
                PÀgÀÄ d¤¹zÀ PÀÆqÀ¯ÉÃ G¹gÁlzÀ zsÀÈrÃPÀgÀt.
                <br />
                ±ÀÄzÀÞªÁzÀ §mÉÖ¬ÄAzÀ ¸ÀA¥ÀÇtð ¸ÀéZÀÑªÀiÁqÀÄªÀÅzÀÄ.
                <br />
                ºÉÆPÀÌ¼ÀÄ §½îAiÀÄ£ÀÄß 7% nAZÀgï LAiÉÆrÃ£ï zÁæªÀtzÀ°è
                CzÀÄÝªÀÅzÀÄ.
                <br />
                ¸ÁzsÀåªÁzÀµÀÄÖ ¨ÉÃUÀ VtÄÚ ºÁ®Ä PÀÄr¸ÀÄªÀÅzÀÄ.
                <br />
                ªÉÆzÀ® ªÀÄ® «¸Àdð£É zsÀÈrÃPÀgÀt.
                <br />
                PÀgÀÄ«£À ¥Àj¸ÀgÀzÀ ¸ÀA¥ÀÇtð ¸ÀéZÀÑvÉ PÁ¥ÁqÀÄªÀÅzÀÄ.
                <br />
              </div>
              <br />
              <h1 className="kan">VtÄÚ ºÁ®Ä PÀÄr¸ÀÄªÀÅzÀÄ</h1>
              <div className="kan">
                PÀgÀÄUÀ¼À ¸ÁPÁtÂPÉAiÀÄ°è gÉÆÃUÀ ¤AiÀÄAvÀæt ªÀÄvÀÄÛ aQvÉì zÉÆqÀØ
                ¸ÀªÁ®ÄUÀ¼ÀÄ.
                <br />
                PÀgÀÄ«£À°è gÉÆÃUÀ GAlÄ ªÀiÁqÀÄªÀ ¸ÀÆPÀë÷äfÃ«UÀ¼ÀÄ §ºÀÄvÉÃPÀ
                PÀgÀÄ«£À ¥Àj¸ÀgÀzÀ°è ¸ÀzÁ PÁ® EgÀÄvÀÛzÉ.
                <br />
                DzÀgÉ PÀgÀÄ«UÉ ¸ÀzÁ PÁ® gÉÆÃUÀ EgÀÄªÀÅ¢®è.
                <br />
                ºÀÄnÖzÀ PÀgÀÄ«£À°è gÉÆÃUÀ ¤gÉÆÃzsÀPÀ ±ÀQÛGAmÁUÀÄªÀÅzÀÄ VtÄÚºÁ®Ä
                PÀÄr¸ÀÄªÀÅzÀjAzÀ. <br />
                ¤ªÀðºÀuÉAiÀÄ°è GAmÁUÀÄªÀ ªÀåvÁå¸ÀUÀ¼ÀÄ gÉÆÃUÀ ¤gÉÆÃzsÀPÀ ±ÀQÛ
                PÀrªÉÄ ªÀiÁqÀÄvÀÛªÉ <br />
              </div>
              <br />
              <h1 className="kan">VtÄÚ ºÁ°£À UÀÄt «±ÉÃµÀUÀ¼ÀÄ</h1>
              <div className="kan">
                £ÀªÀeÁvÀ PÀgÀÄ«UÉ gÉÆÃUÀPÁgÀt ¸ÀÆPÁë÷ätÄUÀ¼À ¸ÀA¥ÀPÀðªÁUÀÄªÀ
                ªÀÄÄ£Àß VtÄÚ ºÁ®Ä PÀÄr¸À¨ÉÃPÀÄ.
                <br />
                PÀgÀÄ ºÀÄnÖzÀ PÀÆqÀ¯ÉÃ ºÀ¸ÀÄ«£À PÉZÀÑ®£ÀÄß ¸ÀéZÀÑªÁV vÉÆ¼ÉzÀÄ
                VtÄÚ ºÁ®Ä PÀÄr¸À¨ÉÃPÀÄ.
                <br />
                PÀgÀÄUÀ½UÉ ªÉÆzÀ® ¢£À VtÄÚ ºÁ®Ä PÀÄr¸ÀÄªÀ°è «±ÉÃµÀ UÀªÀÄ£À
                ºÀj¹zÀgÉ DgÉÆÃUÀåPÀgÀ, ºÉZÀÄÑ zÉÃºÀ vÀÆPÀzÀ PÀgÀÄUÀ¼À£ÀÄß
                ºÉÆAzÀ§ºÀÄzÀÄ
                <br />
              </div>
              <br />
              <h1 className="kan">
                ºÀ¸ÀÄ«£À ¥ÀæªÀÄÄR ¤ªÀðºÀuÁ gÉÆÃUÀUÀ¼ÀÄ AiÀiÁªÀÅªÀÅ?
              </h1>
              <div className="kan">
                1. ¥ÀgÀÆ¥ÀfÃ«UÀ½AzÀ GAmÁUÀÄªÀ gÉÆÃUÀUÀ¼ÀÄ.
                <br />
                * M¼À ¥ÀgÉÆÃ¥ÀfÃ«UÀ¼ÀÄ * ºÉÆgÀ ¥ÀgÉÆÃ¥ÀfÃ«UÀ¼ÀÄ
                <br />
                2. PÉZÀÑ®Ä ¨ÁªÀÅ.
                <br />
                3. ®¹PÉ ¤Ãr ¤AiÀÄAwæ¸À§ºÀÄzÁzÀ ¸ÁAPÁæ«ÄPÀ gÉÆÃUÀUÀ¼ÀÄ.
                <br />
                * PÁ®Ä ¨Á¬Ä dégÀ gÉÆÃUÀ
                <br />
              </div>
            </div>
          </div>
          <div>
            <h1 className="kan">M¼À ¥ÀgÉÆÃ¥ÀfÃ«UÀ¼ÀÄ</h1>
            <div className="kan">
              <ul>
                <li>¥ÉÇæÃmÉÆÃeÉÆÃªÁ (KPÀ PÉÆÃ±ÀzÀ fÃ«UÀ¼ÀÄ)</li>
                <li>dAvÀÄ ºÀÄ¼ÀUÀ¼ÀÄ</li>
              </ul>
              <br />
              <ul>
                <li>zÀÄAqÀÄ ºÀÄ¼ÀÄ</li>
                <li>¯Ár ºÀÄ¼ÀÄ</li>
                <li>
                  ZÀ¥ÀàmÉÖ ºÀÄ¼ÀÄ eÁ£ÀÄªÀgÀÄ«£À gÀPÀÛ, «ÄzÀÄ¼ÀÄ,PÀtÄÚ,
                  ±Áé¸ÀPÉÆÃ±À, °ªÀgï (AiÀÄPÀÈvï), PÀgÀÄ¼ÀÄ ªÀÄvÀÄÛ EvÀgÉ
                  fÃuÁðAUÀUÀ¼À°è EgÀÄvÀÛªÉ.
                </li>
              </ul>
            </div>
            <br />
            <h1 className="kan">M¼À ¥ÀgÉÆÃ¥ÀfÃ«UÀ½AzÁUÀÄªÀ ¥ÀjuÁªÀÄUÀ¼ÀÄ?</h1>
            <div className="kan">
              <ul>
                <li>¥ÀgÉÆÃ¥ÀfÃ«UÀ¼ÀÄ ¸ÉÃjPÉÆArgÀÄªÀ CAUÀªÀ£ÀÄß DzsÀj¹zÉ.</li>
                <li>
                  ¨ÉÃ¢, gÀPÀÛ»Ã£ÀvÉ, £ÀgÀªÀÄAqÀ® vÉÆAzÀgÉUÀ¼ÀÄ, PÁªÀiÁ¯É,
                  G¹gÁlzÀ vÉÆAzÀgÉ, PÀgÀÄ½£À GjHvÀ, fÃuÁðAUÀzÀ CqÀZÀuÉ,
                  UÀ¨sÀðzsÀj¸ÀzÉÃ EgÀÄªÀÅzÀÄ, PÀAzÀÄ ºÁPÀÄªÀÅzÀÄ ªÀÄÄAvÁzÀ £ÉÃgÀ
                  ¥ÀjuÁªÀÄUÀ½AzÀ PÀÄVÎzÀ GvÁàzÀ£Á
                  ¸ÁªÀÄxÀðå/PÁAiÀÄðPÀëªÀÄvÉUÀ¼À®èzÉ ¥ÁætºÁ¤ PÀÆqÀ
                  ¸ÀA¨sÀ«¸À§ºÀÄzÀÄ.
                </li>
              </ul>
            </div>
            <br />
            <h1 className="kan">M¼À ¥ÀgÉÆÃ¥ÀfÃ«UÀ¼À ¤AiÀÄAvÀæt ºÉÃUÉ?</h1>
            <div className="kan">
              <ul>
                <li>
                  ¤¢ðµÀÖ gÉÆÃUÀzÀ aºÉßUÀ¼ÀÄ ªÀåPÀÛªÁUÀÄwÛzÀÝgÉ ¥ÀjºÁgÀPÀæªÀÄ
                  C¼ÀªÀrPÉ ¸ÀÄ®¨sÀ.
                </li>
                <li>
                  gÉÆÃUÀzÀ aºÉßUÀ¼ÀÄ EzÀÝ°è ¥ÀjºÁgÀPÀæªÀÄ C¼ÀªÀrPÉ
                  ¥ÀæAiÀiÁ¸ÀPÀgÀ.
                </li>
                <li>
                  CAvÀºÀ ¸ÀAzÀ¨sÀð aQvÉì eÁ£ÀÄªÁgÀÄ«£À ªÀÄ® (¸ÀUÀtÂ) ¥ÀjÃPÉëAiÀÄ
                  ¥sÀ°vÁA±À DzsÁjvÀ.
                </li>
              </ul>
            </div>
            <br />
            <h1 className="kan">dAvÀÄ£Á±ÀPÀUÀ¼À §¼ÀPÉ</h1>
            <div className="kan">
              <ol>
                <li>dAvÀÄºÀÄ¼ÀUÀ¼À£ÀÄß £Á±À¥Àr¸ÀÄªÀÅzÀÄ.</li>
                <li>
                  dAvÀÄºÀÄ¼ÀUÀ¼ÀÄ zÉÃºÀªÀ£ÀÄß ¸ÉÃgÀzÀAvÉ ªÀÄÄAeÁUÀævÉ
                  ªÀ»¸ÀÄªÀÅzÀÄ.
                </li>
                <li>
                  dAvÀÄ£Á±ÀPÀUÀ¼À£ÀÄß ¤¢üðµÀÖ ¸ÀªÀÄAiÀÄ ªÀÄvÀÄÛ CªÀ¢üAiÀÄ°è
                  ¤gÀAvÀgÀªÁV ¤ÃqÀÄªÀÅzÀÄ.
                </li>
                <li>
                  ¥ÀgÉÆÃ¥ÀfÃ«UÀ¼À ªÀÄÄA¢£À ¸ÀvÀvÀ ¦Ã½UÉUÀ¼À£ÀÄß
                  £Á±À¥Àr¸ÀÄªÀÅzÀÄ.
                </li>
                <li>¥ÀgÉÆÃ¥ÀfÃ«UÀ¼À ªÉÆmÉÖ GvÁàzÀ£É ¤AiÀÄAwæ¸ÀÄªÀÅzÀÄ.</li>
              </ol>
            </div>
            <br />
            <h1 className="kan">PÀgÀÄUÀ½UÉ dAvÀÄ£Á±ÀPÀ ¤ÃrPÉ</h1>
            <div className="kan">
              <p>
                ªÉÆzÀ® ¨ÁjUÉ - 30 jAzÀ 45 ¢£ÀUÀ¼À ªÀAiÀÄ¹ì£À°è.
                <br />
                JgÀqÀ£ÉÃ ¨ÁjUÉ - 3 wAUÀ¼À ªÀAiÀÄ¹ì£À°è.
                <br />
                ªÀÄÆgÀ£ÉÃ ¨ÁjUÉ - 6 wAUÀ¼À ªÀAiÀÄ¹ì£À°è.
                <br />
              </p>
              <p>6 wAUÀ¼À £ÀAvÀgÀ ¥À±ÀÄªÉÊzÀågÀ ¸À®ºÉAiÀÄ ªÉÄÃgÉUÉ.</p>
            </div>
            <br />
            <h1 className="kan">ºÉÆgÀ ¥ÀgÉÆÃ¥ÀfÃ«UÀ¼ÀÄ</h1>
            <div className="kan">
              <p>«zsÀUÀ¼ÀÄ:</p>
              <ul>
                <li>£ÉÆtUÀ¼ÀÄ</li>
                <li>aUÀlUÀ¼ÀÄ</li>
                <li>ºÉÃ£ÀÄ</li>
                <li>GtÂÚ</li>
                <li>£ÀÄ¹</li>
              </ul>
              <p>¥ÀjuÁªÀÄUÀ¼ÀÄ:</p>
              <ul>
                <li>gÀPÀÛ»Ã£ÀvÉ</li>
                <li>vÀÄjPÉ</li>
                <li>C®fð</li>
                <li>£ÀgÀzË§ð®å</li>
                <li>PÁ¬Ä¯ÉUÀ¼ÀÄ</li>
                <li>PÀÄVÎzÀ GvÁàzÀ£É/PÁAiÀÄðPÀëªÀÄvÉ</li>
                <li>wÃªÀæ ¸ÀAzÀ¨sÀðUÀ¼À°è ¸ÁªÀÅ ¸ÀA¨sÀªÀ¤ÃAiÀÄ</li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="kan">¤ªÁgÀuÉÆÃ¥ÁAiÀÄUÀ¼ÀÄ</h1>
            <div className="kan">
              <p>
                ¤Ãj£À°è ¤UÀ¢üvÀ ¥ÀæªÀiÁtzÀ°è QÃl£Á±ÀPÀªÀ£ÀÄß ¨ÉgÉ¹ eÁ£ÀÄªÁgÀÄ«£À
                ªÉÄÊ vÉÆ¼ÉAiÀÄÄªÀÅzÀÄ.
                <br />
                ºÀ¸ÀÄ QÃl£Á±ÀPÀªÀ£ÀÄß £ÉPÀÌzÀAvÉ UÀªÀÄ¤¸À¨ÉÃPÀÄ.
                <br />
                ªÉÆÃqÀ ¨sÀjvÀ ªÁvÁªÀgÀt QÃl£Á±ÀPÀ §¼ÀPÉUÉ ¸ÀÆPÀÛªÀ®è.
                <br />
                ºÀ¸ÀÄ«£À Q«, vÉÆqÉUÀ¼À M¼À¨sÁUÀUÀ¼À°è QÃl£Á±ÀPÀ vÀUÀÄ®¢zÀÝgÉ
                ¸ÀA¥ÀÇtð ¥ÀæªÀiÁtzÀ°è ¥ÀgÉÆÃ¥ÀfÃ« £Á±ÀªÁUÀzÀÄ.
                <br />
                «Ä±ÀætzÀ C£ÀÄ¥ÁvÀ PÀrªÉÄAiÀiÁzÀgÉ C£ÀÄ¥ÀAiÀÄÄPÀÛ / ºÉZÁÑzÀgÉ
                C¥ÁAiÀÄPÁj.
                <br />
                ¸ÀA¥ÀPÀð¢AzÀ £Á±À¥Àr¸ÀÄªÀ QÃl£Á±ÀPÀUÀ½VAvÀ gÀPÀÛzÀ ªÀÄÆ®PÀ ¸ÉÃj
                £Á±À¥Àr¸ÀÄªÀ QÃl£Á±ÀPÀUÀ¼ÀÄ ºÉZÀÄÑ ¥ÀjuÁªÀÄPÁj.
                <br />
                ¥Àæ¸ÀÄÛvÀ M¼À/ºÉÆgÀ JgÀqÀÆ ¥ÀgÉÆÃ¥ÀfÃ« £Á±ÀPÀUÀÄt ºÉÆA¢gÀÄªÀ
                OµÀzsÀUÀ¼ÀÄ ¥ÀæZÀ°vÀ.
                <br />
                ¥À±ÀÄªÉÊzÀågÀ ¸À®ºÉAiÀÄAvÉ PÀæªÀÄ§zÀÞ, ¤AiÀÄvÀPÁ°PÀ
                ¥ÀgÉÆÃ¥ÀfÃ«£Á±ÀPÀUÀ¼À §¼ÀPÉ ¯Á¨sÀzÁAiÀÄPÀ/DzsÀÄ¤PÀ
                ºÉÊ£ÀÄUÁjPÉAiÀÄ CvÀåªÀÄÆ®å CA±À. <br />
              </p>
            </div>
            <br />
            <h1 className="kan" style={{ color: "#10558d" }}>
              PÁ®Ä ¨Á¬Ä dégÀ gÉÆÃUÀ
            </h1>
            <br />
            <div className="kan">
              <p>
                ¨Á¬Ä ªÀÄvÀÄÛ PÁ®ÄUÀ¼À°è PÁtÂ¹PÉÆ¼ÀÄîªÀ UÀÄ¼ÉîUÀ¼À°è£À zÀæªÀzÀ°è
                ªÉÊgÁtÄ Cw ºÉZÁÑV EgÀÄvÀÛzÉ. <br />
                gÉÆÃUÀUÀæ¸ÀÛ ¥ÁætÂAiÀÄ eÉÆ®Äè, ºÁ®Ä, ªÀÄÆvÀæ ªÀÄvÀÄÛ
                ¸ÀUÀtÂAiÀÄ®Æè EgÀ§ºÀÄzÀÄ.
                <br />
                EªÀÅUÀ¼ÉÆA¢UÉ ¸ÀA¥ÀPÀðªÀÅAmÁUÀÄªÀ AiÀiÁªÀÅzÉÃ ªÀ¸ÀÄÛ«£À ªÀÄÆ®PÀ
                ºÀgÀqÀÄvÀÛzÉ.
                <br />
                gÉÆÃUÀzÀ ¥ÀgÀªÀiÁªÀ¢üAiÀÄ°ègÉÆÃUÀ¦ÃrvÀ ¥ÁætÂAiÀÄ gÀPÀÛzÀ°è
                ªÉÊgÁtÄ EgÀÄvÀÛzÉ.
                <br />
                gÉÆÃUÀ vÀUÀÄ°zÀ ¥ÁætÂUÀ¼ÀÄ gÉÆÃUÀzÀ aºÉßUÀ¼À£ÀÄß vÉÆÃgÀÄªÀ
                ªÉÆÃzÀ¯ÉÃ ªÉÊgÁtÄªÀ£ÀÄß «¸Àfð¸ÀÄvÀÛªÉ.
                <br />
                «±ÉÃµÀªÁV ºÀA¢UÀ¼ÀÄ ºÉZÀÄÑ ªÉÊgÁtÄUÀ¼À£ÀÄß GvÁà¢¸ÀÄvÀÛªÉ.
                <br />
              </p>
            </div>
            <br />
            <h1 className="kan">gÉÆÃUÀ ºÉÃUÉ ºÀgÀqÀÄvÀÛzÉ. . . ?</h1>
            <div className="kan">
              <ul>
                <li>
                  C£ÀÄPÀÆ®PÀgÀ ºÀªÁªÀiÁ£À «zÀÝ°è ªÉÊgÁtÄUÀ¼ÀÄ UÁ½AiÀÄ ªÀÄÆ®PÀ
                  ¸ÁPÀµÀÄÖ zÀÆgÀ ºÀgÀqÀ§®èzÀÄ.
                  <br />
                </li>
                <li>
                  eÁ£ÀÄªÁgÀÄUÀ¼À°è - gÉÆÃUÀ vÀUÀÄ°gÀÄªÀ ¥ÁætÂUÀ¼À £ÉÃgÀ
                  ¸ÀA¥ÀPÀð, ¸ÉÆÃAPÀÄ vÀUÀÄ°gÀÄªÀ DºÁgÀ ¥ÀzÁxÀðUÀ¼ÀÄ, ªÀ¸ÀÄÛUÀ¼À
                  ¸ÀA¥ÀPÀð , ªÀiÁA¸À ªÀÄvÀÄÛ CzÀgÀ GvÀà£ÀßUÀ¼ÀÄ , ¥ÁætÂUÀ¼À
                  ZÀ®£À ªÀ®£À, ªÀÄ£ÀÄµÀågÀÄ, ªÁºÀ£ÀUÀ¼ÀÄ, GqÀÄ¥ÀÅUÀ¼ÀÄ, ªÁºÀ£À
                  ZÀPÀæUÀ¼ÀÄ, eÁ£ÀÄªÁgÀÄ ¸ÀAvÉ eÁvÉæUÀ¼À ªÀÄÆ®PÀ ºÀgÀqÀ§®èªÀÅ.
                  <br />
                </li>
              </ul>
            </div>
            <br />
            <h1 className="kan">gÉÆÃUÀzÀ aºÉßUÀ¼ÉÃ£ÀÄ?</h1>
            <div className="kan">
              <p>zÀ£ÀUÀ¼À°è:-</p>
              <ul>
                <li>dégÀ</li>
                <li>PÀÄVÎzÀ ZÀlÄªÀnPÉUÀ¼ÀÄ</li>
                <li>ªÉÄÊ £ÀqÀÄPÀ</li>
                <li>ªÉÄÃªÀÅ vÀåf¸ÀÄªÀÅzÀÄ</li>
                <li>EzÀÝQÌzÀÝAvÉ ºÁ®Ä E¼ÀÄªÀj PÀrªÉÄAiÀiÁUÀÄªÀÅzÀÄ</li>
                <li>UÉÆgÀ¸ÀÄUÀ¼À°è ªÀÄÈzÀÄvÀé</li>
                <li>PÀÄAlÄªÀÅzÀÄ</li>
                <li>vÀÄnUÀ¼À ºÉÆgÀZÁa«PÉ</li>
                <li>PÉ¼À zÀªÀqÉAiÀÄ C¸ÁªÀiÁ£Àå ¸Àj¸ÀÄ«PÉ</li>
                <li>AiÀÄxÉÃZÀÑªÁV eÉÆ®Äè ¸ÀÄjAiÀÄÄªÀÅzÀÄ</li>
                <li>zÉÃºÀzÀ PÀÄUÀÄÎ«PÉ</li>
                <li>DºÁgÀ ¸ÉÃ«¸À®Ä ¨sÀAiÀÄ¥ÀqÀÄªÀµÀÄÖ ¨Á¬ÄAiÀÄ £ÉÆÃªÀÅ/Gj</li>
              </ul>
            </div>
            <br />
            <h1 className="kan">gÉÆÃUÀzÀ ¥ÀjuÁªÀÄUÀ¼ÉÃ£ÀÄ ?</h1>
            <div className="kan">
              <p>
                ¸ÀtÚ PÀgÀÄUÀ¼À°è ºÉÆgÀvÀÄ¥Àr¹ gÉÆÃUÀ ªÀiÁgÀuÁAvÀPÀªÀ®è.
                <br />
                gÉÆÃUÀ¢AzÀ ZÉÃvÀj¹PÉÆAqÀ §½PÀ GAmÁUÀÄªÀ ¥ÀjuÁªÀÄUÀ¼ÀÄ wÃªÀæ.
                <br />
                gÉÆÃUÀzÀ ¸ÀAzÀ¨sÀð vÀUÀ®ÄªÀ EvÀgÉ ¸ÀÆPÀê÷äfÃ« SÁ¬Ä¯ÉUÀ¼ÀÄ
                ZÉÃvÀjPÉAiÀÄ£ÀÄß ªÀÄÄAzÀÆqÀÄvÀÛªÉ.
                <br />
                CvÀåAvÀ wÃªÀæ ¥ÀjuÁªÀÄ ºÉÊ£ÀÄgÁ¸ÀÄUÀ¼À°è.
                <br />
                ºÁ®Ä E¼ÀÄªÀj PÀrªÉÄ, PÉZÀÑ®Ä ¨ÁªÀÅ, PÀAzÀÄ ºÁPÀÄªÀÅzÀÄ, ¸ÀÄ¢ÃWÀð
                PÀÄAlÄ«PÉ, ºÀÈzÀAiÀÄ ¸ÀA§A¢üvÀ SÁ¬Ä¯ÉUÀ¼ÀÄ.
                <br />
              </p>
            </div>
            <br />
            <h1 className="kan">gÉÆÃUÀzÀ vÀqÉ PÀæªÀÄUÀ¼ÀÄ</h1>
            <div className="kan">
              <p>
                gÉÆÃUÀ PÀArgÀÄªÀ UÁæªÀÄ¢AzÀ ¥ÁætÂUÀ¼À ZÀ®£À ªÀ®£À ¤µÉÃzsÀ
                <br />
                gÉÆÃUÀ PÀArgÀÄ ¥ÀæzÉÃ±ÀzÀ ¸ÀÄvÀÛ ªÀÄÄvÀÛ £ÀqÉAiÀÄÄªÀ ¸ÀAvÉ
                eÁvÉæUÀ¼À ªÉÄÃ¯É ¤§ðAzsÀ.
                <br />
                EvÀgÉ ¸ÀÜ¼ÀUÀ¼À°è ®¹PÉ ªÀiÁr®èzÀ eÁ£ÀÄªÁgÀÄ ¥ÀæªÉÃ±À ¤µÉÃzsÀ.
                <br />
                J¯Áè eÁ£ÀÄªÁgÀÄUÀ½UÉ RqÁØAiÀÄ ªÀÄÄAeÁUÀævÁ ®¹PÉ.
                <br />
                MAzÀÄ ¥ÀæzÉÃ±ÀzÀ J¯Áè eÁ£ÀÄªÁgÀÄUÀ½UÉ KPÀ PÁ®zÀ°è ®¹PÉ.
                <br />
                C¤ªÁAiÀÄð ¸ÀAzÀ¨sÀðzÀ°è gÉÆÃUÀgÀ»vÀ UÁæªÀÄPÉÌ ºÉÆ¸À eÁ£ÀÄªÁgÀÄ
                vÀgÀ¨ÉÃPÁzÀ°è 15-21 ¢£ÀUÀ¼À »AzÉ ®¹PÉ ºÁQgÀ¨ÉÃPÀÄ.
                <br />
              </p>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disease;
