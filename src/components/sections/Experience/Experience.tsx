import { motion } from "framer-motion";
import Container from "../../common/Container";
import SectionHeading from "../../common/SectionHeading";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../../../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24"
    >
      <Container>

        <SectionHeading
          title="Experience"
          subtitle="My learning journey and professional experience."
        />

        <div className="relative mt-16">

          {/* Timeline */}

          <div className="absolute left-5 top-0 h-full w-[2px] bg-primary/20 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">

            {experiences.map((experience, index) => (

              <motion.div
                key={experience.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={`relative flex ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >

                {/* Timeline Dot */}

                <div className="absolute left-5 top-8 h-4 w-4 rounded-full bg-primary ring-4 ring-background md:left-1/2 md:-translate-x-1/2" />

                <div className="ml-12 md:ml-0 md:w-[46%]">
                  <ExperienceCard
                    experience={experience}
                    index={index}
                  />
                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </Container>
    </section>
  );
};

export default Experience;