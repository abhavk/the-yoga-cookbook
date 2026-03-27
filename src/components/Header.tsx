"use client";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(251,247,241,0.95)] shadow-[0_1px_12px_var(--shadow)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="shrink-0 font-[family-name:var(--font-display)] text-lg font-medium tracking-wide text-brass-dark sm:text-xl">
          FOOD for the SOUL
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {["About", "The Book", "Recipes", "Author"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className="font-[family-name:var(--font-sans)] text-sm tracking-[0.04em] text-text-muted transition-colors hover:text-brass-dark"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#the-book"
          className="shrink-0 rounded-full border border-brass/30 px-4 py-2 font-[family-name:var(--font-sans)] text-xs font-medium text-brass-dark transition-all hover:border-brass/50 hover:bg-brass/5 sm:px-5 sm:text-sm"
        >
          Pre-Order
        </a>
      </div>
    </header>
  );
}
