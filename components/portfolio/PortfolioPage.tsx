import { About } from "./About";
import { Education, Experience } from "./Timeline";
import { Hero } from "./Hero";
import { Interests } from "./Interests";
import { Projects } from "./Projects";
import { Sidebar } from "./Sidebar";
import { Skills } from "./Skills";
import { DarkBtn } from "./DarkBtn";
import GetInTouch from "./GetInTouch";

export function PortfolioPage() {
  return (
    <div className="text-gray-800 dark:text-gray-300">
      {/* <Sidebar /> */}
      <DarkBtn />
      <main>
        <Hero />
        <About />
        <Education />
        {/* <Experience /> */}
        <Skills />
        <Projects />
        {/* <Interests /> */}
        <GetInTouch/>
      </main>
    </div>
  );
}
