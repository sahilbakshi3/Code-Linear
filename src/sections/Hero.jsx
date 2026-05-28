import "./Hero.css";

import ladyImage from "../assets/lady_home_page.jpg";
import balanceCard from "../assets/Home_Page-1.svg";
import activityCard from "../assets/Home_Page-2.svg";
import trustedRow from "../assets/trusted_by_row.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        {/* LEFT CONTENT */}
        <div className="hero__content">
          <h1 className="hero__title">
            The new foundation
            <br />
            of modern banking
          </h1>

          <p className="hero__subtitle">
            We drive innovation and growth, provide seamless customer experience
            and operational excellence
          </p>

          <div className="hero__actions">
            <a href="#" className="btn btn-primary">
              REQUEST DEMO
            </a>
            <a href="#" className="btn btn-outline">
              CONTACT US
            </a>
          </div>

          {/* TRUSTED BY — directly below the action buttons */}
          <div className="hero__trusted">
            <img
              src={trustedRow}
              alt="Trusted By"
              className="hero__trusted-image"
            />
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hero__visual">
          <div className="hero__image-glow"></div>

          <div className="hero__lady-wrap">
            <img
              src={ladyImage}
              alt="Banking Experience"
              className="hero__lady-image"
            />
          </div>

          <div className="hero__floating-card hero__floating-card--top">
            <div className="hero__floating-card-inner">
              <img
                src={balanceCard}
                alt="Balance Card"
                className="hero__floating-image"
              />
            </div>
          </div>

          <div className="hero__floating-card hero__floating-card--bottom">
            <img
              src={activityCard}
              alt="Activity Card"
              className="hero__floating-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
