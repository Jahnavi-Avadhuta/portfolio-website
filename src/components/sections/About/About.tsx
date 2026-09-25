import { motion } from "framer-motion";
import Container from "../../common/Container";
import SectionHeading from "../../common/SectionHeading";
import Badge from "../../common/Badge";
import StatCard from "../../common/StatCard";

const technologies = [
  "Java",
  "Python",
  "SQL",
  "Data Analysis",
  "Machine Learning",
  "Spring Boot",
  "React",
  "REST APIs",
  "Git",
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
          subtitle="Passionate about building practical software and exploring data-driven solutions."
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
              I'm Jahnavi Avadhuta, a Computer Science graduate with a strong foundation in software development, databases, and application development. I enjoy building practical applications using Java, Spring Boot, Python, React, SQL, and modern development tools.
            </p>

            <p
              className="mb-6 leading-8"
              style={{ color: "var(--text-light)" }}
            >
              Through internships, training, and hands-on projects, I've worked with full-stack applications, backend development, REST APIs, database-driven systems, and AI-powered applications. These experiences have strengthened my understanding of software development, database design, API integration, and practical problem-solving.
            </p>

            <p
              className="mb-8 leading-8"
              style={{ color: "var(--text-light)" }}
            >
              Alongside my software development background, I’m developing a growing interest in data analytics and how data can be used to identify patterns, generate insights, and support better decision-making. I’m currently strengthening my skills in SQL, Python, data analysis, data visualization, and machine learning.
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