import { SectionTitle } from "./SectionTitle";

const keySkills = [
  "ReactJS",
  "NextJS",
  "HTML/CSS",
  "Javascript",
  "Bootstrap",
  "NodeJS",
];

export function About() {
  return (
    <section id="about">
      <SectionTitle>About</SectionTitle>
      <div>
        <p>Hi there!</p>
        <p>
          I am Karan Das, a B.Sc. IT graduate and frontend developer with 5+ years of experience building scalable, high-performance web applications using React.js and Next.js. I specialize in SSR, API integration, and performance optimization, with a strong track record of delivering production-grade platforms focused on speed, SEO, and a seamless user experience.
        </p>
        <div>
          <span>Key skills:</span>
          {keySkills.map((skill) => (
            <span key={skill}>
              {skill}
            </span>
          ))}
          <span>& many more</span>
        </div>
      </div>
      <a
        href="/portfolio/Resume.pdf"
        download
      >
        Download My Resume
      </a>
    </section>
  );
}
