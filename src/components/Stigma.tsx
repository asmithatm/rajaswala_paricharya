import { motion } from "motion/react";
import { ArrowRight, History } from "lucide-react";
import { EpistemologyBadge } from "./EpistemologyBadge";
import { SectionNavigator } from "./SectionNavigator";

export const Stigma = () => {
  return (
    <section id="stigma" className="py-32 px-6 bg-parchment relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <span className="text-md font-mono tracking-[0.3em] font-extrabold text-[#bf4f36] uppercase block mb-4">Chapter VI: Cultural Decay</span>

          <h2 className="font-display text-4xl md:text-5xl text-stone mb-6">How Care Became Stigma</h2>
          <p className="font-serif text-lg text-stone/80 italic">The loss of nuance and the rise of rigid interpretations.</p>
        </div>

        <div className="space-y-8">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="editorial-grid bg-white p-6 md:p-12 border border-stone/5 shadow-soft relative overflow-hidden"
           >
              <div className="absolute top-0 left-0 w-1 pt-24 h-full bg-terracotta/20" />
              <div className="col-span-12 md:col-span-5 flex flex-col justify-center text-center md:text-left">
                <span className="font-display text-2xl text-stone mb-1">Rest</span>
                <span className="font-serif text-sm tracking-widest uppercase opacity-60 mb-4 md:mb-0 block">Vedic Intention</span>
              </div>
              <div className="col-span-12 md:col-span-2 flex items-center justify-center py-4 md:py-0">
                 <ArrowRight className="text-terracotta/50 rotate-90 md:rotate-0" />
              </div>
              <div className="col-span-12 md:col-span-5 flex flex-col justify-center text-center md:text-right">
                <span className="font-display text-2xl text-vermillion mb-1 italic">Banishment</span>
                <span className="font-serif text-sm tracking-widest uppercase opacity-60 mb-4 md:mb-0 block">Medieval Smritis</span>
              </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="editorial-grid bg-white p-6 md:p-12 border border-stone/5 shadow-soft relative overflow-hidden"
           >
              <div className="absolute top-0 right-0 w-1 pt-24 h-full bg-stone/20" />
              <div className="col-span-12 md:col-span-5 flex flex-col justify-center text-center md:text-left">
                <span className="font-display text-2xl text-stone mb-1">Care</span>
                <span className="font-serif text-sm tracking-widest uppercase opacity-60 mb-4 md:mb-0 block">Traditional Wisdom</span>
              </div>
              <div className="col-span-12 md:col-span-2 flex items-center justify-center py-4 md:py-0">
                 <ArrowRight className="text-stone/50 rotate-90 md:rotate-0" />
              </div>
              <div className="col-span-12 md:col-span-5 flex flex-col justify-center text-center md:text-right">
                <span className="font-display text-2xl text-stone mb-1 italic">Untouchability</span>
                <span className="font-serif text-sm tracking-widest uppercase opacity-60 mb-4 md:mb-0 block">Colonial Era</span>
              </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="p-6 md:p-12 bg-rose/5 border border-rose/10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8"
           >
              <History size={32} className="text-rose flex-shrink-0" />
              <p className="font-serif text-lg leading-relaxed text-stone">
                Over time, social change, colonial influence, and the weakening of traditional knowledge systems caused many of these practices to lose their original context. Ideas once rooted in care and balance slowly hardened into fear, rigidity, and social taboo.              
              </p>
           </motion.div>
        </div>

        <SectionNavigator currentId="stigma" />
      </div>
    </section>
  );
};
