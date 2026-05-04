import type { TimelineItem } from "@/lib/portfolio-data";
import { education, experience } from "@/lib/portfolio-data";
import { SectionTitle } from "./SectionTitle";

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <article>
      <h3>{item.title}</h3>
      <p>{item.subtitle}</p>
      <div />
      <p>{item.date}</p>
      {item.place ? <p>{item.place}</p> : null}
    </article>
  );
}

export function Education() {
  return (
    <section id="education">
      <SectionTitle>Education</SectionTitle>
      <div>
        {education.map((item) => (
          <TimelineCard key={`${item.title}-${item.date}`} item={item} />
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience">
      <SectionTitle>Experience</SectionTitle>
      <div>
        {experience.map((item) => (
          <TimelineCard key={`${item.title}-${item.date}`} item={item} />
        ))}
      </div>
    </section>
  );
}
