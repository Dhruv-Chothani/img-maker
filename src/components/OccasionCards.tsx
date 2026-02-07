import { motion } from "framer-motion";
import { type Category, type Occasion } from "@/data/categories";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OccasionCardsProps {
  category: Category;
  language: string;
  onSelect: (occasion: Occasion) => void;
  onBack: () => void;
}

const OccasionCards = ({ category, language, onSelect, onBack }: OccasionCardsProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Categories
          </Button>
          <div className="text-center">
            <span className="text-5xl mb-4 block">{category.icon}</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">
              {category.name[language] || category.name.en}
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose who this wish is for
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {category.occasions.map((occasion, i) => (
            <motion.button
              key={occasion.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              onClick={() => onSelect(occasion)}
              className="group p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-[1.04] hover:border-primary/30 text-center"
            >
              <span className="text-4xl mb-3 block group-hover:animate-float">
                {occasion.emoji}
              </span>
              <h3 className="font-semibold text-base mb-1">
                {occasion.name[language] || occasion.name.en}
              </h3>
              <p className="text-muted-foreground text-xs">
                {occasion.templateCount} templates
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OccasionCards;
