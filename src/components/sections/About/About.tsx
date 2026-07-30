import { motion } from "framer-motion";
import Container from "../../common/Container";
import SectionHeading from "../../common/SectionHeading";
import Badge from "../../common/Badge";
import StatCard from "../../common/StatCard";

const technologies = [
  "Java",
  "Spring Boot",
  "React",
  "TypeScript",
  "MySQL",
  "REST APIs",
  "Git",
  "HTML",
  "CSS",
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 transition-colors duration-300"
      style={{ background: "var(--background)" }}
    >
      <Container>
        <SectionHeading
          title="About Me"
          subtitle="Passionate about building reliable backend systems and modern web applications."
        />

        <div className="grid items-start gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="mb-6 leading-8"
              style={{ color: "var(--text-light)" }}
            >
              I'm Avadhuta Jahnavi, a Computer Science graduate with a strong
              interest in Java backend development, Spring Boot, REST APIs, and
              full-stack web development. I enjoy building practical projects
              that solve real-world problems and continuously improving my
              technical skills.
            </p>

            <p
              className="mb-8 leading-8"
              style={{ color: "var(--text-light)" }}
            >
              My goal is to contribute as a Software Engineer by writing clean,
              maintainable, and scalable code while learning from experienced
              teams and delivering impactful solutions.
            </p>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            <StatCard value="9+" label="Technologies" />
            <StatCard value="7+" label="Projects" />
            <StatCard value="15+" label="Certificates" />
            <StatCard value="2025" label="Graduate" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;