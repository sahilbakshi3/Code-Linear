import "./DigitalBanking.css";

import learnMoreIcon from "../assets/Learn_more.svg";
import n7Background from "../assets/N7-1.svg";
import crossBackground from "../assets/cross.svg";
import toniKrossOne from "../assets/toni_kross_1.svg";
import toniKrossTwo from "../assets/toni_kross_2.svg";
import toniKrossThree from "../assets/toni_kross_3.svg";
import tickIcon from "../assets/tick.svg";

const cards = [
  {
    img: toniKrossOne,
    alt: "Regulatory Compliance App",
    title: "Fully compliant with regulatory requirement",
    description:
      "The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.",
    points: [
      "Pre-integrated Security System",
      "Fully Compliant With Regulatory Requirement",
      "Digitally Connected Core",
    ],
  },
  {
    img: toniKrossTwo,
    alt: "Analytics Banking App",
    title: "No legacy IT systems",
    description:
      "Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.",
    points: [
      "Adaptive & Intelligent API monetization",
      "Ambient User Experience",
      "Cloud-native With lower TCO",
    ],
  },
  {
    img: toniKrossThree,
    alt: "Profile Banking App",
    title: "No traditional branches",
    description:
      "Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.",
    points: [
      "Branchless & Paperless Banking",
      "Digital Transformation Capability",
      "Optimized, Adaptable and Scalable",
    ],
  },
];

export default function DigitalBanking() {
  return (
    <section className="digital-section">
      {/* BACKGROUND */}
      <img
        src={n7Background}
        alt=""
        className="digital-bg-n7"
        aria-hidden="true"
      />
      <img
        src={crossBackground}
        alt=""
        className="digital-bg-cross"
        aria-hidden="true"
      />

      <div className="digital-inner">
        <div className="digital-layout">
          {/* ── LEFT COLUMN — header/CTA only ── */}
          <div className="digital-left">
            <div className="digital-header">
              <div className="digital-header-content">
                <h2 className="digital-title">
                  Digital banking
                  <br /> out-of-the-box
                </h2>
                <p className="digital-description">
                  N7 helps your financial institution improve the client
                  experience, automate and optimize procedures
                </p>
              </div>
              <button className="digital-btn">REQUEST DEMO</button>
              <a href="/" className="digital-learn-more">
                <img src={learnMoreIcon} alt="Learn More" />
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN — stacked rows: phone | text ── */}
          <div className="digital-right">
            {cards.map((card, i) => (
              <div className="digital-card-row" key={i}>
                {/* Phone image — left half of right column */}
                <div className="digital-card-phone">
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="digital-phone-img"
                  />
                </div>

                {/* Text content — right half of right column */}
                <div className="digital-card-text">
                  <h3 className="digital-card-title">{card.title}</h3>
                  <p className="digital-card-description">{card.description}</p>
                  <div className="digital-card-points">
                    {card.points.map((pt) => (
                      <div className="digital-card-point" key={pt}>
                        <img
                          src={tickIcon}
                          alt="tick"
                          className="digital-card-tick"
                        />
                        <p>{pt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="digital-bottom-cta">
          <img
            src={n7Background}
            alt=""
            className="digital-bottom-bg"
            aria-hidden="true"
          />

          <div className="digital-bottom-content">
            <h2 className="digital-bottom-title">
              Take the full advantage of going paper-less now.
            </h2>
            <p className="digital-bottom-description">
              N7 helps your financial institution improve the client experience,
              automate and optimize procedures, simplify banking operations
            </p>
          </div>

          <div className="digital-bottom-actions">
            <button className="digital-contact-btn">CONTACT US</button>
            <button className="digital-demo-btn">REQUEST DEMO</button>
          </div>
        </div>
      </div>
    </section>
  );
}
