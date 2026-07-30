import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Badge from "../../common/Badge";
import type { Project } from "../../../data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="overflow-hidden rounded-3xl bg-surface border-theme shadow-sm transition-all duration-300 hover:shadow-2xl"
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="h-60 w-full object-cover"
        />

        {project.featured && (
          <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white">
            <Star size={16} />
            Featured
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="mb-4 text-2xl font-bold text-theme">
          {project.title}
        </h3>

        <p className="mb-6 leading-7 text-muted">
          {project.description}
        </p>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium transition"
              style={{
                background: "var(--text)",
                color: "var(--background)",
              }}
            >
              <FaGithub size={18} />
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium transition"
              style={{
                background: "var(--text)",
                color: "var(--background)",
              }}
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;