const TICKER_ITEMS = [
  "TRANSMISSION 042 — LIVE FROM THE ARCHIVE",
  "NEXT EVENT: 22.03.2026 — WAREHOUSE SESSION",
  "NEW RESIDENCY: DJ KALINE × MASH",
  "OPEN CALL FOR ARTISTS — DEADLINE 01.04.2026",
  "RADIO BROADCAST EVERY FRIDAY 22H-02H",
  "MASH COLLECTIVE — CULTURE IS THE SIGNAL",
];

const Ticker = () => {
  return (
    <div className="fixed bottom-0 w-full h-8 bg-signal text-signal-foreground border-t border-grid flex items-center overflow-hidden whitespace-nowrap z-50">
      <div className="flex gap-8 text-[11px] font-display font-bold uppercase tracking-widest animate-ticker">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span key={i} className="flex-shrink-0">● {item}</span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
