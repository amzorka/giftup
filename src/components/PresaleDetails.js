import React from "react";
import "../scss/PresaleDetails.scss";
import icon1 from "../icons/token.png";
import icon2 from "../icons/alloc.png";
import icon3 from "../icons/price.png";
import icon4 from "../icons/currency.png";
import icon5 from "../icons/network.png";

const PresaleDetails = () => {
  return (
    <section className="presale">
      <div className="container">
        <h2 className="presale-title">Presale Details</h2>
        <p className="presale-subtitle">
          Be among the first to own GFT, the native token of the GiftUp
          ecosystem.
          <br /> Presale funds will directly support product development,
          audits, exchange <br /> listings, and marketing expansion.
        </p>

        <div className="presale__content">
          <div className="presale__left">
            <h3 className="presale__block-title">Tokenomics Highlights</h3>
            <div className="presale__info-box">
              <div className="info-item">
                <img src={icon1} alt="" />
                <p>
                  <b>Total Supply:</b> 1,000,000,000 GFT
                </p>
              </div>
              <div className="info-item">
                <img src={icon2} alt="" />
                <p>
                  <b>Presale Allocation:</b> 300,000,000 GFT
                </p>
              </div>
              <div className="info-item">
                <img src={icon3} alt="" />
                <p>
                  <b>Presale Price:</b> $0.26 per GFT
                </p>
              </div>
              <div className="info-item">
                <img src={icon4} alt="" />
                <p>
                  <b>Accepted Currency:</b> USDT (TRC-20)
                </p>
              </div>
              <div className="info-item">
                <img src={icon5} alt="" />
                <p>
                  <b>Network:</b> TRON
                </p>
              </div>
            </div>
          </div>

          <div className="presale__right">
            <h3 className="presale__block-title">Distribution Plan</h3>

            <div className="progress">
              <span>70% — Liquidity Pool & Market Support</span>
              <div className="bar">
                <div className="fill" style={{ width: "684px" }}></div>
              </div>
            </div>

            <div className="progress">
              <span>15% — Development</span>
              <div className="bar">
                <div className="fill" style={{ width: "147px" }}></div>
              </div>
            </div>

            <div className="progress">
              <span>10% — Marketing</span>
              <div className="bar">
                <div className="fill" style={{ width: "98px" }}></div>
              </div>
            </div>

            <div className="progress">
              <span>5% — Legal & Operations</span>
              <div className="bar">
                <div className="fill" style={{ width: "49px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresaleDetails;
