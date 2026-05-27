// CTASection.jsx

import "./CTASection.css";

export default function CTASection() {
  return (
    <section className="cta">
      {/* LEFT SIDE */}
      <div className="cta__content">
        <h2 className="cta__title">
          Take the full advantage of going paper-less now.
        </h2>

        <p className="cta__description">
          CB7 helps your financial institution improve the client experience,
          automate and optimize procedures, simplify banking operations
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="cta__actions">
        {/* CONTACT BUTTON */}
        <a href="/" className="cta__btn cta__btn--outline">
          <span>CONTACT US</span>
        </a>

        {/* REQUEST DEMO */}
        <a href="/" className="cta__btn cta__btn--primary">
          <span>REQUEST DEMO</span>
        </a>
      </div>
    </section>
  );
}
