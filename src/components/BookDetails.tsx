"use client";

import { useEffect, useRef, useState } from "react";

import PreOrderButton, {
  OPEN_CHECKOUT_EVENT,
  PAYMENT_URL,
} from "./PreOrderButton";

export default function BookDetails() {
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);
  const checkoutPanelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const openCheckout = () => {
      setIsCheckoutVisible(true);

      window.requestAnimationFrame(() => {
        if (window.innerWidth < 1024) {
          window.setTimeout(() => {
            checkoutPanelRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 120);
        }
      });
    };

    window.addEventListener(OPEN_CHECKOUT_EVENT, openCheckout);

    return () => {
      window.removeEventListener(OPEN_CHECKOUT_EVENT, openCheckout);
    };
  }, []);

  return (
    <section id="the-book" className="scroll-mt-[-10px] py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section kicker */}
        <p className="mb-4 text-center font-[family-name:var(--font-sans)] text-[0.78rem] font-medium uppercase tracking-[0.16em] text-text-muted">
          The Book
        </p>
        {/* <h2 className="mx-auto mb-6 max-w-xl text-center font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.4rem)] font-medium leading-tight text-brass-dark">
          Food for the Soul
        </h2> */}
        {/* <p className="mx-auto mb-14 max-w-lg text-center text-lg leading-relaxed text-text-muted">
          A lovingly crafted collection of sattvic recipes from Kerala,
          shaped by 60 years of yoga practice and the unforgettable
          flavours of Amma&rsquo;s kitchen.
        </p> */}

        {/* Main card */}
        <div className="overflow-hidden rounded-[var(--radius-xl)] border border-brass/[0.12] bg-[rgba(255,250,243,0.8)] shadow-[0_20px_50px_var(--shadow)]">
          <div className="grid gap-0 lg:grid-cols-2">
            {/* Book cover side */}
            <div className="relative flex h-full items-center justify-center bg-gradient-to-br from-brass/[0.06] to-brass/[0.02] p-6 sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute -top-20 -left-20 h-60 w-60 rounded-full bg-brass/[0.06] blur-[80px]" />
              <div className="flex w-full max-w-sm flex-col items-center">
                <div className="relative w-full">
                  <img
                    src="/book-cover.png"
                    alt="Food for the Soul — book cover"
                    className="relative z-10 w-full rounded-xl shadow-[0_20px_60px_rgba(45,38,33,0.25)]"
                    style={{ filter: "saturate(0.9) contrast(0.96) brightness(1.03)" }}
                  />
                  <div className="absolute -bottom-3 left-1/2 h-6 w-4/5 -translate-x-1/2 rounded-full bg-brass-dark/10 blur-xl" />
                </div>
                <p className="mt-6 text-center text-sm leading-relaxed text-text-muted sm:text-base">
                  If you need more copies for gifting or sharing with family and friends, simply click the + button to reach your desired quantity before clicking pay.
                </p>
              </div>
            </div>

            {/* Details side */}
            <div
              ref={checkoutPanelRef}
              className={
                isCheckoutVisible
                  ? "flex h-full min-h-[560px] flex-col border-t border-brass/10 bg-[rgba(255,252,247,0.92)] lg:border-t-0 lg:border-l"
                  : "flex h-full flex-col justify-center px-8 py-8 sm:px-10 lg:px-14 lg:py-10"
              }
            >
              {isCheckoutVisible ? (
                <>
                  <div className="flex items-center justify-between gap-4 border-b border-brass/10 px-6 py-3 sm:px-8">
                    <p className="font-[family-name:var(--font-display)] text-[1rem] leading-none text-brass-dark">
                      Secure checkout for your pre-order
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          checkoutPanelRef.current?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          })
                        }
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-brass/15 text-brass-dark/60 transition-colors hover:bg-brass/5 hover:text-brass-dark motion-safe:animate-[checkoutArrowPulse_1.8s_ease-in-out_infinite]"
                        aria-label="Scroll to checkout"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 5v14M6 13l6 6 6-6" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsCheckoutVisible(false)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-brass/15 text-brass-dark/70 transition-colors hover:bg-brass/5 hover:text-brass-dark"
                        aria-label="Close checkout"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="min-h-0 flex-1 bg-white">
                    <iframe
                      title="Food for the Soul secure checkout"
                      src={PAYMENT_URL}
                      className="h-full min-h-[460px] w-full"
                      loading="lazy"
                      allow="payment *; clipboard-write"
                    />
                  </div>


                  <p className="border-t border-brass/10 px-6 py-3 text-sm text-text-muted sm:px-8">
                    If the checkout does not load in this box,{" "}
                    <a
                      href={PAYMENT_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-brass-dark underline decoration-brass/35 underline-offset-3"
                    >
                      open the secure checkout in a new tab
                    </a>
                    .
                  </p>
                </>
              ) : (
                <>
                  {/* Stats row */}
                  <div className="mb-6 grid grid-cols-3 gap-6 border-b border-brass/10 pb-6">
                    {[
                      { label: "Recipes", value: "60+" },
                      { label: "Pages", value: "192" },
                      { label: "Format", value: "Softcover" },
                    ].map((item) => (
                      <div key={item.label} className="text-center">
                        <p className="font-[family-name:var(--font-display)] text-[clamp(1.6rem,2.5vw,2.2rem)] font-semibold text-brass-dark">
                          {item.value}
                        </p>
                        <p className="mt-0.5 font-[family-name:var(--font-sans)] text-[0.65rem] font-medium uppercase tracking-[0.14em] text-text-muted">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Price + Publisher */}
                  <div className="mb-6 flex items-center gap-4">
                    <div className="shrink-0">
                      <div className="flex items-end gap-2">
                        <span className="font-[family-name:var(--font-display)] text-lg font-medium text-brass-dark/60 line-through decoration-brass-dark/60 decoration-1 sm:text-xl">
                          ₹999
                        </span>
                        <span className="font-[family-name:var(--font-display)] text-2xl font-semibold text-emerald-700 sm:text-3xl">
                          ₹799
                        </span>
                      </div>
                      <p className="mt-0.5 font-[family-name:var(--font-sans)] text-[0.6rem] font-medium uppercase tracking-[0.14em] text-emerald-700/70">
                        Exclusive pre-launch price
                      </p>
                    </div>
                    <div className="ml-auto shrink-0 text-center">
                      <img
                        src="/DK_(2020).svg"
                        alt="DK (Dorling Kindersley)"
                        className="mx-auto h-7 w-auto opacity-60 sm:h-8"
                      />
                      <p className="mt-1 font-[family-name:var(--font-sans)] text-[0.6rem] font-medium uppercase tracking-[0.12em] text-text-muted sm:text-[0.65rem]">
                        Publisher
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <PreOrderButton className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-[rgba(111,84,47,0.45)] bg-gradient-to-b from-brass-light to-brass-dark px-7 py-3.5 font-[family-name:var(--font-sans)] text-sm font-medium text-[#fffaf2] shadow-lg transition-all hover:shadow-xl hover:brightness-110 sm:w-auto">
                    Pre-Order Now
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </PreOrderButton>
                  <p className="mt-3 text-sm text-text-muted">
                    *Packing and shipping extra
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
