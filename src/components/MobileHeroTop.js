import heroImage from "../images/hero.png";
import logo from "../images/logo.png";
import "../scss/MobileHeroTop.scss";

export default function MobileHeroTop() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="hero-mobile">
      <div className="hero-mobile__container">
        <h1 className="hero-mobile__title">
          Digital Gifts,
          <br />
          real value.
        </h1>

        <p className="hero-mobile__subtitle">
          Built for the <span>decentralized generation</span>
        </p>

        <p className="hero-mobile__desc">
          GiftUp is a next-generation platform that transforms traditional gift
          cards into tokenized digital assets. <br />
          Create, send, exchange, and manage your gifts with full transparency
          and true ownership — powered by blockchain.
        </p>

        <div className="hero-mobile__actions">
          <a href="/about" className="hero-mobile__link">
            Learn more ↗
          </a>
          <button
            className="hero-mobile__btn"
            onClick={() => scrollToSection("presale")}
          >
            Join Presale
          </button>
        </div>

        <img src={heroImage} alt="Gift cards" className="hero-mobile__image" />

        <div className="hero-mobile__bottom">
          <img src={logo} alt="Tron" className="hero-mobile__chain-logo" />
          <span>Based on Tron Blockchain</span>
          <div className="hero-mobile__line" />
        </div>
      </div>
    </section>
  );
}
