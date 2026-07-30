import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <div className="relative">
        <div className="absolute -inset-5 rounded-full bg-blue-500 blur-3xl opacity-20"></div>

        <img
          src="/profile-placeholder.png"
          alt="Avadhuta Jahnavi"
          className="relative w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full object-cover border-8 border-white shadow-2xl"
        />
      </div>
    </motion.div>
  );
};

export default HeroImage;