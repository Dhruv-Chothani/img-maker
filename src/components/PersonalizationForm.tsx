import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, User, ImageIcon, Sparkles, ArrowLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type Occasion } from "@/data/categories";

interface PersonalizationFormProps {
  occasion: Occasion;
  language: string;
  onGenerate: (image: string, name: string) => void;
  onBack: () => void;
  isGenerating: boolean;
}

const PersonalizationForm = ({
  occasion,
  language,
  onGenerate,
  onBack,
  isGenerating,
}: PersonalizationFormProps) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<{ image?: string; name?: string }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!validTypes.includes(file.type)) {
      setErrors((prev) => ({ ...prev, image: "Please upload JPG, PNG, or WEBP" }));
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, image: "Image must be under 10MB" }));
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => {
      setUploadedImage(ev.target?.result as string);
      setErrors((prev) => ({ ...prev, image: undefined }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    const newErrors: typeof errors = {};
    if (!uploadedImage) newErrors.image = "Please upload an image";
    if (name.trim().length < 2) newErrors.name = "Name must be at least 2 characters";
    if (name.trim().length > 20) newErrors.name = "Name must be 20 characters or less";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onGenerate(uploadedImage!, name.trim());
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>

          <div className="text-center mb-10">
            <span className="text-5xl mb-4 block">{occasion.emoji}</span>
            <h2 className="text-3xl font-bold font-display mb-2">
              Personalize Your Wish
            </h2>
            <p className="text-muted-foreground">
              {occasion.name[language] || occasion.name.en} — {occasion.templateCount} templates
            </p>
          </div>

          {/* Upload Area */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              <ImageIcon className="w-4 h-4 inline mr-1" /> Photo
            </label>
            {uploadedImage ? (
              <div className="relative w-full aspect-square max-w-[200px] mx-auto rounded-2xl overflow-hidden border-2 border-primary/20 shadow-card">
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => {
                    setUploadedImage(null);
                    if (fileInputRef.current) fileInputRef.current.value = "";
                  }}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-foreground/80 flex items-center justify-center text-background hover:bg-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full p-10 rounded-2xl border-2 border-dashed border-border hover:border-primary/40 bg-muted/50 transition-all duration-300 group hover:bg-primary/5"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Upload className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Upload your photo</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      JPG, PNG, or WEBP
                    </p>
                  </div>
                </div>
              </button>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleImageUpload}
              className="hidden"
            />
            {errors.image && (
              <p className="text-destructive text-sm mt-2">{errors.image}</p>
            )}
          </div>

          {/* Name Input */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-2">
              <User className="w-4 h-4 inline mr-1" /> Name
            </label>
            <Input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors((prev) => ({ ...prev, name: undefined }));
              }}
              placeholder="Enter the person's name"
              className="h-12 rounded-xl text-base"
              maxLength={20}
            />
            <div className="flex justify-between mt-1">
              {errors.name ? (
                <p className="text-destructive text-sm">{errors.name}</p>
              ) : (
                <span />
              )}
              <span className="text-muted-foreground text-xs">
                {name.length}/20
              </span>
            </div>
          </div>

          {/* Generate Button */}
          <Button
            onClick={handleSubmit}
            disabled={isGenerating}
            className="w-full h-14 rounded-xl text-lg font-semibold gradient-warm text-primary-foreground shadow-warm hover:opacity-90 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:scale-100"
          >
            {isGenerating ? (
              <motion.div
                className="flex items-center gap-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5" />
                Generating {occasion.templateCount} images...
              </motion.div>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                Generate My Images
              </>
            )}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalizationForm;
