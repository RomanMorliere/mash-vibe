import { motion } from "framer-motion";
import mashLogo from "@/assets/mash_logo.svg";
import { NAV_ITEMS } from "@/data/mash";

const SiteHeader = () => {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      className="border-b border-grid sticky top-0 z-50 bg-background/80 backdrop-blur-md"
    >
      <div className="grid grid-cols-12">
        {/* Logo */}
        <div className="col-span-3 border-r border-grid p-3 flex items-center">
          <motion.img
            src={mashLogo}
            alt="MASH"
            className="h-8 invert"
            whileHover={{ scale: 1.1, rotate: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          />
        </div>

        {/* Nav */}
        <nav className="col-span-6 border-r border-grid flex items-center">
          {NAV_ITEMS.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              whileHover={{ backgroundColor: "hsl(196, 61%, 37%)", color: "hsl(0, 0%, 100%)" }}
              className="font-display text-[10px] uppercase tracking-widest px-4 py-3 border-r border-grid h-full flex items-center transition-colors duration-200"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Status */}
        <div className="col-span-3 flex items-center justify-end p-3 gap-2">
          <motion.span
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="inline-block w-2.5 h-2.5 bg-signal rounded-full glow-signal"
          />
          <span className="font-display text-[10px] uppercase tracking-widest text-signal">
            MASH ONLINE
          </span>
        </div>
      </div>
    </motion.header>
  );
};

export default SiteHeader;
