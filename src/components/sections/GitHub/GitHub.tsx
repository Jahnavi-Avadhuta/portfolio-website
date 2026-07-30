import Container from "../../common/Container";
import SectionHeading from "../../common/SectionHeading";
import GitHubStats from "./GitHubStats";
import Calendar from "./GitHubCalendar";
import FeaturedRepos from "./FeaturedRepos";

const GitHub = () => {
  return (
    <section id="github" className="py-24">
      <Container>

        <SectionHeading
          title="GitHub"
          subtitle="A snapshot of my coding activity and featured repositories."
        />

        <div className="mt-14 space-y-12">

          <GitHubStats />

          <Calendar />

          <FeaturedRepos />

        </div>

      </Container>
    </section>
  );
};

export default GitHub;