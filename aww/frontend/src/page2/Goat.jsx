import React, { useState } from "react";
import "./Descriptive.css";
import { Link } from "react-router-dom";
import logoImage from "./logo.jpg";

const Goat = () => {
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
            <h2 className="kan">
              DqÀÄUÀ¼À°è PÀAqÀÄ §gÀÄªÀ gÉÆÃUÀUÀ¼ÀÄ ªÀÄvÀÄÛ ¤ªÁgÀuÉÆÃ¥ÁAiÀÄUÀ¼ÀÄ
            </h2>
            <h2 className="kan">Dr£À ¥ÀæªÀÄÄR gÉÆÃUÀUÀ¼ÀÄ</h2>
            <ul>
              <li className="kan">*ªÉÊgÀ¸ï gÉÆÃUÀUÀ¼ÀÄ</li>
              <li className="kan">*¨ÁåQÖÃjAiÀiÁ gÉÆÃUÀUÀ¼ÀÄ</li>
              <li className="kan">*¥ÀgÉÆÃ¥ÀfÃ« gÉÆÃUÀUÀ¼ÀÄ</li>
              <li className="kan">*EvÀgÉ gÉÆÃUÀUÀ¼ÀÄ</li>
            </ul>
          </div>
          <br />
          <br />
          <div className="meds">
            <h2 className="kan head">ªÉÊgÀ¸ï gÉÆÃUÀUÀ¼ÀÄ</h2>
            <ul>
              <li className="kan">¹qÀÄ§Ä</li>
              <li className="kan">¸ÁAPÁæ«ÄPÀ ZÀªÀÄðgÉÆÃUÀ</li>
              <li className="kan">PÁ®Ä ¨Á¬Ä dégÀ</li>
              <li className="kan">zÉÆqÀÝgÉÆÃUÀ</li>
              <li className="kan">¤Ã° £Á°UÉ gÉÆÃUÀ</li>
              <li className="kan">¦.¦.Dgï</li>
              <li className="kan">£ÀÆåªÉÆÃ¤AiÀiÁ</li>
            </ul>
            <h2 className="kan m1 dname">Dr£À ¹qÀÄ§Ä</h2>
            <ul className="">
              <h4 className="kan">ºÀgÀqÀÄªÀÅzÀÄ</h4>
              <li className="kan"> G¹gÁl</li>
              <li className="kan"> PÀ®Ä¶vÀ ªÀ¸ÀÄÛ</li>
              <li className="kan"> «¸Àdð£É</li>
            </ul>
            <h4 className="kan m1">aºÉßUÀ¼ÀÄ</h4>
            <p className="kan">
              dégÀ , zÉÃºÀzÀ°è/ PÉZÀÑ°£À ªÉÄÃ¯É ¤ÃgÀÄ vÀÄA©zÀ UÀÄ¼ÉîUÀ¼ÀÄ ,
              ªÉÄÃAiÀÄ¢gÀÄªÀÅzÀÄ.
            </p>
            <h4 className="kan m1"> ¤ªÀðºÀuÉ </h4>
            <p className="kan">¥ÀævÉåÃQ¸ÀÄªÀÅzÀÄ, ±ÀÄavÀé.</p>
            <h4 className="kan m1">¤ªÁgÀuÉ </h4>
            <p className="kan">
              <Link>®¹PÉ</Link>
            </p>
            <h2 className="kan m1 dname">¤Ã° £Á°UÉ gÉÆÃUÀ</h2>
            <h4 className="kan">ºÀgÀqÀÄªÀÅzÀÄ</h4>
            <p className="kan">PÀ®Ä¶vÀ ªÀ¸ÀÄÛ,«¸Àdð£É £ÉÃgÀ¸ÀA¥ÀPÀð.</p>
            <h4 className="kan m1">aºÉßUÀ¼ÀÄ</h4>
            <p className="kan">
              dégÀ , D®¸Àå, £Á°UÉAiÀÄ ªÉÄÃ®àzÀgÀzÀ°è ºÀÄtÄÚUÀ¼ÀÄ, ¤Ã° §tÚ.
            </p>
            <h4 className="kan m1"> ¤ªÀðºÀuÉ </h4>
            <p className="kan">¥ÀævÉåÃQ¸ÀÄªÀÅzÀÄ, ±ÀÄavÀé.</p>
            <h4 className="kan m1">¤ªÁgÀuÉ </h4>
            <p className="kan">
              <Link>®¹PÉ</Link>
            </p>
          </div>
          <div>
            {/* PPR */}
            <h2 className="kan m1 dname">¦.¦.Dgï</h2>
            <h4 className="kan">ºÀgÀqÀÄªÀÅzÀÄ</h4>
            <p className="kan">PÀ®Ä¶vÀ ªÀ¸ÀÄÛ, «¸Àdð£É, UÁ½, £ÉÃgÀ¸ÀA¥ÀPÀð.</p>

            <h4 className="kan m1">aºÉßUÀ¼ÀÄ</h4>
            <p className="kan">
              dégÀ , D®¸Àå, £Á°UÉ ªÀ¸ÀqÀÄ, zÀªÀqÉUÀ¼À°èºÀÄtÄÚUÀ¼ÀÄ, ªÉÄÃªÀÅ
              ©qÀÄªÀÅzÀÄ, ªÁ¸À£ÉEgÀÄªÀ ¨ÉÃ¢.
            </p>

            <h4 className="kan m1"> ¤ªÀðºÀuÉ </h4>
            <p className="kan">¥ÀævÉåÃQ¸ÀÄªÀÅzÀÄ, ±ÀÄavÀé.</p>

            <h4 className="kan m1">¤ªÁgÀuÉ </h4>
            <p className="kan">
              <Link>®¹PÉ</Link>
            </p>

            {/* Bact disease */}
            <h2 className="kan m1 head">¨ÁåQÖÃjAiÀÄ gÉÆÃUÀUÀ¼ÀÄ</h2>
            <ul>
              <li className="kan">UÀ¼À¯É gÉÆÃUÀ </li>
              <li className="kan">PÀgÀ¼ÀÄ ¨ÉÃ£É </li>
              <li className="kan">PÀAzÀÄ dégÀ </li>
              <li className="kan">¨ÉÃ¢gÉÆÃUÀ </li>
            </ul>

            {/* galale Roga */}
            <h2 className="kan m1 dname">UÀ¼À¯É gÉÆÃUÀ</h2>
            <h4 className="kan">ºÀgÀqÀÄªÀÅzÀÄ</h4>
            <p className="kan">gÉÆÃUÀUÀæ¸ÀÛ ¥ÁætÂAiÀÄ «¸Àdð£É ¸ÀA¥ÀPÀð. </p>

            <h4 className="kan m1">aºÉßUÀ¼ÀÄ</h4>
            <p className="kan">
              dégÀ , ªÉÄÃªÀÅ ©qÀÄªÀÅzÀÄ , ªÀÄÆV¤AzÀ ¸ÉÆÃgÀÄªÀÅzÀÄ, £ÉÆÃ«¤AzÀ
              PÀÆrzÀ UÀAl°£À HvÀ, ¨ÉÃ¢.
            </p>

            <h4 className="kan m1"> ¤ªÀðºÀuÉ </h4>
            <p className="kan">¥ÀævÉåÃQ¸ÀÄªÀÅzÀÄ, ±ÀÄavÀé.</p>

            <h4 className="kan m1">¤ªÁgÀuÉ </h4>
            <p className="kan">ªÀÄ¼ÉUÁ®PÉÌ ªÀÄÄ£Àß ®¹PÉ.</p>

            {/* Karalu bene */}
            <h2 className="kan m1 dname">PÀgÀ¼ÀÄ ¨ÉÃ£É</h2>
            <h4 className="kan">ºÀgÀqÀÄªÀÅzÀÄ</h4>
            <p className="kan">
              gÉÆÃUÀUÀæ¸ÀÛ ¥ÁætÂAiÀÄ «¸Àdð£É ¸ÀA¥ÀPÀð,¤ªÀðºÀuÉAiÀÄ ªÀåvÁå¸À,
              MvÀÛqÀ.
            </p>

            <h4 className="kan m1">aºÉßUÀ¼ÀÄ</h4>
            <p className="kan">G¹gÁlzÀ vÉÆAzÀgÉ, vÀÆgÁqÀÄªÀ £ÀqÀUÉ,¨ÉÃ¢.</p>

            <h4 className="kan m1"> ¤ªÀðºÀuÉ </h4>
            <p className="kan">¥ÀævÉåÃQ¸ÀÄªÀÅzÀÄ, ±ÀÄavÀé, aQvÉì.</p>

            <h4 className="kan m1">¤ªÁgÀuÉ </h4>
            <p className="kan">aQvÉì.</p>

            {/* Kandu Roga */}
            <h2 className="kan m1 dname">PÀAzÀÄ gÉÆÃUÀ</h2>
            <h4 className="kan">ºÀgÀqÀÄªÀÅzÀÄ</h4>
            <p className="kan">
              gÉÆÃUÀUÀæ¸ÀÛ ¥ÁætÂAiÀÄ «¸Àdð£É ¸ÀA¥ÀPÀð,¸ÀAvÁ£ÉÆÃvÀàwÛ.
            </p>

            <h4 className="kan m1">aºÉßUÀ¼ÀÄ</h4>
            <p className="kan">
              ¥ÀÇtð UÀ¨sÁðªÀ¸ÉÜAiÀÄ £ÀAvÀgÀ PÀAzÀÄºÁPÀÄªÀÅzÀÄ, ¸ÀvÀÄÛ ºÀÄlÄÖªÀ
              ªÀÄjUÀ¼ÀÄ. UÀAqÀÄ ¥ÁætÂUÀ¼À°è VtÄÚ HvÀ.
            </p>

            <h4 className="kan m1"> ¤ªÀðºÀuÉ </h4>
            <p className="kan">«±ÁæAw, ±ÀÄavÀé.</p>

            {/* Paropajeevi Rogagalu */}
            <h2 className="kan m1 head">¥ÀgÉÆÃ¥ÀfÃ« gÉÆÃUÀUÀ¼ÀÄ</h2>
            <ul>
              <li className="kan">zÀÄAqÀÄ(dAvÀÄ) ºÀÄ¼À ¨ÉÃ£É .</li>
              <li className="kan">ZÀ¥ÀàmÉÖ ºÀÄ¼À ¨ÉÃ£É.</li>
            </ul>

            {/* Dundu hula */}
            <h2 className="kan m1 dname">zÀÄAqÀÄ(dAvÀÄ) ºÀÄ¼À ¨ÉÃ£É</h2>
            <h4 className="kan">ºÀgÀqÀÄªÀÅzÀÄ</h4>
            <p className="kan">DºÁgÀzÉÆA¢UÉ ºÀÄ¼ÀzÀ ªÉÆmÉÖUÀ¼À ¸ÉÃªÀ£É.</p>

            <h4 className="kan m1">aºÉßUÀ¼ÀÄ</h4>
            <p className="kan">
              PÉªÀÄÄä, wÃªÀæ G¹gÁl, ¤¸ÉÛÃd ZÀlÄªÀnPÉ, zÉÃºÀzÀ vÀÆPÀ E½ªÀÄÄR.
            </p>

            <h4 className="kan m1"> ¤ªÀðºÀuÉ </h4>
            <p className="kan">±ÀÄavÀé.</p>

            <h4 className="kan m1">¤ªÁgÀuÉ </h4>
            <p className="kan">¤AiÀÄvÀPÁ°PÀ dAvÀÄ£Á±ÀPÀ OµÀzsÉÆÃÃ¥ÀZÁgÀ.</p>

            {/* Chappate hula */}
            <h2 className="kan m1 dname">ZÀ¥ÀàmÉÖ ºÀÄ¼À ¨ÉÃ£É</h2>
            <h4 className="kan">ºÀgÀqÀÄªÀÅzÀÄ</h4>
            <p className="kan">PÀ®Ä¶vÀ DºÁgÀ, ¤ÃgÀÄ ¸ÉÃªÀ£É. </p>

            <h4 className="kan m1">aºÉßUÀ¼ÀÄ</h4>
            <p className="kan">
              ¤gÀAvÀgÀ ¨ÉÃ¢, ¤¸ÉÛÃd ZÀlÄªÀnPÉ, zÉÃºÀzÀvÀÆPÀ E½ªÀÄÄR, PÉ¼À zÀªÀqÉ
              HvÀ.
            </p>

            <h4 className="kan m1"> ¤ªÀðºÀuÉ </h4>
            <p className="kan">
              ±ÀÄavÀé, ¤ÃgÀÄ ¤AwgÀÄªÀ°è ªÉÄÃAiÀÄ®Ä©qÀ¢gÀÄªÀÅzÀÄ.
            </p>

            <h4 className="kan m1">¤ªÁgÀuÉ </h4>
            <p className="kan">¤AiÀÄvÀPÁ°PÀ dAvÀÄ£Á±ÀPÀ OµÀzsÉÆÃÃ¥ÀZÁgÀ.</p>

            {/* Munjagrata Kramagalu */}
            <h2 className="kan m1 head">ªÀÄÄAeÁUÀævÁ ®¹PÉUÀ¼À ªÉÃ¼Á¥ÀnÖ</h2>
            <div className="mj">
              <div className="month">
                <p className="hl kan">ªÀiÁºÉ</p>
                <p className="kan">dÆ£ï</p>
                <p className="kan">dÄ¯ÉÊ</p>
                <p className="kan">DUÀ¸ïÖ</p>
                <p className="kan">r¸ÉA§gï</p>
                <p className="kan">AiÀiÁªÀ wAUÀ¼À¯ÁèzÀgÀÆ</p>
              </div>
              <div className="vac">
                <p className="hl kan">®¹PÉ</p>
                <p className="kan">PÁ. ¨Á dégÀ</p>
                <p className="kan">UÀ¼À¯É gÉÆÃUÀ</p>
                <p className="kan">PÀgÀ¼ÀÄ ¨ÉÃ£É</p>
                <p className="kan">PÁ. ¨Á dégÀ</p>
                <p className="kan">¦.¦.Dgï</p>
              </div>
              <div className="rogn">
                <p className="hl kan">gÉÆÃUÀ ¤gÉÆÃzsÀPÀ CªÀ¢ü</p>
                <p className="kan">6 wAUÀ¼ÀÄ</p>
                <p className="kan">1 ªÀµÀð</p>
                <p className="kan">1 ªÀµÀð</p>
                <p className="kan">6 wAUÀ¼ÀÄ</p>
                <p className="kan">1 ªÀµÀð</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goat;
