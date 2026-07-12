import Image from 'next/image'
import { ArrowRight, Gamepad2 } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Background key art */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-key-art.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
          <Gamepad2 className="size-4 text-primary" />
          Independent game studio · Est. 2026
        </div>

        <h1 className="mt-6 max-w-4xl font-display text-6xl font-bold leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl">
          We build worlds
          <br />
          worth <span className="text-primary">getting lost in.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Bernictas Studios is a crew of designers, artists, and engineers crafting bold, story-driven
          games that stay with you long after the credits roll.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#games"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Discover Desert Grinder
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#studio"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-secondary"
          >
            About the studio
          </a>
        </div>

      </div>
    </section>
  )
}
