import heroImage from "../images/hero.png";
import logo from "../images/logo.png";

export default function HeroTop() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <h1 className="hero__title">
            Digital Gifts,
            <br />
            real value.
          </h1>

          <p className="hero__subtitle">
            Built for the <span>decentralized generation</span>
          </p>

          <div className="hero__bottom">
            <img src={logo} alt="Tron" className="hero__chain-logo" />
            <span>Based on Tron Blockchain</span>
          </div>
        </div>

        <div className="hero__right">
          <p className="hero__desc">
            GiftUp is a next-generation platform that transforms traditional
            gift cards into tokenized digital assets. <br />
            Create, send, exchange, and manage your gifts with full transparency
            and true ownership — powered by blockchain.
          </p>

          <div className="hero__actions">
            <a href="/about">Learn more ↗</a>
            <button
              className="hero__btn"
              onClick={() => scrollToSection("presale")}
            >
              Join Presale
            </button>
          </div>

          <div className="hero__line" />
        </div>

        <img src={heroImage} alt="Gift cards" className="hero__image" />
      </div>
    </section>
  );
}
