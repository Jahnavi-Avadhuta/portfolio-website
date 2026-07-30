import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";
import HeroSocials from "./HeroSocials";

import Container from "../../common/Container";
import { personal } from "../../../data/personal";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20"
      style={{
        background:
          "linear-gradient(to bottom right, var(--background), var(--surface), var(--background))",
      }}
    >
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-12">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-600 font-semibold tracking-wide uppercase mb-4">
            Hello, I'm
          </p>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            style={{ color: "var(--text)" }}
          >
            {personal.name.split(" ")[0]}
            <br />
            {personal.name.split(" ")[1]}
          </h1>

          <div
            className="text-2xl font-semibold mb-8 h-10"
            style={{ color: "var(--text-light)" }}
          >
            <TypeAnimation
              sequence={[
                personal.titles[0],
                2000,
                personal.titles[1],
                2000,
                personal.titles[2],
                2000,
                personal.titles[3],
                2000,
                personal.titles[4],
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p
            className="text-lg leading-8 max-w-xl"
            style={{ color: "var(--text-light)" }}
          >
            {personal.tagline}
          </p>

          <HeroButtons />
          <HeroSocials />
        </motion.div>

        <HeroImage />
      </Container>
    </section>
  );
};

export default Hero;