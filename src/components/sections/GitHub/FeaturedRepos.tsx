import RepoCard from "./RepoCard";
import { featuredRepos } from "../../../data";

const FeaturedRepos = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {featuredRepos.map((repo) => (
        <RepoCard
          key={repo.id}
          repo={repo}
        />
      ))}
    </div>
  );
};

export default FeaturedRepos;