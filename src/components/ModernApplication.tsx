import { motion } from "motion/react";
import { Check, X, Activity, CheckCircle } from "lucide-react";
import { MODERN_FRAMEWORK } from "../content";
import { SectionNavigator } from "./SectionNavigator";

export const ModernApplication = () => {
  return (
    <div id="self-care" className="w-full">
      {/* 1. A Modern Framework for Menstrual Self-Care */}
      <section className="py-24 px-6 bg-ivory relative overflow-hidden border-t border-stone/10">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-md font-mono tracking-[0.3em] font-extrabold text-[#bf4f36] uppercase mb-4 block">
            Chapter IX: Modern Application
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-stone mb-12 font-bold">
            A Modern Framework for Menstrual Self-Care
          </h2>
          
          <div className="text-left font-serif text-lg md:text-xl text-stone/85 leading-relaxed italic space-y-8 text-center max-w-3xl mx-auto mb-16">
            <p>
              In today’s fast-paced world, many women are expected to push through exhaustion,
              stress, and discomfort without pause. Reinterpreting
              <strong className="text-stone"> Rajaswala Paricharya </strong>
              through a modern lens allows these traditions to be understood not as rigid rules,
              but as a framework for rest, self-care, and hormonal well-being.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 border border-stone/5 shadow-soft rounded-sm">
            <h4 className="font-display text-2xl text-stone mb-8 font-semibold">
              A Gentle 2026 Approach
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
              <div className="space-y-4">
                <div className="font-display text-xl text-terracotta font-semibold">
                  Workspace Comfort
                </div>
                <p className="font-serif text-sm text-stone/80 leading-relaxed italic">
                  Flexible schedules, fewer high-pressure tasks, and allowing structured space for recovery
                  when body signals require it.
                </p>
              </div>

              <div className="space-y-4">
                <div className="font-display text-xl text-terracotta font-semibold">
                  Nourishing Nutrition
                </div>
                <p className="font-serif text-sm text-stone/80 leading-relaxed italic">
                  Warm meals, hydration, soothing herbal teas, and nutrient-rich foods that actively support digestive comfort
                  and combat fatigue.
                </p>
              </div>

              <div className="space-y-4">
                <div className="font-display text-xl text-terracotta font-semibold">
                  Somatic Alignment
                </div>
                <p className="font-serif text-sm text-stone/80 leading-relaxed italic">
                  Quiet reflection, meditation, gentle stretching, and honoring the biology's natural cyclical rhythm without
                  shame or social guilt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Moving Beyond Menstrual Myths */}
      <section className="py-16 px-6 bg-[#FAF9F6] relative">
        <div className="max-w-5xl mx-auto">
          <div className="p-8 md:p-12 bg-white border border-stone/10 shadow-soft rounded-sm space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#d4af37]" />
            
            <div className="space-y-3 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone/5 text-stone/60 font-mono text-[9px] tracking-widest uppercase rounded font-bold">
                <Activity className="w-3.5 h-3.5 text-emerald-700" />
                Biological Facts
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-stone font-bold leading-snug">
                Moving Beyond Menstrual Myths
              </h3>
              <p className="font-serif text-sm md:text-base leading-relaxed text-stone/80 text-center md:text-left">
                Many menstrual taboos originated in historical contexts where scientific knowledge was limited and access to sanitation wasn't reliable. Today, medicine understands menstruation as a normal biological process. Modern public health and personal agency focus on ensuring that every individual has access to:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 border-t border-stone/10">
              {[
                "Accurate menstrual education",
                "Safe hygiene products",
                "Clean water and sanitation",
                "Confidence and bodily agency",
                "Dignity and freedom from stigma"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-[#FAF9F6] border border-stone/5 rounded-sm font-serif text-stone font-semibold text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-center max-w-3xl mx-auto pt-6 border-t border-stone/10">
              <p className="font-serif text-sm md:text-base text-stone/80 italic leading-relaxed">
                "The challenge is not menstruation itself, but the misinformation, shame, and barriers that continue to surround it."
              </p>
              <p className="font-serif text-xs md:text-sm text-stone/60 leading-relaxed">
                Understanding where these beliefs came from allows societies to replace fear with knowledge, and restriction with informed bodily choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Restoring Care, Leaving Behind Stigma */}
      <section className="py-24 px-6 bg-parchment relative border-b border-stone/10">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center">
            <h3 className="font-display text-3xl md:text-4xl text-stone font-bold mb-4">
              Restoring Care, Leaving Behind Stigma
            </h3>
            <p className="font-serif italic text-stone/80 text-sm md:text-base">
              Reframing Tradition: What should be retained and what must be discarded?
            </p>
            <div className="w-24 h-px bg-stone/30 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Retain */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 bg-white p-8 border border-stone/5 shadow-soft rounded-sm"
            >
              <h3 className="font-display text-2xl text-terracotta border-b border-terracotta/10 pb-4 flex items-center gap-3 font-bold">
                <Check className="text-terracotta" />
                Practices to Retain
              </h3>

              <ul className="space-y-6">
                {MODERN_FRAMEWORK.retain.map((item, i) => (
                  <li key={i} className="flex gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-white border border-stone/10 flex items-center justify-center flex-shrink-0 group-hover:bg-terracotta group-hover:text-white transition-all font-mono">
                      <span className="text-[10px] font-bold">
                        {i + 1}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display font-bold text-stone">
                        {item.title}
                      </h4>

                      <p className="font-serif text-sm text-stone/80 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Discard */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 bg-white p-8 border border-stone/5 shadow-soft rounded-sm"
            >
              <h3 className="font-display text-2xl text-stone border-b border-stone/10 pb-4 flex items-center gap-3 opacity-95 font-bold">
                <X className="text-vermillion/80" />
                Practices to Discard
              </h3>

              <ul className="space-y-6">
                {MODERN_FRAMEWORK.discard.map((item, i) => (
                  <li key={i} className="flex gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-white border border-stone/10 flex items-center justify-center flex-shrink-0 group-hover:bg-stone group-hover:text-white transition-all font-mono">
                      <span className="text-[10px] font-bold">
                        {i + 1}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display font-bold text-stone">
                        {item.title}
                      </h4>

                      <p className="font-serif text-sm text-stone/80 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="pt-8">
            <SectionNavigator currentId="self-care" />
          </div>
        </div>
      </section>
    </div>
  );
};
