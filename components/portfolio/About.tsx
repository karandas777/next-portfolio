import { PiDownloadSimpleBold  } from "react-icons/pi";
import { CustomContainer } from "./CustomContainer";
import { SectionTitle } from "./SectionTitle";

const keySkills = [
  "React.js",
  "Next.js",
  "Tailwind",
  "HTML / CSS",
  "Javascript",
  "Node.js",
];

export function About() {
  return (
    <section id="about">
      <CustomContainer>
      <SectionTitle>About</SectionTitle>
      <div className=" text-md md:text-lg leading-relaxed w-full rounded-b-4xl rounded-tr-4xl rounded-tl-sm p-4 glass">
        <p>Hi there!</p>
        <p>
          I am Karan Das, a B.Sc. IT graduate and frontend developer with 5+ years of experience building scalable, high-performance web applications using React.js and Next.js. I specialize in SSR, API integration, and performance optimization, with a strong track record of delivering production-grade platforms focused on speed, SEO, and a seamless user experience.
        </p>
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <span>Key skills:</span>
          {keySkills.map((skill) => (
            <span key={skill} className="bg-blue-400 font-medium text-white px-2 py-0.5 text-sm rounded-full">
              {skill}
            </span>
          ))}
          <span>& many more</span>
        </div>
      </div>
      <a
          href="/portfolio/Resume.pdf"
          download
          className="mt-6 md:mt-10 drop-shadow-xl text-white font-bold mx-auto px-4 py-2 rounded-3xl w-fit flex items-center gap-3 justify-center text-sm md:text-lg bg-blue-400 hover:scale-97 hover:bg-blue-500 transition-all duration-300"
        >
          <PiDownloadSimpleBold className="text-xl md:text-2xl" /> Download My Resume
        </a>
      </CustomContainer>
    </section>
  );
}
