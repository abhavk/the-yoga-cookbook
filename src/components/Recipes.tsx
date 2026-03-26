const recipes = [
  {
    name: "Inji Curry",
    desc: "A tangy-sweet ginger preserve simmered with jaggery and tamarind — a staple at Kerala feasts.",
    tag: "Traditional",
    image: "/Inji-Curry.png",
    position: "center 45%",
  },
  {
    name: "Olan",
    desc: "A gentle ash gourd and black-eyed pea stew in thin coconut milk, finished with coconut oil.",
    tag: "Satvic",
    image: "/Olan.png",
    position: "center 85%",
  },
  {
    name: "Vermicelli Payasam",
    desc: "Ghee-roasted vermicelli in cardamom milk with cashews and raisins — served hot in winter, cold in summer.",
    tag: "Celebration",
    image: "/vermicelli-payasam.png",
    position: "center 80%",
  },
];

export default function Recipes() {
  return (
    <section id="recipes" className="py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="mb-4 text-center font-[family-name:var(--font-sans)] text-[0.78rem] font-medium uppercase tracking-[0.16em] text-text-muted">
          A Taste of What Awaits
        </p>

        <h2 className="mx-auto mb-16 max-w-2xl text-center font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.4rem)] font-medium leading-tight text-brass-dark">
          From Amma&rsquo;s Kitchen
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {recipes.map((r) => (
            <div
              key={r.name}
              className="group overflow-hidden rounded-[var(--radius-xl)] border border-brass/[0.12] bg-[rgba(255,250,243,0.8)] transition-all duration-200 hover:border-brass/25 hover:shadow-[0_16px_40px_var(--shadow)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={r.image}
                  alt={r.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{
                    filter: "saturate(0.9) contrast(0.96) brightness(1.03)",
                    objectPosition: r.position,
                  }}
                />
              </div>
              <div className="p-6">
                {/* <span className="mb-3 inline-block rounded-full bg-brass/8 px-3 py-1 font-[family-name:var(--font-sans)] text-[0.7rem] font-medium uppercase tracking-[0.1em] text-brass">
                  {r.tag}
                </span> */}
                <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl font-medium text-brass-dark transition-colors group-hover:text-brass">
                  {r.name}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-text-muted">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
