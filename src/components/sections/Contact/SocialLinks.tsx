import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-4 mt-6">

      <a
        href="https://github.com/Jahnavi-Avadhuta"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={28} />
      </a>

      <a
        href="https://linkedin.com/in/jahnavi-avadhuta-879b4232b/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={28} />
      </a>

    </div>
  );
};

export default SocialLinks;