import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/Skills";
import Projects from "./components/sections/Projects/Projects";
import Experience from "./components/sections/Experience/Experience";
import Education from "./components/sections/Education/Education";
import Certificates from "./components/sections/Certificates/Certificates";
import Achievements from "./components/sections/Achievements/Achievements";
import CurrentlyLearning from "./components/sections/CurrentlyLearning/CurrentlyLearning";
import FutureRoadmap from "./components/sections/FutureRoadmap/FutureRoadmap";
import GitHub from "./components/sections/GitHub/GitHub";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/common/Footer/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Achievements />
      <CurrentlyLearning />
      <FutureRoadmap />
      <GitHub />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;