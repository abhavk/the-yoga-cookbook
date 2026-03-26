export default function About() {
  return (
    <section id="about" className="py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section kicker */}
        <p className="mb-4 text-center font-[family-name:var(--font-sans)] text-[0.78rem] font-medium uppercase tracking-[0.16em] text-text-muted">
          The Story Behind the Book
        </p>

        <h2 className="mx-auto mb-10 max-w-2xl text-center font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.4rem)] font-medium leading-tight text-brass-dark">
          A Tribute to Amma
        </h2>

        {/* Amma image + continuation — one unified block */}
        <div className="overflow-hidden rounded-[var(--radius-xl)] border border-brass/[0.12]">
          <div className="relative h-80 w-full sm:h-96 lg:h-[42rem]">
            <img
              src="/amma.png"
              alt="Amma — Arun Pandala's mother"
              className="h-full w-full object-cover object-top"
              style={{ filter: "saturate(0.85) contrast(0.95) brightness(1.05)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a2118]/90 via-[#2a2118]/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 px-8 pb-8 pt-20 text-left sm:px-12 sm:pb-12 lg:px-16 lg:pb-14">
              <p className="max-w-md text-[0.95rem] leading-relaxed text-[#fffaf2]/80">
                After Amma&rsquo;s passing in 2021, Arun turned to her kitchen
                and its memories to shape this book &mdash; a tribute to a life
                of selfless service, nurturing, and quiet strength. Every recipe
                carries the love and devotion of a
                mother who nourished everyone around her.
              </p>
            </div>
          </div>

          <div className="bg-[rgba(255,250,243,0.8)] px-8 py-12 sm:px-12 sm:py-16 lg:px-16">
            <p className="mx-auto mb-12 max-w-2xl text-center font-[family-name:var(--font-sans)] text-[0.8rem] font-medium uppercase tracking-[0.16em] text-text-muted">
              Yogic Wisdom Finds Rest In Amma&rsquo;s Kitchen
            </p>

            <div className="mx-auto grid max-w-3xl gap-14 md:grid-cols-2">
              <div className="text-center md:text-left">
                <div className="mx-auto mb-4 h-px w-10 bg-gradient-to-r from-transparent via-brass/40 to-transparent md:mx-0 md:bg-gradient-to-r md:from-brass/40 md:to-transparent" />
                <h4 className="mb-3 font-[family-name:var(--font-display)] text-[clamp(1.3rem,2vw,1.7rem)] font-medium text-brass-dark">
                  30 Years of Tradition
                </h4>
                <p className="text-[0.95rem] leading-relaxed text-text-muted">
                  Born from Arun&rsquo;s memories of Amma&rsquo;s daily cooking,
                  gently woven with the wisdom gathered through years of immersion
                  in yoga.
                </p>
              </div>

              <div className="text-center md:text-left">
                <div className="mx-auto mb-4 h-px w-10 bg-gradient-to-r from-transparent via-brass/40 to-transparent md:mx-0 md:bg-gradient-to-r md:from-brass/40 md:to-transparent" />
                <h4 className="mb-3 font-[family-name:var(--font-display)] text-[clamp(1.3rem,2vw,1.7rem)] font-medium text-brass-dark">
                  Satvic &amp; Soulful
                </h4>
                <p className="text-[0.95rem] leading-relaxed text-text-muted">
                  Spices tempered in coconut oil, the aroma of curry leaves, and
                  meals prepared with quiet devotion. Rooted in Kerala&rsquo;s
                  satvic tradition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
