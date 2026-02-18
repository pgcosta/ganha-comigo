import { motion } from "framer-motion";
 
type SlotsAvailabilityProps = {
  availableSlots: number;
  totalSlots?: number;
};

export const SlotsAvailability = ({ availableSlots, totalSlots = 5 }: SlotsAvailabilityProps) => {
  const available = Math.max(0, Math.min(availableSlots, totalSlots));
  const takenSlots = totalSlots - available;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="my-6 bg-white rounded-2xl p-5 shadow-card border border-border"
    >
      <div className="flex items-center justify-between mb-3">
        <p className="font-semibold text-foreground text-sm">Vagas disponíveis</p>
        <span
          className={`text-xs font-bold px-2.5 py-1 rounded-full ${
            available === 0
              ? "bg-destructive/10 text-destructive"
              : available <= 2
              ? "bg-secondary/20 text-secondary-foreground"
              : "bg-primary/10 text-primary"
          }`}
        >
          {available === 0 ? "Esgotado!" : `${available} de ${totalSlots} livres`}
        </span>
      </div>

      <div className="flex gap-2">
        {Array.from({ length: totalSlots }).map((_, i) => {
          const isTaken = i < takenSlots;
          return (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 * i }}
              className="flex-1 flex flex-col items-center gap-1.5"
            >
              <div
                className={`w-full h-10 rounded-xl flex items-center justify-center text-lg transition-all ${
                  isTaken
                    ? "bg-muted text-muted-foreground"
                    : "bg-primary/10 border-2 border-primary/40"
                }`}
              >
                {isTaken ? "🔒" : "✅"}
              </div>
              <span className={`text-[10px] font-medium ${isTaken ? "text-muted-foreground" : "text-primary"}`}>
                {isTaken ? "Ocupada" : "Livre"}
              </span>
            </motion.div>
          );
        })}
      </div>

      {available > 0 && (
        <p className="text-xs text-muted-foreground text-center mt-3">
          🔥 Rápido! Só posso recomendar <strong className="text-foreground">5 amigos</strong> no total.
        </p>
      )}
    </motion.div>
  );
};