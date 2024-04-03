import React, { useState } from "react";
import "./Descriptive.css";
import { Link } from "react-router-dom";
import logoImage from "./logo.jpg";

const Bovine = () => {
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
        <div class="data">
          <div className="info">
            <h2 className="kan" style={{ fontSize: "50px" }}>
              ¥À±ÀÄUÀ¼À DºÁgÀ ªÀÄvÀÄÛ ¥Ë¶ÖPÀvÉ
            </h2>
          </div>
          <br />
          <h1 className="kan">¥À±ÀÄUÀ¼À DºÁgÀzÀ WÀlPÀUÀ¼ÀÄ</h1>
          <div className="kan">
            <ol>
              <li>¤ÃgÀÄ</li>
              <li>PÁ¨ÉÆðÃºÉÊqÉæÃmï/ ±ÀPÀðgÀ/¦µÀÖ</li>
              <li>¥ÉÇæÃnÃ£ï/ ¸À¸ÁgÀd£ÀPÀ</li>
              <li>¥sóÁåmï/ PÉÆ§Äâ</li>
            </ol>
          </div>
          <br />
          <h1 className="kan">1. ¤ÃgÀÄ</h1>
          <div className="kan">
            <p>
              zÉÃºÀzÀ PÉÆÃ±ÀUÀ¼À£ÀÄß vÀªÀÄä £ÉÊd gÀÆ¥ÀzÀ°èj¸ÀÄvÀÛzÉ.
              <br />
              zÉÃºÀzÀ ¸ÁªÀiÁ£Àå GµÀÚvÉAiÀÄ£ÀÄß PÁ¥ÁqÀÄvÀÛzÉ.
              <br />
              zÉÃºÀzÀ°è GvÁàzÀ£ÉAiÀiÁUÀÄªÀ vÁådåUÀ¼À£ÀÄß ºÉÆgÀºÁPÀÄvÀÛzÉ.
              <br />
              zÉÃºÀzÀ 20% VAvÀ ºÉZÀÄÑ ¤Ãj£ÁA±À ªÀåAiÀÄªÁzÀ°è ¸ÁªÀÅ
              ¸ÀA¨sÀªÀ¤ÃAiÀÄ.
              <br />
              ¸ÉÃ«¹zÀ DºÁgÀzÀ ¥ÀæªÀiÁtzÀ 3 ¥ÀlÄÖ ¤ÃgÀÄ CªÀ±ÀåPÀ.
              <br />
              ¥ÁætÂUÀ¼ÀÄ fÃtðªÁV G¥ÀAiÉÆÃV¹PÉÆ¼Àî§®è ¥ÉÇæÃnÃ£ï ¥ÀæªÀiÁt
              <br />
              zÉÃºÀzÀ°è£À J¯Áè zÀæªÀUÀ½UÀÆ ªÀÄÆ®.
              <br />
              zÉÃºÀzÀ°è gÀPÀÛªÀÅ ZÀ°¸À®Ä ¤Ãj£À CªÀ±ÀåPÀvÉ¬ÄzÉ.
              <br />
              WÀ£À DºÁgÀ ¥ÀzÁxÀðUÀ¼À ¥ÀZÀ£ÀQæAiÉÄUÉ ¤ÃgÀÄ CªÀ±ÀåPÀ.
              <br />
              ºÁ®Ä GvÁàzÀ£ÉUÉ ¤ÃgÀÄ ¨ÉÃPÀÄ
              <br />
            </p>
          </div>
          <br />
          <h1 className="kan">2. PÁ¨ÉÆðÃºÉÊqÉæÃmï/ ±ÀPÀðgÀ/¦µÀÖ</h1>
          <div className="kan">
            <p>
              PÁ§ð£ï, DªÀÄèd£ÀPÀ ªÀÄvÀÄÛ d®d£ÀPÀ¢AzÀ gÀavÀªÁVgÀÄªÀ ±ÀQÛAiÀÄ
              ªÀÄÆ®.
              <br />
              Sugar, Starch ªÀÄvÀÄÛ cellulose CA±ÀUÀ¼ÀÄ ¸ÉÃjªÉ.
              <br />
              §ºÀÄvÉÃPÀ ¸À¸Àåd£Àå - ªÉÄPÉÌ eÉÆÃ¼À, eÉÆÃ¼À, ¨Á°ð, UÉÆÃ¢ü , Nmïì .
              . .
              <br />
            </p>
          </div>
          <br />
          <h1 className="kan">3. ¥ÉÇæÃnÃ£ï/ ¸À¸ÁgÀd£ÀPÀ</h1>
          <div className="kan">
            <p>
              Cw zÉÆqÀØ ªÀÄvÀÄÛ ºÉaÑ£À ¨É¯ÉAiÀÄ DºÁgÀ WÀlPÀ.
              <br />
              ªÀiÁA¸À gÀZÀ£É ªÀÄvÀÄÛ ªÀzsÀð£ÉUÉ CªÀ±ÀåPÀªÁzÀ, zÉÃºÀzÀ gÀZÀ£Á
              WÀlPÀUÀ¼ÁzÀ CªÉÄÊ£ÉÆÃ DªÀÄèUÀ½AzÀ gÀavÀ.
              <br />
              fÃtð QæAiÉÄUÉ ¨ÉÃPÁzÀ J£ïeóÉÊªÀiïUÀ¼ÀÄ ¥ÉÇæÃnÃ£ï ¤AzÀ gÀavÀ.
              <br />
              ±ÀQÛAiÀÄ£ÀÄß ¸ÀºÀ ¥ÀÇgÉÊ¸ÀÄvÀÛzÉ.
              <br />
              ¸ÀtÚ ¥ÁæAiÀÄzÀ PÀgÀÄ/ PÀqÀ¸ÀÄUÀ¼ÀÄ ªÀÄvÀÄÛ ºÁ®Ä PÉÆqÀÄªÀ
              ºÀ¸ÀÄUÀ½UÉ ºÉaÑ£À ¥ÀæªÀiÁtzÀ°è CªÀ±ÀåPÀ.
              <br />
              CªÉÄÊ£ÉÆÃ DªÀÄèUÀ¼À°è 23 §UÉ - CªÀ±ÀåPÀ 10 ºÁUÀÆ CªÀ±ÀåPÀªÀ®èzÀ 13
              <br />
              <Link to="/">Crude Protein Content (CP) </Link>- DºÁgÀ
              ¥ÀzÁxÀðzÀ°ègÀÄªÀ MlÄÖ ¥ÉÇæÃnÃ£ï ¥ÀæªÀiÁt
              <br />
              ¯ÉPÀÌZÁgÀ «zsÁ£À : <Link to="/">(CP)</Link> = ¸À¸ÁgÀd£ÀPÀ ¥ÀæªÀiÁt{" "}
              <Link to="/">X</Link> 6.25
              <br />
              <Link to="/">Digestible Protein (DP) </Link>- DºÁgÀ
              ¥ÀzÁxÀðzÀ°ègÀÄªÀ MlÄÖ ¥ÀæªÀiÁtzÀ°è fÃtðªÁV G¥ÀAiÉÆÃV¹PÉÆ¼ÀÄî§®è
              ¥ÉÇæÃnÃ£ï ¥ÀæªÀiÁt
              <br />
              ¸ÁzsÁgÀtªÁV <Link to="/">Crude Protein </Link>£À 50-80%
              <br />
              DºÁgÀzÀ°è ¥ÉÇæÃnÃ£ï ªÀÄÆ®:-
              <br />
              * ¥ÁætÂ d£Àå - Mt«ÄÃ¤£À ¥ÀÅr, PÀ¸Á¬Ä SÁ£ÉAiÀÄ vÁådåUÀ¼ÀÄ.
              <br />
              * ¸À¸Àåd£Àå - ºÉZÀÄÑ GvÀÌöÈµÀÖ – JuÉÚ PÁ¼ÀÄUÀ¼ÀÄ, »Ar.
              <br />
              * ¥À±ÀÄ DºÁgÀzÀ°è£À CªÉÄÊ£ÉÆÃ DªÀÄèUÀ¼À ¥ÀæªÀiÁtªÀ£ÀÄß ¸ÀjAiÀiÁV
              PÁAiÀÄÄÝPÉÆ¼ÀÄîªÀÅzÉÃ DºÁgÀzÀ ¸ÀªÀÄvÉÆÃ®£É
              <br />
            </p>
          </div>
          <br />
          <h1 className="kan">4. ¥sóÁåmï/ PÉÆ§Äâ</h1>
          <div className="kan">
            <p>
              ¥ÁætÂ/ ¸À¸Àå d£Àå ¸ÁªÀAiÀÄªÀ ¥ÀzÁxÀðUÀ¼ÀÄ.
              <br />
              ±ÀQÛAiÀÄ ¥ÀÇgÉÊPÉ ªÀÄvÀÄÛ ¸ÀAUÀæºÀuÉ.
              <br />
              PÉÆ©â£À DªÀÄèUÀ½AzÀ gÀavÀ – zÉÃºÀzÀ°ègÀÄªÀ ZÉÆÃzÀPÀ ªÀÄvÀÄÛ
              ZÉÆÃzÀPÀ jÃwAiÀÄ ªÀ¸ÀÄÛUÀ¼À GvÁàzÀ£ÉUÉ ¸ÀºÁAiÀÄPÀ.
              <br />
              JuÉÚ PÁ¼ÀÄUÀ¼ÀÄ CvÀÄåvÀÛªÀÄ ªÀÄÆ®.
              <br />
            </p>
          </div>
          <div className="kan">
            <h1 className="kan">5. «Ä£ÀgÀ¯ïì/R¤eÁA±ÀUÀ¼ÀÄ</h1>
            <p>
              zÉÃºÀzÀ «£Áå¸ÀzÀ°è ¥ÁvÀæ - ªÀÄÆ¼ÉUÀ¼À gÀZÀ£É.
              <br />
              ªÀiÁA¸ÀRAqÀUÀ¼À, M¼ÁAUÀUÀ¼À gÀZÀ£É, gÀPÀÛ PÉÆÃ±ÀUÀ¼À gÀZÀ£É,
              J£ïeóÉÊªÀiïUÀ¼À GvÁàzÀ£É.
            </p>
            <p>
              ºÉaÑ£À ¥ÀæªÀiÁtzÀ°è ¥ÀÇgÉÊ¸À¨ÉÃQgÀÄªÀÅzÀÄ <Link>(Macro)</Link> -7.
              <br />
              C®à ¥ÀæªÀiÁtzÀ°è ¥ÀÇgÉÊ¸À¨ÉÃQgÀÄªÀÅzÀÄ <Link>(Micro)</Link> -9.
            </p>

            <h1 className="kan">«Ä£ÀgÀ¯ïì/R¤eÁA±ÀUÀ¼À ¨ÉÃrPÉ</h1>

            <table>
              <thead>
                <tr>
                  <th className="kan">R¤d</th>
                  <th className="kan">¨É¼ÉAiÀÄÄwÛgÀÄªÀ</th>
                  <th className="kan">UÀ¨sÀðzÀ</th>
                  <th className="kan">»AqÀÄwÛgÀÄªÀ</th>
                  <th className="kan">UÀjµÀÖ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Calcium %</td>
                  <td className="kan">0.45</td>
                  <td className="kan">0.30</td>
                  <td className="kan">0.45</td>
                  <td className="kan">2.00</td>
                </tr>
                <tr>
                  <td>Phosphorous %</td>
                  <td className="kan">0.30</td>
                  <td className="kan">0.20</td>
                  <td className="kan">0.2-0.21</td>
                  <td className="kan">1.00</td>
                </tr>
                <tr>
                  <td>Magnesium %</td>
                  <td className="kan">0.10</td>
                  <td className="kan">0.12</td>
                  <td className="kan">0.20</td>
                  <td className="kan">0.40</td>
                </tr>
                <tr>
                  <td>Potassium %</td>
                  <td className="kan">0.60</td>
                  <td className="kan">0.60</td>
                  <td className="kan">0.70</td>
                  <td className="kan">3.00</td>
                </tr>
                <tr>
                  <td>Sodium %</td>
                  <td className="kan">0.08</td>
                  <td className="kan">0.08</td>
                  <td className="kan">0.10</td>
                  <td className="kan">-</td>
                </tr>
                <tr>
                  <td>Iron ppm</td>
                  <td className="kan">50</td>
                  <td className="kan">50</td>
                  <td className="kan">50</td>
                  <td className="kan">1000</td>
                </tr>
                <tr>
                  <td>Manganese ppm</td>
                  <td className="kan">20</td>
                  <td className="kan">40</td>
                  <td className="kan">40</td>
                  <td className="kan">1000</td>
                </tr>
                <tr>
                  <td>Zinc ppm</td>
                  <td className="kan">30</td>
                  <td className="kan">30</td>
                  <td className="kan">40</td>
                  <td className="kan">500</td>
                </tr>
                <tr>
                  <td>Copper ppm</td>
                  <td className="kan">10</td>
                  <td className="kan">10</td>
                  <td className="kan">10</td>
                  <td className="kan">100</td>
                </tr>
                <tr>
                  <td>Iodine ppm</td>
                  <td className="kan">0.50</td>
                  <td className="kan">0.50</td>
                  <td className="kan">0.50</td>
                  <td className="kan">50</td>
                </tr>
                <tr>
                  <td>Selenium ppm</td>
                  <td className="kan">0.20</td>
                  <td className="kan">0.20</td>
                  <td className="kan">0.20</td>
                  <td className="kan">02</td>
                </tr>
                <tr>
                  <td>Cobalt ppm</td>
                  <td className="kan">0.10</td>
                  <td className="kan">0.10</td>
                  <td className="kan">0.10</td>
                  <td className="kan">10</td>
                </tr>
                <tr>
                  <td>Molybdenum ppm</td>
                  <td className="kan">-</td>
                  <td className="kan">-</td>
                  <td className="kan">-</td>
                  <td className="kan">5</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="kan">
            <h1 className="kan">6. «l«Ä£ïì/C£ÁßAUÀUÀ¼ÀÄ</h1>
            <div className="kan">
              <p>
                ¨É¼ÀªÀtÂUÉ, DgÉÆÃUÀå, ¸ÀAvÁ£ÉÆÃvÀàwÛ ªÀÄvÀÄÛ GvÁàzÀ£ÉUÉ
                CªÀ±ÀåPÀ.
                <br />
                MvÀÛqÀ ªÀÄvÀÄÛ gÉÆÃUÀUÀ¼À£ÀÄß ¤AiÀÄAwæ¸ÀÄªÀ ±ÀQÛ MzÀV¸ÀÄvÀÛzÉ.
              </p>
            </div>
            <h1 className="kan">¥À±ÀÄ DºÁgÀzÀ°è£À «zsÀUÀ¼ÀÄ</h1>
            <div className="kan">
              <p>¥À±ÀÄ DºÁgÀzÀ 3 ªÀUÀðUÀ¼ÀÄ:-</p>
              <p>
                Mt DºÁgÀ – MtºÀÄ®Äè, MtVzÀ ºÀ¹gÀÄ ºÀÄ®Äè(Hay) JuÉÚPÁ¼ÀÄ/DºÁgÀ
                zsÁ£ÀåUÀ¼ÀÄ, PÀÈ¶ GvÀà£ÀßUÀ¼ÀÄ, ºÉÆlÄÖ. . .
              </p>
              <p>
                ºÀ¹gÀÄ ªÉÄÃªÀÅ - ºÀÄ®ÄèUÁªÀ°£À°è ¨É¼ÉzÀ ºÀÄ®Äè, ºÀ¹gÀÄ ºÀÄ®Äè. .
                .
              </p>
              <p>
                ºÉZÀÄÑ vÉÃªÁA±ÀzÀ ¥ÀzÁxÀðUÀ¼ÀÄ - ºÀ¹PÁ¼ÀÄUÀ¼ÀÄ, gÀ¸ÀªÉÄÃªÀÅ,
                UÉqÉØUÀ¼ÀÄ . . .
              </p>
            </div>
            <h1 className="kan">
              ªÉÄÃªÀÅ <Link>(Roughage)</Link>
            </h1>
            <div className="kan">
              <p>
                ºÀ¸ÀÄ«£À ªÉÄÃ«£À°è 2 §UÉ - ºÀÄ®Äè(Grass) ªÀÄvÀÄÛ
                ¸À¸ÁgÀd£ÀPÀAiÀÄÄPÀÛ ¨É¼ÉUÀ¼ÀÄ (Legumes) .
              </p>
              <p>ºÀÄ®ÄèUÀ¼ÀÄ - ¸ÀeÉÓ, eÉÆÃ¼À, £ÉÃ¦AiÀÄgï, ¥ÁågÁ, V¤...</p>
              <p>¸ÁgÀd£ÀPÀAiÀÄÄPÀÛ ¨É¼ÉUÀ¼ÀÄ -ºÀ®¸ÀAzÉ, ®Æ¸À£ïð...</p>
              <p>
                F ¨É¼ÉUÀ¼ÀÄ ªÁvÁªÀgÀtzÀ°ègÀÄªÀ ¸ÁgÀd£ÀPÀªÀ£ÀÄß vÀ£Àß°ègÀÄªÀ
                ¨ÉÃj£À ªÀÄÆ®PÀ ¸É¼ÉzÀÄ ¸ÀAUÀæ»¹nÖgÀÄvÀÛªÉ.
              </p>
            </div>
            <h1 className="kan">¸ÁA¢æÃPÀÈvÀ DºÁgÀ</h1>
            <div className="kan">
              <p>
                ¸ÁA¢æÃPÀÈvÀ DºÁgÀzÀ 3 WÀlPÀUÀ¼ÀÄ – PÁ¼ÀÄUÀ¼ÀÄ, G¥À GvÀà£ÀßUÀ¼ÀÄ,
                ºÉZÀÄÑªÀj ¸ÉÃ¥ÀðqÉUÀ¼ÀÄ.
              </p>
              <p>
                ¸ÁªÀiÁ£Àå §¼ÀPÉAiÀÄ PÁ¼ÀÄUÀ¼ÀÄ - ªÉÄPÉÌ eÉÆÃ¼À, eÉÆÃ¼À, Nmïì,
                ¨Á°ð, UÉÆÃ¢ü ...
              </p>
              <p>
                ºÉZÀÄÑªÀj ¸ÉÃ¥ÀðqÉUÀ¼ÀÄ ¸À¸Àåd£Àå CxÀªÁ ¥ÁætÂ d£Àå -¸À¸ÁgÀd£ÀPÀ
                DºÁgÀ ¥ÀzÁxÀðUÀ¼ÀÄ, R¤eÁA±ÀUÀ¼ÀÄ, C£ÁßAUÀUÀ¼ÀÄ ...
              </p>
              <p>
                ¥ÁætÂ d£Àå ¸ÉÃ¥ÀðqÉUÀ¼ÀÄ – PÉ£ÉvÉUÉzÀ ºÁ°£À ¥ÀÅr, gÉÃµÉä ºÀÄ¼ÀÄ
                ¥ÀÅr, ªÀiÁA¸ÀzÀ ¥ÀÅr, ªÀÄÆ¼É ¥ÀÅr ...
              </p>
              <p>
                ¸À¸Àåd£Àå ¸ÉÃ¥ÀðqÉUÀ¼ÀÄ - ¸ÉÆÃAiÀiÁ, ºÀwÛ, PÉÆ§âj, £É®UÀqÀ¯É,
                ¸ÀÆAiÀÄðPÁAw PÁ½£À »ArUÀ¼ÀÄ...
              </p>
              <p>
                AiÀÄÆjAiÀiÁ - ¸À¸Àåd£Àå/ ¥ÁætÂd£Àå ªÀ®èzÀ ¸À¸ÁgÀd£ÀPÀªÀ®èzÀ
                ¥À±ÀÄ DºÁgÀzÀ°è ¨ÉgÉ¸ÀÄªÀ ¸ÉÃåÀðqÉ...
              </p>
              <p>
                R¤eÁA±ÀUÀ¼À ¸ÉÃ¥ÀðqÉ - ¸ÁªÀiÁ£ÀåªÁV PÁå°ìAiÀÄA , ¥sóÁ¸ÀàgÀ¸ï
                ªÀÄvÀÄÛ mÉæÃ¸ï «Ä£ÀgÀ¯ïUÀ¼À «Ä±ÀætªÁVgÀÄvÀÛzÉ.
              </p>
              <p>®ªÀt ©¯ÉèUÀ¼À®Æè mÉæÃ¸ï «Ä£ÀgÀ¯ïUÀ¼À£ÀÄß ¸ÉÃj¸À§ºÀÄzÀÄ.</p>
              <p>
                ¥À±ÀÄ DºÁgÀzÀ°è PÉÆgÀvÉAiÀiÁVgÀÄªÀ C£ÁßAUÀUÀ¼À£ÀÄß ¸ÉÃåÀðqÉAiÀÄ
                ªÀÄÆ®PÀ ¥ÀÇgÉÊ¸À¨ÉÃPÀÄ.
              </p>
              <p>
                VjtÂAiÀÄ°è DºÁgÀ zsÁ£ÀåUÀ¼À ±ÀÄ¢ÞÃPÀgÀt CxÀªÁ ¥ÀÅrªÀiÁqÀÄªÀ
                ¸ÀAzÀ¨sÀð ®¨sÀåªÁUÀÄªÀÅzÀÄ.
              </p>
              <p>CQÌ vËqÀÄ, UÉÆÃ¢ü §Æ¸À, PÀqÀ¯É ºÉÆlÄÖ...</p>
            </div>
          </div>
          <div className="kan">
            <h1 className="kan">gÀÆ«Ä£ÉAmï ¥ÁætÂUÀ¼À°è fÃuÁðAUÀUÀ¼ÀÄ</h1>
            <div className="kan">
              <p>
                ¨Á¬Ä, C£Àß£Á¼À, °ªÀgï, ¥ÁåAQæAiÀiÁ¸ï, UÁ¯ï ¨ÁèqÀgï, ¸ÀtÚ ªÀÄvÀÄÛ
                zÉÆqÀØ PÀgÀÄ¼ÀÄUÀ¼ÀÄ ¸ÀgÀ¼À doÀgÀ ¥ÁætÂUÀ¼À°ègÀÄªÀAvÉ PÉ®¸À
                ¤ªÀð»¸ÀÄvÀÛªÉ.
                <br />
                <br />
                doÀgÀ :--
                <br />
                gÀZÀ£É ªÀÄvÀÄÛ PÀvÀðªÀåUÀ¼ÀÄ ¸ÀgÀ¼À doÀgÀ <br />
                ¥ÁætÂUÀ½VAvÀ ¥ÀæªÀÄÄR ªÀåvÁå¸À
                <br />
                §ºÀÄ ¨sÁUÀUÀ¼ÀÄ EªÉ – gÀÆªÉÄ£ï, gÉnPÀÄå®A, MªÉÄÃ¸ÀA,
                C¨ÉÆÃªÉÄÃ¸ÀA
                <br />
                <br />
              </p>
              <h1 className="kan">gÀÆ«Ä£ÉAmï doÀgÀzÀ ¨sÁUÀUÀ¼ÀÄ</h1> <br />
              <p>
                gÀÆªÉÄ£ï :--
                <br />
                * UÁ½¬Ä®èzÉ ºÀÄ½¸ÀÄªÀ zÉÆqÀØ ¦¥Á¬Ä <br />
                * ¸ÀÆPÀë÷äfÃ«UÀ½UÉ D±ÀæAiÀÄ.:--
                <br />- KPÀ PÉÆÃ±À fÃ«UÀ¼ÀÄ – ¥Àæw UÁæA gÀÆªÉÄ£ï zÀæªÀzÀ°è
                100,000 <br />
                - ¨ÁåQÖÃjAiÀÄ – ¥Àæw UÁæA gÀÆªÉÄ£ï zÀæªÀzÀ°è 100,00,000 <br />
                <br />
                * ¸ÀÆPÀë÷äfÃ«UÀ¼À PÀvÀðªÀå:--
                <br />
                - £Áj£ÀA±ÀªÀÅ¼Àî ªÉÄÃªÀ£ÀÄß fÃtÂð¹ ªÉÇÃ®mÉÊ¯ï PÉÆ©â£À DªÀÄèUÀ¼À
                GvÁàzÀ£É,
                <br />
                - ¸ÀÆPÁë÷ätÄ ¥ÉÇæÃnÃ£ï, «l«Ä£ï © ¸ÀAQÃtð ªÀÄvÀÄÛ «l«Ä£ï PÉ
                GvÁàzÀ£É.
                <br />
                <br />
                * ªÉÇÃ®mÉÊ¯ï PÉÆ©â£À DªÀÄèUÀ¼À£ÀÄß »ÃjPÉÆ¼ÀÄîªÀÅzÀÄ.
                <br />
                * ®PÉÆëÃ¥À®PÀë ¥Áå¦¯ÁèUÀ½AzÀ PÀÆrzÀÄÝ »ÃjPÉÆ¼Àî®Ä
                ¸ÀºÀPÁjAiÀiÁVzÉ. (M¼À ¥ÀzÀgÀzÀ°è ¸ÀtÚ ªÀÄÄ½î£ÀAwgÀÄªÀ G§ÄâUÀ¼ÀÄ)
                <br />
                -‘ºÁ¸ÀÄ PÀA§½’AiÀÄAvÉ
                <br />
                * AiÀiÁªÁUÀ®Æ UÁ½¬ÄAzÀ vÀÄA©zÀÄÝ ¸ÀzÁPÁ® ZÁ®£ÉAiÀÄ°ègÀÄvÀÛzÉ.
                <br />
                * ¥Àæw ¤«ÄµÀPÉÌ 1 – 3 ¸ÀAPÀÄa¸ÀÄªÀ ZÁ®£ÉUÀ½gÀÄvÀÛªÉ..
                <br />
                - ±ÉÃRgÀuÉAiÀiÁVgÀÄªÀ DºÁgÀªÀ£ÀÄß «Ä±Àæt ªÀiÁqÀ®Ä, UÁ½ ºÉÆgÀ
                ºÁPÀ®Ä ªÀÄvÀÄÛ ºÀÄ½¹zÀ DºÁgÀªÀ£ÀÄß ªÀÄÄAzÀPÉÌ PÀ¼ÀÄ»¸À®Ä ¸ÀºÀPÁj
                <br />
                <br />
                ªÉÄ®PÀÄ:--
                <br />
                * gÀÆ«Ä£ÉAmï ¥ÁætÂUÀ¼ÀÄ ªÉÄ®PÀÄ ºÁPÀÄvÀÛªÉ.
                <br />
                * ÉÄ®PÀÄ F PÉ¼ÀV£À QæAiÉÄUÀ¼À£ÀÄß M¼ÀUÉÆArzÉ.
                <br />
                - PÉ® ¸ÀªÀÄAiÀÄ »AzÉ £ÀÄAVgÀÄªÀ DºÁgÀªÀ£ÀÄß ZÉAqÀÄUÀ¼À gÀÆ¥ÀzÀ°è
                ¥ÀÅ£À: ¨Á¬ÄUÉ vÀgÀÄªÀÅzÀÄ.
                <br />
                - £Á°UÉ¬ÄAzÀ ¤Ãj£ÀA±ÀªÀ£ÀÄß »Ar £ÀÄAUÀÄªÀÅzÀÄ.
                <br />
                - DºÁgÀªÀ£ÀÄß ªÀÄvÉÛ CVzÀÄ ªÀÄvÉÛ £ÀÄAUÀÄªÀÅzÀÄ. <br />
                * gÀÆ«Ä£ÉAmï ¥ÁætÂUÀ¼À MAzÀÄ ¢£ÀzÀ°è ªÉÄ®PÀÄ <br />
                ¥ÀæQæAiÉÄ ¸ÀÄªÀiÁgÀÄ 8 UÀAmÉUÀ¼À£ÀÄß §¼À¹PÉÆ¼ÀÄîvÀÛz
                <br />
                <br />
                UÁå¸ï ºÉÆgÀºÁPÀÄªÀÅzÀÄ (vÉÃUÀÄªÀÅzÀÄ):--
                <br />
                * gÀÆªÉÄ£ï£À°è £ÀqÉAiÀÄÄªÀ DºÁgÀ ºÀÄ½¸ÀÄ«PÉ¬ÄAzÀ CwºÉZÀÄÑ
                ¥ÀæªÀiÁtzÀ°è UÁå¸ï GvÁàzÀ£ÉAiÀiÁUÀÄvÀÛzÉ.
                <br />
                - ªÀAiÀÄ¸ÀÌ ºÀ¸ÀÄ«£À°è ¥Àæw UÀAmÉUÉ 30-50 °Ã
                <br />
                - ªÀAiÀÄ¸ÀÌ PÀÄj/Dr£À°è ¥Àæw UÀAmÉUÉ 5-7 °Ã
                <br />
                * gÀÆ«Ä£ÉAmï ¥ÁætÂUÀ¼ÀÄ vÉÃUÀÄªÀÅzÀgÀ ªÀÄÆ®PÀ UÁå¸ï ºÉÆgÀ
                ºÁPÀÄvÀÛªÉ.
                <br />
                - UÁå¸ï ºÉÆgÀ ºÁPÀÄªÀ ¥ÀæQæAiÉÄUÉ CqÀZÀuÉ fÃªÀPÉÌ C¥ÁAiÀÄ.
                <br />
                - ºÉÆmÉÖ G§âgÀªÁzÀ°è G¹gÁlzÀ vÉÆAzÀgÉ¬ÄAzÀ ¸ÁªÀÅ
                ¸ÀA¨sÀ«¸À§ºÀÄzÀÄ
                <br />
              </p>
              <h1 className="kan">gÉnPÀÄå®A</h1> <br />
              <p>
                * gÀÆªÉÄ£ï £À°èzÀÝAvÉ ¸ÀÆPÁë÷ätÄUÀ½gÀÄvÀÛªÉ.
                <br />
                * DºÁgÀ ¥ÀzÁxÀðUÀ¼À£ÀÄß ºÀÄ½¸À®Ä ºÉZÀÄÑ CªÀPÁ±À.
                <br />
                * ¸ÀÆPÁë÷ätÄ ºÀÄ½¸ÀÄ«PÉ¬ÄAzÀ DºÁgÀ ¥ÀzÁxÀðUÀ¼ÀÄ fÃtðªÁUÀÄªÁUÀ
                ¸ÀtÚ ªÀÄvÀÄÛ vÀÆPÀªÁzÀ ¥ÀzÁxÀðUÀ¼ÀÄ E°èUÉ §gÀÄvÀÛªÉ. (E°èAzÀ
                ¸ÀÆPÁë÷ätÄ fÃtðQæAiÉÄAiÀÄ zÀæªÀzÉÆA¢UÉ MªÉÄÃ¸ÀA UÉ
                gÀªÁ£ÉAiÀiÁUÀÄvÀÛzÉ)
                <br />
                * M¼À ¥ÀzÀgÀ eÉÃ£ÀÄ UÀÆr£ÀAwzÉ
                <br />
                - CPÀ¹äPÀªÁV w£ÀÄßªÀ PÀgÀUÀzÀ WÀ£À ¥ÀzÁxÀðUÀ¼À£ÀÄß vÀqÉzÀÄ
                ¤°è¸ÀÄvÀÛzÉ.
                <br />
                - PÀ©âtzÀ CA±ÀUÀ¼ÁzÀgÉ ªÀiÁåUÉßÃmï¤AzÀ ¥ÀvÉÛªÀiÁqÀ§ºÀÄzÀÄ.
                <br />
              </p>
              <h1 className="kan">MªÉÄÃ¸ÀA</h1> <br />
              <p>
                * UÀnÖAiÀiÁzÀ ªÀÄvÀÄÛ vÀÆPÀªÁzÀ CAUÀ, M¼À ¥ÀzÀgÀ J¯ÉUÀ¼ÀAwgÀÄªÀ
                ªÀÄrPÉUÀ½AzÀ PÀÆrzÉ.
                <br />
                * PÀvÀðªÀåUÀ¼ÀÄ ¸ÀjAiÀiÁV w½¢®è. <br />
                - DºÁgÀ ¥ÀzÁxÀðUÀ¼À£ÀÄß CgÉAiÀÄÄvÀÛzÉ.
                <br />
                - §ºÀÄ±À: G½¢gÀÄªÀ ªÉÇÃ®mÉÉÊ¯ï PÉÆ©â£À DªÀÄè ªÀÄvÀÄÛ
                PÁ¨ÉÆðÃ£ÉÃmï UÀ¼À£ÀÄß »ÃjPÉÆ¼ÀÄî§ºÀÄzÀÄ.
                <br />
              </p>
              <h1 className="kan">C¨ÉÆÃªÉÄÃ¸ÀA</h1> <br />
              <p>
                * ¤dªÁzÀ UÀæAy ªÀiÁzÀjAiÀÄ doÀgÀ
                <br />
                - DªÀÄèUÀ¼À£ÀÄß GvÁà¢¹ ¸ÀgÀ¼À doÀgÀ ¥ÁætÂUÀ¼À doÀgÀzÀAvÉ
                PÀvÀðªÀå ¤ªÀð»¸ÀÄvÀÛzÉ
                <br />
                * ¯ÉÊ¸ÉÆÃ¸ÉÊªÀiï JA§ ªÀ¸ÀÄÛ«£À GvÁàzÀ£É - «±ÉÃµÀ UÀÄt
                <br />
                - ¨ÁåQÖÃjAiÀÄ PÉÆÃ±ÀzÀ DªÀgÀtªÀ£ÀÄß ¨ÉÃ¢ü¸ÀÄvÀÛzÉ.
                <br />
                - gÀÆªÉÄ£ï ¤AzÀ §gÀÄªÀ Cw ºÉZÀÄÑ ¸ÀASÉåAiÀÄ ¨ÁåQÖÃjAiÀÄUÀ¼À£ÀÄß
                £Á±À¥Àr¸À®Ä ¸ÀºÁAiÀÄPÀ. <br />
              </p>
            </div>
          </div>
          <div>
            <h1>Chelated Minerals</h1>
            <div className="kan">
              <ul>
                <li>
                  <Link>Chelation</Link> - R¤eÁA±ÀUÀ¼À£ÀÄß ²ÃWÀæªÁV »ÃjPÉÆAqÀÄ
                  G¥ÀAiÉÆÃV¹ PÉÆ¼Àî¯ÁUÀÄªÀAvÉ ªÀiÁqÀÄªÀ «zsÁ£À..
                </li>
                <li>
                  R¤eÁA±ÀªÀ£ÀÄß CªÉÄÊ£ÉÆ DªÀÄè / ¸ÀtÚ ¥É¥ÉÖöÊqï £ÉÆA¢UÉ
                  ¸ÉÃj¸ÀÄªÀÅzÀÄ.
                </li>
              </ul>
            </div>
            <h1 className="kan">
              <Link>Chelated Minerals </Link>G¥ÀAiÀÄÄPÀÛvÉUÀ¼ÀÄ
            </h1>
            <div className="kan">
              <ul>
                <li>zÉÃºÀPÉÌ ¸ÉÃjPÉÆ¼ÀÄîªÀ ¥ÀæªÀiÁt ªÀÈ¢Þ¸ÀÄvÀÛzÉ.</li>
                <li>R¤dªÀ£ÀÄß wÃªÀæ ¥ÀjuÁªÀÄUÀ½AzÀ gÀQë¸ÀÄvÀÛzÉ.</li>
                <li>R¤dUÀ¼À£ÀÄß pH ¹ÜjÃPÀÈvÀªÀ£ÁßV¸ÀÄvÀÛzÉ.</li>
                <li>
                  PÉÆÃ±ÀUÀ¼À°è R¤dUÀ¼À G½AiÀÄÄ«PÉ ªÀÄvÀÄÛ ZÀlÄªÀnPÉ ºÉZÀÄÑvÀÛzÉ.
                </li>
                <li>
                  GzÉÝÃ²vÀ §¼ÀPÉ UÀÄj vÀ®Ä¥À§ºÀÄzÀÄ –{" "}
                  <Link>Zinc + methionine – targetted to hooves.</Link>
                </li>
              </ul>
              <p>
                ----¯Á¨sÀzÁAiÀÄPÀ ºÉÊ£ÀÄUÁjPÉUÉ ¸ÀªÀÄvÉÆÃ®£À DºÁgÀ ¥ÀÇgÉÊPÉ
                ¸ÀÆvÀæ----
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bovine;
