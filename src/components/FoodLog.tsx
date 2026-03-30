export default function FoodLog() {
  return (
    <section id="food-log-30-03-2026-01" className="py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="mb-4 text-center font-[family-name:var(--font-sans)] text-[0.78rem] font-medium uppercase tracking-[0.16em] text-text-muted">
          Food Log 30-03-2026-01
        </p>

        <h2 className="mx-auto mb-12 max-w-3xl text-center font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.4rem)] font-medium leading-tight text-brass-dark">
          So much love
        </h2>

        <div className="overflow-hidden rounded-[var(--radius-xl)] border border-brass/[0.12] bg-[rgba(255,250,243,0.84)] shadow-[0_20px_50px_var(--shadow)]">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative h-80 sm:h-96 lg:h-full">
              <img
                src="/vermicelli-payasam.png"
                alt="A bowl of semia payasam, evoking loving food memories from Amma's kitchen"
                className="h-full w-full object-cover"
                style={{
                  filter: "saturate(0.94) contrast(0.97) brightness(1.02)",
                  objectPosition: "center 72%",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a2118]/22 via-transparent to-transparent" />
            </div>

            <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <p className="mb-5 font-[family-name:var(--font-display)] text-[1.15rem] leading-relaxed text-brass-dark sm:text-[1.25rem]">
                Love has so many expressions. It also transcends time.
              </p>

              <div className="space-y-4 text-[0.98rem] leading-relaxed text-text-muted">
                <p>
                  One of my students just finished a meal at my dining table. She
                  loved the food. Spontaneously, she said &ndash; SO MUCH LOVE! It
                  almost became the title of this book!
                </p>

                <p>
                  Amma was like that. Looking back over time, sifting through my
                  memories, the one thing that defined her most for me in my life,
                  was her outstanding cooking. She made every effort, to do justice
                  to her inheritance, her long years of experience in the kitchen,
                  and her deep desire to make a difference.
                </p>

                <p>
                  Though Amma passed away in 2021, her legacy of great food
                  continues in my kitchen. How? Well, that is of course material
                  for another food log.
                </p>

                <p>
                  And yes, for me, as someone who loves food, I love Amma&rsquo;s
                  particular brand of Kerala cuisine. For me, love is having a
                  Pulichery, or a Sambar, or an Avial. Sometimes Dosa with Dosa
                  Podi. And revel in the fond memories evoked by Semia Payasam.
                </p>

                <p>
                  There is love when someone curates the meal. It is an expression
                  of love. And there is love, when someone has the same meal, with
                  reverence and love. Love truly has many expressions. Food is one
                  of them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
