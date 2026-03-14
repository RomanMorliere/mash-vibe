import { motion } from "framer-motion";
import heroImg from "@/assets/broadcast-01.jpg";

const TRANSITION = { duration: 0.6, ease: [0.19, 1, 0.22, 1] };

const HeroSection = () => {
  return (
    <div className="grid grid-cols-12 border-b border-grid">
      {/* Main hero */}
      <div className="col-span-8 border-r border-grid relative overflow-hidden group cursor-pointer">
        <div className="absolute top-0 left-0 z-10 flex items-center gap-2 p-3">
          <span className="inline-block w-2 h-2 bg-signal animate-pulse" />
          <span className="font-display text-[10px] uppercase tracking-widest text-signal">
            LIVE NOW
          </span>
        </div>
        <motion.img
          whileHover={{ scale: 1.03 }}
          transition={TRANSITION}
          src={heroImg}
          alt="Live broadcast"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 aspect-[16/7]"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 group-hover:bg-foreground group-hover:text-background transition-colors duration-200">
          <p className="font-display text-[10px] uppercase tracking-widest text-secondary mb-1 group-hover:text-background/60">
            TRANSMISSION 042
          </p>
          <h2 className="font-display text-4xl uppercase tracking-tighter leading-none">
            LIVE FROM THE ARCHIVE
          </h2>
        </div>
      </div>

      {/* Side info */}
      <div className="col-span-4 flex flex-col">
        <div className="border-b border-grid p-4 flex-1">
          <p className="font-display text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
            PROCHAINS EVENTS
          </p>
          <ul className="space-y-3">
            {[
              { date: "22.03", title: "WAREHOUSE SESSION VOL.8", tag: "TECHNO" },
              { date: "29.03", title: "OPEN MIC × MASH", tag: "HIP-HOP" },
              { date: "05.04", title: "ART BRUT EXPOSITION", tag: "VISUAL" },
              { date: "12.04", title: "FREQUENCY NIGHTS", tag: "ELECTRONIC" },
            ].map((evt) => (
              <li key={evt.date} className="group/evt cursor-pointer">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-[10px] tabular-nums text-primary">
                    {evt.date}
                  </span>
                  <span className="font-display text-[10px] uppercase tracking-widest text-accent">
                    {evt.tag}
                  </span>
                </div>
                <p className="font-display text-sm uppercase tracking-tight leading-tight group-hover/evt:text-primary transition-colors">
                  {evt.title}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4">
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
              className="flex-1 bg-muted border border-grid px-3 py-2 font-display text-[10px] uppercase tracking-widest text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
            />
            <button className="bg-signal text-signal-foreground px-4 py-2 font-display text-[10px] uppercase tracking-widest hover:bg-primary transition-colors">
              [ OK ]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
