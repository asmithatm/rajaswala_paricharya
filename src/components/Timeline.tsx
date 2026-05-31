import { motion } from "motion/react";
import { SCRIPTURAL_EVOLUTION } from "../content";
import { SectionNavigator } from "./SectionNavigator";

export const Timeline = () => {
  return (
    <section id="timeline" className="py-32 bg-ivory border-y border-stone/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-md font-mono tracking-[0.3em] font-extrabold text-[#bf4f36] uppercase mb-4 block">Chapter II: Evolution of Vedic Beliefs</span>
          <h2 className="font-display text-4xl md:text-5xl text-stone">From Natural Biology to Social Restrictions</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-12 snap-x px-4 no-scrollbar">
          {/* Era 1: Vedic */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="min-w-[320px] max-w-[400px] flex-shrink-0 snap-center bg-white border border-stone/5 p-8 shadow-soft relative"
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gold flex items-center justify-center font-display text-xl text-white">01</div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-terracotta/80 mb-2 block">1500 BCE – 500 BCE</span>
            <h3 className="font-display text-2xl mb-4 text-stone">The Vedic Age (Shruti)</h3>
            <p className="text-sm font-serif leading-relaxed text-stone/85">
              There is no evidence of menstrual taboo in the earliest Vedic texts. Women took part in religious rituals, philosophical discussions, and community life. Menstruation was viewed as a natural part of the female body, not something impure or shameful.
            </p>
            <div className="mt-6 pt-6 border-t border-stone/5 italic text-sm text-stone/75 leading-relaxed">
              "The daily fire ritual (Agnihotra) was performed together by husband and wife."
            </div>
          </motion.div>

          <div className="w-12 flex-shrink-0 flex items-center justify-center text-gold opacity-40">
            <div className="w-full h-px bg-current" />
          </div>

          {/* Era 2: Yajurveda Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="min-w-[320px] max-w-[400px] flex-shrink-0 snap-center bg-parchment/40 border border-stone/5 p-8 shadow-soft relative"
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-terracotta flex items-center justify-center font-display text-xl text-white">02</div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-terracotta/80 mb-2 block">A Story from the Yajurveda</span>
            <h3 className="font-display text-2xl mb-4 text-stone">Indra and the Four Gifts</h3>
            <p className="text-sm font-serif leading-relaxed text-stone/85 mb-4">
              In a symbolic story from the Yajurveda, Indra transfers the burden of a great sin to four recipients — the Earth, Trees, Water, and Women. In return, each receives a special gift.
            </p>
            <div className="space-y-2">
              <div className="p-3 bg-white/50 text-[11px] border border-stone/5 rounded">
                <span className="font-bold block text-terracotta text-xs mb-1">Women's Gift:</span>
                <span className="italic font-serif">"The ability to renew life through menstruation, fertility, and childbirth."</span>
              </div>
            </div>
          </motion.div>

          <div className="w-12 flex-shrink-0 flex items-center justify-center text-gold opacity-40">
            <div className="w-full h-px bg-current" />
          </div>

          {/* Era 3: Rise of Social Rules */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="min-w-[320px] max-w-[400px] flex-shrink-0 snap-center bg-white border border-stone/5 p-8 shadow-soft relative"
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-stone flex items-center justify-center font-display text-xl text-white">03</div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-terracotta/80 mb-2 block">500 BCE – 1000 CE</span>
            <h3 className="font-display text-2xl mb-4 text-stone">The Rise of Social Rules</h3>
            <p className="text-sm font-serif leading-relaxed text-stone/85">
              As societies became more structured and hierarchical, increasing rules began to govern many aspects of daily life, including women's bodies.
            </p>
            <p className="text-sm font-serif leading-relaxed text-stone/80 mt-3">
              Practices that may have originally been intended for rest, health, or ritual gradually became linked to ideas of purity, family lineage, and social expectations.
            </p>
          </motion.div>

          <div className="w-12 flex-shrink-0 flex items-center justify-center text-gold opacity-40">
            <div className="w-full h-px bg-current" />
          </div>

          {/* Era 4: Medieval Decay */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="min-w-[320px] max-w-[400px] flex-shrink-0 snap-center bg-rose/5 border border-stone/5 p-8 shadow-soft relative"
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-rose flex items-center justify-center font-display text-xl text-white">04</div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-terracotta/80 mb-2 block">The Medieval Period</span>
            <h3 className="font-display text-2xl mb-4 text-stone">From Guidance to Restriction</h3>
            <p className="text-sm font-serif leading-relaxed text-stone/85">
              Over time, some interpretations became stricter and more restrictive.
            </p>
            <p className="text-sm font-serif leading-relaxed text-stone/80 mt-3">
              Menstruation increasingly came to be associated with exclusion, isolation, and social stigma, moving far away from the earlier understanding of it as a natural bodily process.
            </p>
          </motion.div>
        </div>

        {/* Transitional Bridge Connecting Chapter II & Chapter III */}
        <div className="mt-20 max-w-4xl mx-auto p-8 md:p-12 bg-white border-2 border-[#d4af37]/10 rounded-sm text-center space-y-6 shadow-soft relative overflow-hidden">
          {/* Background delicate decorative lines to represent connection */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-terracotta via-[#d4af37] to-emerald-700" />
          
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] font-bold text-terracotta block">
              Transitional Bridge
            </span>
            <span className="font-display text-2xl md:text-3xl text-stone font-medium block">
              Connecting the Dots
            </span>
            <div className="w-16 h-0.5 bg-[#d4af37]/40 mx-auto my-3" />
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <span className="font-display text-lg text-stone/90 italic leading-relaxed block font-medium">
              "Chapter II explored how attitudes toward menstruation evolved across ancient scriptures and religious traditions."
            </span>
            
            <p className="font-serif text-sm leading-relaxed text-[#bf4f36] font-medium">
              Next, we must move beyond texts to examine actual historical forces.
            </p>

            <p className="font-serif text-sm leading-relaxed text-stone/75">
              In the upcoming chapter, <strong className="text-stone">The Blood of the Cosmos</strong>, we examine the dynamic social, political, economic, and cultural forces that actively shaped menstrual practices across Indian history.
            </p>

            {/* Redesigned clean connection map */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left pt-4">
              <div className="p-4 bg-stone/[0.02] border border-stone/5 rounded-sm">
                <span className="font-mono text-[9px] text-[#bf4f36] uppercase tracking-wider block font-bold mb-1">
                  What You've Explored
                </span>
                <p className="font-serif text-xs text-stone/80 leading-relaxed">
                  How early Vedic naturalism and spiritual reverence gradually transitioned to rigid regulations and divisions.
                </p>
              </div>
              <div className="p-4 bg-stone/[0.02] border border-stone/5 rounded-sm">
                <span className="font-mono text-[9px] text-emerald-700 uppercase tracking-wider block font-bold mb-1">
                  What Lies Ahead
                </span>
                <p className="font-serif text-xs text-stone/80 leading-relaxed">
                  How agrarian land structures, caste control systems, Victorian codes, and modern Supreme Court rulings transformed bodily citizenship.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 flex justify-center">
            <a 
              href="#eras-exhibition" 
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-terracotta text-white hover:bg-stone text-xs font-mono uppercase tracking-[0.2em] rounded-sm transition-all duration-300 shadow-md hover:shadow-lg font-bold hover:-translate-y-0.5"
            >
              Enter the Seven Epoch Galleries &rarr;
            </a>
          </div>
        </div>

        <SectionNavigator currentId="timeline" />
      </div>
    </section>
  );
};
