import type { TimelineItem } from "@/lib/portfolio-data";
import { education, experience } from "@/lib/portfolio-data";
import { SectionTitle } from "./SectionTitle";
import { CustomContainer } from "./CustomContainer";

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <article className="p-3 bg-white dark:bg-gray-800 rounded-lg drop-shadow-xl">
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
      <CustomContainer>
      <SectionTitle>Education</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {education.map((item) => (
          <TimelineCard key={`${item.title}-${item.date}`} item={item} />
        ))}
      </div>
      </CustomContainer>
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
