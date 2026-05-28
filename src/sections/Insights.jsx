import "./Insights.css";
import crossLogo from "../assets/cross_logo_thing.svg";
import readAll from "../assets/read_all.svg";

const articles = [
  {
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
];

function LogoGrid() {
  return (
    <div className="insights__logo-grid">
      {[0, 1, 2, 3].map((item) => (
        <img
          key={item}
          src={crossLogo}
          alt="cross logo"
          className="insights__logo"
        />
      ))}
    </div>
  );
}

export default function Insights() {
  return (
    <section className="insights">
      <div className="container">
        <div className="insights__layout">
          {/* LEFT SIDE */}
          <div className="insights__left">
            <h2 className="insights__heading">
              Get yourself up-to-speed on all the things happening in fintech
            </h2>
            <a href="/" className="insights__btn">
              INSIGHTS
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="insights__right">
            {/* FEATURED CARD */}
            <div className="insights__featured">
              <div className="insights__img">
                <LogoGrid />
              </div>
              <div className="insights__featured-content">
                <span className="insights__category">
                  {articles[0].category}
                </span>
                <h3 className="insights__title">{articles[0].title}</h3>
                <div className="insights__meta">
                  <span>{articles[0].author}</span>
                  <span>·</span>
                  <span>{articles[0].date}</span>
                </div>
                <a href="/" className="insights__readmore">
                  <span>READ MORE</span>
                </a>
              </div>
            </div>

            {/* LOWER GRID */}
            <div className="insights__grid">
              {articles.slice(1).map((article, index) => (
                <div key={index} className="insights__card">
                  <span className="insights__category">{article.category}</span>
                  <h3 className="insights__card-title">{article.title}</h3>
                  <div className="insights__meta">
                    <span>{article.author}</span>
                    <span>·</span>
                    <span>{article.date}</span>
                  </div>
                  <a href="/" className="insights__readmore">
                    <span>READ MORE</span>
                  </a>
                </div>
              ))}
            </div>

            {/* FOOTER */}
            <div className="insights__footer">
              <a href="/">
                <img
                  src={readAll}
                  alt="read all insights"
                  className="insights__footer-img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
