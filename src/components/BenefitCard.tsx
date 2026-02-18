import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface BenefitCardProps {
  icon: string;
  title: string;
  children: ReactNode;
  delay?: number;
}

export const BenefitCard = ({ icon, title, children, delay = 0 }: BenefitCardProps) => (
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-card rounded-2xl shadow-card p-6 md:p-8"
  >
    <div className="text-4xl mb-3">{icon}</div>
    <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
    <div className="text-muted-foreground leading-relaxed">{children}</div>
  </motion.div>
);
