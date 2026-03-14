import { motion } from "framer-motion";

const TRANSITION = { duration: 0.5, ease: [0.19, 1, 0.22, 1] as const };

interface BroadcastCardProps {
  title: string;
  category: string;
  time: string;
  image: string;
  isLive?: boolean;
  index?: number;
}

const BroadcastCard = ({ title, category, time, image, isLive, index = 0 }: BroadcastCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      whileHover="hover"
      className="group relative flex flex-col border-r border-b border-grid overflow-hidden cursor-pointer"
    >
      {/* Metadata Header */}
      <div className="flex justify-between p-2 text-[10px] uppercase tracking-widest font-display border-b border-grid z-10">
        <motion.span
          whileHover={{ color: "hsl(35, 73%, 88%)" }}
          className="text-secondary transition-colors"
        >
          {category}
        </motion.span>
        <div className="flex items-center gap-2">
          {isLive && (
            <>
              <motion.span
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="inline-block w-1.5 h-1.5 bg-signal rounded-full"
              />
              <span className="text-signal">LIVE</span>
            </>
          )}
          <span className="tabular-nums text-muted-foreground">{time}</span>
        </div>
      </div>

      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <motion.img
          variants={{ hover: { scale: 1.08 } }}
          transition={TRANSITION}
          src={image}
          alt={title}
          className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        {/* Color wash on hover */}
        <motion.div
          variants={{ hover: { opacity: 0.3 } }}
          initial={{ opacity: 0 }}
          transition={TRANSITION}
          className="absolute inset-0 bg-gradient-to-br from-primary via-accent/30 to-signal/20 mix-blend-multiply"
        />
      </div>

      {/* Title */}
      <motion.div
        variants={{
          hover: { backgroundColor: "hsl(196, 61%, 37%)", color: "hsl(0, 0%, 100%)" }
        }}
        transition={{ duration: 0.3 }}
        className="p-3 transition-colors duration-300"
      >
        <h3 className="text-lg font-display leading-none uppercase tracking-tighter">
          {title}
        </h3>
      </motion.div>
    </motion.div>
  );
};

export default BroadcastCard;
