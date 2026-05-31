import { motion } from "motion/react";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ivory pt-20 px-6">
      <div className="absolute inset-0 manuscript-overlay opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-sandalwood/20 via-transparent to-ivory/50" />
      
      {/* Decorative Moon Phases */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
        className="absolute top-[15%] left-1/2 -translate-x-1/2 flex gap-8 items-center text-terracotta/20 pointer-events-none"
      >
        <div className="w-12 h-12 rounded-full border border-current" />
        <div className="w-12 h-12 rounded-full border border-current overflow-hidden relative">
           <div className="absolute inset-0 bg-current translate-x-1/2" />
        </div>
        <div className="w-16 h-16 rounded-full bg-current" />
        <div className="w-12 h-12 rounded-full border border-current overflow-hidden relative">
           <div className="absolute inset-0 bg-current -translate-x-1/2" />
        </div>
        <div className="w-12 h-12 rounded-full border border-current" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl mt-12"
      >
        <span className="font-sans tracking-[0.3em] uppercase text-xs text-stone mb-6 block font-medium">
          Ancient Wisdom & Modern Relevance
        </span>
        <h1 className="font-display text-7xl md:text-9xl text-stone mb-8 tracking-tighter leading-none">
          Rajaswala <br />
          <span className="italic font-serif text-terracotta border-b border-terracotta/20">Paricharya</span>
        </h1>
        <p className="font-serif text-xl md:text-2xl text-stone max-w-2xl mx-auto italic leading-relaxed text-balance mb-24">
          "Ancient Wisdom, Menstrual Health, Cultural Stigma & Modern Relevance"
        </p>
      </motion.div>

      {/* Scroll indicator removed per user request */}
    </section>
  );
};
