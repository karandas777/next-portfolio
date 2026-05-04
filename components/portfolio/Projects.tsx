import Image from "next/image";
import { projects } from "@/lib/portfolio-data";
import { SectionTitle } from "./SectionTitle";

export function Projects() {
  return (
    <section id="work">
      <SectionTitle>Work</SectionTitle>
      <div>
        {projects.map((project) => (
          <a
            key={`${project.title}-${project.date}`}
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                sizes="(min-width: 1280px) 28vw, (min-width: 768px) 42vw, 90vw"
              />
            </div>
            <h3>{project.title}</h3>
            <p>
              {project.description}
            </p>
            <p>{project.date}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
