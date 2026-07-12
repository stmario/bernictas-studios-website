import { Compass, Palette, Users2 } from 'lucide-react'

const VALUES = [
  {
    icon: Compass,
    title: 'Player-first',
    description:
      'We design for the moment of wonder. If it does not make us feel something, it does not ship.',
  },
  {
    icon: Palette,
    title: 'Art-driven',
    description:
      'Every world begins as a mood, a color, a piece of music — then we build the game around it.',
  },
  {
    icon: Users2,
    title: 'Small & fierce',
    description:
      'A tight-knit team where every voice shapes the game. No committees, just craft.',
  },
]

export function AboutSection() {
  return (
    <section id="studio" className="scroll-mt-16 border-y border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              The studio
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
              An independent studio obsessed with the details
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Founded in 2026 in a cramped apartment, Bernictas Studios is still in an early stage of its development.
              </p>
              <p>
                We stay small on purpose. It keeps us honest, keeps us fast, and keeps the joy of
                making games at the center of everything we do. We answer to players, not
                shareholders.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="flex gap-4 rounded-xl border border-border bg-background p-6"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                  <value.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">{value.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
