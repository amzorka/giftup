import gift from "../images/gift.png";

export default function HeroAbout() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__left">
          <h2 className="about__title">What Is GiftUp?</h2>

          <p className="about__text">
            GiftUp brings the power of blockchain to the world of digital
            gifting. Each gift card is issued as a unique NFT on the TRON
            network — secure, verifiable, and tradable. Unlike traditional gift
            cards that can expire or get lost, GiftUp tokens are permanent,
            transferable, and part of a transparent ecosystem.
          </p>

          <ul className="about__list">
            <li>
              <strong>Transparent & Secure</strong>
              <br />
              Every card is stored on blockchain, ensuring authenticity and
              eliminating fraud.
            </li>
            <li>
              <strong>Exchange or Resell Anytime</strong>
              <br />
              Gift cards become tradable digital assets that can be sold or
              swapped on our marketplace.
            </li>
            <li>
              <strong>Fully Personalized</strong>
              <br />
              Create custom NFT cards with your own design, message, and brand
              identity.
            </li>
            <li>
              <strong>Global and Instant</strong>
              <br />
              Send a gift anywhere in the world within seconds — without banks
              or middlemen.
            </li>
          </ul>

          <div className="about__actions">
            <a className="about__btn" href="/about">
              More About Us
            </a>
            <a
              href="/whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="about__link"
            >
              Whitepaper ↗
            </a>
          </div>
        </div>

        <div className="about__right">
          <img src={gift} alt="Gift box" className="about__image" />
        </div>
      </div>
    </section>
  );
}
