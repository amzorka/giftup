import "../scss/Roadmap.scss";
import roadmapVertical from "../icons/roadmap-vertical.png";

const MobileRoadmap = () => {
  return (
    <section className="roadmap roadmap--mobile">
      <div className="container">
        <h2 className="roadmap__title">Roadmap</h2>

        <div className="roadmap__mobile-wrapper">
          <img
            src={roadmapVertical}
            alt="GiftUp Roadmap Steps"
            className="roadmap__mobile-line"
          />

          <div className="roadmap__mobile-stages">
            <div className="roadmap__mobile-stage">
              <h4 className="roadmap__quarter">Q4 2025</h4>
              <h3 className="roadmap__subtitle">Foundation</h3>
              <p className="roadmap__desc">
                Finalization of whitepaper, token audit, and establishment of
                core smart contracts. Private seed funding and onboarding of the
                first retail partners.
              </p>
            </div>

            <div className="roadmap__mobile-stage">
              <h4 className="roadmap__quarter">Q1 2026</h4>
              <h3 className="roadmap__subtitle">MVP Launch</h3>
              <p className="roadmap__desc">
                Release of GiftUp Web & Mobile App. Integration with TRON
                wallets and first NFT gift card campaigns.
              </p>
            </div>

            <div className="roadmap__mobile-stage">
              <h4 className="roadmap__quarter">Q2 2026</h4>
              <h3 className="roadmap__subtitle">Public Presale</h3>
              <p className="roadmap__desc">
                Launch of public token sale (GFT). Global marketing campaign and
                onboarding of 100+ merchants.
              </p>
            </div>

            <div className="roadmap__mobile-stage">
              <h4 className="roadmap__quarter">Q3 2026</h4>
              <h3 className="roadmap__subtitle">Gift Marketplace</h3>
              <p className="roadmap__desc">
                Launch of the secondary marketplace for trading NFT gift cards.
                Introduction of staking and referral reward programs.
              </p>
            </div>

            <div className="roadmap__mobile-stage">
              <h4 className="roadmap__quarter">Q4 2026</h4>
              <h3 className="roadmap__subtitle">DAO & Global Scale</h3>
              <p className="roadmap__desc">
                Implementation of DAO governance, listing on DEX & CEX
                exchanges. Expansion to new regions: Europe, USA, and Asia.
              </p>
            </div>
          </div>
        </div>

        <div className="roadmap__bottom">
          <button className="roadmap__button">
            <a
              className="roadmap__button"
              href="/whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", backgroundColor: "transparent" }}
            >
              Whitepaper
            </a>
          </button>
          <p className="roadmap__text">
            Each step brings us closer to a decentralized future where gifts
            hold real, lasting value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MobileRoadmap;
