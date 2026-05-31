import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Microscope, Activity, CheckCircle } from "lucide-react";
import { SectionNavigator } from "./SectionNavigator";

interface SuperstitionItem {
  id: string;
  num: string;
  title: string;
  belief: string;
  consequence: string;
  science: string;
  alertColor: string;
}

const SUPERSTITIONS_DATA: SuperstitionItem[] = [
  {
    id: "toxic-touch",
    num: "01",
    title: "The \"Toxic Touch\" Belief",
    belief: "Many households believe that a menstruating woman should not touch pickles, curd, fermented foods, sacred plants, or livestock. It is believed that her touch can spoil food, damage plants, or affect the fertility of animals.",
    consequence: "These beliefs often restrict women's participation in everyday household activities and reinforce the idea that menstruation makes a person physically harmful to their surroundings.",
    science: "Food spoilage is caused by bacteria and contamination, not menstruation. Plants, animals, and fermented foods are affected by environmental and biological factors—not by a person's menstrual cycle. Proper hygiene is the only factor relevant to food safety.",
    alertColor: "border-amber-500/30 bg-amber-500/[0.02]"
  },
  {
    id: "cloths-magic",
    num: "02",
    title: "Menstrual Cloths and Black Magic",
    belief: "In some communities, used menstrual cloths are believed to be vulnerable to black magic, curses, or supernatural harm. Because of this fear, women may hide menstrual cloths while drying them so that nobody can find or misuse them.",
    consequence: "Cloths are often dried indoors, in dark or poorly ventilated spaces rather than in direct sunlight. This can increase moisture retention and create conditions that encourage bacterial and fungal growth, raising the risk of infections. In some regions, beliefs linking women and witchcraft have also contributed to social stigma and accusations.",
    science: "Sunlight and ventilation help reduce bacterial and fungal growth on reusable menstrual cloths. There is no scientific evidence that menstrual blood can be used to transmit supernatural harm or curses.",
    alertColor: "border-red-500/30 bg-red-500/[0.02]"
  },
  {
    id: "untouchability-home",
    num: "03",
    title: "Untouchability Within the Home",
    belief: "In some households, menstruating women are discouraged from touching furniture, beds, kitchen items, clothing, children, or religious objects. The belief is based on the idea that menstrual \"impurity\" can be transferred through contact.",
    consequence: "Women may be separated from family activities, asked to sleep separately, avoid common spaces, or limit interaction with children and relatives. For many women, these practices create feelings of exclusion during a normal biological process.",
    science: "Menstruation is not contagious. Touching furniture, household objects, family members, or children carries no biological risk related to menstruation. Normal social contact is completely safe.",
    alertColor: "border-orange-500/30 bg-orange-500/[0.02]"
  },
  {
    id: "inauspicious-presence",
    num: "04",
    title: "The \"Inauspicious Presence\" Belief",
    belief: "In certain communities, menstruating women are expected to remain out of public view and avoid crossing the paths of others. Some traditions historically required women to stay in separate huts or shelters until their periods ended.",
    consequence: "Isolation can leave women separated from family support, daily activities, and basic comforts. In places where women are housed in separate structures, concerns have been raised about safety, health, and access to food, sanitation, and medical care.",
    science: "A person's presence, appearance, or gaze has no effect on another person's health, purity, or wellbeing. Menstruation does not create any physical condition that requires social banishment or isolation. Rest may be beneficial when chosen voluntarily, but enforced exclusion has no medical basis.",
    alertColor: "border-rose-500/30 bg-rose-500/[0.02]"
  },
  {
    id: "water-source",
    num: "05",
    title: "Water Source and Bathing Restrictions",
    belief: "Some communities believe that menstruating women should not draw water from wells, enter rivers, use hand pumps, or bathe in shared water sources. The concern is often linked to ideas of ritual contamination.",
    consequence: "Women may lose access to convenient sources of water and face additional physical burdens while managing menstruation. Restrictions can also make personal hygiene more difficult during a time when access to water is especially important.",
    science: "Menstruation does not contaminate wells, rivers, hand pumps, groundwater, or public water systems. Access to clean water is essential for menstrual hygiene and overall health.",
    alertColor: "border-blue-500/30 bg-blue-500/[0.02]"
  },
  {
    id: "food-intimacy",
    num: "06",
    title: "Food and Intimacy Myths",
    belief: "Many families advise women to avoid foods such as curd, tamarind, lemons, pickles, and other sour foods during menstruation. Some communities also believe that intimacy during menstruation can cause illness, poison the body, or harm a partner.",
    consequence: "Women may unnecessarily restrict their diet, worry about normal bodily processes, or experience fear around menstruation and reproductive health. Misinformation can replace evidence-based health guidance.",
    science: "There is no scientific evidence that sour foods stop menstrual flow, trap blood inside the body, or damage the uterus. Similarly, menstruation does not make intimacy inherently dangerous. Dietary choices and intimacy during menstruation are matters of individual comfort, hygiene, health, and personal preference.",
    alertColor: "border-purple-500/30 bg-purple-500/[0.02]"
  }
];

