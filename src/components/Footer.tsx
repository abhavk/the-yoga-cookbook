export default function Footer() {
  return (
    <footer className="border-t border-brass/10 py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="mb-2 font-[family-name:var(--font-display)] text-xl font-medium text-brass-dark">
              Food for the Soul
            </p>
            <p className="text-sm leading-relaxed text-text-muted">
              Eating for Happiness. And for Health.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            <div>
              <p className="mb-3 font-[family-name:var(--font-sans)] text-[0.7rem] font-medium uppercase tracking-[0.14em] text-text-muted">
                Explore
              </p>
              <div className="space-y-2">
                {["About", "Recipes", "The Book", "Author"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                    className="block text-sm text-text-muted transition-colors hover:text-brass-dark"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 font-[family-name:var(--font-sans)] text-[0.7rem] font-medium uppercase tracking-[0.14em] text-text-muted">
                Connect
              </p>
              <div className="space-y-2">
                {[
                  { label: "Sivananda Yoga Centre", href: "https://yogashowstheway.com" },
                  { label: "Instagram", href: "https://www.instagram.com/sivanandagurgaon" },
                  { label: "YouTube", href: "https://www.youtube.com/@sivanandayogacentregurgaon" },
                  { label: "Contact", href: "https://wa.me/919810645850" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-text-muted transition-colors hover:text-brass-dark"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Publisher */}
          <div className="md:text-right">
            <p className="mb-2 font-[family-name:var(--font-sans)] text-[0.7rem] font-medium uppercase tracking-[0.14em] text-text-muted">
              Published by
            </p>
            <img
              src="/DK_(2020).svg"
              alt="DK (Dorling Kindersley)"
              className="h-8 w-auto opacity-60 md:ml-auto"
            />
          </div>
        </div>

        <div className="mt-10 border-t border-brass/8 pt-6 text-center">
          <p className="font-[family-name:var(--font-sans)] text-xs text-stone">
            &copy; {new Date().getFullYear()} Arun Pandala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
