import { motion } from "motion/react";
import { AlertCircle, ShieldAlert } from "lucide-react";

export const Rural = () => {
  return (
    <section className="py-32 px-6 bg-ivory border-y border-stone/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="flex-1"
          >
            <span className="text-vermillion font-medium tracking-widest text-xs uppercase mb-4 block">Chapter VIII: Rural Reality</span>
            <h2 className="font-display text-4xl md:text-5xl text-stone mb-8 leading-tight">Behind the Closed <br />Doors of Tribal Huts</h2>
            <div className="space-y-6 font-serif text-stone leading-relaxed">
               <p className="text-xl italic font-display text-stone border-l-4 border-vermillion/40 pl-6 mb-8">
While many modern discussions focus on philosophy and symbolism, parts of rural India continue to face a far more severe reality.               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                     <h3 className="font-display text-2xl text-stone">The Gaokor System</h3>
                     <p className="text-sm text-stone/90">
                       In tribal belts like Gadchiroli, some women and girls are still isolated in small mud huts known as Gaokors, often located far from the village. These huts lack running water, electricity, or basic safety, exposing women to wild animal attacks and infections.
                     </p>
                  </div>
                  <div className="space-y-4">
                     <h3 className="font-display text-2xl text-stone">Witch Hunting</h3>
                     <p className="text-sm text-stone/90">
                      In parts of Jharkhand and nearby regions, harmful superstitions surrounding menstruation and period blood continue to fuel fear and social violence. Women accused of practices like “black magic” are sometimes subjected to public humiliation, abuse, and witch-hunts.                     </p>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full md:w-[400px] flex-shrink-0"
          >
            <div className="bg-white p-8 shadow-soft border border-stone/5 relative">
               <div className="absolute top-0 right-0 p-4">
                  <ShieldAlert className="text-vermillion/40 w-12 h-12" />
               </div>
               <h4 className="font-display text-2xl mb-6 text-vermillion">Reclaiming Dignity : 2026</h4>
               <div className="space-y-4 font-serif text-sm text-stone/90">
                  <div className="pb-4 border-b border-stone/5">
                    <span className="font-bold text-stone block mb-1">Structural Transition</span>
                    The Gadchiroli district, with UNICEF support, is replacing unsafe Gaokors with <strong>Mahila Visava Kendras</strong> (Women’s Rest Centers).
                  </div>
                  <div className="pb-4 border-b border-stone/5">
                    <span className="font-bold text-stone block mb-1">Combating Superstition</span>
Local healthcare workers and community groups are helping normalize menstruation through education, hygiene awareness, and scientific understanding, while challenging harmful beliefs that treat periods as a curse or source of shame.                  </div>
                  <p className="italic text-xs text-stone/60">Restoring safety, dignity, and compassionate care.</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
