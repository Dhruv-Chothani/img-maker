import { motion } from "framer-motion";
import { categories, type Category } from "@/data/categories";
import { ChevronRight } from "lucide-react";

interface CategoryGridProps {
  language: string;
  onSelect: (category: Category) => void;
}

const CategoryGrid = ({ language, onSelect }: CategoryGridProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">
            What's the Occasion?
          </h2>
          <p className="text-muted-foreground text-lg">
            Pick a category to find the perfect templates
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => onSelect(cat)}
              className="group relative overflow-hidden rounded-2xl p-6 text-left bg-card shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-[1.03] border border-border"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${cat.color}`} />
              <div className="relative z-10">
                <span className="text-4xl mb-4 block">{cat.icon}</span>
                <h3 className="font-bold text-xl mb-1 font-display">
                  {cat.name[language] || cat.name.en}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {cat.occasions.length} occasions
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Explore <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
