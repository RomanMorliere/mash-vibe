import { motion } from "framer-motion";

const TRANSITION = { duration: 0.4, ease: [0.19, 1, 0.22, 1] };

interface BroadcastCardProps {
  title: string;
  category: string;
  time: string;
  image: string;
  isLive?: boolean;
}

const BroadcastCard = ({ title, category, time, image, isLive }: BroadcastCardProps) => {
  return (
    <motion.div
      whileHover="hover"
      className="group relative flex flex-col border-r border-b border-grid overflow-hidden cursor-pointer"
    >
      {/* Metadata Header */}
      <div className="flex justify-between p-2 text-[10px] uppercase tracking-widest font-display border-b border-grid z-10">
        <span className="text-secondary">{category}</span>
        <div className="flex items-center gap-2">
          {isLive && (
            <>
              <span className="inline-block w-1.5 h-1.5 bg-signal animate-pulse" />
              <span className="text-signal">LIVE</span>
            </>
          )}
          <span className="tabular-nums text-muted-foreground">{time}</span>
        </div>
      </div>

      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <motion.img
          variants={{ hover: { scale: 1.05 } }}
          transition={TRANSITION}
          src={image}
          alt={title}
          className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <motion.div
          variants={{ hover: { opacity: 0.4 } }}
          initial={{ opacity: 0 }}
          transition={TRANSITION}
          className="absolute inset-0 bg-primary mix-blend-multiply"
        />
      </div>

      {/* Title */}
      <div className="p-3 group-hover:bg-foreground group-hover:text-background transition-colors duration-200">
        <h3 className="text-lg font-display leading-none uppercase tracking-tighter">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

export default BroadcastCard;
