import Container from "../../common/Container";
import SectionHeading from "../../common/SectionHeading";
import SkillCategory from "./SkillCategory";
import { skillCategories } from "../../../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-theme-gradient py-24 transition-colors duration-300"
    >
      <Container>
        <SectionHeading
          title="Skills"
          subtitle="Technologies, frameworks, tools, and concepts I've worked with."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;