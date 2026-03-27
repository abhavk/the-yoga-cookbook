import PreOrderButton from "./PreOrderButton";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-start overflow-hidden pt-6 pb-10 sm:pt-8">
      {/* Decorative warm orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#d4b87a]/10 blur-[120px]" />
        <div className="absolute top-1/2 -left-48 h-[400px] w-[400px] rounded-full bg-[#c4956a]/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 2xl:max-w-8xl">
        {/* Top kicker */}
        <div
          className="mb-5 flex flex-col items-center gap-1.5"
          style={{ animation: "breatheIn 0.8s ease-out both" }}
        >
          <p className="text-center font-[family-name:var(--font-sans)] text-[0.78rem] font-medium uppercase tracking-[0.22em] text-brass-dark/70">
            A Cookbook by Arun Pandala
          </p>
          <div className="flex items-center gap-1.5">
            <span className="font-[family-name:var(--font-sans)] text-[0.65rem] font-medium uppercase tracking-[0.14em] text-text-muted/70">Published by</span>
            <img src="/DK_(2020).svg" alt="DK (Dorling Kindersley)" className="h-5 w-auto opacity-60" />
          </div>
        </div>

        <div className="grid gap-7 lg:grid-cols-2 lg:gap-16 2xl:gap-24">
        {/* Mobile-only pre-order button (between image and quote) */}
        <div
          className="order-2 flex flex-wrap items-center justify-center gap-5 lg:hidden"
          style={{ animation: "breatheIn 0.8s ease-out 0.3s both" }}
        >
          <a
            href="#about"
            className="group relative inline-flex items-center px-5 py-3.5 font-[family-name:var(--font-sans)] text-sm font-medium tracking-wide text-brass-dark/75 transition-colors duration-300 hover:text-brass-dark"
          >
            Discover the Story
            <span className="absolute bottom-2.5 left-5 right-5 h-px origin-left scale-x-0 bg-gradient-to-r from-brass/30 to-brass/10 transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </a>
          <PreOrderButton className="group inline-flex w-full justify-center items-center gap-2.5 rounded-full border border-[rgba(111,84,47,0.45)] bg-gradient-to-b from-brass-light to-brass-dark px-7 py-3.5 font-[family-name:var(--font-sans)] text-sm font-medium text-[#fffaf2] shadow-lg transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_6px_24px_rgba(139,106,63,0.4)] sm:w-auto">
            Pre-Order Now
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </PreOrderButton>
        </div>

        {/* Text column */}
        <div className="order-3 flex flex-col justify-center lg:order-2">
          <blockquote
            className="relative mb-10 max-w-lg pl-6"
            style={{ animation: "breatheIn 0.8s ease-out 0.15s both" }}
          >
            <div className="absolute top-1 bottom-1 left-0 w-[2px] rounded-full bg-gradient-to-b from-brass/40 via-brass/20 to-transparent" />

            <p className="font-[family-name:var(--font-display)] text-[clamp(1.4rem,3vw,2rem)] font-light leading-snug tracking-wide text-brass-dark italic">
              &ldquo;Every recipe is an art form. It is sacred. Let the canvas
              express your creativity, your sacredness, your love and care for
              yourself, and for others. Allow the recipes to work on you, rather
              than you work on them.&rdquo;
            </p>
            <footer
              className="mt-5"
              style={{ animation: "breatheIn 0.8s ease-out 0.4s both" }}
            >
              <div className="mb-2.5 h-px w-6 bg-gradient-to-r from-brass/35 to-transparent" />
              <span className="font-[family-name:var(--font-sans)] text-xs font-normal uppercase tracking-[0.18em] text-text-muted/70">
                Arun Pandala
              </span>
            </footer>
          </blockquote>

          <div
            className="hidden flex-wrap items-center gap-5 lg:flex"
            style={{ animation: "breatheIn 0.8s ease-out 0.6s both" }}
          >
            <a
              href="#about"
              className="group relative inline-flex items-center px-5 py-3.5 font-[family-name:var(--font-sans)] text-sm font-medium tracking-wide text-brass-dark/75 transition-colors duration-300 hover:text-brass-dark"
            >
              Discover the Story
              <span className="absolute bottom-2.5 left-5 right-5 h-px origin-left scale-x-0 bg-gradient-to-r from-brass/30 to-brass/10 transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </a>
            <PreOrderButton className="group inline-flex items-center gap-2.5 rounded-full border border-[rgba(111,84,47,0.45)] bg-gradient-to-b from-brass-light to-brass-dark px-7 py-3.5 font-[family-name:var(--font-sans)] text-sm font-medium text-[#fffaf2] shadow-lg transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_6px_24px_rgba(139,106,63,0.4)]">
              Pre-Order Now
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </PreOrderButton>
          </div>
        </div>

        {/* Image column */}
        <div className="order-1 flex items-center justify-center lg:order-1">
          <div className="relative">
            <div className="overflow-hidden rounded-[var(--radius-xl)] border border-brass/10 bg-[rgba(255,250,243,0.8)] p-1.5 shadow-[0_20px_50px_var(--shadow)]">
              <img
                src="/book-cover.png"
                alt="Food for the Soul by Arun Pandala — book cover"
                className="block w-full max-w-xs lg:max-w-sm 2xl:max-w-lg rounded-[var(--radius-lg)] object-cover"
                style={{
                  filter: "saturate(0.9) contrast(0.96) brightness(1.03)",
                }}
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full border border-brass/15 bg-gradient-to-br from-brass-light/20 to-transparent blur-sm" />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
