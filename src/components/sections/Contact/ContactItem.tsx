import { motion } from "framer-motion";
import type { ContactInfo } from "../../../types/contact";

interface Props {
  item: ContactInfo;
}

const ContactItem = ({ item }: Props) => {
  const Icon = item.icon;

  return (
    <motion.a
      whileHover={{ x: 5 }}
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 hover:border-primary/50"
    >
      <Icon className="text-2xl text-primary" />

      <div>
        <h4 className="font-semibold">{item.title}</h4>

        <p className="text-sm text-gray-400">
          {item.value}
        </p>
      </div>
    </motion.a>
  );
};

export default ContactItem;