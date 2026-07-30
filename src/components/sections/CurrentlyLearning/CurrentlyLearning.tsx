import Container from "../../common/Container";
import SectionHeading from "../../common/SectionHeading";
import LearningCard from "./LearningCard";
import { learningItems } from "../../../data";

const CurrentlyLearning = () => {
  return (
    <section id="learning" className="py-24">
      <Container>
        <SectionHeading
          title="Currently Learning"
          subtitle="Technologies and concepts I'm actively exploring."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {learningItems.map((item) => (
            <LearningCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CurrentlyLearning;