// CloudBanking.jsx

import "./CloudBanking.css";
import analyticsMac from "../assets/analytics_mac_2.svg";
import learnMoreIcon from "../assets/Learn_more.svg";
import cb7 from "../assets/CB7.svg";

export default function CloudBanking() {
  return (
    <section className="analytics-section">
      {/* BACKGROUND CB7 */}
      <img src={cb7} alt="CB7 Background" className="analytics-bg-text" />

      <div className="analytics-container">
        {/* LEFT CONTENT */}
        <div className="analytics-content">
          <div className="analytics-text-wrapper">
            <div className="analytics-text-block">
              <h2 className="analytics-title">
                A complete cloud-based core banking.
              </h2>

              <p className="analytics-description">
                Faster time to market with our cloud-based core banking services
              </p>
            </div>

            <button className="analytics-btn">REQUEST DEMO</button>

            <a href="/" className="learn-more">
              <img src={learnMoreIcon} alt="Learn More" />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="analytics-image-wrapper">
          <img
            src={analyticsMac}
            alt="Analytics Dashboard"
            className="analytics-image"
          />
        </div>
      </div>
    </section>
  );
}
