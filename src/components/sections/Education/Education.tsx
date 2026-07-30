import { motion } from "framer-motion";
import Container from "../../common/Container";
import SectionHeading from "../../common/SectionHeading";
import EducationCard from "./EducationCard";
import { education } from "../../../data";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24"
    >
      <Container>

        <SectionHeading
          title="Education"
          subtitle="Academic background and qualifications."
        />

        <div className="relative mt-16">

          <div className="absolute left-5 top-0 h-full w-[2px] bg-primary/20 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">

            {education.map((item, index) => (

              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={`relative flex ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >

                <div className="absolute left-5 top-8 h-4 w-4 rounded-full bg-primary ring-4 ring-background md:left-1/2 md:-translate-x-1/2" />

                <div className="ml-12 md:ml-0 md:w-[46%]">
                  <EducationCard
                    education={item}
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

export default Education;