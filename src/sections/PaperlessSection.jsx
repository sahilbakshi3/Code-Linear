import "./PaperlessSection.css";
import cb7Background from "../assets/CB7.svg";

export default function PaperlessSection() {
  return (
    <section className="paperless-section">
      <div className="paperless-card">
        <img
          src={cb7Background}
          alt="CB7 Background"
          className="paperless-bg"
        />

        <div className="paperless-content">
          <div className="paperless-text-wrapper">
            <h2 className="paperless-title">
              Take the full advantage of going paper-less now.
            </h2>
            <p className="paperless-description">
              CB7 helps your financial institution improve the client
              experience, automate and optimize procedures, simplify banking
              operations
            </p>
          </div>
        </div>

        <div className="paperless-actions">
          <button className="paperless-btn-outline">CONTACT US</button>
          <button className="paperless-btn-primary">REQUEST DEMO</button>
        </div>
      </div>
    </section>
  );
}
