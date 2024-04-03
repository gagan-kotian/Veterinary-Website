import React, { useState } from "react";
import "./Descriptive.css";
import { Link } from "react-router-dom";
import logoImage from "./logo.jpg";

const Mastitis = () => {
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
              PÉZÀÑ® ¨ÁªÀÅ
            </h2>
            <br />
            <h1 className="kan">ªÉÄÃ°¤AzÀ £ÉÆÃl</h1>
            <br />
            <img
              src="top.png"
              width="400px"
              height="200px"
              style={{ margin: "auto" }}
              alt="Top"
            />
            <br />
            <br />
            <ul>
              <li className="kan">
                ºÀ¸ÀÄ«£À PÉZÀÑ®Ä 4 ¥ÀævÉåÃPÀ UÀæAyUÀ½AzÀ gÀavÀ.
              </li>
              <li className="kan">
                ¥ÀæwAiÉÆAzÀÄ UÀæAyUÀÆ ¥ÀævÉåÃPÀªÁV MAzÀÄ vÉÆlÄÖ ªÀÄvÀÄÛ ºÁ®Ä
                ºÉÆgÀ§gÀÄªÀ £Á¼À«zÉ.
              </li>
            </ul>
            <br />
            <h1 className="kan">ªÉÄÃ°¤AzÀ £ÉÆÃl</h1>
            <br />
            <img
              src="side.png"
              width="400px"
              height="200px"
              style={{ margin: "auto" }}
              alt="Side"
            />
            <br />
            <br />
            <ul>
              <li className="kan">
                JqÀ ªÀÄvÀÄÛ §® ¨sÁUÀUÀ¼ÀÄ s¸ÀA¥ÀÇtðªÁV ¥ÀævÉåÃQ¸À®ànÖzÉ.
              </li>
            </ul>
            <br />
            <h1 className="kan">ºÁ°£À GvÁàzÀ£É ºÉÃUÉ?</h1>
            <ul>
              <li className="kan">
                * zÀÄUÀÝUÀæAyAiÀÄ PÉÆÃ±À¥ÀÅAdzÀ PÉÆÃ±ÀUÀ½UÉ gÀPÀÛzÀ ºÀjªÀÅ
                ¥Ë¶×PÁA±ÀUÀ¼À£ÀÄß ¥ÀÇgÉÊ¸ÀÄvÀÛzÉ.
              </li>
              <li className="kan">
                * F ¥Ë¶×PÁA±ÀUÀ¼À£ÀÄß §¼À¹PÉÆAqÀÄ zÀÄUÀÝUÀæAyAiÀÄ PÉÆÃ±ÀUÀ¼ÀÄ
                ºÁ®Ä GvÁà¢¹ PÉÆÃ±À¥ÀÅAdzÀ ªÀÄzsÀåPÉÌ ©qÀÄUÀqÉUÉÆ½¸ÀÄvÀÛªÉ.
              </li>
              <li className="kan">
                * ºÁ®Ä PÀgÉAiÀÄÄªÁUÀ ªÉÄzÀÄ½¤AzÀ ©qÀÄUÀqÉAiÀiÁUÀÄªÀ DQìmÉÆÃ¹£ï
                ZÉÆÃzÀPÀzÀ ¥Àæ¨sÁªÀzÀ°è PÉÆÃ±À¥ÀÅAdzÀ ªÀiÁA¸ÀRAqÀUÀ¼ÀÄ
                ¸ÀAPÀÄa¸ÀÄvÀÛªÉ.
              </li>
              <li className="kan">
                * EzÀjAzÁV ¸ÀAUÀæºÀuÉAiÀiÁVgÀÄªÀ ºÁ®Ä £Á¼ÀzÀ ªÀÄÆ®PÀ
                ºÉÆgÀ§gÀÄvÀÛzÉ.
              </li>
            </ul>
            <br />
            <h1 className="kan">PÉZÀÑ®Ä ¨ÁªÀÅ JAzÀgÉÃ£ÀÄ?</h1>
            <ul>
              <li className="kan">
                * “PÉZÀÑ°£À GjHvÀ” - ºÉaÑ£À DyðPÀ £ÀµÀÖ GAlÄªÀiÁqÀÄvÀÛzÉ,F
                PÉ¼ÀPÀAqÀ «±ÉÃµÀvÉUÀ¼À£ÀÄß ºÉÆA¢zÉ.
              </li>
              <li className="kan">
                * ºÉaÑzÀ ¸ÉÆªÀiÁnPï PÉÆÃ±ÀUÀ¼À ¸ÀASÉå – PÀ¼À¥É UÀÄtªÀÄlÖ
              </li>
              <li className="kan">* PÀÄVÎzÀ GvÁàzÀ£É – PÀrªÉÄ DzÁAiÀÄ</li>
              <li className="kan">* ºÉÆgÀ£ÉÆÃlPÉÌ ¸ÁzsÁgÀtªÀ®èzÀ ºÁ®Ä</li>
              <li className="kan">
                * ¸ÁªÀiÁ£Àå aºÉßUÀ¼ÀÄ – dégÀ, PÀÄVÎzÀ ZÀlÄªÀnPÉ...
              </li>
            </ul>
            <br />
            <h1 className="kan">PÉZÀÑ®Ä ¨ÁªÀÅ AiÀiÁªÀÅzÀjAzÀ?</h1>
            <ul>
              <li className="kan">
                * ¸ÉéÃZÉÑAiÀiÁV ¥Àj¸ÀgÀzÀ°ègÀÄªÀ C£ÉÃPÀ ¸ÀÆPÀë÷äfÃ«UÀ¼ÀÄ vÉÆnÖ£À
                ªÀÄÆ®PÀ PÉZÀÑ°UÉ ¥ÀæªÉÃ²¹ PÁ¬Ä¯É GAlÄªÀiÁqÀÄªÀ CªÀPÁ±ÀPÁÌV
                PÁAiÀÄÄvÁÛ §zÀÄQgÀÄvÀÛªÉ.
              </li>
              <li className="kan">
                * CwºÉZÀÄÑ ¸ÉÆÃAPÀÄ±ÀQÛ EgÀÄªÀ EvÀgÉ ¸ÀÆPÀë÷äfÃ«UÀ¼ÀÄ
                PÁ¬Ä¯É¬ÄAzÀ §¼À®ÄwÛgÀÄªÀ ºÀ¸ÀÄ«£À PÉZÀÑ® ªÉÄÃ°gÀÄvÀÛªÉ.
                EªÀÅºÁ®ÄPÀgÉAiÀÄÄªÀ ¸ÀAzÀ¨sÀð ±ÀÄavÀé PÀæªÀÄUÀ¼À£ÀÄß ¥Á°¸À¢zÀÝgÉ
                DgÉÆÃUÀåªÀAvÀ ºÀ¸ÀÄ«£À PÉZÀÑ°UÉ ºÀgÀqÀÄvÀÛªÉ.
              </li>
              <li className="kan">
                * ¸ÉÆÃAPÀÄ ºÀgÀqÀzÀAvÉ ¤UÀæ»¸À®Ä CvÀÄåvÀÛªÀÄ gÀPÀëuÁ «zsÁ£À –
                PÉZÀÑ® vÉÆnÖ£À vÀÄ¢AiÀÄ £ÉÊªÀÄð®å PÁ¥ÁqÀÄªÀÅzÀÄ.
              </li>
            </ul>
            <br />
            <h1 className="kan">vÉÆnÖ£À £Á¼À</h1>
            <br />
            <img
              src="testis.png"
              width="200px"
              height="200px"
              style={{ margin: "auto" }}
              alt="Testis"
            />
            <br />
            <br />
            <ul>
              <li className="kan">
                * 8-9 «Ä«Ä GzÀÝ«zÀÄÝ M¼À ¥ÀæªÉÃ²¸À§ºÀÄzÁzÀ ¸ÀÆPÁë÷ätÄUÀ¼À£ÀÄß
                vÀqÉAiÀÄ®Ä ºÀ®ªÁgÀÄ ªÀÄrPÉUÀ¼À£ÀÄß ºÉÆA¢zÉ.
              </li>
              <li className="kan">
                * vÀÄ¢¬ÄAzÀ ¸ÀÄªÀiÁgÀÄ 4 «Ä«Ä CAvÀgÀzÀ°è CqÀÝªÁV PÀvÀÛj¹
                ¥Àj²Ã°¹zÀgÉ –
              </li>
              <li className="kan">
                * £Á¼ÀªÀ£ÀÄß UÀnÖAiÀiÁV ¸ÀÄvÀÄÛªÀgÉ¢gÀÄªÀ ªÀiÁA¸ÀRAqÀUÀ¼À£ÀÄß
                UÀªÀÄ¤¸À§ºÀÄzÀÄ.
              </li>
              <li className="kan">
                * vÀÄ¢¬ÄAzÀ ¸ÀÄªÀiÁgÀÄ 8 «Ä«Ä CAvÀgÀzÀ°è CqÀÝªÁV PÀvÀÛj¹
                ¥Àj²Ã°¹zÀgÉ –
              </li>
              <li className="kan">
                * £Á¼ÀªÀÅ PÉZÀÑ® vÀ¼ÀzÀ°è£À ¥ÁvÉæAiÀÄ gÀÆ¥ÀzÀ ±ÉÃRgÀuÁ ¸ÀÜ¼ÀPÉÌ
                “Cistern” UÉ vÉgÉAiÀÄÄvÀÛzÉ.
              </li>
              <li className="kan">
                * £Á¼ÀªÀÅ PÉZÀÑ® vÀ¼ÀzÀ°è£À ¥ÁvÉæAiÀÄ gÀÆ¥ÀzÀ ±ÉÃRgÀuÁ ¸ÀÜ¼ÀPÉÌ
                “Cistern” UÉ ¸ÉÃgÀÄªÀ gÀAzÀæ.
              </li>
              <li className="kan">
                * vÉÆnÖ£À £Á¼ÀzÀ GzÀÝ PÀvÀÛj¹zÀ £ÉÆÃl - ªÀÄr¯ÉUÀ¼ÀÄ ¸ÀàµÀÖªÁV
                UÉÆÃZÀgÀ.
              </li>
            </ul>
            <br />
            <h1 className="kan">C. ºÉÆgÀ£ÉÆÃlzÀ ªÉÄÃ¯É ¤zsÁðjvÀ</h1>
            <br />
            <h1 className="kan">1. aºÉßUÀ¼ÀÄ ªÀåPÀÛªÁUÀÄªÀ</h1>
            <ul>
              <li className="kan">* ¸ÁªÀiÁ£ÀåªÀ®èzÀ ºÁ®Ä.</li>
              <li className="kan">* gÉÆÃUÀzÀ EvÀgÉ ®PÀëtUÀ¼ÀÄ EgÀÄªÀÅzÀÄ.</li>
            </ul>
            <br />
            <h1 className="kan">
              aºÉßUÀ¼ÀÄ ªÀåPÀÛªÁUÀÄªÀ PÉZÀÑ®Ä ¨ÁªÀÅ(¸ÀÄ®¨sÀ ¥ÀvÉÛ = ¸ÀPÁ°PÀ
              aQvÉì)
            </h1>
            <ul>
              <li className="kan">* aQvÉìUÁV ºÀ¸ÀÄªÀ£ÀÄß ¥ÀævÉåÃQ¸ÀÄªÀÅzÀÄ.</li>
              <li className="kan">
                * EvÀgÉ ºÀ¸ÀÄUÀ½UÉ ªÀÄvÀÄÛ ¸ÀªÀÄÆºÀ ºÁ®Ä ¸ÀAUÀæºÀuÁ zsÁgÀPÀPÉÌ
                ºÀgÀqÀÄªÀÅzÀ£ÀÄß ¤AiÀÄAwæ¸ÀÄªÀÅzÀÄ.
              </li>
              <li className="kan">
                * AiÀÄ±À¹é aQvÉì¬ÄAzÀ DyðPÀ £ÀµÀÖ PÀrªÉÄ ªÀiÁqÀÄªÀÅzÀÄ.
              </li>
            </ul>
            <br />
          </div>
          <h1 className="kan">2. aºÉßUÀ¼ÀÄ ªÀåPÀÛªÁUÀzÀ</h1>
          <ul>
            <li className="kan">* ¸ÁªÀiÁ£ÀåªÁVgÀÄªÀ ºÁ®Ä.</li>
            <li className="kan">* gÉÆÃUÀzÀ EvÀgÉ ®PÀëtUÀ¼ÀÄ E®è¢gÀÄªÀÅzÀÄ.</li>
          </ul>
          <br />

          <h1 className="kan">
            aºÉßUÀ¼ÀÄ ªÀåPÀÛªÁUÀzÀ PÉZÀÑ®Ä ¨ÁªÀÅ(¥ÀvÉÛAiÀiÁUÀÄªÀÅ¢®è= aQvÉì
            ¤ÃqÀÄªÀÅ¢®è)
          </h1>
          <ul>
            <li className="kan">
              * ºÀ¸ÀÄUÀ¼ÀÄ ¸ÉÆÃAPÀ£ÀÄß ¤gÀAvÀgÀªÁV ºÀgÀqÀÄwÛgÀÄvÀÛªÉ.
            </li>
            <li className="kan">
              * ¸ÀªÀÄÆºÀ ºÁ®Ä ¸ÀAUÀæºÀuÁ zsÁgÀPÀªÀ£ÀÄß PÀ®Ä¶vÀ UÉÆ½¸ÀÄvÀÛzÉ.
            </li>
            <li className="kan">
              * ¸ÀªÀÄÆºÀ ºÁ®Ä ¸ÀAUÀæºÀuÁ zsÁgÀPÀ ªÀÄvÀÄÛ ºÉZÀÄÑ ¸ÉÆªÀiÁnPï
              PÉÆÃ±ÀzÀ ºÁ®Ä ¤ÃrgÀÄªÀ ºÀ¸ÀÄ«£À ¥Àj²Ã®£É CUÀvÀå.
            </li>
          </ul>
          <br />

          <h1 className="kan">D. ¸ÉÆÃAQ£À ªÀÄÆ®zÀ ªÉÄÃ¯É ¤zsÁðjvÀ</h1>
          <br />
          <ul>
            <li className="kan">* ªÀÄÆ®¸ÁÜ£À - PÉÆnÖUÉ ¥Àj¸ÀgÀ</li>
            <li className="kan">
              * ¸ÀªÀÄÆºÀ ºÁ®Ä ¸ÀAUÀæºÀuÁ zsÁgÀPÀªÀ£ÀÄß PÀ®Ä¶vÀ UÉÆ½¸ÀÄvÀÛzÉ.
            </li>
            <li className="kan">
              * DgÉÆÃUÀåªÀAvÀ ºÀ¸ÀÄUÀ½UÉ PÉÆnÖUÉ¬ÄAzÀ ºÀgÀqÀÄªÀÅzÀÄ.
            </li>
            <li className="kan">* ¸ÀA¥ÀÇtðªÁV ¤ªÀÄÆð®£É ªÀiÁqÀ®Ä ¸ÁzsÀå«®è.</li>
            <li className="kan">* PÀgÉAiÀÄÄªÁUÀ ºÀgÀqÀÄªÀÅzÀÄ.</li>
            <li className="kan">
              * DgÉÆÃUÀåªÀAvÀ ºÀ¸ÀÄUÀ½UÉ PÁ¬Ä¯É EgÀÄªÀ ºÀ¸ÀÄUÀ½AzÀ
              ºÀgÀqÀÄªÀÅzÀÄ.
            </li>
            <li className="kan">
              * §ºÀÄvÉÃPÀ ¸ÀAzÀ¨sÀðUÀ¼À°è ¤ªÀÄÆð®£É ªÀiÁqÀ®Ä ¸ÁzsÀå.
            </li>
          </ul>
          <br />

          <h1 className="kan">¸ÉÆªÀiÁnPï PÉÆÃ±ÀUÀ¼ÉAzÀgÉÃ£ÀÄ?</h1>
          <ul>
            <li className="kan">
              * PÉZÀÑ°£À ¸ÉÆÃAPÀÄ ¤AiÀÄAvÀætPÉÌ gÀªÁ¤¸À¯ÁzÀ ©½AiÀÄ
              gÀPÀÛPÀtUÀ¼ÀÄ.
            </li>
            <li className="kan">
              * ºÀ¸ÀÄUÀ¼ÀÄ ªÁ¹¸ÀÄªÀ ¸ÀÜ¼ÀzÀ°è / ºÁ®Ä PÀgÉAiÀÄÄªÀ ¸ÀÜ¼ÀzÀ°è
              PÉZÀÑ®Ä ¨ÁªÀÅ GvÀàwÛ ªÀiÁqÀÄªÀ ¨ÁåQÖÃjAiÀiÁUÀ½UÉ vÀÄvÁÛUÀÄvÀÛªÉ.
            </li>
            <li className="kan">
              * F ¸ÀÆPÀë÷äfÃ«UÀ¼ÀÄ PÉZÀÑ® vÉÆnÖ£À ªÀÄÆ®PÀ M¼ÀºÉÆPÀÄÌ, MlÄÖ WÀÄr
              £ÀAvÀgÀ PÉZÀÑ¯ÉÆ¼ÀUÉ ¥ÀæªÉÃ²¸ÀÄvÀÛªÉ.
            </li>
            <li className="kan">
              * ¸ÀÆPÀë÷äfÃ«UÀ¼ÀÄ DgÉÆÃUÀåªÁVgÀÄªÀ zÀÄUÀÝUÀæAyAiÀÄ
              PÉÆÃ±À¥ÀÅAdzÉÆ¼ÀUÉ ¥ÀæªÉÃ²¹ ¸ÉÆÃAPÀÄ GAlÄªÀiÁqÀÄvÀÛªÉ.
            </li>
          </ul>
          <br />

          <h1 className="kan">¸ÉÆªÀiÁnPï PÉÆÃ±ÀUÀ¼À gÀªÁ£É</h1>
          <ul>
            <li className="kan">
              * ¸ÉÆÃAPÀÄ vÀUÀÄ°zÀ PÉÆÃ±ÀUÀ¼À°è£À ¸ÀÆPÀë÷äfÃ«UÀ¼À ¤AiÀÄAvÀætPÉÌ
              ¸ÉÆªÀiÁnPï PÉÆÃ±ÀUÀ¼ÀÄ/ ©½AiÀÄgÀPÀÛ PÀtUÀ¼ÀÄ gÀPÀÛªÀÄÆ®PÀ
              gÀªÁ¤¸À®àqÀÄvÀÛªÉ.
            </li>
            <li className="kan">
              * ¸ÉÆÃAPÀÄ vÀUÀÄ°zÀ PÉZÀÑ°£À°è GvÁà¢¸À¯ÁUÀÄªÀ ºÁ°£À MAzÀÄ
              ¸ÀAAiÉÆÃd£Á CA±ÀªÁV©qÀÄvÀÛzÉ.
            </li>
          </ul>
          <br />
          <h1 className="kan">ªÉÆzÀ® PÀgÉAiÀÄÄ«PÉ</h1>
          <ul>
            <li className="kan">
              * ºÁ®Ä PÀgÉAiÀÄÄªÁUÀ PÉZÀÑ®Ä ¨ÁªÀ£ÀÄß ¥ÀvÉÛ ªÀiÁqÀ®Ä EgÀÄªÀ MAzÉÃ
              ¥ÁæAiÉÆÃVPÀ ¸À®PÀgÀuÉ.
            </li>
            <li className="kan">
              * ªÉÄzÀÄ½£À°è DQìmÉÆÃ¹£ï ZÉÆÃzÀPÀzÀ ©qÀÄUÀqÉUÉ ¸ÀºÀPÁj.
            </li>
            <li className="kan">* EzÀjAzÁV PÉZÀÑ°UÉ ºÁ®Ä E½AiÀÄÄvÀÛzÉ.</li>
          </ul>
          <br />
          <h1 className="kan">ºÁ®Ä PÀgÉAiÀÄÄªÀ ªÀÄÄ£Àß CzÀÄÝªÀÅzÀÄ</h1>
          <ul>
            <li className="kan">
              * ºÁ®Ä PÀgÉAiÀÄÄªÀ ªÀÄÄ£Àß Qæ«Ä£Á±ÀPÀ §¼ÀPÉ¬ÄAzÀ F PÉ¼ÀV£ÀªÀÅ
              PÀrªÉÄAiÀiÁUÀÄvÀÛzÉ -
            </li>
            <li className="kan">
              * PÉZÀÑ°£À vÉÆnÖ£À ªÉÄÃ¯É EgÀÄªÀ ¨ÁåQÖÃjAiÀiÁUÀ¼ÀÄ.
            </li>
            <li className="kan">
              * ¨ÁåQÖÃjAiÀiÁUÀ¼ÀÄ PÉZÀÑ¯ÉÆ¼ÀUÉ ºÉÆÃUÀÄªÀÅzÀÄ.
            </li>
            <li className="kan">
              * ºÁ°£À ¥ÁvÉæAiÉÆ¼ÀUÉ ¨ÁåQÖÃjAiÀÄUÀ¼ÀÄ ¸ÉÃgÀÄ«PÉ.
            </li>
            <br />
            <li className="kan">ªÀÄÄSÁåA±ÀUÀ¼ÀÄ –</li>
            <ul>
              <li className="kan">* PÀ¤µÀ× 20-30 ¸ÉPÉAqï ©ÃqÀ¨ÉPÀÄ</li>
              <li className="kan">* vÉÆnÖ£À 75% ºÀZÀÑ¨ÉÃPÀÄ</li>
            </ul>
          </ul>
          <br />
          <h1 className="kan">MgÉ¸ÀÄªÀÅzÀÄ.</h1>
          <ul>
            <li className="kan">
              * PÀgÉAiÀÄÄªÀ ªÀÄÄ£Àß PÉZÀÑ®Ä C¢ÝgÀÄªÀ OµÀzsÀ,PÉÆ¼É ªÀÄvÀÄÛ
              Qæ«ÄUÀ¼À£ÀÄß vÉUÉAiÀÄÄvÀÛzÉ.
            </li>
            <li className="kan">
              * vÉÆnÖUÉ PÀgÉAiÀÄÄªÀ AiÀÄAvÀæªÀ£ÀÄß ¸ÉÃj¸ÀÄªÀ ªÉÆzÀ®Ä vÉÆlÖ£ÀÄß
              MtV¹ ±ÀÄaUÉÆ½¸ÀÄvÀÛzÉ.
            </li>
            <li className="kan">
              * ¥ÀæwAiÉÆAzÀÄ ºÀ¸ÀÄ«UÀÆ ¥ÀævÉåÃPÀªÁzÀ, ±ÀÄzÀÞªÁzÀ, MtVzÀ lªÀ¯ï.
            </li>
            <li className="kan">
              * vÉÆlÄÖ ¥ÀÇtðªÁV ¸ÀéZÀÑ, «±ÉÃµÀªÁV vÉÆnÖ£À vÀÄ¢.
            </li>
          </ul>
          <br />
          <div className="my-component">
            <h1 className="kan">ºÁ®Ä PÀgÉAiÀÄÄªÀ PÀæªÀÄ</h1>
            <br />
            <h1 className="kan">1. ºÁ®Ä PÀgÉAiÀÄÄªÀ AiÀÄAvÀæ eÉÆÃqÀuÉ</h1>
            <ul>
              <li className="kan">
                * ºÁ®Ä vÀÄA©zÀ vÉÆlÄÖUÀ¼À£ÀÄß ±ÀÄaUÉÆ½¹, MtV¹ £ÀAvÀgÀ
                PÀgÉAiÀÄ¨ÉÃPÀÄ.
              </li>
              <li className="kan">* ¸ÁzsÁgÀtªÁV 60-90 ¸ÉPÉAqïUÀ¼ÀÄ.</li>
              <li className="kan">
                * AiÀÄAvÀæªÀ£ÀÄß eÉÆÃr¹zÀ PÀÆqÀ¯ÉÃ ºÁ®Ä ºÀjAiÀÄ¨ÉÃPÀÄ.
              </li>
              <li className="kan">
                * WÀlPÀªÀÅ £ÉÃgÀªÁVzÀÄÝ ¸ÀjAiÀiÁV vÀÆVzÀAwgÀ¨ÉÃPÀÄ.
              </li>
              <li className="kan">
                * ºÁ®Ä PÀgÉAiÀÄÄwÛgÀÄªÁUÀ UÁ½ M¼ÀºÉÆÃUÀzÀAwgÀ¨ÉÃPÀÄ.
              </li>
            </ul>
            <br />
            <h1 className="kan">2. ºÁ®Ä PÀgÉzÀ £ÀAvÀgÀ CzÀÄÝªÀÅzÀÄ</h1>
            <ul>
              <li className="kan">
                * ºÁ®Ä PÀgÉzÀ £ÀAvÀgÀ ¸ÀÄªÀiÁgÀÄ 20 ¤«ÄµÀ PÉZÀÑ® vÉÆnÖ£À gÀAzÀæ
                vÉgÉ¢gÀÄvÀÛzÉ.
              </li>
              <li className="kan">
                * F ¸ÀAzÀ¨sÀð Qæ«Ä£Á±ÀPÀ zÀæªÀzÀ°è CzÀÄÝªÀÅzÉÆAzÉ PÉZÀÑ®Ä ¨ÁªÀÅ
                GAlÄªÀiÁqÀÄªÀ ¨ÁåQÖÃjAiÀiÁUÀ¼À «gÀÄzÀÞ gÀPÀëuÉUÉ ªÀiÁUÀð.
              </li>
              <li className="kan">
                * vÁeÁ ªÉÄÃªÀÅ ¤ÃrzÀgÉ ºÀ¸ÀÄUÀ¼ÀÄ ªÀÄ®UÀÄªÀÅ¢®è.
              </li>
              <li className="kan">
                * ºÀ¸ÀÄUÀ¼ÀÄ ¥ÀÅ£À: ¸ÉÆÃAQ£À ªÀÄÆ®PÉÌ ¹UÀÄªÀ ªÀÄÄ£Àß §¼À¹zÀ
                Qæ«Ä£Á±ÀPÀªÀÅ vÀ£Àß ZÀlÄªÀnPÉ ¥ÁægÀA©ü¸À®Ä ¸ÁzsÀå.
              </li>
            </ul>
            <br />
            <h1 className="kan">Qæ«Ä£Á±ÀPÀUÀ¼ÀÄ</h1>
            <ul>
              <li className="kan">
                * Qæ«Ä£Á±ÀPÀUÀ¼À£ÀÄß ºÁQzÀ £ÀAvÀgÀ ¨ÁåQÖÃjAiÀiÁUÀ¼À£ÀÄß PÉÆ®è®Ä
                PÉ® ¸ÀªÀÄAiÀÄ CUÀvÀå.
              </li>
              <li className="kan">
                * EªÀÅ ¨ÁåQÖÃjAiÀiÁUÀ¼À£ÀÄß ¸ÀA¥ÀÇtðªÁV £Á±À¥Àr¸À¯ÁgÀªÀÅ.
              </li>
              <li className="kan">
                * EªÀÅUÀ¼À£ÀÄß ¥ÁætÂAiÀÄ zÉÃºÀzÀ ªÉÄÃ¯É (¥ÀÇw£Á±ÀPÀUÀ¼ÁV) CxÀªÁ
                ºÁ®Ä PÀgÉAiÀÄ®Ä §¼À¸ÀÄªÀ G¥ÀPÀgÀtUÀ¼À ªÉÄÃ¯É (Qæ«Ä£Á±ÀPÀUÀ¼ÁV)
                §¼À¸À¯ÁUÀÄªÀÅzÀÄ.
              </li>
            </ul>
            <br />
            <h1 className="kan">¥ÀæwfÃªÀ ¥ÀzÁxÀðUÀ¼ÀÄ</h1>
            <ul>
              <li className="kan">
                * ºÀ¸ÀÄUÀ½UÉ ¤ÃrzÀ OµÀzsÀUÀ¼ÀÄ gÉÆÃUÀPÁgÀPÀ ¨ÁåQÖÃjAiÀiÁUÀ¼À£ÀÄß
                PÉÆ®ÄèvÀÛªÉ.
              </li>
              <li className="kan">
                * EªÀÅ ªÉÊgÁtÄUÀ¼À£ÀÄß CxÀªÁ ²°ÃAzÀæUÀ¼À£ÀÄß PÉÆ®è¯ÁgÀªÀÅ.
              </li>
              <li className="kan">
                * GvÀÛªÀÄ ¥sÀ°vÁA±ÀPÁÌV ºÀ®ªÀÅ ¢£ÀUÀ¼À aQvÉì CUÀvÀå.
              </li>
              <li className="kan">
                * EªÀÅ M¼ÉîAiÀÄ ªÀÄvÀÄÛ PÉlÖ ¨ÁåQÖÃjAiÀiÁUÀ¼À £ÀqÀÄªÉ ªÀåvÁå¸À
                vÉÆÃgÀÄªÀÅ¢®è.
              </li>
              <li className="kan">
                * ºÀ®ªÉÇªÉÄä M¼ÉîAiÀÄ ¨ÁåQÖÃjAiÀiÁUÀ¼À£ÀÄß PÉÆAzÀÄ ºÀ¸ÀÄUÀ¼À
                gÉÆÃUÀ ¸À»µÀÄÚvÉAiÀÄ£ÀÄß PÀrªÉÄ ªÀiÁqÀÄvÀÛªÉ.
              </li>
            </ul>
            <br />
            <h1 className="kan">¥ÀæwfÃªÀ ¥ÀzÁxÀðUÀ¼ÀÄ- C¥ÁAiÀÄ</h1>
            <ul>
              <li className="kan">
                * ¥ÀæwfÃªÀ ¥ÀzÁxÀðUÀ¼À vÀ¥ÀÅöàCAiÉÄÌ CxÀªÁ «¸ÀÛjvÀ §¼ÀPÉ
                ¨ÁåQÖÃjAiÀiÁUÀ¼À°è ¥ÀæwfÃªÀ ¥ÀzÁxÀðUÀ¼À «gÀÄzÀÞ ¤gÉÆÃzsÀPÀ ±ÀQÛ
                GvÀàwÛ¸ÀÄvÀÛªÉ.
              </li>
              <li className="kan">
                * ºÀ¸ÀÄUÀ¼À°è fÃtðQæAiÉÄUÉ ¸ÀºÀPÀj¸ÀÄªÀ M¼ÉîAiÀÄ
                ¨ÁåQÖÃjAiÀÄUÀ¼À£ÀÆß ¸ÀºÀ ¥ÀæwfÃªÀ ¥ÀzÁxÀðUÀ¼ÀÄ £Á±ÀªÀiÁqÀÄvÀÛªÉ.
              </li>
              <li className="kan">
                * C®à ¥ÀæªÀiÁtzÀ ¸ÉÆÃAPÀÄ EzÁÝUÀ ºÀ¸ÀÄ«£À°è£À ¸ÀºÀd gÉÆÃUÀ
                ¤gÉÆÃzsÀPÀvÉ ¨ÁåQÖÃjAiÀiÁUÀ¼À£ÀÄß ¤AiÀÄAwæ¸ÀÄvÀÛzÉ, ¥ÀæwfÃªÀ
                ¥ÀzÁxÀðUÀ¼À CªÀ±ÀåPÀvÉ E®è.
              </li>
              <li className="kan">
                * ¥ÀæwfÃªÀ ¥ÀzÁxÀðUÀ¼ÀÄ ºÁ®£ÀÄß PÀ®Ä¶vÀUÉÆ½¸ÀÄvÀÛªÉ. EAvÀºÀ ºÁ®Ä
                zÉÃºÀPÉÌ ºÁ¤PÀgÀ.
              </li>
              <li className="kan">
                * ºÀ¸ÀÄUÀ¼À°è fÃtðQæAiÉÄUÉ ¸ÀºÀPÀj¸ÀÄªÀ M¼ÉîAiÀÄ
                ¨ÁåQÖÃjAiÀÄUÀ¼À£ÀÆß ¸ÀºÀ ¥ÀæwfÃªÀ ¥ÀzÁxÀðUÀ¼ÀÄ £Á±ÀªÀiÁqÀÄvÀÛªÉ.
              </li>
              <li className="kan">
                * C®à ¥ÀæªÀiÁtzÀ ¸ÉÆÃAPÀÄ EzÁÝUÀ ºÀ¸ÀÄ«£À°è£À ¸ÀºÀd gÉÆÃUÀ
                ¤gÉÆÃzsÀPÀvÉ ¨ÁåQÖÃjAiÀiÁUÀ¼À£ÀÄß ¤AiÀÄAwæ¸ÀÄvÀÛzÉ, ¥ÀæwfÃªÀ
                ¥ÀzÁxÀðUÀ¼À CªÀ±ÀåPÀvÉ E®è.
              </li>
            </ul>
            <br />
            <h1 className="kan">¸ËPÀAiÀÄðUÀ¼À ¸ÀéZÀÑvÉ</h1>
            <ul>
              <li className="kan">
                * £ÉÊªÀÄð®å PÁ¥Ár®èzÀ PÉÆnÖUÉ ºÉZÀÄÑ ¸ÀASÉåAiÀÄ
                ¨ÁåQÖÃjAiÀiÁUÀ½gÀÄªÀ ªÀÄvÀÄÛ PÉZÀÑ®Ä ¨ÁªÀÅ ¸ÀA¨sÀ«¸ÀÄªÀ CªÀPÁ±À
                ºÉZÁÑVgÀÄªÀ ¸ÀAPÉÃvÀ.
              </li>
              <li className="kan">
                * ºÀ¸ÀÄUÀ¼ÀÄ PÉÆ¼ÀPÁVgÀÄªÀ £É®zÀ ªÉÄÃ¯É ªÀÄ®VzÁUÀ PÉZÀÑ°UÉ
                UÀ°ÃdÄ vÀUÀÄ° PÀ®Ä¶vÀªÁUÀÄvÀÛzÉ.
              </li>
              <li className="kan">
                * ºÀ¸ÀÄUÀ¼ÀÄ NqÁqÀÄªÁUÀ EzÀÄ PÉZÀÑ® J®è ¨sÁUÀPÀÆÌ ºÀgÀqÀÄvÀÛzÉ.
              </li>
              <li className="kan">
                * PÉÆnÖUÉAiÀÄ£ÀÄß ¥Àæw¨Áj ºÁ®Ä PÀgÉAiÀÄÄªÁUÀ vÉÆ¼É¬Äj.
              </li>
              <li className="kan">* ¢£ÀzÀ°è 2 – 3 ¨Áj.</li>
              <li className="kan">* ±ÀÄzÀÞªÁzÀ £É¯ÉzÀ ºÁ¸ÀÄ MzÀV¹j.</li>
              <li className="kan">
                * £É®zÀ ºÁ¹£ÉÆA¢UÉ PÉZÀÑ°£À £ÉÃgÀ ¸ÀA¥ÀPÀð.
              </li>
              <li className="kan">
                * PÀ¼À¥É ªÀÄlÖzÀ £ÉÊªÀÄð®å ªÀÄvÀÄÛ MvÀÛqÀUÀ¼ÉgÀqÀÆ C¥ÁAiÀÄPÁj
                eÉÆÃr.
              </li>
              <li className="kan">
                * ºÁ®Ä PÀgÉAiÀÄÄªÀ ¸ÀªÀÄAiÀÄ ºÀ¸ÀÄ«£À PÉZÀÑ®Ä JµÀÄÖ ±ÀÄzÀÞ
                ªÀÄvÀÄÛ ¸ÀéZÀÑªÁVzÉ JA§ÄzÀÄ PÉÃªÀ® ¸ËPÀAiÀÄðUÀ¼À £ÉÊªÀÄð®å
                ªÀiÁvÀæªÀ®è ºÀ¸ÀÄUÀ¼À ¤ªÀðºÀuÉAiÀÄ §UÉÎAiÀÄÆ ¸ÀÆZÀ£É ¤ÃqÀÄvÀÛzÉ.
              </li>
            </ul>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mastitis;
