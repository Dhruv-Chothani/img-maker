import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary-foreground/10"
            style={{
              width: 8 + (i % 5) * 12,
              height: 8 + (i % 5) * 12,
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/15 backdrop-blur-sm mb-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Sparkles className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">
              Create personalized wishes in seconds
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 font-display leading-tight">
            WishCraft
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-4 font-light">
            Bulk personalized images for every occasion
          </p>
          <p className="text-base text-primary-foreground/60 mb-10 max-w-lg mx-auto">
            Choose an occasion, upload a photo, enter a name — get 10-15 beautiful personalized images ready to share
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={onGetStarted}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-10 py-6 rounded-full font-semibold shadow-elevated transition-all hover:scale-105"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Create Your Wish
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 flex items-center justify-center gap-8 text-primary-foreground/50 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span>🎂 Birthdays</span>
            <span>🪔 Festivals</span>
            <span>❤️ Love</span>
            <span>🙏 Religious</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
