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

const ProgramGrid = () => {
  return (
    <section>
      {/* Section header */}
      <div className="border-b border-grid p-3 flex justify-between items-center">
        <h2 className="font-display text-[10px] uppercase tracking-widest text-muted-foreground">
          PROGRAMME — ARCHIVE
        </h2>
        <div className="flex gap-0">
          {["ALL", "MUSIC", "VISUAL", "TALK"].map((filter) => (
            <button
              key={filter}
              className="font-display text-[10px] uppercase tracking-widest px-3 py-1 border border-grid hover:bg-foreground hover:text-background transition-colors duration-200"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3">
        {PROGRAMS.map((program) => (
          <BroadcastCard key={program.title} {...program} />
        ))}
        {/* Empty cell to complete grid */}
        <div className="border-r border-b border-grid flex items-center justify-center p-8">
          <span className="font-display text-[10px] uppercase tracking-widest text-muted-foreground">
            [ ACCESS SIGNAL → ]
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProgramGrid;
