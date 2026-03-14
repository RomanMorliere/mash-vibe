import mashLogo from "@/assets/mash_logo.svg";

const SiteHeader = () => {
  return (
    <header className="border-b border-grid">
      <div className="grid grid-cols-12">
        {/* Logo */}
        <div className="col-span-3 border-r border-grid p-3 flex items-center">
          <img src={mashLogo} alt="MASH" className="h-8 invert" />
        </div>

        {/* Nav */}
        <nav className="col-span-6 border-r border-grid flex items-center">
          {["PROGRAMME", "ARCHIVE", "ABOUT", "CONTACT"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-display text-[10px] uppercase tracking-widest px-4 py-3 border-r border-grid hover:bg-foreground hover:text-background transition-colors duration-200 h-full flex items-center"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Live indicator */}
        <div className="col-span-3 flex items-center justify-end p-3 gap-2">
          <span className="inline-block w-2 h-2 bg-signal animate-pulse" />
          <span className="font-display text-[10px] uppercase tracking-widest text-signal">
            LIVE
          </span>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
