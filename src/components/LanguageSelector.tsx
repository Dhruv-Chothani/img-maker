import { motion } from "framer-motion";
import { languages, type Language } from "@/data/categories";
import { Globe } from "lucide-react";

interface LanguageSelectorProps {
  selectedLanguage: string;
  onSelect: (lang: Language) => void;
}

const LanguageSelector = ({ selectedLanguage, onSelect }: LanguageSelectorProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-warm mb-6">
            <Globe className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">
            Choose Your Language
          </h2>
          <p className="text-muted-foreground text-lg">
            Select a language to personalize your experience
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {languages.map((lang, i) => (
            <motion.button
              key={lang.code}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              onClick={() => onSelect(lang)}
              className={`relative p-6 rounded-2xl border-2 transition-all duration-300 text-left group hover:scale-[1.02] ${
                selectedLanguage === lang.code
                  ? "border-primary bg-primary/5 shadow-warm"
                  : "border-border bg-card hover:border-primary/40 shadow-card"
              }`}
            >
              <span className="text-3xl mb-3 block">{lang.flag}</span>
              <h3 className="font-semibold text-lg">{lang.name}</h3>
              <p className="text-muted-foreground text-sm">{lang.nativeName}</p>
              {selectedLanguage === lang.code && (
                <motion.div
                  layoutId="langCheck"
                  className="absolute top-3 right-3 w-6 h-6 rounded-full gradient-warm flex items-center justify-center"
                >
                  <span className="text-primary-foreground text-xs">✓</span>
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageSelector;
