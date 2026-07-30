import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";

const HeroSocials = () => {
  const socials = [
    {
      icon: <FaGithub />,
      url: "https://github.com/Jahnavi-Avadhuta",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/jahnavi-avadhuta-879b4232b/",
      label: "LinkedIn",
    },
    {
      icon: <FaHackerrank />,
      url: "https://www.hackerrank.com/profile/jahnaviavadhuta",
      label: "HackerRank",
    },
  ];

  return (
    <div className="flex gap-5 mt-10">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="text-2xl text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:text-blue-600"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default HeroSocials;