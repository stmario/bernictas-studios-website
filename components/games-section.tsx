import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const GAME = {
  title: 'Desert Grinder',
  genre: 'Action · Shooter · 2D',
  year: '2026',
  status: 'In development',
  image: '/games/desert-grinder.png',
  icon: '/games/desert-grinder-icon.png',
  steamUrl: 'https://store.steampowered.com/app/4959280/Desert_Grinder/?beta=1',
  description:
    'Survive a merciless wasteland as a heavily armed feline mercenary. Run, shoot, and grind through a sun-scorched desert where the only law is survival.',
}

export function GamesSection() {
  return (
    <section id="games" className="mx-auto max-w-7xl scroll-mt-16 px-4 py-24 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our games</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Worlds we&apos;ve built
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          One world so far — a heat-soaked wasteland where mercy is a rumor and survival is the
          only score that counts.
        </p>
      </div>

      <article className="group relative isolate mt-12 grid overflow-hidden rounded-xl border border-border lg:grid-cols-[1.4fr_1fr]">
        <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[520px]">
          <Image
            src={GAME.image}
            alt={`${GAME.title} key art — a feline mercenary overlooking a sun-scorched wasteland`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/40" />
        </div>

        <div className="relative flex flex-col justify-end gap-6 bg-card/60 p-6 sm:p-8 lg:p-10">
          <div className="absolute right-6 top-6 sm:right-8 sm:top-8">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              {GAME.status}
            </span>
          </div>

          <Image
            src={GAME.icon}
            alt={`${GAME.title} icon`}
            width={96}
            height={96}
            className="size-20 rounded-2xl border border-border shadow-lg sm:size-24"
          />

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {GAME.genre} · {GAME.year}
            </p>
            <h3 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{GAME.title}</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              {GAME.description}
            </p>
            <a
              href={GAME.steamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-foreground"
            >
              View on Steam
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </article>
    </section>
  )
}
