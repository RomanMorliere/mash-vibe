import { motion } from "framer-motion";
import BroadcastCard from "./BroadcastCard";
import { CONTACT, PROGRAMS, PROGRAM_FILTERS } from "@/data/mash";

const ProgramGrid = () => {
  return (
    <section id="events">
      {/* Section header */}
      <div className="border-b border-grid p-3 flex justify-between items-center">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-[10px] uppercase tracking-widest text-muted-foreground"
        >
          MASH PROGRAMME
        </motion.h2>
        <div className="flex gap-0">
          {PROGRAM_FILTERS.map((filter, i) => (
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

      <div id="artists" />

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
          className="border-r border-b border-grid flex items-center justify-center p-8 transition-colors duration-500 group"
        >
          <a
            href={`mailto:${CONTACT.email}`}
            className="font-display text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-primary-foreground transition-colors"
          >
            [ BOOK MASH → ]
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramGrid;
