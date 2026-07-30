import { motion } from "framer-motion";
import type { Learning } from "../../../types/learning";

interface LearningCardProps {
  item: Learning;
}

const statusColor = {
  Learning: "bg-blue-500/20 text-blue-400",
  Practicing: "bg-yellow-500/20 text-yellow-400",
  Building: "bg-green-500/20 text-green-400",
};

const LearningCard = ({ item }: LearningCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
    >
      <div className="text-5xl mb-4">{item.icon}</div>

      <h3 className="text-xl font-semibold">{item.title}</h3>

      <p className="mt-3 text-gray-400">{item.description}</p>

      <div className="flex flex-wrap gap-2 mt-5">
        {item.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
          >
            {tech}
          </span>
        ))}
      </div>

      <span
        className={`inline-block mt-6 rounded-full px-3 py-1 text-sm ${
          statusColor[item.status]
        }`}
      >
        {item.status}
      </span>
    </motion.div>
  );
};

export default LearningCard;