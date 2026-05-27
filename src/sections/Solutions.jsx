import "./Solutions.css";
import corebanking from "../assets/core_banking.svg";
import digitalbanking from "../assets/digital_banking.svg";
import openbanking from "../assets/open_banking.svg";
import crosslogo from "../assets/cross_logo_thing.svg";
import loanbanking from "../assets/loan_org.svg";
import learnMoreIcon from "../assets/Learn_More.svg";

const solutions = [
  {
    icon: corebanking,
    title: "Core Banking CB7",
    tag: null,
    desc: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
  },
  {
    icon: digitalbanking,
    title: "Digital Banking N7",
    tag: null,
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
  {
    icon: openbanking,
    title: "Open Banking",
    tag: null,
    desc: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
  },
  {
    icon: loanbanking,
    title: "Loan Origination System",
    tag: "NBFC",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
  {
    icon: crosslogo,
    title: "Loan Management System",
    tag: "NBFC",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
];

export default function Solutions() {
  return (
    <section className="solutions section">
      <div className="container">
        <div className="solutions__layout">
          <div className="solutions__left">
            <h2 className="solutions__heading">
              All of our solutions are
              <br />
              tailor-made to your needs
            </h2>
            <a href="#" className="btn btn-outline-dark solutions__cta">
              REQUEST DEMO
            </a>
          </div>

          <div className="solutions__grid">
            {solutions.map((item, i) => (
              <div key={i} className="solution-card">
                {/* TOP */}
                <div className="solution-card__top">
                  {/* ICON */}
                  <div className="solution-card__icon">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="solution-card__icon-image"
                    />
                  </div>

                  {/* TAG */}
                  {item.tag && (
                    <span className="solution-card__tag">{item.tag}</span>
                  )}
                </div>

                {/* CONTENT */}
                <div className="solution-card__content">
                  <h3 className="solution-card__title">{item.title}</h3>

                  <p className="solution-card__desc">{item.desc}</p>
                </div>

                {/* LEARN MORE */}
                <a href="#" className="learn-more">
                  <img
                    src={learnMoreIcon}
                    alt="Learn More"
                    className="learn-more__img"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
