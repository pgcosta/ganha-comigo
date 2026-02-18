import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export const CodeCard = () => {
  const [copied, setCopied] = useState(false);
  const code = "902CCM480";

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
      className="bg-card rounded-2xl shadow-card p-6 md:p-8 text-center glow"
    >
      <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest mb-2">
        O teu código de referência
      </p>
      <div className="flex items-center justify-center gap-3">
        <span className="text-4xl md:text-5xl font-bold text-gradient tracking-wider font-['Fredoka']">
          {code}
        </span>
        <button
          onClick={handleCopy}
          className="p-2 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors"
          aria-label="Copiar código"
        >
          {copied ? (
            <Check className="w-5 h-5 text-primary" />
          ) : (
            <Copy className="w-5 h-5 text-primary" />
          )}
        </button>
      </div>
      {copied && (
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary text-sm mt-2 font-medium"
        >
          Código copiado! 🎉
          Fornece o código ao Montepio
        </motion.p>
      )}
    </motion.div>
  );
};
