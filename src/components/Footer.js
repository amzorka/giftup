import "../scss/Footer.scss";
import logo from "../icons/mobile-logo.png"; // экспортируй чёрный логотип GiftUp
import { useMobile } from "../hooks/useMobile";

export default function Footer() {
  const isMobile = useMobile();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <img src={logo} alt="GiftUp" className="footer__logo" />
          <p className="footer__copyright">
            © 2025 GiftUp. All rights reserved.
          </p>
        </div>

        <div className="footer__center">
          <ul className="footer__column">
            <li>
              <a
                onClick={() => scrollToSection("details")}
                style={{ cursor: "pointer" }}
              >
                Tokenomics
              </a>
            </li>
            <li>
              <a
                href="/Whitepaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whitepaper
              </a>
            </li>
            <li>
              <a
                href="/Privacy Policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </li>
          </ul>

          <ul className="footer__column">
            <li>
              <a
                onClick={() => scrollToSection("roadmap")}
                style={{ cursor: "pointer" }}
              >
                Roadmap
              </a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a
                href="/Terms of Use.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Use
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__right">
          {isMobile ? (
            <p className="footer__disclaimer">
              Disclaimer: GiftUp (GFT) is a utility token and does not represent
              equity, securities, or any form of financial instrument.
              Participation in the token sale involves inherent risk and may{" "}
              result in financial loss. Please review our Terms of Use and
              Privacy Policy carefully before participating. GiftUp is operated
              by SAFIR GLOBAL KARA DENIZ TASIMACILIGI IC VE DIS TIC. LTD. ŞTI.,
              registered in Rize, Türkiye.
            </p>
          ) : (
            <p className="footer__disclaimer">
              Disclaimer: GiftUp (GFT) is a utility token and does not represent
              equity, securities, or any <br /> form of financial instrument.
              Participation in the token sale involves inherent risk and may{" "}
              <br />
              result in financial loss. Please review our Terms of Use and
              Privacy Policy carefully before <br /> participating. GiftUp is
              operated by SAFIR GLOBAL KARA DENIZ TASIMACILIGI IC VE DIS <br />{" "}
              TIC. LTD. ŞTI., registered in Rize, Türkiye.
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
