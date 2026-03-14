import { motion } from "framer-motion";
import BroadcastCard from "./BroadcastCard";
import broadcast02 from "@/assets/broadcast-02.jpg";
import broadcast03 from "@/assets/broadcast-03.jpg";
import broadcast04 from "@/assets/broadcast-04.jpg";
import broadcast05 from "@/assets/broadcast-05.jpg";
import broadcast06 from "@/assets/broadcast-06.jpg";

const PROGRAMS = [
  { title: "DJ SET — KALINE B2B OMAR", category: "ELECTRONIC", time: "23:00", image: broadcast02, isLive: false },
  { title: "INSTALLATION SONORE N°12", category: "VISUAL ART", time: "18:00", image: broadcast03, isLive: false },
  { title: "CONCRETE WAVES LIVE", category: "ROCK", time: "21:30", image: broadcast04, isLive: true },
  { title: "MURAL SESSION — BLOC C", category: "STREET ART", time: "14:00", image: broadcast05, isLive: false },
  { title: "MODULAR SYNTHESIS LAB", category: "WORKSHOP", time: "16:00", image: broadcast06, isLive: false },
];

const filters = ["ALL", "MUSIC", "VISUAL", "TALK"];

const ProgramGrid = () => {
  return (
    <section>
      {/* Section header */}
      <div className="border-b border-grid p-3 flex justify-between items-center">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-[10px] uppercase tracking-widest text-muted-foreground"
        >
          PROGRAMME — ARCHIVE
        </motion.h2>
        <div className="flex gap-0">
          {filters.map((filter, i) => (
            <motion.button
              key={filter}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.05 }}
              whileHover={{
                backgroundColor: "hsl(196, 61%, 37%)",
                color: "hsl(0, 0%, 100%)",
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              className="font-display text-[10px] uppercase tracking-widest px-3 py-1 border border-grid transition-all duration-200"
            >
              {filter}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3">
        {PROGRAMS.map((program, i) => (
          <BroadcastCard key={program.title} {...program} index={i} />
        ))}
        {/* CTA cell */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ backgroundColor: "hsl(196, 61%, 37%)" }}
          className="border-r border-b border-grid flex items-center justify-center p-8 cursor-pointer transition-colors duration-500 group"
        >
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="font-display text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-primary-foreground transition-colors"
          >
            [ ACCESS SIGNAL → ]
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramGrid;
