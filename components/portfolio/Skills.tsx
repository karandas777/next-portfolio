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
        <div className="grid grid-cols-1 gap-8 glass rounded-2xl p-4">
          {Object.entries(groupedSkills).map(([category, items]) => (
            <div key={category} className="col-span-1">

              {/* Category Title */}
                <h2 className="text-md md:text-xl font-bold mb-4">
                  {category}
                </h2>

              {/* Grid for that category */}
              <div className="flex flex-wrap gap-3 md:gap-4">
                
                {items.map((skill) => {
                  const Icon = skill.icon
                  return (
                  <article
                    key={skill.name}
                    className="px-3 md:px-4 py-1 md:py-2 glass rounded-2xl hover:scale-97 hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="font-bold text-sm md:text-lg flex items-center">
                      {Icon && <Icon className="text-md md:text-3xl text-blue-400 mr-2" />}
                      {skill.name}
                    </h3>
                    {/* <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-1 mt-2">
                      <div
                        className="bg-blue-400 h-1 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div> */}
                  </article>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
}
