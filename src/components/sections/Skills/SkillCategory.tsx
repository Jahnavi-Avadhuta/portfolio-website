import { motion } from "framer-motion";
import Badge from "../../common/Badge";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-surface border-theme"
    >
      <h3 className="mb-6 text-2xl font-semibold text-blue-600">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;