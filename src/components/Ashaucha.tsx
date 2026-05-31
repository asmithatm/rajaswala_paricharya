import { motion } from "motion/react";
import { ASHAUCHA_MECHANICS } from "../content";
import { EpistemologyBadge } from "./EpistemologyBadge";
import { SectionNavigator } from "./SectionNavigator";

export const Ashaucha = () => {
  // Balanced English and traditional terms combined
  const displayNameMap: Record<string, string> = {
    Sutakam: "Sutakam (Post-Childbirth Rest)",
    Mritakam: "Mritakam (Bereavement & Mourning)",
    Rajaswala: "Rajaswala (Menstrual Bio-Rest)",
  };

  return (
    <section id="ashaucha" className="py-32 px-6 bg-ivory relative overflow-hidden">
      <div className="absolute inset-0 manuscript-overlay opacity-10" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-md font-mono tracking-[0.3em] font-extrabold text-[#bf4f36] uppercase block mb-4">Chapter V: The Ancient Idea of Ritual Withdrawal</span>
          
          <div className="flex justify-center mb-2">
            <EpistemologyBadge type="historical" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl text-stone mb-6">{ASHAUCHA_MECHANICS.title}</h2>
          <p className="text-lg text-stone/85 font-serif italic max-w-2xl mx-auto leading-relaxed">
            {ASHAUCHA_MECHANICS.definition}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {ASHAUCHA_MECHANICS.forms.map((form, i) => {
            const displayName = displayNameMap[form.name] || form.name;
            return (
              <motion.div 
                key={form.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 border border-stone/5 shadow-soft hover:border-terracotta/20 transition-all duration-300 rounded"
              >
                <h3 className="font-display text-xl text-terracotta mb-2">{displayName}</h3>
                <p className="text-xs font-serif text-stone/80 uppercase tracking-widest mb-4">Origin: {form.name === 'Sutakam' ? 'Post-Childbirth' : form.name === 'Mritakam' ? 'Bereavement & Mourning' : 'Cycle Purification'}</p>
                <p className="text-sm font-serif leading-relaxed text-stone/90">{form.detail}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="p-10 bg-parchment relative rounded border border-stone/10 shadow-sm space-y-4">
          <div className="absolute top-0 left-0 w-full h-1 bg-gold opacity-50" />
          <div className="flex items-center gap-2">
            <EpistemologyBadge type="ayurvedic" />
          </div>
          <h4 className="font-display text-2xl text-stone">The Protective Shield</h4>
          <p className="font-serif leading-relaxed text-stone/90 text-lg">
            {ASHAUCHA_MECHANICS.logic}
          </p>
        </div>

        <SectionNavigator currentId="ashaucha" />
      </div>
    </section>
  );
};
