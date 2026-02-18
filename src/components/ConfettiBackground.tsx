import { motion } from "framer-motion";

const emojis = ["💰", "🎉", "🏠", "💳", "🎁", "⭐", "🤑", "🎊"];

export const ConfettiBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl md:text-3xl select-none"
          initial={{
            x: `${Math.random() * 100}vw`,
            y: -40,
            rotate: 0,
            opacity: 0.7,
          }}
          animate={{
            y: "110vh",
            rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
            opacity: [0.7, 0.5, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
        >
          {emojis[i % emojis.length]}
        </motion.div>
      ))}
    </div>
  );
};
