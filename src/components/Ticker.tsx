import { motion } from "framer-motion";
import { TICKER_ITEMS } from "@/data/mash";

const Ticker = () => {
  return (
    <motion.div
      initial={{ y: 40 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="fixed bottom-0 w-full h-8 bg-gradient-to-r from-signal via-primary to-signal text-signal-foreground border-t border-grid flex items-center overflow-hidden whitespace-nowrap z-50"
    >
      <div className="flex gap-8 text-[11px] font-display font-bold uppercase tracking-widest animate-ticker">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span key={i} className="flex-shrink-0">● {item}</span>
        ))}
      </div>
    </motion.div>
  );
};

export default Ticker;
