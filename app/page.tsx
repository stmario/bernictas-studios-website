import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { GamesSection } from '@/components/games-section'
import { AboutSection } from '@/components/about-section'
import { TeamSection } from '@/components/team-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <GamesSection />
        <AboutSection />
        <TeamSection />
      </main>
      <SiteFooter />
    </div>
  )
}
