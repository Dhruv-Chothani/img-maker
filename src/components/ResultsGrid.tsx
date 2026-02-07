import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Share2, ArrowLeft, CheckCircle, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import JSZip from "jszip";
import { saveAs } from "file-saver";

interface ResultsGridProps {
  images: string[];
  userName: string;
  onBack: () => void;
  onStartOver: () => void;
}

const ResultsGrid = ({ images, userName, onBack, onStartOver }: ResultsGridProps) => {
  const [downloading, setDownloading] = useState(false);

  const downloadSingle = (dataUrl: string, index: number) => {
    const link = document.createElement("a");
    link.download = `wish-${userName}-${index + 1}.png`;
    link.href = dataUrl;
    link.click();
  };

  const downloadAll = async () => {
    setDownloading(true);
    try {
      const zip = new JSZip();
      images.forEach((dataUrl, i) => {
        const base64 = dataUrl.split(",")[1];
        zip.file(`wish-${userName}-${i + 1}.png`, base64, { base64: true });
      });
      const blob = await zip.generateAsync({ type: "blob" });
      saveAs(blob, `wishes-${userName}.zip`);
    } finally {
      setDownloading(false);
    }
  };

  const shareImage = async (dataUrl: string, index: number) => {
    try {
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      const file = new File([blob], `wish-${userName}-${index + 1}.png`, {
        type: "image/png",
      });
      if (navigator.share) {
        await navigator.share({ files: [file], title: `Wish for ${userName}` });
      } else {
        downloadSingle(dataUrl, index);
      }
    } catch {
      downloadSingle(dataUrl, index);
    }
  };

  return (
    <section className="min-h-screen px-4 py-16">
      <div className="max-w-5xl mx-auto">
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
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4"
            >
              <CheckCircle className="w-8 h-8 text-secondary" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-2">
              Your Wishes Are Ready! 🎉
            </h2>
            <p className="text-muted-foreground text-lg">
              {images.length} personalized images for {userName}
            </p>
          </div>

          {/* Global Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <Button
              onClick={downloadAll}
              disabled={downloading}
              className="gradient-warm text-primary-foreground shadow-warm hover:opacity-90 rounded-xl px-6"
            >
              <Package className="w-4 h-4 mr-2" />
              {downloading ? "Zipping..." : "Download All (ZIP)"}
            </Button>
            <Button
              variant="outline"
              onClick={onStartOver}
              className="rounded-xl px-6"
            >
              Create Another Wish
            </Button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 bg-card border border-border"
              >
                <img
                  src={img}
                  alt={`Wish ${i + 1}`}
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <button
                      onClick={() => downloadSingle(img, i)}
                      className="w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors shadow-card"
                    >
                      <Download className="w-4 h-4 text-foreground" />
                    </button>
                    <button
                      onClick={() => shareImage(img, i)}
                      className="w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors shadow-card"
                    >
                      <Share2 className="w-4 h-4 text-foreground" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Thank you */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16 py-12 border-t border-border"
          >
            <p className="text-xl font-display font-semibold mb-2">
              Thank you for using WishCraft! ✨
            </p>
            <p className="text-muted-foreground">
              Share the joy with your loved ones
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsGrid;
