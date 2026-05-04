import { About } from "./About";
import { Education, Experience } from "./Timeline";
import { Hero } from "./Hero";
import { Interests } from "./Interests";
import { Projects } from "./Projects";
import { Sidebar } from "./Sidebar";
import { Skills } from "./Skills";
import { DarkBtn } from "./DarkBtn";

export function PortfolioPage() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      {/* <Sidebar /> */}
      <DarkBtn />
      <main>
        <Hero />
        <About />
        {/* <Education /> */}
        {/* <Experience />
        <Skills />
        <Projects />
        <Interests /> */}
      </main>
    </div>
  );
}
