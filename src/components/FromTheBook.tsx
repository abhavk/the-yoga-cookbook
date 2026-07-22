export default function FromTheBook() {
  return (
    <section id="from-the-book" className="py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-[family-name:var(--font-sans)] text-[0.78rem] font-medium uppercase tracking-[0.16em] text-text-muted">
            From the Book
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.3rem)] font-medium leading-tight text-brass-dark">
            What This Book Carries of Me
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[1rem] leading-relaxed text-text-muted sm:text-[1.08rem]">
            A personal blog-style reflection on the memories, values, and inner life behind <em>Food for the Soul</em>.
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
                  “If you want to know me, look at the love, memory, discipline, and devotion that shaped this book.”
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
                    T
                  </span>
                  his book may be filled with recipes, but if you read it closely, you will also find me in its silences, in its longings, and in the values that shaped my life. <em>Food for the Soul</em> is not simply a collection of dishes I wanted to share. It is a portrait of what formed me &mdash; the home I came from, the mother who nourished me, and the inner world that taught me to see food as an expression of love.
                </p>

                <p>
                  I was deeply shaped by Amma. Her presence in the kitchen was never hurried, careless, or mechanical. She cooked with attention. She cooked with dignity. She cooked with a sincerity that made even an ordinary meal feel meaningful. Watching her, I learned that food could carry tenderness, responsibility, generosity, and grace. Long before I put these things into words, I was already receiving them through her hands.
                </p>

                <p>
                  In many ways, this book tells you what matters to me. It tells you that I value depth over display. That I believe devotion belongs in everyday life. That memory is sacred. That nourishment is never only physical. The flavours of Kerala in these pages are not there merely because they are delicious, though they certainly are. They are there because they are bound to my identity, my inheritance, and my sense of belonging.
                </p>

                <p>
                  My life in yoga also lives quietly inside this book. Yoga has taught me to honour rhythm, awareness, humility, and presence. When I think of Amma&rsquo;s way of cooking, I recognize those same qualities. There was concentration in it. Reverence in it. A kind of selfless offering in it. So when I share these recipes, I am also sharing a way of seeing life: to do simple things with love, to serve with attentiveness, and to let daily acts become sacred.
                </p>

                <p>
                  If someone were to ask me, &ldquo;Who are you in this book?&rdquo; I would say: I am in its gratitude. I am in its remembrance. I am in its affection for Amma, in its respect for tradition, and in its hope that food can still bring people closer to themselves and to one another. This book carries my story gently, but truthfully. And perhaps that is what makes it so personal to me.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
