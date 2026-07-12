const TEAM = [
  {
    name: 'Mario Stöckli',
    role: 'Founder',
    initials: 'MS',
    href: 'https://www.linkedin.com/in/mario-stoeckli/',
  },
]

export function TeamSection() {
  return (
    <section id="team" className="mx-auto max-w-7xl scroll-mt-16 px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">The crew</p>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          The people behind the pixels
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          An independent studio built by one person with a shared obsession: making games worth
          getting lost in.
        </p>
      </div>

      <ul className="mt-12 flex justify-center sm:justify-start">
        {TEAM.map((member) => (
          <li key={member.name} className="w-full max-w-xs">
            <a
              href={member.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-xl border border-border bg-card/40 p-6 text-center transition-colors hover:border-primary/60"
            >
              <span className="grid size-16 place-items-center rounded-full bg-primary/15 font-display text-xl font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {member.initials}
              </span>
              <p className="mt-4 font-display text-sm font-bold">{member.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{member.role}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
