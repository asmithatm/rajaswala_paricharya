import { motion } from "motion/react";
import { Quote } from "lucide-react";
import manuscriptImg from "../assets/images/manuscript_illustration_indra_boon_1779194140353.png";
import { SectionNavigator } from "./SectionNavigator";

export const Intro = () => {
  return (
    <section id="intro" className="py-32 px-6 bg-parchment relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-lotus/20 blur-[120px] rounded-full" />
      
      <div className="max-w-5xl mx-auto editorial-grid">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-12 md:col-span-7 flex flex-col justify-center"
        >
          <span className="text-md font-mono tracking-[0.3em] font-extrabold text-[#bf4f36] uppercase mb-4 block">Chapter I: Introduction</span>
          <h2 className="font-display text-4xl md:text-6xl text-stone mb-8 leading-tight">
            When did <span className="italic font-serif">Rest</span> become <span className="italic font-serif">Restriction</span>?
          </h2>
          <p className="text-xl leading-relaxed text-stone font-serif mb-8 first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-terracotta">
            The narrative of menstruation in Hindu tradition has traversed a thousand-year journey from the sacred to the stigmatized. In the earliest Vedic whispers, it was a biological rhythm of the cosmos; in the colonial echo, it became a dirty secret of the household.
          </p>
          <div className="p-8 border-l-2 border-terracotta/20 bg-white/30 backdrop-blur-sm italic text-stone/90 font-serif text-lg relative">
            <Quote className="absolute -top-4 -left-4 text-terracotta/20 w-8 h-8" />
            To understand the silence of the modern woman, one must first hear the songs of the ancient Earth.
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="col-span-12 md:col-span-5 mt-12 md:mt-0"
        >
          <div className="aspect-[3/4] bg-white p-4 shadow-soft rotate-2 relative ring-1 ring-stone/5">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10 pointer-events-none" />
             <div className="w-full h-full relative overflow-hidden bg-ivory">
               <img 
                 src={manuscriptImg} 
                 alt="Ancient Manuscript Illustration of Indra's Sin and the Boons of Women"
                 className="w-full h-full object-cover opacity-80"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-ivory/40 to-transparent" />
             </div>
             <p className="mt-4 text-[10px] text-stone/70 font-serif uppercase tracking-widest text-center italic">
               Traditional Depiction: The Transfer of Brahmahatya
             </p>
          </div>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto mt-12">
        <SectionNavigator currentId="intro" />
      </div>
    </section>
  );
};
