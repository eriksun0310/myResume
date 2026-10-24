import { About } from '@/components/About';
import { Apps } from '@/components/Apps';
import { Contact } from '@/components/Contact';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Nav } from '@/components/Nav';
import { SkillGraph } from '@/components/SkillGraph';
import { Stats } from '@/components/Stats';
import { Ticker } from '@/components/Ticker';

export default function Page() {
  return (
    <div className="pg">
      <div className="bgfx" aria-hidden="true">
        <div className="grid" />
        <div className="glow1" />
        <div className="glow2" />
      </div>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Stats />
        <SkillGraph />
        <Apps />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
