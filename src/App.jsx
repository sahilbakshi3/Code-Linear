import "./styles/globals.css";
import "./styles/buttons.css";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Solutions from "./sections/Solutions";
import CloudBanking from "./sections/CloudBanking";
import Marquee from "./components/Marquee";
import DigitalBanking from "./sections/DigitalBanking";

import Insights from "./sections/Insights";
import CaseStudies from "./sections/CaseStudies";
import Footer from "./components/Footer";
import CoreBankingFeatures from "./sections/CoreBankingFeatures";
import PaperlessSection from "./sections/PaperlessSection";
import CTASection from "./sections/CTASection";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <CloudBanking />
        <CoreBankingFeatures />
        <PaperlessSection />
        <Marquee />
        <DigitalBanking />
        <Insights />
        <CaseStudies />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
