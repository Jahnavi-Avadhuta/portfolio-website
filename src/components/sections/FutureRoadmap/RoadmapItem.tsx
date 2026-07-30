import { motion } from "framer-motion";
import { CheckCircle2, Circle, Calendar } from "lucide-react";
import type { RoadmapStep } from "../../../types/roadmap";

interface RoadmapItemProps {
  step: RoadmapStep;
  isLast: boolean;
}

const RoadmapItem = ({
  step,
  isLast,
}: RoadmapItemProps) => {
  return (
    <div className="relative flex gap-8">
      {/* Timeline */}

      <div className="flex flex-col items-center">
        {step.completed ? (
          <CheckCircle2
            size={28}
            className="text-primary"
          />
        ) : (
          <Circle
            size={28}
            className="text-gray-400"
          />
        )}

        {!isLast && (
          <div className="mt-3 h-full w-[2px] bg-primary/30" />
        )}
      </div>

      {/* Card */}

      <motion.div
        whileHover={{
          y: -4,
          scale: 1.01,
        }}
        transition={{
          duration: 0.25,
        }}
        className="mb-10 w-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-2xl font-bold">
            {step.title}
          </h3>

          <span className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Calendar size={16} />
            {step.timeframe}
          </span>
        </div>

        <p className="mt-5 leading-8 text-gray-400">
          {step.description}
        </p>

        <div className="mt-6">
          {step.completed ? (
            <span className="rounded-full bg-green-500/15 px-4 py-2 text-sm font-medium text-green-400">
              ✔ Completed
            </span>
          ) : (
            <span className="rounded-full bg-blue-500/15 px-4 py-2 text-sm font-medium text-blue-400">
              🚀 Upcoming
            </span>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default RoadmapItem;