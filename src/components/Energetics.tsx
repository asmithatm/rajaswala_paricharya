import { motion } from "motion/react";
import { ENERGETIC_FRAMEWORK } from "../content";
import { EpistemologyBadge } from "./EpistemologyBadge";
import { SectionNavigator } from "./SectionNavigator";

export const Energetics = () => {
  // Balanced designations
  const pranaNames: Record<string, string> = {
    "Prana Vayu": "Prana Vayu (Inward Vital Currents)",
    "Apana Vayu": "Apana Vayu (Downward Restorative Force)",
    "Samana Vayu": "Samana Vayu (Balancing & Digestion)",
    "Vyana Vayu": "Vyana Vayu (Circulatory Distribution)",
    "Udana Vayu": "Udana Vayu (Upward Flow & Expression)",
  };

  return (
    <section id="energetics" className="pt-16 pb-32 px-6 bg-stone/5 relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-[600px] h-[600px] border border-stone/5 rounded-full" />
      <div className="absolute -right-10 -top-10 w-[400px] h-[400px] border border-stone/5 rounded-full" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="editorial-grid">
          <div className="col-span-12 md:col-span-6 mb-12 flex flex-col justify-center space-y-4">
            <span className="text-md font-mono tracking-[0.3em] font-extrabold text-[#bf4f36] uppercase block mb-4">Chapter IV: The Yogic Framework</span>
            
            <div className="flex gap-2">
              <EpistemologyBadge type="ayurvedic" />
            </div>

            <h2 className="font-display text-4xl md:text-5xl text-stone mb-4">{ENERGETIC_FRAMEWORK.title}</h2>
            <p className="font-serif text-lg leading-relaxed text-stone/90 mb-6">
              The yogic understanding of menstruation is rooted in the dynamics of the <strong>Pancha Pranas</strong>—the five vital movements or manifestations of the life-force.
            </p>
            
            <div className="space-y-4">
               {ENERGETIC_FRAMEWORK.pancha_pranas.map((prana, i) => {
                  const displayName = pranaNames[prana.name] || prana.name;
                  return (
                    <motion.div 
                      key={prana.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-stone/20 font-display text-lg group-hover:bg-terracotta group-hover:text-white transition-all duration-500`}>
                        {prana.name[0]}
                      </div>
                      <div>
                        <h4 className="font-display group-hover:text-terracotta transition-colors">{displayName}</h4>
                        <p className="text-xs font-serif text-stone/70 italic">{prana.function}</p>
                      </div>
                    </motion.div>
                  );
               })}
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 flex items-center">
            <div className="bg-white p-12 shadow-soft border border-stone/5 relative overflow-hidden rounded">
               <div className="absolute top-0 right-0 w-2 h-full bg-terracotta/20" />
               <h3 className="font-display text-3xl mb-6 text-stone">The Temple Conflict</h3>
               <div className="space-y-6 font-serif text-stone/90 leading-relaxed">
                 <p>
                   Properly consecrated temples act as <strong>giant energy conduits</strong>, pulling vital currents upward toward the higher chakras (Udana Vayu).
                 </p>
                 <div className="flex items-center gap-4 py-4 border-y border-stone/5">
                   <div className="flex flex-col items-center gap-1 font-display text-xs text-terracotta italic">
                      <span>UPWARD VIA CONSECRATION</span>
                      <div className="w-px h-8 bg-terracotta/20" />
                   </div>
                   <div className="text-xl font-display text-stone italic">Vs</div>
                   <div className="flex flex-col items-center gap-1 font-display text-xs text-stone italic opacity-60">
                      <div className="w-px h-8 bg-stone/20" />
                      <span>DOWNWARD PHYSIOLOGICAL DRAIN</span>
                    </div>
                 </div>
                 <p>
                   During menstruation, energy must move <strong>downward</strong> (Apana Vayu). Forcing these opposite vectors to collide causes "energetic drag," leading to acute physical exhaustion and pelvic pain.
                 </p>
               </div>
            </div>
          </div>
        </div>

        <SectionNavigator currentId="energetics" />
      </div>
    </section>
  );
};
