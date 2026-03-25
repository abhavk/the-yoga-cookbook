export default function AuthorBio() {
  return (
    <section id="author" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="flex justify-center lg:col-span-2">
            <div className="relative">
              <div className="w-72 overflow-hidden rounded-[var(--radius-xl)] border border-brass/10 shadow-[0_20px_50px_var(--shadow)] sm:w-80">
                <img
                  src="/author.png"
                  alt="Arun Pandala"
                  className="block w-full"
                  style={{ filter: "saturate(0.9) contrast(0.96) brightness(1.03)" }}
                />
              </div>
              <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-full border border-brass/10 bg-gradient-to-br from-brass-light/15 to-transparent blur-sm" />
            </div>
          </div>

          {/* Bio text */}
          <div className="lg:col-span-3">
            <p className="mb-4 font-[family-name:var(--font-sans)] text-[0.78rem] font-medium uppercase tracking-[0.16em] text-text-muted">
              About the Author
            </p>

            <h2 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-medium leading-tight text-brass-dark">
              Arun Pandala
            </h2>

            <p className="mb-4 text-[0.78rem] font-medium italic text-brass">
              Yoga Acharya
            </p>

            <div className="space-y-4 text-lg leading-relaxed text-text-muted">
              <p>
                A globally recognized yoga teacher in the Sivananda tradition,
                Arun Pandala is the founder-director of Sivananda Yoga Centre,
                Gurgaon, which since 2004 has been bringing a traditional and
                authentic lineage of yoga to people around the world.
              </p>
              <p>
                The only child of his parents, who migrated from Kerala in the
                1960s, Arun grew up in New Delhi. He now lives in Gurgaon, near
                the national capital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
