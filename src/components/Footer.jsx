import "./Footer.css";

import n7Logo from "../assets/n7.svg";
import rightArrow from "../assets/right_arrow.svg";

const solutions = [
  "Core Banking CB7",
  "Digital Banking N7",
  "Open Banking",
  "Loan Origination System",
  "Loan Management System",
  "Digital Transformation",
];

const companyLinks = [
  "About Us",
  "Solutions",
  "Contact",
  "Company",
  "Careers",
  "Insights",
  "Core Team",
  "Brand Center",
];

const socials = ["LinkedIn", "X"];

export default function Footer() {
  return (
    <footer className="footer">
      {/* MAIN */}
      <div className="footer__main">
        {/* LEFT SIDE */}
        <div className="footer__left">
          <img src={n7Logo} alt="N7" className="footer__n7" />
        </div>

        {/* RIGHT SIDE */}
        <div className="footer__right">
          {/* COLUMN 1 */}
          <div className="footer__column">
            <div className="footer__text-area">
              <h3 className="footer__title">London</h3>
              <p className="footer__content">
                Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP,
                England, United Kingdom.
              </p>
            </div>
            <div className="footer__table">
              {solutions.map((item) => (
                <a href="/" key={item} className="footer__row">
                  <span>{item}</span>
                  <img src={rightArrow} alt="arrow" className="footer__arrow" />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="footer__column">
            <div className="footer__text-area">
              <h3 className="footer__title">Dubai</h3>
              <p className="footer__content">
                Linktia Infosystems Ltd – CB7, Jumeirah Business Center 5
                Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates
              </p>
            </div>
            <div className="footer__table">
              {companyLinks.map((item) => (
                <a href="/" key={item} className="footer__row">
                  <span>{item}</span>
                  <img src={rightArrow} alt="arrow" className="footer__arrow" />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 3 */}
          <div className="footer__column">
            <div className="footer__text-area">
              <h3 className="footer__title">India</h3>
              <p className="footer__content">
                Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity
                Road, Pune, Maharashtra, 411041, India
              </p>
            </div>
            <div className="footer__table">
              {socials.map((item) => (
                <a href="/" key={item} className="footer__row">
                  <span>{item}</span>
                  <img src={rightArrow} alt="arrow" className="footer__arrow" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer__bottom">
        <p>
          Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as
          Commercial Brand] — [Registered under the Companies Act 2006 in
          England and Wales | Number of Incorporation 13100992]
        </p>
      </div>
    </footer>
  );
}
