import { FaGithub, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "../../../config/site";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/10 bg-background py-10">
      <div className="container mx-auto px-6">

        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

          {/* Left */}
          <div>
            <h3 className="text-2xl font-bold">
              {siteConfig.name}
            </h3>

            <p className="mt-2 max-w-md text-gray-400">
              Java Full Stack Developer passionate about building
              scalable web applications and continuously learning
              modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "about",
              "skills",
              "projects",
              "experience",
              "contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="cursor-pointer capitalize hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-5 text-2xl">

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400">

          © {year} {siteConfig.name}. Designed & Developed by Jahnavi Avadhuta using React, TypeScript & Tailwind CSS.

        </div>

      </div>
    </footer>
  );
};

export default Footer;