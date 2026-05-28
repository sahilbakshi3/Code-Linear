import "./Marquee.css";
import sayOne from "../assets/say_1.svg";

export default function Marquee() {
  return (
    <section className="marquee-section">
      <div className="marquee">
        <div className="marquee-track">
          {Array.from({ length: 14 }).map((_, index) => (
            <div className="marquee-item" key={index}>
              <img src={sayOne} alt="Marquee" className="marquee-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
