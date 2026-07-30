import { motion } from "framer-motion";
import type { Achievement } from "../../../types/achievement";

interface AchievementCardProps {
  achievement: Achievement;
}

const AchievementCard = ({ achievement }: AchievementCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 shadow-lg hover:border-primary/40"
    >
      <div className="text-5xl mb-4">{achievement.icon}</div>

      <h3 className="text-xl font-bold">{achievement.title}</h3>

      <p className="mt-3 text-gray-400 leading-relaxed">
        {achievement.description}
      </p>

      <span className="inline-block mt-5 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
        {achievement.year}
      </span>
    </motion.div>
  );
};

export default AchievementCard;