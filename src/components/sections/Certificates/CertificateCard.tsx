import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  ExternalLink,
  Star,
  Clock3,
  BadgeCheck,
  Building2,
} from "lucide-react";
import type { Certificate } from "../../../types/certificate";

interface Props {
  certificate: Certificate;
}

const CertificateCard = ({ certificate }: Props) => {
  const scoreColor = () => {
    if (!certificate.score) return "bg-gray-100 text-gray-700";

    if (certificate.score.includes("Elite + Silver"))
      return "bg-purple-100 text-purple-700";

    if (certificate.score.includes("Elite"))
      return "bg-green-100 text-green-700";

    if (certificate.score.includes("Completed"))
      return "bg-blue-100 text-blue-700";

    if (certificate.score.includes("Pass"))
      return "bg-yellow-100 text-yellow-700";

    return "bg-gray-100 text-gray-700";
  };

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="overflow-hidden rounded-2xl bg-surface border-theme shadow-md transition-all duration-300 hover:shadow-xl"
    >
      {/* Thumbnail */}
      <img
        src={certificate.thumbnail}
        alt={certificate.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-6">
        {/* Top badges */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            {certificate.category}
          </span>

          {certificate.featured && (
            <span className="flex items-center gap-1 rounded-full bg-yellow-500/15 px-3 py-1 text-xs font-semibold text-yellow-400 border border-yellow-500/30">
              <Star
                size={13}
                fill="currentColor"
              />
              Featured
            </span>
          )}

          {certificate.score && (
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${scoreColor()}`}
            >
              {certificate.score}
            </span>
          )}
        </div>

        {/* Title */}

        <div className="flex items-start gap-3">
          <Award
            className="mt-1 text-blue-600"
            size={22}
          />

          <div>
            <h3 className="text-lg font-bold leading-snug text-theme">
              {certificate.title}
            </h3>

            <div className="mt-1 flex items-center gap-2 text-sm text-muted">
              <Building2 size={15} />

              <span>
                {certificate.issuer} • {certificate.organization}
              </span>
            </div>
          </div>
        </div>

        {/* Date */}

        <div className="mt-4 flex items-center gap-2 text-sm text-muted">
          <Calendar size={15} />

          {certificate.issued}
        </div>

        {/* Duration */}

        {certificate.duration && (
          <div className="mt-2 flex items-center gap-2 text-sm text-muted">
            <Clock3 size={15} />

            {certificate.duration}
          </div>
        )}

        {/* Skills */}

        <div className="mt-5 flex flex-wrap gap-2">
          {certificate.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-400 border border-blue-500/30"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Credential */}

        {certificate.credentialId && (
          <div className="mt-5 rounded-lg bg-theme border-theme p-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-muted uppercase">
              <BadgeCheck size={15} />

              Credential ID
            </div>

            <p className="mt-1 break-all font-mono text-xs text-theme">
              {certificate.credentialId}
            </p>
          </div>
        )}

        {/* Button */}

        <a
          href={certificate.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <ExternalLink size={18} />

          View Certificate
        </a>
      </div>
    </motion.div>
  );
};

export default CertificateCard;