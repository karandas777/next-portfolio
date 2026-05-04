import { skills } from "@/lib/portfolio-data";
import { SectionTitle } from "./SectionTitle";

export function Skills() {
  return (
    <section id="skills">
      <SectionTitle>Skills</SectionTitle>
      <div>
        {skills.map((skill) => (
          <article key={skill.name}>
            <div>
              <h3>{skill.name}</h3>
              <span>
                {skill.level}%
              </span>
            </div>
            <div>
              <div
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
