import "../scss/HowItWorks.scss";

import iconCard from "../images/Vector.png";
import iconSend from "../images/Vector-2.png";
import iconExchange from "../images/Group-11.png";
import lineSnake from "../images/Line 55.png";

export default function HowItWorks() {
  return (
    <section className="how">
      <div className="how__container">
        <h2 className="how__title">How GiftUp Works?</h2>
        <p className="how__subtitle">
          We’ve made blockchain gifting effortless. Whether you’re a crypto
          native or
          <br /> completely new to Web3 — GiftUp feels as simple as sending an
          email.
        </p>

        <div className="how__steps-wrapper">
          <div className="how__steps">
            <div className="how__step">
              <img src={iconCard} alt="Create card" className="how__icon" />
              <p className="how__step-num">Step 1</p>
              <h3 className="how__step-title">Create or Choose a Card</h3>
              <p className="how__step-text">
                Select a brand or create your own custom card.
                <br />
                Choose the amount, design, and recipient.
              </p>
            </div>

            <div className="how__step">
              <img src={iconSend} alt="Send or sell" className="how__icon" />
              <p className="how__step-num">Step 2</p>
              <h3 className="how__step-title">Send or Sell</h3>
              <p className="how__step-text">
                Your gift is minted as an NFT on the TRON blockchain and
                instantly sent to the recipient’s wallet. They can keep it, use
                it, or trade it.
              </p>
            </div>

            <div className="how__step">
              <img
                src={iconExchange}
                alt="Use or exchange"
                className="how__icon"
              />
              <p className="how__step-num">Step 3</p>
              <h3 className="how__step-title">Use or Exchange</h3>
              <p className="how__step-text">
                Redeem your NFT card at the brand’s store or trade it on the
                GiftUp marketplace for other assets or discounts.
              </p>
            </div>
          </div>

          <img src={lineSnake} alt="Steps connection" className="how__line" />
        </div>

        <p className="how__footer">
          Everything happens seamlessly, without needing to understand crypto{" "}
          <br /> — we handle the blockchain behind the scenes.
        </p>
      </div>
    </section>
  );
}
