import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Timeline } from "./components/Timeline";
import { ErasExhibition } from "./components/ErasExhibition";
import { Ashaucha } from "./components/Ashaucha";
import { Energetics } from "./components/Energetics";
import { Biomedical } from "./components/Biomedical";
import { Stigma } from "./components/Stigma";
import { SomaticDialogue } from "./components/SomaticDialogue";
import { ModernApplication } from "./components/ModernApplication";
import { References } from "./components/References";
import { Conclusion } from "./components/Conclusion";
import { 
  Menu, X
} from "lucide-react";

type SectionTab = 
  | "hero" 
  | "intro" 
  | "timeline" 
  | "eras-exhibition" 
  | "ashaucha" 
  | "energetics" 
  | "biomedical" 
  | "stigma" 
  | "taboo-deconstruction-chamber" 
  | "self-care" 
  | "research-archive";

const TAB_TARGET_IDS: Record<SectionTab, string> = {
  hero: "hero",
  intro: "intro",
  timeline: "timeline",
  "eras-exhibition": "eras-exhibition",
  ashaucha: "ashaucha",
  energetics: "energetics",
  biomedical: "biomedical",
  stigma: "stigma",
  "taboo-deconstruction-chamber": "taboo-deconstruction-chamber",
  "self-care": "self-care",
  "research-archive": "research-archive"
};

const TAB_SECTIONS: { id: SectionTab; elementId: string }[] = [
  { id: "hero", elementId: "hero" },
  { id: "intro", elementId: "intro" },
  { id: "timeline", elementId: "timeline" },
  { id: "eras-exhibition", elementId: "eras-exhibition" },
  { id: "energetics", elementId: "energetics" },
  { id: "ashaucha", elementId: "ashaucha" },
  { id: "stigma", elementId: "stigma" },
  { id: "taboo-deconstruction-chamber", elementId: "taboo-deconstruction-chamber" },
  { id: "biomedical", elementId: "biomedical" },
  { id: "self-care", elementId: "self-care" },
  { id: "research-archive", elementId: "research-archive" }
];

