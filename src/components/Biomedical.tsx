import { motion } from "motion/react";
import { BIOMEDICAL_MAPPING } from "../content";
import { Table, Microscope } from "lucide-react";
import { EpistemologyBadge } from "./EpistemologyBadge";
import { SectionNavigator } from "./SectionNavigator";

export const Biomedical = () => {
  return (
    <section id="biomedical" className="py-32 px-6 bg-white relative overflow-hidden">
       <div className="absolute left-0 top-0 w-full h-2 bg-gradient-to-r from-sandalwood via-terracotta/10 to-sandalwood" />
       
       <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20 space-y-4">
            <span className="text-md font-mono tracking-[0.3em] font-extrabold text-[#bf4f36] uppercase block mb-4">Chapter VIII: Modern Biomedical Science</span>
            
            <div className="flex justify-center gap-2">
              <span className="text-xs bg-stone/5 px-2 py-1 text-stone/80 rounded">Biomedical Mapping</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl text-stone mb-6">Ayurveda meets Modern Physiology</h2>
            <div className="w-24 h-px bg-stone/20" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
  {BIOMEDICAL_MAPPING.map((item, i) => (
    <motion.div
      key={item.practice}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="group p-8 bg-ivory border border-stone/5 hover:border-terracotta/30 transition-all duration-700 shadow-soft"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 bg-stone/5 rounded-full text-stone group-hover:bg-terracotta group-hover:text-white transition-colors">
          <Microscope size={20} />
        </div>

        <div>
          <h3 className="font-display text-2xl text-stone group-hover:text-terracotta transition-colors">
            {item.practice}
          </h3>

          <p className="text-xs font-serif italic text-stone/60">
            {item.scripture}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-stone/5">

        <div className="space-y-4">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-terracotta block mb-2">
              Traditional Understanding
            </span>
            <div className="mb-2">
              <span className="text-[10px] bg-stone/5 px-2 py-0.5 rounded text-stone/70">Ayurvedic</span>
            </div>

            <p className="text-sm font-serif text-stone/85 leading-relaxed italic mb-4">
              {item.energetics}
            </p>
          </div>

          <div className="pt-2">
            <span className="text-[10px] uppercase tracking-widest font-bold text-stone block mb-2 opacity-80">
              Modern Understanding
            </span>
            <div className="mb-2">
              <span className="text-[10px] bg-stone/5 px-2 py-0.5 rounded text-stone/70">Scientific</span>
            </div>

            <p className="text-sm font-serif text-stone leading-relaxed">
              {item.mechanism}
            </p>
          </div>
        </div>

        <div className="bg-terracotta/5 border border-terracotta/10 rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-terracotta block mb-3">
              Modern Lifestyle Adaptation
            </span>

            <p className="text-sm font-serif text-stone leading-relaxed">
              {item.modern}
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  ))}
</div>

          <div className="mt-20 p-12 bg-stone/5 flex flex-col md:flex-row items-center gap-12 border border-stone/5">
  <div className="flex-1">
    <h4 className="font-display text-3xl mb-4">
      Stress, Fatigue & Menstrual Health
    </h4>

    <p className="font-serif text-stone/85 leading-relaxed italic pr-8">
      Many traditional practices were centered around reducing stress and physical strain during menstruation. Modern research also shows that exhaustion, overwork, and high stress levels can affect hormones, increase inflammation, and worsen cramps or fatigue during periods.
    </p>
  </div>

  <div className="w-full md:w-auto flex-shrink-0">
    <div className="p-6 bg-white border border-stone/10 shadow-soft flex flex-col items-center gap-4 text-center">

      <div className="text-[10px] uppercase tracking-widest font-bold text-terracotta">
        Stress Response Cycle
      </div>

      <div className="space-y-1 text-xs text-stone/80">
        <div>Overexertion & Stress</div>

        <div className="italic text-terracotta">↓</div>

        <div>Hormonal Imbalance</div>

        <div className="italic text-terracotta">↓</div>

        <div>Increased Inflammation</div>

        <div className="italic text-terracotta">↓</div>

        <div>Cramps, Fatigue & Discomfort</div>
      </div>

    </div>
  </div>
</div>

          <SectionNavigator currentId="biomedical" />
       </div>
    </section>
  );
};
