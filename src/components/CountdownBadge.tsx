import { motion } from "framer-motion";
import { Clock, Users } from "lucide-react";

export const CountdownBadge = () => (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.1 }}
    className="flex flex-wrap justify-center gap-3 mb-8"
  >
    <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm">
      <Clock className="w-4 h-4" />
      Faltam 41 dias
    </span>
    <span className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground font-semibold px-4 py-2 rounded-full text-sm">
      <Users className="w-4 h-4" />
      Apenas 5 vagas!
    </span>
  </motion.div>
);