function NavigationHeader({ activeTab, setActiveTab }: { activeTab: SectionTab; setActiveTab: (tab: SectionTab) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "intro", num: "01", short: "Chapter I", title: "When Rest Became Restriction", desc: "Scientific and cultural roots of historic practices." },
    { id: "timeline", num: "02", short: "Chapter II", title: "Evolution of Vedic Beliefs", desc: "How sacred naturalism evolved into social limits." },
    { id: "eras-exhibition", num: "03", short: "Chapter III", title: "The Blood of the Cosmos", desc: "Understanding how beliefs changed from early agrarian cycles to later strict laws." },
    { id: "energetics", num: "04", short: "Chapter IV", title: "The Yogic Framework", desc: "The physical and energetic flow of apana vayu in yoga." },
    { id: "ashaucha", num: "05", short: "Chapter V", title: "The Meaning of 'Ashaucha'", desc: "The ancient concept of withdrawal versus social exclusion." },
    { id: "stigma", num: "06", short: "Chapter VI", title: "How Care Became Stigma", desc: "The transition from respectful care to rigid restrictions." },
    { id: "taboo-deconstruction-chamber", num: "07", short: "Chapter VII", title: "Deconstructing Taboos", desc: "Debunking common misconceptions with facts." },
    { id: "biomedical", num: "08", short: "Chapter VIII", title: "Ayurveda Meets Physiology", desc: "Correlating traditional knowledge with modern medicine." },
    { id: "self-care", num: "09", short: "Chapter IX", title: "Modern Application", desc: "Self-care practices, facts, and leaving shame behind." },
    { id: "research-archive", num: "10", short: "Chapter X", title: "Core Research Bibliography", desc: "Primary translations, documents, and references." },
  ] as const;

  const handleTabSelection = (tab: SectionTab) => {
    setActiveTab(tab);
    setMenuOpen(false);
    const targetId = TAB_TARGET_IDS[tab];
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (tab === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-[#FAF9F6]/95 backdrop-blur-md shadow-soft border-b border-stone/5 py-2" : "bg-transparent py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
          
          {/* Editorial Brand Logo */}
          <div 
            onClick={() => handleTabSelection("hero")} 
            className="flex flex-col cursor-pointer select-none group flex-shrink-0"
          >
            <span className="font-display font-medium text-stone tracking-wide text-xs sm:text-md md:text-lg group-hover:text-terracotta transition-colors uppercase font-bold">
              Rajaswala Paricharya
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-stone/40 font-mono">
              Ancient Wisdom & Modern Science
            </span>
          </div>

          {/* New Universal Menu Button at top-right corner */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-stone hover:bg-stone/90 text-white rounded-sm transition-all duration-300 shadow-sm cursor-pointer select-none border border-stone"
            aria-label="Open Chapter Index Drawer"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] hidden sm:inline-block font-bold">
              Chapter Index
            </span>
            <Menu size={16} className="text-[#d4af37]" />
          </button>
        </div>
      </header>

      {/* Slide-out Panel Overlay & Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Darkened subtle backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-stone/50 backdrop-blur-sm z-50 cursor-pointer"
            />

            {/* Right-aligned Premium Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="fixed top-0 right-0 h-screen w-full sm:w-[480px] md:w-[540px] bg-[#FAF9F6] border-l border-stone/10 shadow-2xl z-50 flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-6 md:p-8 border-b border-stone/10 bg-white flex items-center justify-between">
                <div>
                  <h3 className="font-display text-lg text-stone uppercase tracking-widest font-bold">
                    Exhibition Index
                  </h3>
                  <p className="font-serif text-[10px] md:text-xs text-stone/50 italic mt-0.5">
                    Navigate the chapters of natural biology & tradition
                  </p>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-stone/60 hover:text-stone hover:bg-stone/5 transition-all rounded-full cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Chapters List */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-4 scrollbar-thin">
                <span className="text-[9px] uppercase tracking-widest text-[#bf4f36] font-mono font-bold block mb-2">
                  Select a Chapter to Begin Reading
                </span>

                <div className="space-y-3.5">
                  {/* Home/Intro entry index card */}
                  <div 
                    onClick={() => handleTabSelection("hero")}
                    className={`p-4 border rounded-sm transition-all duration-300 text-left cursor-pointer group ${
                      activeTab === "hero"
                        ? "bg-stone border-stone text-white shadow-soft"
                        : "bg-white border-stone/5 hover:border-stone/20 text-stone"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-mono text-[9px] uppercase tracking-widest ${activeTab === "hero" ? "text-[#d4af37]" : "text-stone/40"}`}>
                        Begin Page
                      </span>
                      <span className="font-mono text-[9px] opacity-60">00</span>
                    </div>
                    <h4 className="font-display text-sm font-bold mt-1 uppercase tracking-wide group-hover:text-terracotta transition-colors">
                      Title Gallery & Introduction
                    </h4>
                  </div>

                  {/* Chapters List */}
                  {navItems.map((item) => {
                    const isActive = activeTab === item.id;
                    return (
                      <div
                        key={item.id}
                        onClick={() => handleTabSelection(item.id as SectionTab)}
                        className={`p-4 border rounded-sm transition-all duration-300 text-left cursor-pointer group flex items-start gap-4 ${
                          isActive
                            ? "bg-stone border-stone text-white shadow-soft"
                            : "bg-white border-stone/5 hover:border-stone/20 text-stone"
                        }`}
                      >
                        {/* Number Block */}
                        <div className="flex flex-col items-center">
                          <span className={`font-mono text-xs font-bold w-6 h-6 rounded-full border flex items-center justify-center ${
                            isActive 
                              ? "bg-white/10 border-[#d4af37] text-[#d4af37]" 
                              : "bg-stone/5 border-stone/10 text-[#bf4f36]"
                          }`}>
                            {item.num}
                          </span>
                        </div>

                        {/* Title and descriptions */}
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className={`font-mono text-[8.5px] uppercase tracking-wider font-bold ${isActive ? "text-white/60" : "text-[#bf4f36]"}`}>
                              {item.short}
                            </span>
                          </div>
                          
                          <h4 className={`font-display text-sm font-bold leading-tight ${isActive ? "text-white" : "text-stone group-hover:text-terracotta"}`}>
                            {item.title}
                          </h4>

                          <p className={`font-serif text-[11px] leading-normal ${isActive ? "text-white/70" : "text-stone/60"}`}>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-6 md:p-8 bg-zinc-50 border-t border-stone/10 text-center space-y-2">
                <span className="font-display text-xs text-stone tracking-wide font-bold">
                  Rajaswala Paricharya 2026
                </span>
                <p className="font-serif text-[10px] text-stone/50 leading-relaxed max-w-sm mx-auto">
                  A synthesis dedicated to historical scholarship, somatic biology, and deconstructing menstrual taboos.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function MainAppShell() {
  const [activeTab, setActiveTab] = useState<SectionTab>("hero");

  useEffect(() => {
    const handleScroll = () => {
      let currentActive: SectionTab = "hero";
      for (const item of TAB_SECTIONS) {
        const el = document.getElementById(item.elementId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250) {
            currentActive = item.id;
          }
        }
      }
      setActiveTab((prev) => {
        if (prev !== currentActive) {
          return currentActive;
        }
        return prev;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    (window as any).__changeTabAndScrollToSection = (tab: SectionTab, elementId: string) => {
      setActiveTab(tab);
      setTimeout(() => {
        const el = document.getElementById(elementId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    };
    return () => {
      delete (window as any).__changeTabAndScrollToSection;
    };
  }, []);

  return (
    <div className="min-h-screen bg-ivory selection:bg-[#bf4f36]/10 flex flex-col pt-14">
      <NavigationHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Thin Horizontal Reading Indicator */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-stone/5 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-terracotta via-[#d4af37] to-emerald-700 origin-left"
          style={{
            transform: activeTab === "hero" ? "scaleX(0.05)" : 
                       activeTab === "intro" ? "scaleX(0.14)" : 
                       activeTab === "timeline" ? "scaleX(0.23)" : 
                       activeTab === "eras-exhibition" ? "scaleX(0.32)" : 
                       activeTab === "energetics" ? "scaleX(0.41)" : 
                       activeTab === "ashaucha" ? "scaleX(0.50)" : 
                       activeTab === "stigma" ? "scaleX(0.59)" : 
                       activeTab === "taboo-deconstruction-chamber" ? "scaleX(0.68)" : 
                       activeTab === "biomedical" ? "scaleX(0.77)" : 
                       activeTab === "self-care" ? "scaleX(0.86)" : "scaleX(1)"
          }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Main Exhibition Stage */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-0">
        <div className="w-full">
          <Hero />
          <Intro />
          <Timeline />
          <ErasExhibition />
          <Energetics />
          <Ashaucha />
          <Stigma />
          <SomaticDialogue />
          <Biomedical />
          <ModernApplication />
          <References />
          <Conclusion />
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <MainAppShell />
  );
}
