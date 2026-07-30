import { motion } from "framer-motion";
import Container from "../../common/Container";
import SectionHeading from "../../common/SectionHeading";
import AchievementCard from "./AchievementCard";
import { achievements } from "../../../data";

const Achievements = () => {
  return (
    <section id="achievements" className="py-24">
      <Container>

        <SectionHeading
          title="Achievements"
          subtitle="Milestones throughout my academic and professional journey."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {achievements.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
            />
          ))}
        </motion.div>

      </Container>
    </section>
  );
};

export default Achievements;