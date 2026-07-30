import Container from "../../common/Container";
import SectionHeading from "../../common/SectionHeading";
import RoadmapItem from "./RoadmapItem";
import { roadmap } from "../../../data";

const FutureRoadmap = () => {
  return (
    <section
      id="roadmap"
      className="py-24"
    >
      <Container>
        <SectionHeading
          title="Future Roadmap"
          subtitle="My learning journey and long-term career aspirations in software engineering, AI, and data technologies."
        />

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-6 shadow-md">
          <div className="grid gap-6 text-center sm:grid-cols-3">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">5</h3>
              <p className="text-sm text-gray-600">
                Career Milestones
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">
                Software + AI
              </h3>
              <p className="text-sm text-gray-600">
                Primary Focus
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">
                Scotland 🇬🇧
              </h3>
              <p className="text-sm text-gray-600">
                Master's Destination
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          {roadmap.map((step, index) => (
            <RoadmapItem
              key={step.id}
              step={step}
              isLast={index === roadmap.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FutureRoadmap;