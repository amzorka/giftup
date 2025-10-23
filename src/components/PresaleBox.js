import wrkIcon from "../icons/token 1.png";
import usdtIcon from "../icons/token 2.png";
import swapIcon from "../icons/arrow.png";
import copyIcon from "../icons/copy.png";
import "../scss/PresaleBox.scss";
import { useMemo, useState } from "react";

function PresaleBox() {
  // ...
  const [receiverWallet, setReceiverWallet] = useState(""); // кошелёк пользователя
  const [sending, setSending] = useState(false); // индикатор отправки
  const [sendError, setSendError] = useState(""); // текст ошибки

  const WEB3FORMS_URL = "https://api.web3forms.com/submit";
  const WEB3FORMS_KEY = "c36f2ea1-e1dc-4626-ae54-5c7ef3179394"; // ваш ключ

  // самая простая проверка TRON-адреса (T + 33 символа base58)
  const isTronAddress = (s) => /^T[1-9A-HJ-NP-Za-km-z]{33}$/.test(s.trim());

  async function sendLead() {
    setSendError("");
    setSending(true);
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "New Presale Submission",
          from_name: "GiftUp Presale",
          wrk: wrkNum, // количество WRK
          usdt: usdtNum, // сумма в USDT
          payTo, // наш TRC20-адрес
          receiverWallet, // кошелек пользователя
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || `HTTP ${res.status}`);
      }

      return true;
    } catch (e) {
      setSendError(e.message || "Failed to send");
      return false;
    } finally {
      setSending(false);
    }
  }

  async function copy(text) {
    try {
      // современный путь (HTTPS + поддержка API)
      if (window.isSecureContext && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
      throw new Error("Clipboard API unavailable");
    } catch {
      // фолбэк для iOS/Safari/HTTP
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        // не показываем, но оставляем в потоке, чтобы можно было выделить
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.top = "-1000px";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(ta);
        return ok;
      } catch {
        return false;
      }
    }
  }

  const [copied, setCopied] = useState(false);

  async function handleCopy(text) {
    const ok = await copy(text);
    setCopied(ok);
    setTimeout(() => setCopied(false), 1500);
  }

  // === шаги ===
  const [step, setStep] = useState(1);
  const next = () => setStep((s) => Math.min(4, s + 1));
  const reset = () => {
    setStep(1);
    setAgree(false);
    setWrk("1 000");
    setUsdt("260");
  };

  const [agree, setAgree] = useState(false);

  // === конвертация ===
  const RATE = 0.3; // 1 WRK = 0.3 USDT

  // контролируемые значения полей (строки, т.к. форматируем с пробелами)
  const [wrk, setWrk] = useState("1 000");
  const [usdt, setUsdt] = useState("260");

  // утилиты (только цифры, формат тысяч)
  const onlyDigits = (s) => s.replace(/\D+/g, "");
  const toInt = (s) => (s ? parseInt(s, 10) || 0 : 0);
  const fmt = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  const handleWrkChange = (e) => {
    const raw = onlyDigits(e.target.value);
    const wrkInt = toInt(raw);
    const usdtInt = Math.round(wrkInt * RATE);
    setWrk(fmt(wrkInt));
    setUsdt(fmt(usdtInt));
  };

  const handleUsdtChange = (e) => {
    const raw = onlyDigits(e.target.value);
    const usdtInt = toInt(raw);
    const wrkInt = Math.round(usdtInt / RATE);
    setUsdt(fmt(usdtInt));
    setWrk(fmt(wrkInt));
  };

  const swap = () => {
    setWrk(usdt);
    setUsdt(wrk);
  };

  const wrkNum = useMemo(() => toInt(onlyDigits(wrk)), [wrk]);
  const usdtNum = useMemo(() => toInt(onlyDigits(usdt)), [usdt]);

  const canContinue = agree && wrkNum > 0 && usdtNum > 0;

  // данные для шагов 2-4 (примерные)
  const payTo = "TLY4Qgtg7w6sRHJkbY3YQmMS59b6txDaY18";
  const contract = "TXDU8Y1Sjf33GsjXGDqahh6deXJmLf87UF";

  return (
    <section className="presalee">
      <div className="container">
        <div className="presale__box">
          <h2 className="presale__title">Join Presale</h2>

          {/* ==== сцены: виден только активный блок ==== */}
          <div className="presale__stages">
            {/* ---------- STEP 1 ---------- */}
            <div className={`presale__stage ${step === 1 ? "is-active" : ""}`}>
              <h3 className="presale__step">1. Buy #GFT Tokens</h3>
              <p className="presale__desc">
                Enter the amount you wish to purchase and your TRON wallet
                address.
              </p>

              <div className="presale__row">
                {/* ЛЕВЫЙ */}
                <div className="field">
                  <label className="field__label">#GFT</label>
                  <div className="field__control">
                    <input
                      className="field__input"
                      type="text"
                      inputMode="numeric"
                      placeholder="1 000"
                      value={wrk}
                      onChange={handleWrkChange}
                    />
                    <img className="field__token" src={wrkIcon} alt="WRK" />
                  </div>
                </div>

                <img
                  className="presale__swap"
                  src={swapIcon}
                  alt=""
                  onClick={swap}
                />

                {/* ПРАВЫЙ */}
                <div className="field">
                  <label className="field__label">#USDT</label>
                  <div className="field__control">
                    <input
                      className="field__input"
                      type="text"
                      inputMode="numeric"
                      placeholder="300"
                      value={usdt}
                      onChange={handleUsdtChange}
                    />
                    <img className="field__token" src={usdtIcon} alt="USDT" />
                  </div>
                </div>
              </div>

              <button
                type="button"
                className={`presale__agree ${agree ? "is-checked" : ""}`}
                onClick={() => setAgree((v) => !v)}
              >
                <span className="presale__checkbox" aria-hidden />
                <span className="presale__agree-text">
                  I have read and agree to the{" "}
                  <a
                    href="/Terms of Use.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="presale__link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a
                    href="/Privacy Policy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="presale__link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Privacy Policy
                  </a>
                </span>
              </button>

              <div className="presale__actions">
                <button
                  className="btn btn--primary presale__btn"
                  onClick={next}
                  disabled={!canContinue}
                  aria-disabled={!canContinue}
                >
                  Continue
                </button>
              </div>
            </div>

            {/* ---------- STEP 2 ---------- */}
            {step === 2 && (
              <div className="presale__step-wrap is-visible">
                <h3 className="presale__subtitle">2. Complete Your Payment</h3>

                <p className="presale__hint">
                  Please transfer the exact amount of{" "}
                  <strong className="presale__links">
                    {usdt || "260"} USDT
                  </strong>{" "}
                  to the address below and{" "}
                  <span className="presale__links presale__link--highlight">
                    enter your TRON wallet
                  </span>{" "}
                  address to receive your GFT tokens.
                </p>

                {/* ⬇️ новая обёртка для двух полей */}
                <div className="payline">
                  {/* слева — адрес для оплаты */}
                  <div className="addr addr--send">
                    <div className="addr__label">Send USDT to this address</div>
                    <div className="addr__control">
                      <input
                        className="addr__input"
                        type="text"
                        value="T9z6DbU9Ja7xMnAsTeszTJZxCGw9upL3jn"
                        readOnly
                      />
                      <button
                        type="button"
                        className="addr__copy"
                        onClick={() =>
                          copy("T9z6DbU9Ja7xMnAsTeszTJZxCGw9upL3jn")
                        }
                        aria-label="Copy address"
                        title="Copy address"
                      >
                        <img src={copyIcon} alt="Copy" />
                      </button>
                    </div>
                  </div>

                  {/* справа — кошелёк пользователя для получения WRK */}
                  <div className="addr addr--recv">
                    <div className="addr__label">
                      Your Wallet Address (to receive GFT)
                    </div>
                    <div className="addr__control">
                      <input
                        type="text"
                        className="addr__input"
                        placeholder="xxx…"
                        value={receiverWallet}
                        onChange={(e) => setReceiverWallet(e.target.value)} // <— добавили
                        autoComplete="off"
                        inputMode="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="presale__actions">
                  <button
                    type="button"
                    className="btn btn--primary presale__btn"
                    disabled={sending /* || !isTronAddress(receiverWallet) */}
                    onClick={async () => {
                      if (!isTronAddress(receiverWallet)) {
                        setSendError(
                          "Please enter a valid USDT (TRC20) address starting with T…"
                        );
                        return;
                      }
                      const ok = await sendLead();
                      if (ok) setStep(3);
                    }}
                  >
                    {sending ? "Sending..." : "Done, next"}
                  </button>
                  {sendError && (
                    <div
                      className="presale__error"
                      role="alert"
                      style={{
                        marginTop: 15,
                        fontSize: 14,
                        color: "#ff6b6b",
                        marginLeft: "10px",
                      }}
                    >
                      {sendError}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ---------- STEP 3 ---------- */}
            <div className={`presale__stage ${step === 3 ? "is-active" : ""}`}>
              <h3 className="presale__subtitle">
                3. Add GFT to Your Trust Wallet
              </h3>

              <div className="wallet-steps">
                {/* Левая колонка 1–3 */}
                <ol className="ws-col">
                  <li>Open Your Wallet.</li>
                  <li>
                    Go to <b>Tokens → Add Custom Token</b>.
                  </li>
                  <li>
                    Select <b>Network: TRON</b>.
                  </li>
                </ol>

                {/* Правая колонка 4 (+подпункты) и 5 */}
                <ol className="ws-col ws-col--right">
                  <li>
                    <span className="ws-heading">
                      Enter the following details (tap to copy):
                    </span>
                    <ul className="ws-bullets">
                      <li>
                        Contract Address: THXzL34gEr3QXRBPkWRAH8XwtvjYAeVFNf
                      </li>
                      <li>Name: GiftUp</li>
                      <li>Symbol: GFT</li>
                      <li>Decimals: 18</li>
                    </ul>
                  </li>
                  <li>Save and refresh your wallet.</li>
                </ol>
              </div>

              <div className="presale__actions">
                <button
                  className="btn btn--primary presale__btn"
                  onClick={next}
                >
                  Done, next
                </button>
              </div>
            </div>

            {/* ---------- STEP 4 ---------- */}
            <div className={`presale__stage ${step === 4 ? "is-active" : ""}`}>
              <h3 className="presale__step">4. Await Confirmation</h3>

              <div className="thanks">
                <p>
                  <b style={{ fontSize: "14px", fontWeight: "600" }}>
                    Welcome to the GiftUp ecosystem!
                  </b>
                </p>
                <p style={{ fontSize: "14px", fontWeight: "400" }}>
                  Your payment has been successfully processed and your GFT
                  tokens will appear in your <br /> wallet soon.
                  <br /> We're thrilled to have you in our growing community –
                  stay tuned for
                  <br /> updates, rewards and exclusive early features.
                </p>
              </div>

              <div className="presale__actions">
                <button
                  className="btn btn--primary presale__btn"
                  onClick={reset}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
          {/* /stages */}
        </div>
      </div>
    </section>
  );
}

export default PresaleBox;
