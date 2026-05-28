import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="/" className="navbar__logo">
          N7
        </a>

        <div className="navbar__links">
          <div
            className="navbar__dropdown"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button className="navbar__link">
              SOLUTIONS
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {solutionsOpen && (
              <div className="navbar__dropdown-menu">
                <a href="#" className="navbar__dropdown-item">
                  Core Banking CB7
                </a>
                <a href="#" className="navbar__dropdown-item">
                  Digital Banking N7
                </a>
                <a href="#" className="navbar__dropdown-item">
                  Open Banking
                </a>
                <a href="#" className="navbar__dropdown-item">
                  Loan Origination System
                </a>
                <a href="#" className="navbar__dropdown-item">
                  Loan Management System
                </a>
              </div>
            )}
          </div>

          <div
            className="navbar__dropdown"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button className="navbar__link">
              RESOURCES
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {resourcesOpen && (
              <div className="navbar__dropdown-menu">
                <a href="#" className="navbar__dropdown-item">
                  Insights
                </a>
                <a href="#" className="navbar__dropdown-item">
                  Case Studies
                </a>
                <a href="#" className="navbar__dropdown-item">
                  Documentation
                </a>
              </div>
            )}
          </div>

          <a href="#" className="navbar__link">
            ABOUT US
          </a>
        </div>

        <a href="#" className="navbar__cta">
          REQUEST DEMO
        </a>

        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`navbar__mobile${mobileOpen ? " is-open" : ""}`}>
        <a href="#" className="navbar__mobile-link">
          Solutions
        </a>
        <a href="#" className="navbar__mobile-link">
          Resources
        </a>
        <a href="#" className="navbar__mobile-link">
          About Us
        </a>
        <a
          href="#"
          className="btn btn-primary"
          style={{
            marginTop: "6px",
            width: "100%",
            height: "44px",
            borderRadius: "10px",
          }}
        >
          REQUEST DEMO
        </a>
      </div>
    </nav>
  );
}
