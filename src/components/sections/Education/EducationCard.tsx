import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import type { Education } from "../../../types/education";

interface Props {
  education: Education;
  index: number;
}

const EducationCard = ({ education, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl">

        <div className="flex items-start justify-between">

          <div className="flex gap-4">

            <div className="rounded-xl bg-primary/10 p-3">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>

            <div>
              <h3 className="text-xl font-bold">
                {education.degree}
              </h3>

              <p className="text-primary font-medium">
                {education.institution}
              </p>
            </div>

          </div>

          <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
            <Award size={16} />
            {education.grade}
          </div>

        </div>

        <div className="mt-5 flex flex-wrap gap-5 text-sm text-gray-400">

          <div className="flex items-center gap-2">
            <Calendar size={16} />
            {education.duration}
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            {education.location}
          </div>

        </div>

        <p className="mt-5 leading-7 text-gray-300">
          {education.description}
        </p>

      </div>
    </motion.div>
  );
};

export default EducationCard;