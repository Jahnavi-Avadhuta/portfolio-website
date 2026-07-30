import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import type { Experience } from "../../../types/experience";

interface Props {
  experience: Experience;
  index: number;
}

const ExperienceCard = ({ experience, index }: Props) => {
  const Icon = experience.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl">

        <div className="flex items-center justify-between mb-4">

          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-primary/10 p-3">
              <Icon className="h-6 w-6 text-primary" />
            </div>

            <div>
              <h3 className="text-xl font-bold">
                {experience.role}
              </h3>

              <p className="text-primary font-medium">
                {experience.company}
              </p>
            </div>
          </div>

          {experience.current && (
            <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400">
              Current
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-gray-400 mb-5">

          <div className="flex items-center gap-2">
            <Calendar size={16} />
            {experience.duration}
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            {experience.location}
          </div>

        </div>

        <p className="text-gray-300 leading-7">
          {experience.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>
    </motion.div>
  );
};

export default ExperienceCard;