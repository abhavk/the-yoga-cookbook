export default function FromTheBook() {
  return (
    <section id="from-the-book" className="py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-[family-name:var(--font-sans)] text-[0.78rem] font-medium uppercase tracking-[0.16em] text-text-muted">
            From the Book
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.3rem)] font-medium leading-tight text-brass-dark">
            The Kitchen That Raised Me
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[1rem] leading-relaxed text-text-muted sm:text-[1.08rem]">
            A personal blog-style passage inspired by the heart of <em>Food for the Soul</em>.
          </p>
        </div>

        <article className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[var(--radius-xl)] border border-brass/[0.12] bg-[linear-gradient(180deg,rgba(255,252,247,0.97)_0%,rgba(255,248,239,0.92)_100%)] shadow-[0_20px_50px_var(--shadow)]">
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[20rem] lg:min-h-full">
              <img
                src="/author.png"
                alt="Arun Pandala"
                className="h-full w-full object-cover"
                style={{ filter: "saturate(0.92) contrast(0.96) brightness(1.03)", objectPosition: "center 18%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a2118]/35 via-[#2a2118]/8 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/30 bg-[rgba(39,28,18,0.5)] px-5 py-4 text-white shadow-[0_14px_32px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:inset-x-6 sm:bottom-6">
                <p className="font-[family-name:var(--font-display)] text-[1.2rem] leading-snug sm:text-[1.35rem]">
                  “This book is not only about recipes. It is about memory, love, and the quiet grace of being nourished.”
                </p>
                <p className="mt-2 font-[family-name:var(--font-sans)] text-[0.72rem] uppercase tracking-[0.16em] text-white/80">
                  Arun Pandala
                </p>
              </div>
            </div>

            <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div className="mb-6 flex flex-wrap items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-text-muted">
                <span className="rounded-full border border-brass/12 bg-brass/[0.05] px-3 py-1.5 text-brass-dark">
                  Personal Reflection
                </span>
                <span>By Arun Pandala</span>
              </div>

              <div className="space-y-5 text-[1.04rem] leading-[1.9] text-[#5f4b37] sm:text-[1.09rem]">
                <p className="text-brass-dark">
                  <span className="float-left mr-3 mt-1 font-[family-name:var(--font-display)] text-[3.2rem] leading-none text-brass-dark sm:text-[3.6rem]">
                    I
                  </span>
                  have often felt that the kitchen is one of the most sacred rooms in a home. For me, it was never only a place where meals were prepared. It was where care became visible, where discipline softened into tenderness, and where love took a form that could be tasted, shared, and remembered.
                </p>

                <p>
                  I grew up watching my Amma cook with extraordinary sincerity. Nothing about it was casual. Even the simplest meal carried attention, rhythm, and devotion. She did not merely feed people. She nourished them. In time, I began to understand that her cooking was a language of service &mdash; quiet, unannounced, and deeply transformative.
                </p>

                <p>
                  Much later, through my own life in yoga, I recognized the same truth in another form. Yoga teaches awareness, reverence, discipline, and presence. Amma&rsquo;s kitchen held all of that naturally. The way she selected ingredients, balanced flavours, and served others with thoughtfulness was, to me, a living expression of yogic wisdom.
                </p>

                <p>
                  <em>Food for the Soul</em> was born from that recognition. This book is my offering to her memory, to Kerala&rsquo;s deeply rooted culinary tradition, and to everyone who has ever felt loved through a meal. The recipes matter, of course. But beyond the recipes is something even more essential: the invitation to cook with sensitivity, to eat with gratitude, and to let food become a vehicle for connection.
                </p>

                <p>
                  If these pages carry any warmth, it is because they come from a life shaped by Amma&rsquo;s hands, Amma&rsquo;s kitchen, and Amma&rsquo;s love. In that sense, this book is also a portrait of me &mdash; of what nourished me, what formed me, and what I now hope to pass on.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
