import type { TimelineItem } from "@/lib/portfolio-data";
import { education, experience } from "@/lib/portfolio-data";
import { SectionTitle } from "./SectionTitle";
import { CustomContainer } from "./CustomContainer";
import { PiBriefcase, PiCertificate } from "react-icons/pi";

function TimelineCard({ item, exp }: { item: TimelineItem; exp?: boolean }) {
  return (
    <article className="p-3 md:p-4 glass rounded-3xl">
      <div className="flex flex-wrap items-center gap-2 w-full mb-3">
        <span className="p-2 glass rounded-4xl">
        {
          exp ? <PiBriefcase className="text-lg md:text-2xl" /> : <PiCertificate className="text-lg md:text-2xl" />
        }
        </span>
        <p className="text-xl md:text-2xl font-bold">{item.title}</p>
        <p className={exp ? "font-semibold text-sm md:ml-auto w-full text-center md:w-auto" : "font-semibold text-sm ml-auto text-center"}>{item.date}</p>
      </div>
      
      <p className="text-sm md:text-base text-center">{item.place}</p>
      <p className="text-sm md:text-base text-center">{"( " + item.subtitle + " )"}</p>
    </article>
  );
}

export function Education() {
  return (
    <section id="education">
      <CustomContainer>
      <SectionTitle>Education</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-4 mb-12">
        {education.map((item) => (
          <TimelineCard key={`${item.title}-${item.date}`} item={item} />
        ))}
      </div>
      <SectionTitle>Experience</SectionTitle>
      <div className="grid grid-cols-1 gap-4 md:gap-6 pt-4">
        {experience.map((item) => (
          <TimelineCard exp={true} key={`${item.title}-${item.date}`} item={item} />
        ))}
      </div>
      </CustomContainer>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience">
      <CustomContainer>
      <SectionTitle>Experience</SectionTitle>
      <div className="grid grid-cols-1 gap-4 md:gap-6 pt-4">
        {experience.map((item) => (
          <TimelineCard exp={true} key={`${item.title}-${item.date}`} item={item} />
        ))}
      </div>
      </CustomContainer>
    </section>
  );
}
