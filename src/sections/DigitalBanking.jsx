// DigitalBanking.jsx

import "./DigitalBanking.css";

import learnMoreIcon from "../assets/Learn_More.svg";

import n7Background from "../assets/n7-1.svg";
import crossBackground from "../assets/cross.svg";

import toniKrossOne from "../assets/toni_kross_1.svg";
import toniKrossTwo from "../assets/toni_kross_2.svg";
import toniKrossThree from "../assets/toni_kross_3.svg";

import tickIcon from "../assets/tick.svg";

export default function DigitalBanking() {
  return (
    <section className="digital-section">
      {/* BACKGROUND */}

      <img src={n7Background} alt="N7 Background" className="digital-bg-n7" />

      <img
        src={crossBackground}
        alt="Cross Background"
        className="digital-bg-cross"
      />

      {/* LEFT SIDE */}

      <div className="digital-header">
        <div className="digital-header-content">
          <h2 className="digital-title">Digital banking out-of-the-box</h2>

          <p className="digital-description">
            N7 helps your financial institution improve the client experience,
            automate and optimize procedures
          </p>
        </div>

        <button className="digital-btn">REQUEST DEMO</button>

        <a href="/" className="digital-learn-more">
          <img src={learnMoreIcon} alt="Learn More" />
        </a>
      </div>

      {/* RIGHT SIDE */}

      <div className="digital-cards">
        {/* CARD 1 */}

        <div className="digital-card">
          <div className="digital-card-image">
            <img src={toniKrossOne} alt="Toni Kross Banking App" />
          </div>

          <div className="digital-card-content">
            <h3 className="digital-card-title">
              Fully compliant with regulatory requirement
            </h3>

            <p className="digital-card-description">
              The governance of risk management with regulations is achieved by
              our risk management framework that is fully integrated to work
              with digital bank’s operational-risk protocols and procedures.
            </p>

            <div className="digital-card-points">
              <div className="digital-card-point">
                <img src={tickIcon} alt="tick" className="digital-card-tick" />
                <p>Pre-integrated Security System</p>
              </div>

              <div className="digital-card-point">
                <img src={tickIcon} alt="tick" className="digital-card-tick" />
                <p>Fully Compliant With Regulatory Requirement</p>
              </div>

              <div className="digital-card-point">
                <img src={tickIcon} alt="tick" className="digital-card-tick" />
                <p>Digitally Connected Core</p>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2 */}

        <div className="digital-card digital-card-reverse">
          <div className="digital-card-content digital-card-content-second">
            <h3 className="digital-card-title">No legacy IT systems</h3>

            <p className="digital-card-description">
              Our Digital Banking solution and multilayered approach help
              financial institutions take advantage of digital transformation by
              ensuring customer trust and regulatory compliance.
            </p>

            <div className="digital-card-points">
              <div className="digital-card-point">
                <img src={tickIcon} alt="tick" className="digital-card-tick" />
                <p>Adaptive & Intelligent API monetization</p>
              </div>

              <div className="digital-card-point">
                <img src={tickIcon} alt="tick" className="digital-card-tick" />
                <p>Ambient User Experience</p>
              </div>

              <div className="digital-card-point">
                <img src={tickIcon} alt="tick" className="digital-card-tick" />
                <p>Cloud-native With lower TCO</p>
              </div>
            </div>
          </div>

          <div className="digital-card-image">
            <img src={toniKrossTwo} alt="Analytics Banking App" />
          </div>
        </div>

        {/* CARD 3 */}

        <div className="digital-card">
          <div className="digital-card-image">
            <img src={toniKrossThree} alt="Profile Banking App" />
          </div>

          <div className="digital-card-content">
            <h3 className="digital-card-title">No traditional branches</h3>

            <p className="digital-card-description">
              Our Digital Banking out-of-the-box helps you to accelerate
              innovation while reducing risks and optimising operational costs
              for a seamless branchless experience.
            </p>

            <div className="digital-card-points">
              <div className="digital-card-point">
                <img src={tickIcon} alt="tick" className="digital-card-tick" />
                <p>Branchless & Paperless Banking</p>
              </div>

              <div className="digital-card-point">
                <img src={tickIcon} alt="tick" className="digital-card-tick" />
                <p>Digital Transformation Capability</p>
              </div>

              <div className="digital-card-point">
                <img src={tickIcon} alt="tick" className="digital-card-tick" />
                <p>Optimized, Adaptable and Scalable</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CTA SECTION */}

      <div className="digital-bottom-cta">
        {/* BG N7 */}
        <img
          src={n7Background}
          alt="N7 Background"
          className="digital-bottom-bg"
        />

        {/* LEFT CONTENT */}

        <div className="digital-bottom-content">
          <h2 className="digital-bottom-title">
            Take the full advantage of going paper-less now.
          </h2>

          <p className="digital-bottom-description">
            N7 helps your financial institution improve the client experience,
            automate and optimize procedures, simplify banking operations
          </p>
        </div>

        {/* BUTTONS */}

        <div className="digital-bottom-actions">
          <button className="digital-contact-btn">CONTACT US</button>

          <button className="digital-demo-btn">REQUEST DEMO</button>
        </div>
      </div>
    </section>
  );
}
