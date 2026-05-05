import { SectionTitle } from "./SectionTitle";
import { CustomContainer } from "./CustomContainer";

export function Interests() {
  return (
    <section id="interests">
      <CustomContainer>
        <SectionTitle>Interests</SectionTitle>
        <div className=" text-lg md:text-2xl leading-relaxed w-full rounded-b-4xl rounded-tr-4xl rounded-tl-sm glass p-4">
          Apart from being a developer, I enjoy watching movies and series, exploring new technologies, casually playing games, and keeping my inner tech enthusiast constantly engaged.
        </div>
      </CustomContainer>
    </section>
  );
}
