import Container from "../../common/Container";
import SectionHeading from "../../common/SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../../../data/projects";

const Projects = () => {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="py-24 bg-theme transition-colors duration-300"
    >
      <Container>
        <SectionHeading
          title="Projects"
          subtitle="A selection of software engineering, AI, and machine learning projects that showcase my technical skills and learning journey."
        />

        <div className="mb-20">
          <h2 className="mb-8 text-3xl font-bold text-theme">
            Featured Projects
          </h2>

          <div className="grid gap-10 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-3xl font-bold text-theme">
            Other Projects
          </h2>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;