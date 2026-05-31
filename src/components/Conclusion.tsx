import { motion } from "motion/react";
import { SectionNavigator } from "./SectionNavigator";

export const Conclusion = () => {
  return (
    <section id="conclusion" className="min-h-screen flex flex-col items-center justify-center bg-ivory px-6 text-center relative py-20 pb-32">
       <motion.div 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 2 }}
         className="max-w-4xl mx-auto w-full"
       >
          <div className="w-1 h-24 bg-gradient-to-b from-transparent via-terracotta/20 to-transparent mx-auto mb-16" />
          <h2 className="font-display text-4xl md:text-6xl text-stone mb-12 leading-tight">
            The problem was never menstruation. <br />
            <span className="italic font-serif text-terracotta">The problem was forgetting the purpose behind the practices.</span>
          </h2>
          <p className="font-serif text-xl text-stone/85 italic leading-relaxed max-w-2xl mx-auto mb-20">
            Revisiting Rajaswala Paricharya is not about returning to the past. It is about understanding the original intention behind these practices, removing the stigma attached to menstruation, and adapting ideas of rest, care, and balance to modern life while recognizing menstruation as a natural and normal part of the human body.
          </p>
          
       <div className="mt-20 flex flex-col items-center gap-6">
          <div className="w-12 h-12 rounded-full border border-stone/10 flex items-center justify-center p-2">
             <div className="w-full h-full bg-terracotta/10 rounded-full" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-1"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-stone/70 block">A Research Initiative by</span>
            <span className="font-display text-xl text-stone italic">Asmitha T M</span>
          </motion.div>
       </div>

       <div className="mt-16 text-left">
         <SectionNavigator currentId="conclusion" />
       </div>
     </motion.div>
     
     <footer className="absolute bottom-12 w-full text-center text-[10px] uppercase tracking-widest text-stone/50 font-sans">
        © 2026 Rajaswala Paricharya Research Initiative
     </footer>
  </section>
  );
};