export const SomaticDialogue = () => {
  const [activeMythId, setActiveMythId] = useState<string>("toxic-touch");

  const currentMyth = SUPERSTITIONS_DATA.find((m) => m.id === activeMythId) || SUPERSTITIONS_DATA[0];

  return (
    <section 
      id="taboo-deconstruction-chamber" 
      className="py-24 px-4 md:px-8 bg-[#FAF9F6] border-b border-stone/10 relative overflow-hidden text-stone scroll-mt-20"
    >
      {/* Editorial Watermark */}
      <div className="absolute top-[10%] right-[5%] font-display text-8xl md:text-9xl text-stone/[0.02] font-extrabold select-none pointer-events-none">
        MHM 2026
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-md font-mono tracking-[0.3em] font-extrabold text-[#bf4f36] uppercase block mb-4">
            Chapter VII: Deconstructing Taboos
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-stone leading-tight font-medium">
            The Historical Paradox of Menstruation in India
          </h2>
          <div className="w-24 h-px bg-[#bf4f36]/30 mx-auto my-4" />
          
          <p className="font-serif text-sm md:text-base text-stone/80 text-center max-w-3xl mx-auto leading-relaxed">
            Across India, menstruation has been viewed in very different ways. Some traditions celebrate it as a symbol of fertility, creation, and divine power. The annual <strong>Ambubachi Mela</strong> at the <strong>Kamakhya Temple</strong> in Assam and traditions at the <strong>Chengannur Mahadeva Temple</strong> in Kerala are examples of this reverence.
          </p>

          <p className="font-serif text-sm md:text-base text-stone/80 text-center max-w-3xl mx-auto leading-relaxed">
            At the same time, many communities developed beliefs and restrictions around menstruation that shaped daily life for generations. Some arose from concerns about hygiene in pre-modern societies, while others emerged through cultural traditions, social customs, and religious interpretations.
          </p>

          <p className="font-serif text-xs md:text-sm text-stone/75 italic max-w-2xl mx-auto">
            This gallery examines some of the most common menstrual superstitions, their real-world impact, and what modern science tells us today.
          </p>
        </div>

        {/* Taboo Deconstruction Master Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-8">
          
          {/* Left Navigation: Superstition Selectors */}
          <div className="lg:col-span-4 space-y-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-stone/40 block px-2 mb-2 font-bold">
              Select Superstition Gallery:
            </span>
            <div className="flex flex-row overflow-x-auto lg:flex-col gap-2 pb-4 lg:pb-0 scrollbar-thin select-none">
              {SUPERSTITIONS_DATA.map((myth) => {
                const isActive = myth.id === activeMythId;
                return (
                  <button
                    key={myth.id}
                    onClick={() => setActiveMythId(myth.id)}
                    className={`w-auto lg:w-full text-left p-4 rounded-sm border transition-all duration-300 flex items-center justify-between gap-4 flex-shrink-0 cursor-pointer ${
                      isActive 
                        ? "bg-stone text-white border-stone shadow-sm font-medium" 
                        : "bg-white text-stone border-stone/10 hover:bg-stone/5 hover:border-stone/20"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-xs font-bold leading-none ${isActive ? "text-gold" : "text-stone/40"}`}>
                        {myth.num}
                      </span>
                      <span className="font-display text-xs md:text-sm tracking-wide line-clamp-1">
                        {myth.title}
                      </span>
                    </div>
                    <span className={`hidden lg:inline font-mono text-xs ${isActive ? "text-gold" : "text-stone/30"}`}>
                      &rarr;
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Area: Dynamic Deep Dive Card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMyth.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="p-6 md:p-10 bg-white border border-stone/10 shadow-soft rounded-sm space-y-8"
              >
                
                {/* Header block inside Card */}
                <div className="space-y-3 pb-6 border-b border-stone/10">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-stone/5 flex items-center justify-center font-mono text-xs text-terracotta border border-stone/10 font-bold">
                      {currentMyth.num}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#bf4f36] font-bold">
                      Traditional Belief & Myth
                    </span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-stone font-bold leading-tight">
                    {currentMyth.title}
                  </h3>
                </div>

                {/* Specific Belief and Consequence */}
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 bg-[#FAF9F6] border border-stone/5 rounded-sm space-y-2">
                      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-stone/5">
                        <span className="w-2 h-2 rounded-full bg-terracotta" />
                        <h5 className="font-display text-xs md:text-sm font-bold text-stone uppercase tracking-wider">
                          The Belief
                        </h5>
                      </div>
                      <p className="font-serif text-xs md:text-sm leading-relaxed text-stone/85 text-pretty">
                        {currentMyth.belief}
                      </p>
                    </div>

                    <div className="p-5 bg-[#FAF9F6] border border-stone/5 rounded-sm space-y-2">
                      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-stone/5">
                        <span className="w-2 h-2 rounded-full bg-stone" />
                        <h5 className="font-display text-xs md:text-sm font-bold text-stone uppercase tracking-wider">
                          The Consequence
                        </h5>
                      </div>
                      <p className="font-serif text-xs md:text-sm leading-relaxed text-stone/85 text-pretty">
                        {currentMyth.consequence}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Science Deconstruction Box */}
                <div className={`p-6 border rounded-sm space-y-3 ${currentMyth.alertColor}`}>
                  <div className="flex items-center gap-2">
                    <Microscope className="w-4.5 h-4.5 text-terracotta flex-shrink-0" />
                    <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-[#bf4f36]">
                      What Science Says
                    </span>
                  </div>
                  <p className="font-serif text-xs md:text-sm leading-relaxed text-stone/85">
                    {currentMyth.science}
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Unified Section Navigation Arrows */}
        <SectionNavigator currentId="taboo-deconstruction-chamber" />

      </div>
    </section>
  );
};
