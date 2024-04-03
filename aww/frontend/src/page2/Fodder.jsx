import React, { useState } from "react";
import "./Descriptive.css";
import { Link } from "react-router-dom";
import logoImage from "./logo.jpg";

const Fodder = () => {
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
            <h3 className="kan" style={{ fontSize: "50px" }}>
              ªÉÄÃªÀÅ ¨É¼ÉUÀ¼À ¥Ë¶ÖÃPÀgÀt, ¸ÀAgÀPÀëuÉ, ¸ÀAUÀæºÀuÉ
            </h3>
            <br />
            <br />
            <h2 className="kan" style={{ fontSize: "30px" }}>
              1. Mt ªÉÄÃªÀÅ ¥Ë¶ÖÃPÀgÀt
            </h2>
            <br />
            <h1 className="kan">PÀÈ¶ G¥À GvÀà£ÀßUÀ¼ÀÄ</h1>
            <br />
            <ul className="kan">
              <li className="kan">
                1. gÁV ºÀÄ®Äè, §vÀÛzÀ ºÀÄ®Äè, eÉÆÃ¼ÀzÀ PÀrØ, ªÉÄPÉÌ eÉÆÃ¼ÀzÀ
                PÀrØ, UÉÆÃ¢ü ºÀÄ®Äè UÀ¼À°è ®¨sÀå ¥Ë¶ÖPÁA±À §ºÀ¼À PÀrªÉÄ.
              </li>
              <li className="kan">
                2. ºÀ®ªÀÅ «zsÁ£ÀUÀ½AzÀ ¥Ë¶ÖÃPÀj¹ GvÀÛªÀÄ ªÀÄlÖzÀ ªÉÄÃªÁV
                eÁ£ÀÄªÁgÀÄUÀ½UÉ ¤ÃqÀ§ºÀÄzÀÄ.
              </li>
            </ul>
            <br />
            <h1 className="kan">¥Ë¶ÖÃPÀgÀt «zsÁ£ÀUÀ¼ÀÄ</h1>
            <br />
            <ul className="kan">
              <li className="kan">
                <h1 className="kan">
                  1. AiÀÄÆjAiÀiÁ/PÁPÀA©/R¤eÁA±À «Ä±Àæt ¹A¥ÀqÀ£É:-
                </h1>
                <li className="kan">
                  1. vÀÄAqÁV PÀvÀÛj¹zÀ 100 PÉf MtªÉÄÃªÀÅ, £É®zÀ°è ¸ÀªÀÄ£ÁV
                  ©¹°£À°è ºÀgÀqÀ¨ÉÃPÀÄ.
                </li>
                <li className="kan">
                  2. 2 °Ã ¤Ãj£À°è 2 PÉf AiÀÄÆjAiÀiÁ, 8 PÉf PÁPÀA© ¥ÁPÀ, 1 PÉf
                  R¤eÁA±À, 1 PÉf G¥ÀÅöà ¨ÉgÉ¹ zÁæªÀt vÀAiÀiÁj¸À¨ÉÃPÀÄ.
                </li>
                <li className="kan">
                  3. ºÀgÀrgÀÄªÀ ºÀÄ®è£ÀÄß DUÁUÉÎ wgÀÄV¸ÀÄvÁÛ zÁæªÀtªÀ£ÀÄß
                  ¹A¥Àr¸À¨ÉÃPÀÄ.
                </li>
                <li className="kan">
                  4. ZÉ£ÁßV MtVzÀ £ÀAvÀgÀ ±ÉÃRj¹qÀ§ºÀÄzÀÄ.
                </li>
                <li className="kan">
                  5-6 PÉf ªÉÄÃ«£À°è 350 UÁæA ¸À¸ÁgÀd£ÀPÀ ®¨sÀå -ªÀAiÀÄ¸ÀÌ
                  ºÀ¸ÀÄ«£À zÉÊ£ÀA¢£À fÃªÀ£ÁzsÁgÀ ¨ÉÃrP
                </li>
              </li>
              <br />
              <li className="kan">
                <h1 className="kan">
                  2. AiÀÄÆjAiÀiÁ/R¤eÁA±À «Ä±Àæt ¹A¥ÀqÀ£É:-
                </h1>
                <br />
                <li className="kan">
                  1. vÀÄAqÁV PÀvÀÛj¹zÀ 100 PÉf MtªÉÄÃªÀÅ, £É®zÀ°è ¸ÀªÀÄ£ÁV
                  ©¹°£À°è ºÀgÀqÀ¨ÉÃPÀÄ.
                </li>
                <li className="kan">
                  2. 5 °Ã ¤Ãj£À°è 2 PÉf AiÀÄÆjAiÀiÁ, 1 PÉf R¤eÁA±À, 1 PÉf G¥ÀÅöà
                  ¨ÉgÉ¹ zÁæªÀt vÀAiÀiÁj¸À¨ÉÃPÀÄ.
                </li>
                <li className="kan">
                  3. ºÀgÀrgÀÄªÀ ºÀÄ®è£ÀÄß DUÁUÉÎ wgÀÄV¸ÀÄvÁÛ zÁæªÀtªÀ£ÀÄß
                  ¹A¥Àr¸À¨ÉÃPÀÄ.
                </li>
                <li className="kan">4. ZÉ£ÁßV MtVzÀ £ÀAvÀgÀ ±ÉÃRj¹qÀ§ºÀÄzÀÄ</li>
              </li>
              <br />
              <li className="kan">
                <h1 className="kan">3. AiÀÄÆjAiÀiÁ ¥Ë¶ÖÃPÀgÀt:-</h1>
                <br />
                <li className="kan">
                  1. 1-2 EAZÀÄ UÁvÀæ vÀÄAqÀj¹zÀ Mt ªÉÄÃªÀÅ 100 PÉf, ¥Áè¹ÖPï
                  ºÁ¼ÉAiÀÄ ªÉÄÃ¯É ºÀgÀqÀ¨ÉÃPÀÄ
                </li>
                <li className="kan">
                  2. 4 PÉf AiÀÄÆjAiÀiÁ 50-60 °Ã ¤Ãj£À°è PÀgÀV¹ ºÀÄ°è£À ªÉÄÃ¯É
                  ¹A¥Àr¸À¨ÉÃPÀÄ.
                </li>
                <li className="kan">
                  3. UÁ½ §gÀzÀAvÉ ¥Áè¹ÖPï£À°è ¸ÀÄwÛ 3 ªÁgÀUÀ¼À ªÀgÉUÉ
                  ªÀÄÄaÑqÀ¨ÉÃPÀÄ.
                </li>
                <li className="kan">
                  4. £ÀAvÀgÀ vÉUÉzÀÄ 1 ¢£À ºÀªÉAiÀiÁqÀ®Ä ElÄÖ eÁ£ÀÄªÁgÀÄUÀ½UÉ
                  ¤ÃqÀ¨ÉÃPÀÄ.
                </li>
                <li className="kan">
                  5. 15-20% ºÉZÀÄÑ ¸ÉÃªÀ£É, 7-9% ¸À¸ÁgÀd£ÀPÀ ®¨sÀå.
                </li>
                <li className="kan">
                  6. ¢ézÀ¼À zsÁ£Àå ¸ÉÆ¥ÀÅöà ¨ÉgÉ¹zÀgÉ ºÉZÀÄÑ GvÁàzÀ£ÉUÉ ¸ÀºÀPÁj
                </li>
              </li>
            </ul>
            <br />
            <div className="kan">
              «±ÉÃµÀ UÀªÀÄ£ÀPÉÌ - AiÀÄÆjAiÀiÁ §¼À¹ ¥Ë¶ÖÃPÀj¹gÀÄªÀ MtªÉÄÃªÀ£ÀÄß 6
              wAUÀ¼ÉÆ¼ÀV£À PÀgÀÄUÀ½UÉ w¤ß¸À¨ÁgÀzÀÄ.
            </div>
            <br />
            <h2 className="kan" style={{ fontSize: "30px" }}>
              2. Mt ºÀ¹gÀÄ ªÉÄÃªÀÅ
            </h2>
            <br />
            <ol>
              <li className="kan">
                ºÀ¹gÀÄ ªÉÄÃ«£À°ègÀÄªÀ vÉÃªÁA±ÀªÀ£ÀÄß (65-85%) MtV¹ PÀrªÉÄ ªÀiÁr
                (15-20%) ¸ÀAUÀæ»¹qÀÄªÀÅzÀÄ. – Hay
              </li>
              <li className="kan">
                ªÉÄÃ«£À°ègÀÄªÀ ¥Ë¶ÖPÁA±ÀUÀ¼ÀÄ £Á±ÀªÁUÀzÀÄ.
              </li>
              <li className="kan">
                ªÀÄÈzÀÄ PÀrØUÀ¼ÀÄ¼Àî KPÀzÀ¼À/¢ézÀ¼À ºÁUÀÆ GvÀÛªÀÄ eÁwAiÀÄ
                ºÀÄ®ÄèUÀ¼ÀÄ Mt ºÀ¹gÀÄ ªÉÄÃªÀÅ vÀAiÀiÁjPÉUÉ AiÉÆÃUÀå
              </li>
              <li className="kan">
                ºÀÆªÀÅ ©qÀÄªÀ ºÀAvÀzÀªÀgÉUÉ ¨É¼ÉzÀ ¨É¼ÉAiÀÄ£ÀÄß §¼À¸À¨ÉÃPÀÄ
              </li>
            </ol>
            <br />
            <h1 className="kan">ºÀ¹gÀÄ ªÉÄÃªÀÅ MtV¸ÀÄªÀ «zsÁ£À</h1>
            <br />
            <div className="kan">
              PÉÆAiÀÄÝ ºÀ¹gÀÄ ªÉÄÃªÀ£ÀÄß §ºÀ¼À ¨ÉÃUÀ£É MtV¸À¨ÉÃPÀÄ,
              2-3¢£ÀUÀ¼À°è. vÀqÀªÁzÀgÉ ªÀÄºÀvÀézÀ ¥Ë¶ÖPÁA±À £Á±À.
            </div>
          </div>
          <ul>
            <li className="kan">
              <h1 className="kan">1. £ÉÊ¸ÀVðPÀ «zsÁ£À –</h1>
            </li>
            <li className="kan">
              ºÉZÀÄÑ ©¹®Ä , PÀrªÉÄ vÉÃªÁA±À , ªÉÆÃqÀ gÀ»vÀ ºÀªÁªÀiÁ£À. UÁgÉ £É®,
              MPÀÌt ªÀiÁqÀÄªÀ PÀtzÀ°è MtV¸ÀÄªÀÅzÀÄ
            </li>
            <br />
            <li className="kan">
              <h1 className="kan">2. PÀÈvÀPÀ «zsÁ£À –</h1>
            </li>
            <li className="kan">
              1. 1 ªÁgÀ ªÀÄÄAavÀªÁV ªÉÄÃ«£À ¨É¼ÉUÉ ¤ÃgÀÄ ¤°è¸À¨ÉÃPÀÄ
            </li>
            <li className="kan">
              2. ªÀÄÄAeÁ£É E§â¤ MtVzÀ PÀÆqÀ¯ÉÃ ºÀ¹gÀÄ ªÉÄÃªÀÅ PÀmÁªÀÅ ªÀiÁr
              vÉ¼ÀîUÉ ºÀgÀqÀ ¨ÉÃPÀÄ.
            </li>
            <li className="kan">
              3. J¯ÉUÀ¼ÀÄ ¸ÀÄªÀiÁgÁV MtVzÀ £ÀAvÀgÀ PÀAvÉUÀ¼À°è gÁ² ºÁQ ©¹°£À°è
              3-5 UÀAmÉ MtV¸À¨ÉÃPÀÄ
            </li>
            <li className="kan">
              4. gÁ²UÀ¼À£ÀÄß wgÀÄªÀÅ ºÁPÀ¨ÉÃPÀÄ. 2 ¢£À F jÃw MtV¸À¨ÉÃPÀÄ.
            </li>
            <li className="kan">
              5. ¸ÀjAiÀiÁV MtVzÀ ªÉÄÃªÀÅ ºÀ¹gÁV EgÀÄvÀÛzÉ. PÀAzÀÄ§tÚPÉÌ wgÀÄVzÀ
              J¯ÉUÀ¼ÀÄ GzÀÄgÀÄvÀÛªÉ.
            </li>
            <li className="kan">
              6. MtVzÀ ºÀ¹gÀÄ ªÉÄÃªÀ£ÀÄß ¦Ar PÀnÖ ¸ÀAUÀæ»¸À§ºÀÄzÀÄ,
            </li>
          </ul>
          <br />
          <h2 className="kan" style={{ fontSize: "30px" }}>
            3. gÀ¸À ªÉÄÃªÀÅ (¸ÉÊ¯ÉÃeï)
          </h2>
          <br />
          <ul>
            <li className="kan">
              ºÀ¹gÀÄ ªÉÄÃ«£À UÀÄt ªÀÄvÀÄÛ ¥Ë¶ÖPÁA±ÀUÀ¼ÀÄ ºÁ¼ÁUÀzÀAvÉ ¤AiÀÄAwævÀ
              ªÁvÁªÀgÀtzÀ°è vÀAiÀiÁj¹ ¸ÀAUÀæ»¹qÀÄªÀÅzÀÄ.
            </li>
            <li className="kan">vÀAiÀiÁjPÉ/ ¸ÀAUÀæºÀuÉ ªÉZÀÑ C¢üPÀ.</li>
            <li className="kan">ªÀµÀð ¥ÀÇtð ºÀ¹gÀÄ ®¨sÀå.</li>
            <li className="kan">
              ºÀtÂÚ£À ªÁ¸À£É EgÀÄªÀ F ªÉÄÃªÀ£ÀÄß eÁ£ÀÄªÁgÀÄUÀ¼ÀÄ ZÉ£ÁßV
              w£ÀÄßvÀÛªÉ.
            </li>
          </ul>
          <br />
          <h1 className="kan">
            gÀ¸ÀªÉÄÃªÀÅ vÀAiÀiÁjPÉUÉ ¸ÀÆPÀÛ ¨É¼ÉUÀ¼ÁªÀÅªÀÅ?
          </h1>
          <ul>
            <li className="kan">
              1. 30% Mt CA±À EgÀ¨ÉÃPÀÄ, ¸Àé®à PÁAqÀAiÀÄÄPÀÛ/ ºÉZÀÄÑ
              ±ÀPÀðgÀAiÀÄÄPÀÛ
            </li>
            <li className="kan">
              2. ªÉÄPÉÌ eÉÆÃ¼À, UÉÆÃ«£À eÉÆÃ¼À, ¸ÀeÉÓ, £ÉÃ¦AiÀÄgï ºÀÄ®Äè,
              £ÉÊ¸ÀVðPÀ ºÀÄ®Äè, ¢ézÀ¼À zsÁ£Àå ¸ÉÆ¥ÀÅöà(10-15% UÀjµÀÖ-¨Ár¹ §¼À¹).
            </li>
            <li className="kan">
              3. ºÉZÀÄÑ MtVzÀÝgÉ gÀ¸ÀªÉÄÃªÀÅ PÀrªÉÄ UÀÄt ªÀÄlÖ- PÀAzÀÄ§tÚ.
            </li>
            <li className="kan">
              4. ºÉZÀÄÑ vÉÃªÁA±À«zÀÝgÉ ºÀÄ½AiÀiÁV PÉÆ¼ÉvÀÄºÉÆÃUÀÄvÀÛzÉ.
            </li>
          </ul>
          <br />
          <h1 className="kan">gÀ¸ÀªÉÄÃªÀÅ UÀÄAr ªÀiÁzÀjUÀ¼ÁªÀÅªÀÅ?</h1>
          <ul>
            <li className="kan">
              1. ¨sÀÆ«ÄAiÉÆ¼ÀV£À UÀÄArUÀ¼ÀÄ - CAvÀdð® ªÀÄlÖ PÉ¼ÀVgÀÄªÀ°è, ¤ÃgÀÄ
              ¸ÀgÁUÀªÁV §¹zÀÄ ºÉÆÃUÀÄªÀ°è.
            </li>
            <li className="kan">
              2. ¨sÀÆ«ÄAiÀÄ ªÀÄlÖzÀ UÀÄArUÀ¼ÀÄ- ªÉÄÃ«£À CªÀ±ÀåPÀvÉUÀ£ÀÄUÀÄtªÁV
              ¸ÀtÚ/zÉÆqÀØ UÀÄArUÀ¼À£ÀÄß ¤«Äð¸À§ºÀÄzÀÄ. 2 CxÀªÁ 3 PÀqÉ UÉÆÃqÉ
              ¤«Äð¹ SÁ° ©lÖ eÁUÀzÀ°è E½eÁgÀÄ.
            </li>
            <li className="kan">
              3. ¨sÀÆ«ÄAiÀÄ ªÀÄlÖzÀ ªÉÄÃ¯É UÀÄArUÀ¼ÀÄ-UÉÆÃ¥ÀÅgÀ ªÀiÁzÀj.
              ¥ÁægÀA©üPÀ ªÉZÀÑ ºÉZÀÄÑ DzÀgÉ GvÀÛªÀÄ UÀÄtªÀÄlÖzÀ ªÉÄÃªÀÅ ®¨sÀå.
            </li>
          </ul>
          <br />
          <h1 className="kan">gÀ¸ÀªÉÄÃªÀÅ vÀAiÀiÁjPÉ ºÉÃUÉ?</h1>
          <ul>
            <li className="kan">
              1. ºÀÄ®è£ÀÄß 1-2EAZÀÄ UÁvÀæzÀ°è vÀÄAqÀj¸À¨ÉÃPÀÄ
            </li>
            <li className="kan">
              2. 6-9 EAZÀÄ ¥ÀzÀgÀzÀ°è vÀÄAqÀj¹zÀ ºÀÄ®è£ÀÄß ºÀgÀqÀ¨ÉÃPÀÄ.
            </li>
            <li className="kan">
              3. ¥Àæw ¢£À 3-4 Cr vÀÄA© UÁ½ G½AiÀÄzÀAvÉ vÀÄ½AiÀÄ¨ÉÃPÀÄ.
            </li>
            <li className="kan">
              4. AiÀiÁªÀÅzÉÃ UÁvÀæzÀ UÀÄAr EzÀÝgÀÆ 6-8 ¢£ÀUÀ¼À°è vÀÄA§¨ÉÃPÀÄ.
            </li>
            <li className="kan">
              5. UÀÄArAiÀÄ ªÀÄzsÀå 4-6 Cr, ªÀÄUÀÄÎ®°è ºÉZÁÑV vÀÄA§¨ÉÃPÀÄ.
            </li>
            <li className="kan">
              6. ªÉÄÃ¯ÁãUÀzÀ°è ¥Áè¹ÖPï ºÉÆ¢¹, 2-3” Mt ºÀÄ®Äè CxÀªÁ MtVzÀ J¯É
              ºÀgÀr PÉ¸ÀgÀÄ ªÀÄtÄÚ ¯ÉÃæ¸À¨ÉÃPÀÄ.
            </li>
            <li className="kan">
              7. 4-5 ¢£ÀUÀ¼À £ÀAvÀgÀ ªÀÄtÄÚ ©gÀÄPÀÄ ©mÁÖUÀ ¸ÀUÀtÂ ¤Ãj¤AzÀ
              ¸Áj¸À¨ÉÃPÀÄ.
            </li>
            <li className="kan">
              8. UÁ½ ªÀÄvÀÄÛ ªÀÄ¼É ¤ÃgÀÄ ºÉÆÃUÀzÀAvÉ ªÉÄÃ¯ÁÑªÀtÂ EgÀÄªÀÅzÀÄ
              ¸ÀÆPÀÛ.
            </li>
          </ul>
          <br />
          <h1 className="kan">GvÀÛªÀÄ gÀ¸ÀªÉÄÃªÀÅ ºÉÃVgÀÄªÀÅzÀÄ?</h1>
          <ul>
            <li className="kan">25-30 ¢£ÀUÀ¼À°è gÀ¸ÀªÉÄÃªÀÅ vÀAiÀiÁgÀÄ.</li>
            <li className="kan">
              §AUÁgÀzÀ ºÀ¼À¢ §tÚ, C®à ºÀÄ½AiÀÄÄ¼Àî ºÀtÂÚ£À ªÁ¸À£É C¥ÉÃQëvÀ. UÁ½
              ºÉÆPÀÌgÉ PÀAzÀÄ §tÚzÀ vÀA¨ÁPÀÄ ªÁ¸À£ÉAiÀÄÄPÀÛ gÀ¸ÀªÉÄÃªÀÅ.
            </li>
            <li className="kan">
              ¸ÀjAiÀiÁV ªÀÄÄZÀÑ¢zÀÝgÉ §ÆµÀÄÖ GAmÁUÀÄvÀÛzÉ.
            </li>
          </ul>
          <br />
          <h1 className="kan">gÀ¸ÀªÉÄÃªÀÅ §¼À¸ÀÄªÀÅzÀÄ ºÉÃUÉ?</h1>
          <ul>
            <li className="kan">
              UÀÄArAiÀÄ MAzÀÄ §¢¬ÄAzÀ gÀ¸ÀªÉÄÃªÀÅ vÀAiÀiÁgÀÄ. vÀAiÀiÁjPÉ/
              ¸ÀAUÀæºÀuÉ ªÉZÀÑ C¢üPÀ.
            </li>
            <li className="kan">
              MAzÀÄ UÀÄArAiÀÄ°è£À gÀ¸ÀªÉÄÃªÀ£ÀÄß vÀAiÀiÁj¹zÀ ºÉÃUÀÄvÀÛzÉ.
            </li>
            <li className="kan">
              UÀÄAr vÉgÉzÀgÉ gÀ¸ÀªÉÄÃªÀ£ÀÄß 4-5” ¥ÀzÀgÀUÀ¼À°è ¸ÀªÀÄ£ÁV
              vÉUÉAiÀÄ¨ÉPÀÄ. UÁ½¬ÄAzÀ gÀQë¹zÀgÉ 1 ªÀµÀðQÌAvÀ ºÉZÀÄÑ PÁ®
              EqÀ§ºÀÄzÀÄ.
            </li>
          </ul>
          <br />
          <h1 className="kan">gÀ¸ÀªÉÄÃªÀÅ G¥ÀAiÉÆÃUÀUÀ¼ÉÃ£ÀÄ?</h1>
          <ul>
            <li className="kan">
              1. ªÀÄ¼ÉUÁ®zÀ°è AiÀÄxÉÃZÀÑªÁV zÉÆgÉAiÀÄÄªÀ ºÀ¹gÀÄ ªÉÄÃ«£À ¸ÀA¥ÀÇtð
              G¥ÀAiÉÆÃUÀ.
            </li>
            <li className="kan">2. ‘J’ fÃªÀ¸ÀvÀé ®¨sÀå.</li>
            <li className="kan">
              3. C£ÉÃPÀ eÁwAiÀÄ ºÀ¹gÀÄ ªÉÄÃªÀÅ ¸ÉÃj¸À§ºÀÄzÀÄ.
            </li>
            <li className="kan">
              4. PÀrªÉÄ ¥ÀæzÉÃ±ÀzÀ°è ºÉZÀÄÑ ªÉÄÃªÀÅ GvÁàzÀ£É.
            </li>
            <li className="kan">5. PÀ¼É ©Ãd £Á±ÀPÀ.</li>
          </ul>
          <br />
          <h1 className="kan">gÀ¸ÀªÉÄÃªÀÅ §¼ÀPÉ ºÉÃUÉ?</h1>
          <ul>
            <li className="kan">
              ªÁ¸À£ÉUÉ ºÉÆA¢PÉÆ¼Àî®Ä ¸Àé®à PÁ¯ÁªÀPÁ±À CUÀvÀå.
            </li>
            <li className="kan">PÀæªÉÄÃt ºÉZÀÄÑ ªÉÄÃªÀÅ w£ÀÄßvÀÛªÉ.</li>
            <li className="kan">
              PÀgÉAiÀÄÄªÀ ºÀ¸ÀÄUÀ½UÉ ºÁ®Ä »ArzÀ £ÀAvÀgÀ gÀ¸ÀªÉÄÃªÀÅ ¤ÃqÀ¨ÉÃPÀÄ.
            </li>
            <li className="kan">
              ªÀAiÀÄ¸ÀÌ ºÀ¸ÀÄ«UÉ 10-15 PÉf ¥Àæw¢£À gÀ¸ÀªÉÄÃªÀÅ PÉÆqÀ§ºÀÄzÀÄ.
            </li>
          </ul>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Fodder;
