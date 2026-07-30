import { siteConfig } from "../../../config/site";

const username = siteConfig.githubUsername;

const GitHubStats = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <img
        className="w-full rounded-xl"
        src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent`}
        alt="GitHub Stats"
      />

      <img
        className="w-full rounded-xl"
        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent`}
        alt="Top Languages"
      />
    </div>
  );
};

export default GitHubStats;