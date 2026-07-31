import { siteConfig } from "../../../config/site";

const GitHubStats = () => {
  return (
    <div className="rounded-xl border border-border bg-surface p-8 text-center">
      <h3 className="text-2xl font-bold text-theme mb-3">
        GitHub Profile
      </h3>

      <p className="text-muted mb-6">
        Explore my repositories, contributions, and open-source work.
      </p>

      <a
        href={siteConfig.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:opacity-90 transition"
      >
        View GitHub →
      </a>
    </div>
  );
};

export default GitHubStats;