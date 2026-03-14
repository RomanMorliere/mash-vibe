import { motion } from "framer-motion";
import heroImg from "@/assets/broadcast-01.jpg";

const TRANSITION = { duration: 0.8, ease: [0.19, 1, 0.22, 1] as const };

const events = [
  { date: "22.03", title: "WAREHOUSE SESSION VOL.8", tag: "TECHNO" },
  { date: "29.03", title: "OPEN MIC × MASH", tag: "HIP-HOP" },
  { date: "05.04", title: "ART BRUT EXPOSITION", tag: "VISUAL" },
  { date: "12.04", title: "FREQUENCY NIGHTS", tag: "ELECTRONIC" },
];

const HeroSection = () => {
  return (
    <div className="grid grid-cols-12 border-b border-grid">
      {/* Main hero */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        className="col-span-8 border-r border-grid relative overflow-hidden group cursor-pointer"
      >
        <div className="absolute top-0 left-0 z-10 flex items-center gap-2 p-3">
          <motion.span
            animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="inline-block w-2.5 h-2.5 bg-signal rounded-full glow-signal"
          />
          <span className="font-display text-[10px] uppercase tracking-widest text-signal">
            LIVE NOW
          </span>
        </div>
        <motion.img
          whileHover={{ scale: 1.06 }}
          transition={TRANSITION}
          src={heroImg}
          alt="Live broadcast"
          className="w-full h-full object-cover transition-all duration-700 aspect-[16/7]"
        />
        {/* Color overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60" />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 mix-blend-overlay" />

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, ...TRANSITION }}
          className="absolute bottom-0 left-0 right-0 p-5"
        >
          <p className="font-display text-[10px] uppercase tracking-widest text-accent mb-1">
            TRANSMISSION 042
          </p>
          <h2 className="font-display text-5xl uppercase tracking-tighter leading-none text-gradient">
            LIVE FROM THE ARCHIVE
          </h2>
        </motion.div>
      </motion.div>

      {/* Side info */}
      <div className="col-span-4 flex flex-col">
        <div className="border-b border-grid p-4 flex-1">
          <p className="font-display text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
            PROCHAINS EVENTS
          </p>
          <ul className="space-y-3">
            {events.map((evt, i) => (
              <motion.li
                key={evt.date}
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.1, ...TRANSITION }}
                whileHover={{ x: 6 }}
                className="group/evt cursor-pointer"
              >
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-[10px] tabular-nums text-primary">
                    {evt.date}
                  </span>
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="font-display text-[10px] uppercase tracking-widest text-accent bg-accent/10 px-1"
                  >
                    {evt.tag}
                  </motion.span>
                </div>
                <p className="font-display text-sm uppercase tracking-tight leading-tight group-hover/evt:text-primary transition-colors duration-300">
                  {evt.title}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="p-4"
        >
          <p className="font-display text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
            NEWSLETTER
          </p>
          <p className="font-body text-xs text-muted-foreground mb-3">
            Reçois le signal directement.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="EMAIL"
              className="flex-1 bg-muted border border-grid px-3 py-2 font-display text-[10px] uppercase tracking-widest text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:glow-primary transition-shadow duration-300"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-signal text-signal-foreground px-4 py-2 font-display text-[10px] uppercase tracking-widest hover:bg-primary glow-signal hover:glow-primary transition-all duration-300"
            >
              [ OK ]
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
