// CoreBankingFeatures.jsx

import "./CoreBankingFeatures.css";

import analyticsMacOne from "../assets/analytics_mac_1.svg";
import tickIcon from "../assets/tick.svg";

export default function CoreBankingFeatures() {
  const leftFeatures = [
    "Customer-On Boarding",
    "Managing deposits and withdrawals",
    "Transaction management",
    "Interest Calculation",
    "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
  ];

  const rightFeatures = [
    "CRM Activities",
    "Configuring New Banking Products",
    "Loan disbursal and Loan management",
    "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        {/* LEFT IMAGE */}
        <div className="features-image-wrapper">
          <img
            src={analyticsMacOne}
            alt="Analytics Dashboard"
            className="features-image"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="features-content">
          <div className="features-title-wrapper">
            <h2 className="features-title">
              Run a more efficient, flexible,and digitally connected corebanking
              system
            </h2>
          </div>

          <div className="features-list-wrapper">
            <p className="features-subtitle">What you will get:</p>

            <div className="features-grid">
              {/* LEFT COLUMN */}
              <div className="features-column">
                {leftFeatures.map((item, index) => (
                  <div className="feature-item" key={index}>
                    <img src={tickIcon} alt="tick" className="feature-tick" />

                    <p>{item}</p>
                  </div>
                ))}
              </div>

              {/* RIGHT COLUMN */}
              <div className="features-column">
                {rightFeatures.map((item, index) => (
                  <div className="feature-item" key={index}>
                    <img src={tickIcon} alt="tick" className="feature-tick" />

                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
