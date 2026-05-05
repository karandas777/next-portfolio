import { skills } from "@/lib/portfolio-data";
import { SectionTitle } from "./SectionTitle";
import { CustomContainer } from "./CustomContainer";

export function Skills() {

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  return (
    <section id="skills">
      <CustomContainer>
        <SectionTitle>Skills</SectionTitle>
        <div className="grid grid-cols-2 gap-8">
          {Object.entries(groupedSkills).map(([category, items]) => (
            <div key={category} className={`${items.length < 5 ? 'col-span-2 md:col-span-1' : 'col-span-2'}`}>

              {/* Category Title */}
              <h2 className="text-lg md:text-2xl font-bold mb-4">
                {category}
              </h2>

              {/* Grid for that category */}
              <div className={items.length < 5 ? "grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6" : "grid grid-cols-2 lg:grid-cols-4 gap-6"}>
                {items.map((skill) => (
                  <article
                    key={skill.name}
                    className="p-3 md:p-4 glass rounded-xl"
                  >
                    <h3 className="font-bold text-sm md:text-lg">{skill.name}</h3>

                    <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-1 mt-2">
                      <div
                        className="bg-blue-400 h-1 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
}
