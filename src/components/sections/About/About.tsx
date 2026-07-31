import { motion } from "framer-motion";
import Container from "../../common/Container";
import SectionHeading from "../../common/SectionHeading";
import Badge from "../../common/Badge";
import StatCard from "../../common/StatCard";

const technologies = [
  "Java",
  "Python",
  "Spring Boot",
  "React",
  "Machine Learning",
  "SQL",
  "REST APIs",
  "Git",
  "Docker",
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
          subtitle="Passionate about building intelligent software, scalable backend systems, and AI-powered applications."
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
              I'm Jahnavi Avadhuta, a Computer Science graduate passionate about Software Engineering, Artificial Intelligence, and Data Science. I enjoy designing and building practical applications using Java, Spring Boot, Python, React, SQL, and modern development tools while continuously expanding my technical skills through hands-on projects.
            </p>

            <p
              className="mb-6 leading-8"
              style={{ color: "var(--text-light)" }}
            >
              Over the past year, I've built full-stack web applications, AI-powered desktop software, machine learning models, and automation projects that strengthened my expertise in backend development, REST APIs, database design, software architecture, and problem-solving.
            </p>

            <p
              className="mb-8 leading-8"
              style={{ color: "var(--text-light)" }}
            >
              My goal is to contribute as a Software Engineer by building intelligent, scalable, and impactful software solutions while continuously growing in Artificial Intelligence and Data Science.
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
            <StatCard value="10+" label="Technologies" />
            <StatCard value="7+" label="Projects" />
            <StatCard value="16+" label="Certifications" />
            <StatCard value="2025" label="Graduate" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;