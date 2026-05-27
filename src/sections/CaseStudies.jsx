import { useState } from "react";
import "./CaseStudies.css";

import crossLogo from "../assets/cross_logo_thing.svg";
import companyLogo from "../assets/logo.svg";

import leftArrow from "../assets/left_arrow.svg";
import rightArrow from "../assets/right_arrow.svg";

import ellipse from "../assets/ellipse.svg";
import rectangle from "../assets/rectangle.svg";
import viewAll from "../assets/view_all.svg";

const caseStudies = [
  {
    category: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    company: "Zoomerr",
  },
  {
    category: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    company: "Zoomerr",
  },
  {
    category: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    company: "Zoomerr",
  },
];

function LogoGrid() {
  return (
    <div className="cs__logo-grid">
      {[0, 1, 2, 3].map((item) => (
        <img key={item} src={crossLogo} alt="cross logo" className="cs__logo" />
      ))}
    </div>
  );
}

export default function CaseStudies() {
  const [active, setActive] = useState(0);

  return (
    <section className="cs">
      <div className="container">
        {/* TITLE */}
        <h2 className="cs__heading">Our Case Studies</h2>

        {/* SLIDER WRAPPER */}
        <div className="cs__slider-wrapper">
          {/* FEATURED CARD */}
          <div className="cs__featured">
            {/* LEFT SIDE */}
            <div className="cs__featured-img">
              <LogoGrid />
            </div>

            {/* RIGHT SIDE */}
            <div className="cs__featured-content">
              <div className="cs__content-top">
                <span className="cs__category">
                  {caseStudies[active].category}
                </span>

                <h3 className="cs__title">{caseStudies[active].title}</h3>

                <img
                  src={companyLogo}
                  alt="company logo"
                  className="cs__company-logo"
                />
              </div>

              {/* BUTTON */}
              <a href="/" className="cs__readmore">
                <span>READ MORE</span>
              </a>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="cs__nav">
            {/* CENTER NAVIGATION */}
            <div className="cs__navigation">
              {/* PREVIOUS */}
              <button
                className="cs__arrow-btn"
                onClick={() =>
                  setActive((prev) =>
                    prev === 0 ? caseStudies.length - 1 : prev - 1,
                  )
                }
              >
                <img
                  src={leftArrow}
                  alt="previous"
                  className="cs__arrow-icon"
                />
              </button>

              {/* PROGRESS */}
              <div className="cs__progress">
                {caseStudies.map((_, index) =>
                  active === index ? (
                    <img
                      key={index}
                      src={rectangle}
                      alt="active"
                      className="cs__progress-rect"
                    />
                  ) : (
                    <img
                      key={index}
                      src={ellipse}
                      alt="inactive"
                      className="cs__progress-ellipse"
                    />
                  ),
                )}
              </div>

              {/* NEXT */}
              <button
                className="cs__arrow-btn"
                onClick={() =>
                  setActive((prev) =>
                    prev === caseStudies.length - 1 ? 0 : prev + 1,
                  )
                }
              >
                <img src={rightArrow} alt="next" className="cs__arrow-icon" />
              </button>
            </div>

            {/* VIEW ALL */}
            <a href="/" className="cs__viewall">
              <img src={viewAll} alt="view all" className="cs__viewall-img" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
