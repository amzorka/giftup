import Header from "../components/Header";
import Footer from "../components/Footer";
import "../scss/About.scss";
import { useMobile } from "../hooks/useMobile";
import office from "../images/office.png";
import gift from "../images/gift.png";
import card from "../images/hero.png";
import DecorativeEllipse from "../components/DecorativeEllipse";

export default function About() {
  const isMobile = useMobile();

  return (
    <>
      <Header />
      <section className="aboutpage">
        <div className="aboutpage__container">
          <div className="aboutpage__image">
            <img src={office} alt="GiftUp office" />
          </div>

          <div className="aboutpage__content">
            <h1 className="aboutpage__title1">
              The GiftUp Story — Where <br /> Digital Gifting Meets Ownership
            </h1>

            <p className="aboutpage__text1">
              The world went digital: money became programmable, art became
              <br />
              tokenized, and identity moved on-chain. Yet gifting—one of
              humanity’s
              <br /> oldest rituals—stayed stuck in the Web2 past. Gift cards
              expired. Value was <br /> trapped in closed systems. “Digital
              gifts” were little more than codes in an <br /> email.
              <br />
              GiftUp began with a simple conviction: a gift should be more than
              a <br /> moment; it should be an asset. We set out to rebuild the
              entire experience <br /> on blockchain rails—so a coffee, a
              concert ticket, a brand perk, or a limited <br /> NFT drop could
              live as a secure, transferable token with verifiable <br />{" "}
              provenance. When you give with GiftUp, you don’t just send
              value—you <br /> grant ownership, portability, and choice. That’s
              the heart of digital <br /> generosity.
            </p>

            <h1 className="aboutpage__title2">
              How It Started — From <br /> Frustration to Foundation
            </h1>

            <p className="aboutpage__text2">
              In early 2024, a small group of blockchain engineers, product
              designers, <br />
              and retail strategists gathered around a whiteboard with a shared
              <br /> frustration: brands struggled to connect real-world
              experiences to Web3,
              <br />
              and users had no elegant way to receive, hold, or trade digital
              gifts. The
              <br /> result was a fragmented market and a forgettable user
              journey.
              <br />
              We started prototyping: issuance flows for tokenized gift cards,
              redemption
              <br /> logic that feels human, and custody patterns that work for
              both crypto-
              <br />
              native users and newcomers. Our first smart-contract drafts
              targeted high
              <br /> throughput and predictable fees; our first UI drafts
              favored clarity over
              <br /> buzzwords. Dozens of iterations later, the blueprint
              solidified—tokens for
              <br /> gifts, not gimmicks. Practical, compliant, and delightful
              to use.
            </p>

            <h1 className="aboutpage__title1">
              Our Global DNA — Built Local,
              <br /> Designed for the World
            </h1>

            <p className="aboutpage__text1">
              GiftUp is international by design. Our leadership and contributors
              span
              <br /> Europe, Asia, and the United States, bringing depth in
              blockchain
              <br /> infrastructure, payments, brand partnerships, and consumer
              UX.
              <br /> Operationally, we’re anchored in Türkiye, with day-to-day
              activities run
              <br /> by SAFIR GLOBAL KARA DENIZ TASIMACILIGI IC VE DIS TIC. LTD.
              ŞTİ.This
              <br /> gives us a clear legal footprint, access to local banking
              (incl. Türkiye
              <br /> Halkbank), and proximity to fast-growing, mobile-first
              markets—while we
              <br /> integrate globally with wallets, protocols, and merchants.
              <br /> This “glocal” posture matters. It means we respect local
              regulations, tax
              <br /> and accounting realities, KYC/AML expectations, and data
              protection
              <br /> norms—without losing the agility to serve cross-border
              brands and
              <br /> communities. In short: operate locally, interoperate
              globally.
            </p>

            <h1 className="aboutpage__title2">
              What We Believe In <br />— Principles That Ship
            </h1>

            <p className="aboutpage__text2">
              The world went digital: money became programmable, art became
              <br />
              tokenized, and identity moved on-chain. Yet gifting—one of
              humanity’s
              <br /> oldest rituals—stayed stuck in the Web2 past. Gift cards
              expired. Value was <br /> trapped in closed systems. “Digital
              gifts” were little more than codes in an <br /> email.
              <br />
              GiftUp began with a simple conviction: a gift should be more than
              a <br /> moment; it should be an asset. We set out to rebuild the
              entire experience <br /> on blockchain rails—so a coffee, a
              concert ticket, a brand perk, or a limited <br /> NFT drop could
              live as a secure, transferable token with verifiable <br />{" "}
              provenance. When you give with GiftUp, you don’t just send
              value—you <br /> grant ownership, portability, and choice. That’s
              the heart of digital <br /> generosity.
            </p>
          </div>
        </div>

        <DecorativeEllipse size={700} top={200} left={-50} />
        <DecorativeEllipse size={700} top={200} left={-50} />
        <DecorativeEllipse size={700} top={-85} right={-150} />
        <DecorativeEllipse size={700} top={-85} right={-150} />
      </section>

      <section className="vision">
        <div className="vision__container">
          <div className="vision__block">
            <h2 className="aboutpage__title1">
              From Vision to Technology
              <br /> — Building the Architecture
            </h2>

            <p className="aboutpage__text1">
              Every movement needs a backbone. For GiftUp, that backbone is
              technology — invisible when it works, essential when it scales. We
              chose the TRON network as our launch infrastructure for one
              reason: accessibility. Fast, affordable, and battle-tested, it
              lets us issue and transfer
              <br /> tokenized gifts at scale, without pricing out users or
              brands.
              <br />
              From smart-contract design to backend orchestration, every module
              of GiftUp follows one principle — clarity over complexity. Our GFT
              token sits at the
              <br /> core:
            </p>

            <ul className="vision__list">
              <li className="aboutpage__text1">
                It fuels transactions and settlement between users and
                merchants.
              </li>
              <li className="aboutpage__text1">
                It underpins staking and fee-sharing mechanisms.
              </li>
              <li className="aboutpage__text1">
                It grants governance rights for ecosystem proposals through the
                GiftUp DAO.
              </li>
            </ul>

            <p className="aboutpage__text1">
              To support brands, we built SDKs and REST APIs that abstract
              blockchain jargon away. Merchants can integrate via dashboard or
              API within minutes —<br /> no solidity, no crypto-specific
              training. For users, wallets connect seamlessly; redemption is one
              click, not one tutorial.
              <br />
              Behind the scenes, real-time analytics and smart-contract audits
              (through partners like CertiK) maintain the integrity of every
              transaction.
              <br /> GiftUp isn’t chasing buzzwords; we’re engineering
              infrastructure for the next decade of gifting.
            </p>
          </div>

          <div className="vision__block vision__block--second">
            <h2 className="aboutpage__title2">
              Early Growth and Partnerships
              <br /> — When Vision Meets Market
            </h2>

            <p className="aboutpage__text2">
              When prototypes turned into a working MVP, something remarkable
              happened: brands
              <br /> didn’t just test — they believed.
              <br />
              Boutique retailers, lifestyle brands, and digital creators saw an
              immediate fit. They could
              <br /> now issue blockchain-backed gifts, run NFT-based loyalty
              programs, and build
              <br /> transparent reward systems without changing their core
              business logic.
              <br />
              By Q2 2026, we secured our first wave of partnerships — regional
              merchants in Türkiye,
              <br /> European e-commerce platforms, and early NFT projects
              seeking real-world use cases.
              <br /> Our community grew just as fast. Thousands joined our
              Telegram and Discord servers to
              <br /> share ideas, test early builds, and participate in the GFT
              presale.
              <br />
              Each integration taught us something new — about user psychology,
              merchant
              <br /> economics, and what “value” means when a token carries
              emotion as well as price.
              <br /> Today, GiftUp stands at the intersection of brand
              engagement and blockchain
              <br /> transparency — a platform where sentiment meets
              scalability.
            </p>

            <h1 className="aboutpage__title1">
              The Team Today — People
              <br /> Behind the Protocol
            </h1>

            <p className="aboutpage__text1">
              GiftUp isn’t an algorithm; it’s a collective. Engineers,
              marketers, designers, and strategists united by a single obsession
              — to
              <br /> make Web3 human-centric.
              <br />
              Our structure reflects our philosophy: decentralized collaboration
              anchored by transparent operations.
              <br />
              Core Engineering: blockchain architects, backend specialists, and
              smart-contract auditors ensuring reliability at scale.
              <br />
              Product & Design: UI/UX experts who turn on-chain logic into
              intuitive experiences.
              <br />
              Growth & Partnerships: marketers and brand liaisons building
              bridges from retail to Web3.
              <br />
              Legal & Compliance: teams coordinating with Turkish authorities
              and international advisors to align GiftUp with financial and
              <br /> digital-asset standards.
              <br />
              We work across time zones — from Rize and Istanbul to Berlin,
              Singapore, and San Francisco — but our mindset is
              <br /> singular: build trust through execution.
              <br />
              Titles matter less than results; ideas win by merit. Every
              contributor, whether developer or designer, owns a piece of the
              <br /> mission.
            </p>

            <h1 className="aboutpage__title2">
              Our Vision for the Future <br />— A Global Economy of Giving
            </h1>

            <p className="aboutpage__text2">
              By 2030, we imagine a world where every gift has lasting value.
              <br />
              Gift cards, brand rewards, even event tickets — all tokenized,
              transferable, and liquid. A world where sending
              <br />
              appreciation is as easy as scanning a QR, and every act of giving
              strengthens a decentralized economy.
              <br /> Our roadmap is ambitious but grounded:
              <br /> Expand into multi-chain interoperability across TRON,
              Ethereum, and emerging L2s. <br /> Build the Gift Marketplace,
              enabling peer-to-peer trading and staking of NFT gifts.
              <br /> Launch full DAO governance, transferring major platform
              decisions to GFT holders.
              <br />
              Partner with payment providers and global retailers to make GiftUp
              a universal gifting standard.
              <br /> But beyond code and markets, our purpose remains emotional.
              <br />
              We believe generosity is the oldest social currency — we’re just
              giving it a new protocol.
              <br />
              GiftUp is building a future where giving is transparent, fair, and
              truly owned by everyone who participates.
            </p>
            <span className="about-end">
              GiftUp — powering the world’s first decentralized economy of
              gifting.
            </span>
          </div>
          <img src={gift} alt="Gift illustration" className="vision__image" />
          <img src={card} alt="Gift illustration" className="vision__image2" />
        </div>

        <DecorativeEllipse size={700} top={1000} left={-50} />
        <DecorativeEllipse size={700} top={1800} left={-50} />
        <DecorativeEllipse size={700} top={3000} left={-50} />
        <DecorativeEllipse size={700} top={4000} left={-50} />

        <DecorativeEllipse size={700} top={1000} right={0} />
        <DecorativeEllipse size={700} top={2300} right={0} />
        <DecorativeEllipse size={700} top={3500} right={0} />
        <DecorativeEllipse size={700} top={4700} right={0} />
      </section>
      <Footer />
    </>
  );
}
