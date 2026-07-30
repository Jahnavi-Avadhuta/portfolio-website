import { motion } from "framer-motion";
import { FaGithub, FaCodeBranch, FaStar, FaExternalLinkAlt } from "react-icons/fa";
import type { Repo } from "../../../types/github";

interface RepoCardProps {
  repo: Repo;
}

const RepoCard = ({ repo }: RepoCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6"
    >
      <h3 className="text-xl font-bold">{repo.name}</h3>

      <p className="mt-3 text-gray-400">
        {repo.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-3 text-sm text-gray-300">
        <span>{repo.language}</span>

        <span className="flex items-center gap-1">
          <FaStar />
          {repo.stars}
        </span>

        <span className="flex items-center gap-1">
          <FaCodeBranch />
          {repo.forks}
        </span>
      </div>

      <div className="mt-6 flex gap-4">
        <a
          href={repo.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-primary hover:underline"
        >
          <FaGithub />
          Code
        </a>

        {repo.demo && (
          <a
            href={repo.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <FaExternalLinkAlt />
            Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default RepoCard;