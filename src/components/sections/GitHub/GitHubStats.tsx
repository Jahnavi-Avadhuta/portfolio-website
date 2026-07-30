import { siteConfig } from "../../../config/site";

const GitHubStats = () => {
  return (
    <div className="rounded-2xl border border-border bg-surface p-8 text-center">
      <h3 className="mb-3 text-2xl font-bold text-theme">
        GitHub Profile
      </h3>

      <p className="mb-6 text-muted">
        Explore my repositories, contributions, and open-source work on GitHub.
      </p>

      <a
        href={siteConfig.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-90"
      >
        View GitHub Profile
      </a>
    </div>
  );
};

export default GitHubStats;