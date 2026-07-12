const FOOTER_LINKS = [
  {
    heading: 'Studio',
    links: ['Games', 'About', 'Team', 'Press kit'],
  },
  {
    heading: 'Community',
    links: ['Discord', 'Newsletter', 'Devlog', 'Merch'],
  },
  {
    heading: 'Legal',
    links: ['Privacy', 'Terms', 'Cookies', 'Contact'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src="/logo.png" alt="Bernictas Studios" className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              An independent game studio building worlds worth getting lost in.
            </p>
          </div>

          {FOOTER_LINKS.map((column) => (
            <div key={column.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Bernictas Studios. All rights reserved.
          </p>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Made by players, for players
          </p>
        </div>
      </div>
    </footer>
  )
}
