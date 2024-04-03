import React, { useState } from "react";
import "./Descriptive.css";
import { Link } from "react-router-dom";
import logoImage from "./logo.jpg";

const Fodderdev = () => {
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
              ªÉÄÃ«£À ¨É¼ÉUÀ¼ÀÄ
            </h2>
            <br />
            <div className="kan">
              * ¥À±ÀÄ DºÁgÀzÀ 50-60% ºÀ®ªÉÇªÉÄä 100% ªÉÄÃªÀÅ.
              <br />
              * 75% GvÀÛªÀÄ JPÀzÀ¼À ªÉÄÃªÀÅ + <br />
              * 25% ¢ézÀ¼À ªÉÄÃªÀÅ ¤ÃrzÀgÉ ¸ÀªÀÄvÉÆÃ®£À DºÁgÀ ¤ÃrzÀAvÉ.
              <br />
              * F ¥ÀÇgÉÊPÉ¬ÄAzÀ 5-6 °Ã ºÁ®Ä ¥ÀqÉAiÀÄ§ºÀÄzÀÄ.
              <br />
              * PÀÈ¶AiÉÆÃUÀå MlÄÖ d«ÄÃ¤£À°è PÉÃªÀ® 3-4 % «¹ÛÃtðzÀ°è ªÉÄÃªÀÅ¨É¼É
              ¨ÉÃ¼ÉAiÀÄ¯ÁUÀÄwÛzÉ.
              <br />
            </div>
            <br />
            <h1 className="kan">KPÀzÀ¼À ªÉÄÃªÀÅ ¨É¼ÉUÀ¼À «zsÀUÀ¼ÀÄ</h1>
            <br />
            <h1 className="kan">1. ªÁ¶ðPÀ</h1>
            <ul>
              <li className="kan">1. eÉÆÃ¼À.</li>
              <li className="kan">2. ªÉÄPÉÌ eÉÆÃ¼</li>
              <li className="kan">3. .¸ÀeÉÓ</li>
            </ul>
            <br />
            <h1 className="kan">2. §ºÀÄªÁ¶ðPÀ</h1>
            <ul>
              <li className="kan">1. ºÉÊ©æqï £ÉÃ¦AiÀÄgï</li>
              <li className="kan">2. V¤</li>
              <li className="kan">3. .gÉÆÃqïì</li>
              <li className="kan">2. .¥ÁågÁ</li>
            </ul>
            <br />
            <h1 className="kan">¢ézÀ¼À ªÉÄÃªÀÅ ¨É¼ÉUÀ¼À «zsÀUÀ¼ÀÄ</h1>
            <br />
            <h1 className="kan">1. ªÁ¶ðPÀ</h1>
            <ul>
              <li className="kan">1. .C®¸ÀAzÉ</li>
              <li className="kan">2. .ºÀÄgÀÄ½</li>
            </ul>
            <br />
            <h1 className="kan">2. §ºÀÄªÁ¶ðPÀ</h1>
            <ul>
              <li className="kan">1. PÀÄzÀÄgÉ ªÀÄ¸Á¯É (ªÉÄAvÉ)</li>
            </ul>
            <br />
            <h1 className="kan">EvÀgÉ ªÉÄÃªÀÅ ¨É¼ÉUÀ¼ÀÄ</h1>
            <br />
            <h1 className="kan">1. ªÉÄÃ«£À ªÀÄgÀUÀ¼ÀÄ</h1>
            <ul>
              <li className="kan">1. .¸ÀÄ¨Á§Ä¯ï</li>
              <li className="kan">2. .¨ÁUÉ</li>
              <li className="kan">3. PÀjeÁ°</li>
            </ul>
            <br />
            <h1 className="kan">2. ºÀÄ®ÄèUÁªÀ®Ä ¨É¼ÉUÀ¼ÀÄ</h1>
            <ul>
              <li className="kan">1. KPÀzÀ¼À – ¸ÉAPÀæ¸ï </li>
              <li className="kan">2. .¢ézÀ¼À - ¸ÉÖöÊ¯ÉÆ¸ÁåAvÀ¸ï</li>
            </ul>
            <br />
            <h1 className="kan">ªÉÄÃªÀÅ¨É¼É – eÉÆÃ¼À</h1>
            <div className="kan">
              * «±ÉÃµÀvÉUÀ¼ÀÄ :-
              <br />
              * vÉ¼ÀÄªÁzÀ PÀrØ ºÁUÀÆ J¯É, 2-4 PÀÆ¼É ¨É¼É ®¨sÀå.
              <br />
              * PÀrªÉÄ ¥sÀ®ªÀvÀÛvÉAiÀÄ ¨sÀÆ«ÄAiÀÄ°è ¨É¼ÉAiÀÄ§ºÀÄzÀÄ.
              <br />
              * ¤ÃgÀÄ ¤®ÄèªÀ ¨sÀÆ«Ä AiÉÆÃUÀåªÀ®è.
              <br />
              * PÀmÁªÀÅ = 60-70 ¢£ÀUÀ¼ÀÄ .<br />
              * E¼ÀÄªÀj = ¤ÃgÁªÀj 25-35 l£ï; ªÀÄ¼É D±ÀæAiÀÄ10-20 l£ï.
              <br />
              * ¥Ë¶ÖPÁA±À- £ÁgÀÄ 41.8% , ¸À¸ÁgÀd£ÀPÀ-4.4%.
              <br />
            </div>
          </div>
          <div>
            <br />
            <h1 className="kan">ªÉÄÃªÀÅ¨É¼É – ªÉÄPÉÌ eÉÆÃ¼À</h1>
            <div className="kan">
              <ul>
                <li>«±ÉÃµÀvÉUÀ¼ÀÄ :-</li>
                <li>ºÉZÀÄÑ vÉÃªÁA±ÀzÀ GµÀÚ ºÀªÉ ¸ÀÆPÀÛ.</li>
                <li>J¯Áè vÀgÀºÀzÀ ªÀÄtÂÚ£À®Æè ¨É¼ÉAiÀÄ§ºÀÄzÀÄ.</li>
                <li>ªÀµÀðzÀ J¯Áè PÁ®zÀ°è ¨É¼ÉAiÀÄ §ºÀÄzÀÄ.</li>
                <li>PÀmÁªÀÅ = 60-70 ¢£ÀUÀ¼ÀÄ.</li>
                <li>E¼ÀÄªÀj = ¤ÃgÁªÀj 65-75 l£ï; ªÀÄ¼É D±ÀæAiÀÄ 40-50 l£ï.</li>
              </ul>
            </div>
            <br />
            <h1 className="kan">ªÉÄÃªÀÅ¨É¼É – ¸ÀeÉÓ</h1>
            <div className="kan">
              <ul>
                <li>«±ÉÃµÀvÉUÀ¼ÀÄ :-</li>
                <li>AiÀiÁªÀÅzÉÃ gÉÆÃUÀPÉÌ ¹®ÄPÀÄªÀÅ¢®è.</li>
                <li>zÀAlÄ vÉ¼ÀîVgÀÄvÀÛzÉ.</li>
                <li>eÁ£ÀÄªÁgÀÄUÀ¼ÀÄ EµÀÖ¥ÀlÄÖ w£ÀÄßvÀÛªÉ.</li>
                <li>MtVzÀ ªÉÄÃªÁV §¼À¸À§ºÀÄzÀÄ.</li>
                <li>PÀmÁªÀÅ = 65-70 ¢£ÀUÀ¼ÀÄ.</li>
                <li>E¼ÀÄªÀj = ¤ÃgÁªÀj 60-70 l£ï; ªÀÄ¼É D±ÀæAiÀÄ 50-55 l£ï.</li>
                <li>¥Ë¶ÖPÁA±À- £ÁgÀÄ 32.69%, PÀgÀUÀ§®è ¦µÀÖ - 53.97%.</li>
              </ul>
            </div>
            <br />
            <h1 className="kan">ºÉÊ©æqï £ÉÃ¦AiÀÄgï</h1>
            <div className="kan">
              <ul>
                <li>«±ÉÃµÀvÉUÀ¼ÀÄ :-</li>
                <li>¨ÉÃgÀÄ ©lÖ vÀÄAqÀÄUÀ½AzÀ ¥Àæ¸ÁgÀ.</li>
                <li>RÄ¶Ì ¨É¼ÉAiÀiÁV ¨É¼ÉAiÀÄ§ºÀÄzÀÄ.</li>
                <li>««zsÀ ¥Àj¹ÜwUÀ½UÉ ºÉÆA¢PÉÆ¼ÀÄîvÀÛzÉ.</li>
                <li>PÀmÁªÀÅ = 40-50 ¢£ÀUÀ½UÉÆªÉÄä.</li>
                <li>
                  E¼ÀÄªÀj = ¤ÃgÁªÀj 130-150 l£ï; ªÀÄ¼É D±ÀæAiÀÄ 45-60 l£ï.
                </li>
                <li>¥Ë¶ÖPÁA±À- £ÁgÀÄ 30-41%, ¸À¸ÁgÀd£ÀPÀ- 10-12%.</li>
              </ul>
            </div>
            <br />
            <h1 className="kan">V¤</h1>
            <div className="kan">
              <ul>
                <li>«±ÉÃµÀvÉUÀ¼ÀÄ :-</li>
                <li>CvÀÄåvÀÛªÀÄ ªÀÄzsÀåAvÀgÀ ¨É¼É.</li>
                <li>
                  ªÀÄgÀ¼ÀÄ «Ä²ævÀ UÉÆÃqÀÄ ªÀÄtÂÚ£À°è ZÉ£ÁßV ¨É¼ÉAiÀÄ§ºÀÄzÀÄ.
                </li>
                <li>©Ãd¢AzÀ C©üªÀÈ¢Þ ªÀiÁqÀ§ºÀÄzÀÄ.</li>
                <li>
                  PÀmÁªÀÅ = 60-70 ¢£ÀUÀ½UÉ ¥ÀæxÀªÀÄ, £ÀAvÀgÀ 30-35
                  ¢£ÀUÀ½UÉÆªÉÄä.
                </li>
                <li>E¼ÀÄªÀj = ¤ÃgÁªÀj 90-100 l£ï; ªÀÄ¼É D±ÀæAiÀÄ 35-40 l£ï.</li>
                <li>¥Ë¶ÖPÁA±À- £ÁgÀÄ 32.81%, ¸À¸ÁgÀd£ÀPÀ- 8.56%.</li>
              </ul>
            </div>
            <br />
            <h1 className="kan">gÉÆÃqïì</h1>
            <div className="kan">
              <ul>
                <li>«±ÉÃµÀvÉUÀ¼ÀÄ :-</li>
                <li>Cw ²ÃWÀæªÁV ¨É¼ÉAiÀÄÄvÀÛzÉ.</li>
                <li>¤ÃgÀÄ PÀrªÉÄAiÀiÁzÀgÀÆ ¨É¼ÉAiÀÄÄvÀÛzÉ.</li>
                <li>ºÉZÀÄÑ PÀªÀ¯ÉÆqÉAiÀÄÄvÀÛzÉ.</li>
                <li>
                  PÀmÁªÀÅ = 50-60 ¢£ÀUÀ½UÉ ¥ÀæxÀªÀÄ, £ÀAvÀgÀ 20-25
                  ¢£ÀUÀ½UÉÆªÉÄä.
                </li>
                <li>E¼ÀÄªÀj = ¤ÃgÁªÀj 80-90 l£ï; ªÀÄ¼É D±ÀæAiÀÄ 30-35 l£ï.</li>
                <li>¥Ë¶ÖPÁA±À- £ÁgÀÄ 26.60%, ¸À¸ÁgÀd£ÀPÀ- 12.42%.</li>
              </ul>
            </div>
            <br />
            <h1 className="kan">¥ÁågÁ</h1>
            <div className="kan">
              <ul>
                <li>«±ÉÃµÀvÉUÀ¼ÀÄ :-</li>
                <li>ºÀ§ÄâªÀ ¸Àé¨sÁªÀzÀ ºÀÄ®Äè.</li>
                <li>PÉÆ¼ÀZÉ ¤Ãj£À®Æè ¨É¼ÉAiÀÄÄvÀÛzÉ.</li>
                <li>ºÀÄ½, eËUÀÄ PÁëgÀ- ªÀÄtÄÚUÀ¼À°èAiÀÄÆ ¨É¼ÉAiÀÄÄvÀÛzÉ.</li>
                <li>
                  PÀmÁªÀÅ = 75 ¢£ÀUÀ½UÉ ¥ÀæxÀªÀÄ, £ÀAvÀgÀ 25-30 ¢£ÀUÀ½UÉÆªÉÄä.
                </li>
                <li>
                  E¼ÀÄªÀj = ¤ÃgÁªÀj 150-175 l£ï; ªÀÄ¼É D±ÀæAiÀÄ 125-150 l£ï.
                </li>
                <li>¥Ë¶ÖPÁA±À- £ÁgÀÄ 29.30%, ¸À¸ÁgÀd£ÀPÀ- 8.96%.</li>
              </ul>
            </div>
            <br />
            <h1 className="kan">ªÉÄÃ«£À C®¸ÀAzÉ</h1>
            <div className="kan">
              <ul>
                <li>«±ÉÃµÀvÉUÀ¼ÀÄ :-</li>
                <li>ºÉZÀÄÑ ¸À¸ÁgÀd£ÀPÀ ºÉÆA¢zÉ.</li>
                <li>PÀrªÉÄ CªÀ¢üAiÀÄ°è ºÉZÀÄÑ ºÀ¹gÀÄ ªÉÄÃªÀÅ.</li>
                <li>«Ä±Àæ ¨É¼ÉAiÀiÁV ¨É¼ÉAiÀÄÄªÀÅzÀÄ GvÀÛªÀÄ.</li>
                <li>PÀmÁªÀÅ = 65-70 ¢£ÀUÀ½UÉ PÀmÁªÀÅ.</li>
                <li>E¼ÀÄªÀj = ªÀÄ¼É D±ÀæAiÀÄ 30 l£ï.</li>
              </ul>
            </div>
            <br />
            <h1 className="kan">ªÉÄÃ«£À ºÀÄgÀÄ½</h1>
            <div className="kan">
              <ul>
                <li>«±ÉÃµÀvÉUÀ¼ÀÄ :-</li>
                <li>RÄ¶Ì ªÉÄÃ«£À ¨É¼É.</li>
                <li>ºÀ¹gÀÄ/Mt ªÉÄÃªÁV §¼À¸À§ºÀÄzÀÄ.</li>
                <li>§ºÀÄ¨É¼É AiÉÆÃd£ÉAiÀÄ°è C¼ÀªÀr¹PÉÆ¼Àî§ºÀÄzÀÄ.</li>
                <li>PÀmÁªÀÅ = 65-70 ¢£ÀUÀ½UÉ PÀmÁªÀÅ.</li>
                <li>
                  E¼ÀÄªÀj = ªÀÄ¼É D±ÀæAiÀÄ 15-18 l£ïºÀ¹gÀÄ ªÉÄÃªÀÅ,4 l£ï ºÉÆlÄÖ
                  ªÀÄvÀÄÛ 5-6 QéA.PÁ¼ÀÄ.
                </li>
              </ul>
            </div>
            <br />
            <h1 className="kan">PÀÄzÀÄgÉ ªÀÄ¸Á¯É (ªÉÄAvÉ)</h1>
            <div className="kan">
              <ul>
                <li>«±ÉÃµÀvÉUÀ¼ÀÄ :-</li>
                <li>ªÀµÀð¥ÀÇwð ¥ÀÅ¶ÖzÁAiÀÄPÀ ªÉÄÃªÀÅ C¯ÁàªÀ¢üAiÀÄ°è ®¨sÀå.</li>
                <li>ºÉZÀÄÑ gÀÄaPÀgÀ “ ªÉÄÃªÀÅ ¨É¼ÉUÀ¼À gÁtÂ”.</li>
                <li>
                  J¼ÉAiÀÄ PÀgÀÄ, PÀÄj, ªÉÄÃPÉUÀ½UÉ Mt ªÉÄÃªÁV §¼À¸À§ºÀÄzÀÄ.
                </li>
                <li>J¯Áè ¨É¼ÉUÀ¼ÉÆA¢UÉ/vÉAV£À vÉÆÃlzÀ°è ¨É¼É¸À§ºÀÄzÀÄ.</li>
                <li>ºÀÄ½AiÀiÁzÀ ZË¼ÀÄ ¨sÀÆ«Ä G¥ÀAiÀÄÄPÀÛªÀ®è.</li>
                <li>
                  PÀmÁªÀÅ = 50-60 ¢£ÀUÀ½UÉ ¥ÀæxÀªÀÄ, £ÀAvÀgÀ 25-30
                  ¢£ÀUÀ½UÉÆªÉÄä.
                </li>
                <li>¥Ë¶ÖPÁA±À- £ÁgÀÄ 30.10%, ¸À¸ÁgÀd£ÀPÀ- 18-20%.</li>
                <li>
                  E¼ÀÄªÀj = PÀ¥ÀÅöà ªÀÄtÂÚ£À°è 90-110 l£ï, PÉA¥ÀÅ ªÀÄtÂÚ£À°è
                  75-85 l£ï ºÀ¹gÀÄ ªÉÄÃªÀÅ ºÀ¹gÀÄ ªÉÄÃªÀÅ.
                </li>
              </ul>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fodderdev;
