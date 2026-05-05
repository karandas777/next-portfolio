import Image from "next/image";
import { projects } from "@/lib/portfolio-data";
import { SectionTitle } from "./SectionTitle";
import { CustomContainer } from "./CustomContainer";

export function Projects() {
  return (
    <section id="works">
      <CustomContainer>
        <SectionTitle>Work</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {projects.map((project) => (
            <a
              key={`${project.title}`}
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="p-2 md:p-3 glass rounded-xl"
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  width={500}
                  height={250}
                  className="w-full h-full object-cover rounded"
                />
                <div className="absolute top-1 text-xs right-1 backdrop-blur-sm font-medium bg-black/30 text-white px-2 py-1 rounded">
                  {project.type}
                </div>
              </div>
              <h3 className="font-medium mt-3">{project.title}</h3>
              {project.skills && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.skills.map((skill) => (
                    <span key={skill} className="text-xs glass px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
}
