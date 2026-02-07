import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import LanguageSelector from "@/components/LanguageSelector";
import CategoryGrid from "@/components/CategoryGrid";
import OccasionCards from "@/components/OccasionCards";
import PersonalizationForm from "@/components/PersonalizationForm";
import ResultsGrid from "@/components/ResultsGrid";
import { type Language, type Category, type Occasion, getTemplatesForOccasion } from "@/data/categories";
import { generateImage } from "@/lib/imageGenerator";

type Step = "hero" | "language" | "category" | "occasion" | "personalize" | "results";

const StepIndicator = ({ current, total }: { current: number; total: number }) => (
  <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-card/80 backdrop-blur-md px-4 py-2 rounded-full shadow-card border border-border">
    {Array.from({ length: total }).map((_, i) => (
      <div
        key={i}
        className={`h-2 rounded-full transition-all duration-300 ${
          i <= current ? "w-8 gradient-warm" : "w-2 bg-border"
        }`}
      />
    ))}
  </div>
);

const Index = () => {
  const [step, setStep] = useState<Step>("hero");
  const [language, setLanguage] = useState("en");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedOccasion, setSelectedOccasion] = useState<Occasion | null>(null);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [userName, setUserName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const stepOrder: Step[] = ["hero", "language", "category", "occasion", "personalize", "results"];
  const currentIndex = stepOrder.indexOf(step);

  const handleGenerate = async (image: string, name: string) => {
    if (!selectedOccasion) return;
    setIsGenerating(true);
    setUserName(name);

    try {
      const templates = getTemplatesForOccasion(selectedOccasion.id);
      const results: string[] = [];

      for (let i = 0; i < templates.length; i++) {
        const result = await generateImage(templates[i], image, name, i);
        results.push(result);
      }

      setGeneratedImages(results);
      setStep("results");
    } catch (error) {
      console.error("Generation failed:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const startOver = () => {
    setStep("language");
    setSelectedCategory(null);
    setSelectedOccasion(null);
    setGeneratedImages([]);
    setUserName("");
  };

  return (
    <div className="min-h-screen bg-background">
      {step !== "hero" && step !== "results" && (
        <StepIndicator current={currentIndex - 1} total={4} />
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3 }}
        >
          {step === "hero" && (
            <HeroSection onGetStarted={() => setStep("language")} />
          )}

          {step === "language" && (
            <LanguageSelector
              selectedLanguage={language}
              onSelect={(lang: Language) => {
                setLanguage(lang.code);
                setStep("category");
              }}
            />
          )}

          {step === "category" && (
            <CategoryGrid
              language={language}
              onSelect={(cat: Category) => {
                setSelectedCategory(cat);
                setStep("occasion");
              }}
            />
          )}

          {step === "occasion" && selectedCategory && (
            <OccasionCards
              category={selectedCategory}
              language={language}
              onSelect={(occasion: Occasion) => {
                setSelectedOccasion(occasion);
                setStep("personalize");
              }}
              onBack={() => setStep("category")}
            />
          )}

          {step === "personalize" && selectedOccasion && (
            <PersonalizationForm
              occasion={selectedOccasion}
              language={language}
              onGenerate={handleGenerate}
              onBack={() => setStep("occasion")}
              isGenerating={isGenerating}
            />
          )}

          {step === "results" && (
            <ResultsGrid
              images={generatedImages}
              userName={userName}
              onBack={() => setStep("personalize")}
              onStartOver={startOver}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Index;
