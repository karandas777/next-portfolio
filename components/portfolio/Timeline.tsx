import type { TimelineItem } from "@/lib/portfolio-data";
import { education, experience } from "@/lib/portfolio-data";
import { SectionTitle } from "./SectionTitle";
import { CustomContainer } from "./CustomContainer";
import { PiCertificate } from "react-icons/pi";

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <article className="p-4 bg-white dark:bg-gray-800 rounded-xl drop-shadow-xl">
      <div className="flex items-center gap-2 w-full mb-3">
        <PiCertificate className="text-2xl text-blue-400" />
        <p className="text-blue-400 text-xl md:text-2xl font-bold">{item.title}</p>
        <p className="font-semibold text-sm ml-auto">{item.date}</p>
      </div>
      
      <p>{item.place}</p>
      <p>{"( " + item.subtitle + " )"}</p>
    </article>
  );
}

export function Education() {
  return (
    <section id="education">
      <CustomContainer>
      <SectionTitle>Education</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
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
