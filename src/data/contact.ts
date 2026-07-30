import type { ContactInfo } from "../types/contact";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";

export const contactInfo: ContactInfo[] = [
  {
    id: 1,
    title: "Email",
    value: "jahnaviavadhuta@gmail.com",
    href: "mailto:jahnaviavadhuta@gmail.com",
    icon: FaEnvelope,
  },
  {
    id: 2,
    title: "GitHub",
    value: "github.com/Jahnavi-Avadhuta",
    href: "https://github.com/Jahnavi-Avadhuta",
    icon: FaGithub,
  },
  {
    id: 3,
    title: "LinkedIn",
    value: "linkedin.com/in/jahnavi-avadhuta-879b4232b/",
    href: "https://linkedin.com/in/jahnavi-avadhuta-879b4232b/",
    icon: FaLinkedin,
  },
  {
    id: 4,
    title: "Location",
    value: "Hyderabad, India",
    href: "#",
    icon: FaLocationDot,
  },
];