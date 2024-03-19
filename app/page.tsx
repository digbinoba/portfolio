import Experience from '@/components/Experience';
import Email from '@/components/Email';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import About from '@/components/About';
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Experience />
        <Skills/>
        <Projects />
        <Email />
      </div>
    </main>
  );
}
