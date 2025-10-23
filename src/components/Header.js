import "../scss/Header.scss";
import logoMark from "../icons/logo-mark.png";
import mobileLogo from "../icons/mobile-logo.png";
import { useMobile } from "../hooks/useMobile";

export default function Header() {
  const isMobile = useMobile();

  // функция плавного скролла к нужной секции
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // возвращение на главную (в начало страницы)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="header__container">
        {/* Логотип */}
        {isMobile ? (
          <img
            src={mobileLogo}
            alt="GiftUp mobile logo"
            className="mobile__logo"
            style={{ cursor: "pointer" }}
          />
        ) : (
          <div
            className="header__logo"
            onClick={scrollToTop}
            style={{ cursor: "pointer" }}
          >
            <img
              src={logoMark}
              alt="GiftUp logo mark"
              className="header__logo-mark"
            />
            <span className="header__logo-text">GiftUp</span>
          </div>
        )}

        {/* Навигация */}
        <nav className="header__nav">
          <a
            onClick={() => scrollToSection("details")}
            style={{ cursor: "pointer" }}
          >
            Tokenomics
          </a>
          <a
            onClick={() => scrollToSection("roadmap")}
            style={{ cursor: "pointer" }}
          >
            Roadmap
          </a>
          <a
            href="/whitepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ cursor: "pointer" }}
          >
            Whitepaper
          </a>
          <a
            onClick={() => scrollToSection("about")}
            style={{ cursor: "pointer" }}
          >
            About Us
          </a>
        </nav>

        {/* Кнопка Join Presale */}
        <a
          onClick={() => scrollToSection("presale")}
          className="header__cta"
          style={{ cursor: "pointer" }}
        >
          Join Presale
        </a>
      </div>
    </header>
  );
}
