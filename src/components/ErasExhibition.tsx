import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, ArrowRight, Sun, Flame, Scale, Activity, Lock, Eye, ShieldAlert,
  Sparkles, Waves, Heart, BookOpen, Compass, Feather, Award, FileText, CheckCircle,
  History
} from "lucide-react";
import { SectionNavigator } from "./SectionNavigator";

interface Era {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  tone: string;
  summary: string;
  motif: string;
  bgColor: string;
  accentColor: string;
  textColor: string;
  concepts: { title: string; desc: string; italic?: boolean }[];
  details: string;
}

const ERAS_DATA: Era[] = [
  {
    id: 1,
    title: "The Vedic Dawn",
    subtitle: "Sacred • Mythological • Foundational",
    period: "1500 BCE – 500 BCE",
    tone: "Sacred • Mythological • Foundational",
    summary: "The earliest Vedic traditions do not describe menstruation as a social taboo. Women participated in religious life, household rituals, and intellectual discussions, while menstruation was understood as part of the natural cycle of life.",
    motif: "The Sacred Fire & Rebirth Tapestry",
    bgColor: "bg-[#faf6f0]", // warm cream
    accentColor: "text-[#d4af37]", // Antique Gold
    textColor: "text-stone-800",
    concepts: [
      {
        title: "No Menstrual Isolation references in Literature",
        desc: "Vedic literature contains no clear references to menstrual isolation or exclusion from worship."
      },
      {
        title: "Active Ritual Participation of Husbands & Wives",
        desc: "Women participated in household rituals, including the daily Agnihotra fire sacrifice alongside their husbands."
      },
      {
        title: "Symbolic Yajurveda Narrative",
        desc: "A symbolic narrative in the Yajurveda describes Indra sharing the burden of Brahmahatya (the sin of killing a Brahmin) with Earth, Trees, Water, and Women."
      },
      {
        title: "The Compelling Compounding Gifts",
        desc: "In return, each receives a gift: Trees gain regrowth, Water gains purification, Earth gains renewal, and Women receive fertility, menstruation, and childbirth.",
        italic: true
      }
    ],
    details: "In early Vedic thought, menstruation appears within larger ideas of renewal, fertility, and the continuity of life."
  },
  {
    id: 2,
    title: "Upanishadic Thought & Ayurvedic Science",
    subtitle: "Reflective • Philosophical • Intellectual",
    period: "800 BCE – 500 BCE",
    tone: "Reflective • Philosophical • Intellectual",
    summary: "As philosophical traditions turned inward, the human body increasingly became a subject of spiritual reflection. At the same time, Ayurveda developed practical explanations for menstruation and women's health.",
    motif: "The Sacrificial Altar & Apana Vayu",
    bgColor: "bg-[#f5f0e6]", // sandalwood beige
    accentColor: "text-terracotta", // Faded terracotta/peach
    textColor: "text-stone-800",
    concepts: [
      {
        title: "Brihadaranyaka Upanishad comparison",
        desc: "The Brihadaranyaka Upanishad compares reproduction to a sacred sacrifice, using ritual symbolism to describe the creation of new life."
      },
      {
        title: "An Expected Standard Level of Rest",
        desc: "The text also describes a period of rest and seclusion during menstruation before a woman returns to regular activities."
      },
      {
        title: "Practical Explanations through Bodily Energy",
        desc: "The Charaka Samhita explains menstruation through bodily processes and the role of Apana Vayu (downward-moving energy)."
      },
      {
        title: "Ayurvedic Rest regimen",
        desc: "Ayurvedic recommendations included rest, simple food, and avoiding strenuous physical activity during menstruation.",
        italic: true
      }
    ],
    details: "Menstruation was understood through both spiritual symbolism and early medical reasoning."
  },
  {
    id: 3,
    title: "The Dharmashastra Shift",
    subtitle: "Structured • Regulated • Transformative",
    period: "500 BCE – 500 CE",
    tone: "Structured • Regulated • Transformative",
    summary: "As social and religious laws became more codified, menstruation began to be governed by increasingly detailed rules and expectations.",
    motif: "The Scales of Codified Restriction",
    bgColor: "bg-[#f2ebe1]", // parchment ivory
    accentColor: "text-[#bf4f36]", // Copper brown
    textColor: "text-stone-800",
    concepts: [
      {
        title: "Vasistha Dharmasutra description",
        desc: "The Vasistha Dharmasutra described menstrual practices through ideas of restraint, simplicity, and disciplined living."
      },
      {
        title: "Saddled Recurring purification process",
        desc: "The Baudhayana Dharmasutra presented menstruation as a recurring process of purification, stating that women possess a unique means of renewal."
      },
      {
        title: "Specific Classification schemes with Smritis",
        desc: "Texts such as the Angirasa Smriti and Apastamba Smriti introduced classifications and rules associated with different days of menstruation."
      },
      {
        title: "Vyasa Smriti separation prescriptions",
        desc: "The Vyasa Smriti and later interpretations of the Manusmriti prescribed various forms of separation and restrictions during menstruation.",
        italic: true
      }
    ],
    details: "This period marks the gradual shift from personal practices and guidance toward formal social and religious regulations."
  },
  {
    id: 4,
    title: "Alternative Spiritual Traditions",
    subtitle: "Diverse • Reformist • Challenging",
    period: "500 CE – 1500 CE",
    tone: "Diverse • Reformist • Challenging",
    summary: "Not all Indian traditions viewed menstruation through the same lens. Several spiritual movements developed interpretations that differed from purity-based restrictions.",
    motif: "The Flowering Lotus & Rebel Sword",
    bgColor: "bg-[#faf4f2]", // muted rose-tinted cream
    accentColor: "text-rose-500", // Rose accent
    textColor: "text-stone-800",
    concepts: [
      {
        title: "Shakti Sangama Tantra custom",
        desc: "The Shakti Sangama Tantra described woman as the embodiment of creation and treated menstrual blood (Rakta) as a sacred expression of Shakti."
      },
      {
        title: "Feminine biological processes as Source of Power",
        desc: "Many Tantric traditions viewed feminine biological processes as sources of spiritual power rather than impurity."
      },
      {
        title: "Early Buddhist scriptural approach",
        desc: "Early Buddhist traditions generally regarded menstruation as a natural bodily function without moral significance."
      },
      {
        title: "Criticisms of Taboos by Guru Nanak",
        desc: "Guru Nanak and later Sikh Gurus criticized menstrual taboos and supported women's full participation in prayer, worship, and community life.",
        italic: true
      }
    ],
    details: "Indian history contained multiple perspectives on menstruation, and restrictive views were not universally accepted."
  },
  {
    id: 5,
    title: "The Medieval Consolidation",
    subtitle: "Hierarchical • Social • Restrictive",
    period: "1200 CE – 1800 CE",
    tone: "Hierarchical • Social • Restrictive",
    summary: "As societies became more closely tied to land ownership, inheritance, and caste boundaries, menstrual practices became increasingly connected to family and social order.",
    motif: "The Closed Gate & Legal Seal",
    bgColor: "bg-[#f4f0ec]", // cold cream/clay
    accentColor: "text-emerald-800", // Forest/Castes theme
    textColor: "text-[#3a3530]",
    concepts: [
      {
        title: "Invasive Mobility boundaries with Land Ownership",
        desc: "Concerns about lineage, inheritance, and property strengthened controls around women's mobility and behavior in many communities."
      },
      {
        title: "Reification of Purity paradigms",
        desc: "Ideas of purity and household regulation became more group-prominent in everyday life."
      },
      {
        title: "Tryambakayajavan's absolute codification manual",
        desc: "The Stridharmapaddhati, compiled by Tryambakayajavan in the 18th century, outlined detailed menstrual rules and consequences for violating them."
      },
      {
        title: "Action-consequence outcomes on offspring",
        desc: "The text linked specific actions during menstruation—such as bathing, applying cosmetics, or intimacy—with predicted effects on future offspring.",
        italic: true
      }
    ],
    details: "Menstrual practices became increasingly tied to broader concerns about family lineage, caste boundaries, and social stability."
  },
  {
    id: 6,
    title: "Puberty, Marriage, and Reform",
    subtitle: "Constrained • Transitional • Reform-Oriented",
    period: "1800 CE – 1950 CE",
    tone: "Constrained • Transitional • Reform-Oriented",
    summary: "In many communities, the onset of menstruation became closely associated with expectations around marriage, family honor, and social responsibility.",
    motif: "The Closed Cage & Fading Innocence",
    bgColor: "bg-[#f7f2eb]", // soft parchment
    accentColor: "text-[#a35c5c]", // Dusty rose
    textColor: "text-stone-850",
    concepts: [
      {
        title: "The Connection of Puberty with Marriage pressure",
        desc: "Several later Smriti traditions connected a girl's first menstruation with increasing pressure to arrange marriage."
      },
      {
        title: "Continuation of Early Child Marriage",
        desc: "Ideas surrounding virginity, family reputation, and social status contributed to the continuation of child marriage practices."
      },
      {
        title: "Challenging traditions via reform initiatives",
        desc: "Reform movements and public debates gradually challenged these customs."
      },
      {
        title: "The Century of Regulatory legal steps",
        desc: "Legal measures such as the 1894 Mysore Regulation, 1904 Baroda Early Marriage Prevention Act, and 1929 Child Marriage Restraint Act (Sarda Act) introduced increasing protections for girls.",
        italic: true
      }
    ],
    details: "This period saw both the continuation of traditional expectations and the beginning of major legal reforms."
  },
  {
    id: 7,
    title: "From Silence to Recognition",
    subtitle: "Modern • Public Health • Rights-Based",
    period: "1950 CE – 2026 CE",
    tone: "Modern • Public Health • Rights-Based",
    summary: "Following independence, menstruation remained largely absent from public discussion for decades. Over time, healthcare workers, activists, educators, courts, and policymakers brought menstrual health into national focus.",
    motif: "The Broken Taboo & Ink of Justice",
    bgColor: "bg-[#edf2ee]", // soft organic botanical cream
    accentColor: "text-[#347c5d]", // Botanical emerald
    textColor: "text-stone-850",
    concepts: [
      {
        title: "Post-Independence silence on menstrual health",
        desc: "During the early decades after independence, menstrual health received little attention in public policy or education."
      },
      {
        title: "Widely available products as stigma persists",
        desc: "Commercial products became more widely available, though social stigma remained strong."
      },
      {
        title: "Reorientation via Active Grassroots efforts",
        desc: "Campaigns such as Goonj's \"Not Just a Piece of Cloth\" helped shift public discussion toward health, dignity, and access."
      },
      {
        title: "Institutional changes and support networks",
        desc: "The Menstrual Hygiene Scheme (2011) expanded government involvement in menstrual health initiatives."
      },
      {
        title: "A Tax-Free biological transition",
        desc: "In 2018, menstrual products were exempted from GST following nationwide advocacy efforts."
      },
      {
        title: "Digital representation breakthroughs",
        desc: "Public campaigns gradually challenged long-standing taboos, including the use of realistic representations of menstrual blood in media."
      },
      {
        title: "January 30, 2026 landmark Supreme Court Ruling",
        desc: "On 30 January 2026, in Dr. Jaya Thakur v. Union of India, the Supreme Court recognized menstrual hygiene as a matter connected to dignity, equality, education, and the right to life.",
        italic: true
      }
    ],
    details: "The modern era transformed menstruation from a largely private and stigmatized topic into an issue of public health, dignity, education, and constitutional rights."
  }
];

const CHRONOLOGICAL_STEPS = [
  { era: "The Vedic Dawn", desc: "There is no evidence of menstrual taboo in the earliest Vedic texts.", period: "1500 BCE", color: "from-amber-200 to-amber-400" },
  { era: "Upanishadic Thought", desc: "Ayurveda developed practical explanations for menstruation and women's health.", period: "800 BCE", color: "from-orange-200 to-orange-400" },
  { era: "The Dharmashastra Shift", desc: "As social and religious laws became codified, menstruation began to be governed by detailed rules.", period: "500 BCE", color: "from-red-200 to-red-400" },
  { era: "Alternative Traditions", desc: "Indian history contained multiple perspectives of Tantra, Buddhism, and Sikhism.", period: "500 CE", color: "from-purple-200 to-purple-400" },
  { era: "Medieval Consolidation", desc: "Menstrual practices became increasingly connected to family lineage and social order.", period: "1200 CE", color: "from-yellow-600 to-yellow-800" },
  { era: "Puberty & Reform", desc: "Traditional expectations alongside the beginning of major legal reforms.", period: "1800 CE", color: "from-stone-400 to-stone-500" },
  { era: "Silence to Recognition", desc: "The Supreme Court recognized menstrual hygiene as a fundamental constitutional right.", period: "1950 CE", color: "from-emerald-400 to-emerald-600" }
];

export const ErasExhibition = () => {
  const [activeEraId, setActiveEraId] = useState<number | null>(null);
  const [showTimeline, setShowTimeline] = useState<boolean>(false);
  const [hoveredConceptIndex, setHoveredConceptIndex] = useState<number | null>(null);
  const timelineScrollRef = useRef<HTMLDivElement>(null);

  const activeEra = activeEraId !== null ? ERAS_DATA.find(e => e.id === activeEraId) : null;

  useEffect(() => {
    setHoveredConceptIndex(null);
  }, [activeEraId]);

  const handleNextEra = () => {
    if (activeEraId === null) return;
    if (activeEraId < ERAS_DATA.length) {
      setActiveEraId(activeEraId + 1);
    } else {
      setActiveEraId(1);
    }
  };

  const handlePrevEra = () => {
    if (activeEraId === null) return;
    if (activeEraId > 1) {
      setActiveEraId(activeEraId - 1);
    } else {
      setActiveEraId(ERAS_DATA.length);
    }
  };

  const getMotifIcon = (id: number) => {
    switch (id) {
      case 1: return <Sun className="w-8 h-8 text-[#d4af37]" />;
      case 2: return <Flame className="w-8 h-8 text-terracotta" />;
      case 3: return <Scale className="w-8 h-8 text-[#bf4f36]" />;
      case 4: return <Sparkles className="w-8 h-8 text-rose-500" />;
      case 5: return <Lock className="w-8 h-8 text-emerald-800" />;
      case 6: return <Eye className="w-8 h-8 text-[#a35c5c]" />;
      case 7: return <Award className="w-8 h-8 text-[#347c5d]" />;
      default: return <Waves className="w-8 h-8" />;
    }
  };

  return (
    <section id="eras-exhibition" className="relative pt-32 pb-16 bg-ivory overflow-hidden border-b border-stone/5">
      {/* Delicate background overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-stone-100/30 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <AnimatePresence mode="wait">
          {activeEra === null ? (
            // main landing list view
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="space-y-20"
            >
              <div className="text-center max-w-4xl mx-auto space-y-6">
                <span className="text-md font-mono tracking-[0.3em] font-extrabold text-[#bf4f36] uppercase block mb-4">
                  Chapter III: The Blood of the Cosmos
                </span>
                <h2 className="font-display text-4xl md:text-6xl text-stone leading-tight">
                  The Blood of the Cosmos
                </h2>
                <p className="font-serif text-xl text-stone/70 italic leading-relaxed text-balance max-w-3xl mx-auto">
                  How Menstruation in India Changed from a Symbol of Life to a Social Taboo
                </p>
                <div className="w-24 h-px bg-stone/20 mx-auto pt-2" />
                <p className="text-stone/95 font-serif max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
                  Travel through seven major periods of Indian history and discover how attitudes toward menstruation changed over time.
                </p>
                <p className="text-stone/85 font-serif max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                  Explore how religion, social structures, property systems, caste dynamics, colonial policies, and modern institutions influenced the rules surrounding women's bodies and menstrual practices.
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-6">
                  <button 
                    onClick={() => setShowTimeline(!showTimeline)}
                    className="px-6 py-2.5 rounded-full border border-stone/20 text-stone font-serif text-xs uppercase tracking-widest hover:bg-stone hover:text-white transition-all flex items-center gap-2"
                  >
                    <Compass className="w-4 h-4" />
                    {showTimeline ? "Hide Master Timeline" : "Explore Master Timeline"}
                  </button>
                </div>
              </div>

              {/* Master Timeline segment */}
              {showTimeline && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-stone/5 border border-stone/10 p-8 rounded-sm overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-display text-lg text-stone flex items-center gap-2">
                      <History className="w-5 h-5 text-terracotta" /> The Chronological Shift
                    </h4>
                    <span className="text-stone/40 text-xs font-mono">Use horizontal scroll &rarr;</span>
                  </div>
                  
                  <div 
                    ref={timelineScrollRef}
                    className="flex gap-6 overflow-x-auto pb-6 pt-2 select-none no-scrollbar snap-x cursor-grab"
                  >
                    {CHRONOLOGICAL_STEPS.map((step, idx) => (
                      <div 
                        key={idx} 
                        className="min-w-[280px] max-w-[320px] bg-white border border-stone/5 shadow-soft p-6 rounded-sm flex-shrink-0 snap-center relative hover:border-terracotta/20 transition-all group"
                      >
                        <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-gradient-to-tr group-hover:scale-125 transition-all shadow-md mt-1" style={{ backgroundColor: `rgb(191, 79, 54)` }} />
                        <span className="font-mono text-xs text-gold/80 block mb-1 font-bold">{step.period}</span>
                        <h5 className="font-display text-base text-stone mb-2">{step.era}</h5>
                        <p className="font-serif text-xs leading-relaxed text-stone/60">{step.desc}</p>
                        
                        {idx < CHRONOLOGICAL_STEPS.length - 1 && (
                          <div className="absolute top-1/2 -right-4 translate-y-12 w-8 h-px bg-stone/20 hidden md:block" />
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Grid of 7 Eras */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ERAS_DATA.map((era, index) => (
                  <motion.div
                    key={era.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`group bg-[#faf9f6] border border-stone/10 rounded-sm p-8 shadow-sm hover:shadow-soft hover:border-terracotta/20 transition-all duration-500 flex flex-col justify-between ${
                      index === 6 
                        ? "md:col-span-2 md:max-w-xl md:mx-auto lg:col-span-1 lg:col-start-2 w-full" 
                        : ""
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-display font-bold italic text-stone/20 text-3xl">
                          0{era.id}
                        </span>
                        <div className="p-2.5 bg-stone/5 rounded-full group-hover:bg-terracotta/5 transition-colors">
                          {getMotifIcon(era.id)}
                        </div>
                      </div>

                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#bf4f36]/70 block mb-2">
                        {era.period}
                      </span>
                      <h3 className="font-display text-2xl text-stone mb-3 leading-tight group-hover:text-terracotta transition-colors">
                        {era.title}
                      </h3>
                      <p className="text-stone/40 text-xs italic font-serif mb-4 block">
                        Tone: {era.tone}
                      </p>
                      <p className="font-serif text-sm text-stone/70 leading-relaxed mb-6">
                        {era.summary}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setActiveEraId(era.id);
                        document.getElementById("eras-exhibition")?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full mt-4 py-3 bg-stone hover:bg-terracotta text-white font-serif uppercase text-[10px] tracking-widest transition-all rounded-sm flex items-center justify-center gap-2"
                    >
                      <BookOpen className="w-3.5 h-3.5" /> Read Chapter
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Quote decoration */}
              <div className="text-center py-6 border-t border-stone/5">
                <span className="font-serif italic text-stone/50 text-sm">
                  “The reclamation of the feminine biological rhythm is India's next essential civilizational milestone.”
                </span>
              </div>
            </motion.div>
          ) : (
            // Immersive individual era multi-page view
            <motion.div
              key="era-detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              className={`rounded-sm p-8 md:p-16 border border-stone/15 shadow-soft relative overflow-hidden transition-colors duration-700 ${activeEra.bgColor}`}
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-stone-300/10 rounded-full blur-[100px] pointer-events-none" />
              
              {/* Top Navigation */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone/10 pb-8 mb-12">
                <button
                  onClick={() => setActiveEraId(null)}
                  className="px-5 py-2 rounded-full border border-stone/20 hover:border-stone/60 text-stone font-serif text-xs uppercase tracking-widest transition-all flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Chapters
                </button>

                <div className="flex items-center gap-6">
                  <span className="font-display font-medium text-stone/30 text-lg">
                    Exhibition {activeEraId} of 7
                  </span>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrevEra}
                      className="p-2 border border-stone/20 rounded-full hover:bg-stone/5 transition-all text-stone"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNextEra}
                      className="p-2 border border-stone/20 rounded-full hover:bg-stone/5 transition-all text-stone"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Content Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Left side Metadata & Visual Motif Column */}
                <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone/5 rounded-full border border-stone/5">
                      <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
                      <span className="font-mono text-[10px] font-bold text-stone/70 tracking-widest uppercase">{activeEra.period}</span>
                    </div>

                    <h1 className="font-display text-4xl md:text-5xl text-stone leading-tight">
                      {activeEra.title}
                    </h1>

                    <p className={`font-serif text-lg italic ${activeEra.accentColor} font-bold`}>
                      {activeEra.subtitle}
                    </p>
                  </div>

                  <div className="p-6 bg-white/40 border border-stone/5 rounded shadow-soft space-y-4">
                    <div className="flex items-center gap-3">
                      {getMotifIcon(activeEra.id)}
                      <span className="font-display font-bold text-xs uppercase tracking-wider text-stone/70">
                        {activeEra.motif}
                      </span>
                    </div>
                    <div className="w-full h-px bg-stone/10" />
                    <p className="text-xs font-serif text-stone/60 leading-relaxed">
                      Tone: <span className="font-bold text-stone/80">{activeEra.tone}</span>. This epoch marks a core historical progression of how feminine biology resolved alongside Indian administrative rules.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setActiveEraId(null)}
                      className="w-full py-3 px-4 bg-white hover:bg-stone border border-stone/20 text-stone hover:text-white transition-all text-xs font-serif uppercase tracking-widest rounded-sm shadow-soft flex items-center justify-center gap-2 font-medium"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Return to Main Exhibition Menu
                    </button>
                  </div>
                </div>

                {/* Right side Comprehensive Core Concepts Column */}
                <div id="era-concepts" className="lg:col-span-8 space-y-10 border-l border-stone/10 pl-0 lg:pl-12">
                  <div className="space-y-6">
                    <h3 className="font-display text-xl text-stone uppercase tracking-widest">
                      Historical Narratives & Interpretations
                    </h3>
                    <div className="w-12 h-0.5 bg-terracotta" />
                  </div>

                  <div className="space-y-8">
                    {activeEra.concepts.map((concept, index) => {
                      const isHighlighted = hoveredConceptIndex === index || (hoveredConceptIndex === null && concept.italic);
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          onMouseEnter={() => setHoveredConceptIndex(index)}
                          onMouseLeave={() => setHoveredConceptIndex(null)}
                          className={`p-6 rounded-sm transition-all duration-300 border cursor-pointer ${
                            isHighlighted 
                              ? "bg-white/70 border-stone/10 shadow-soft border-l-[3px] border-l-terracotta" 
                              : "bg-transparent border-transparent hover:bg-white/30 hover:border-stone/5"
                          }`}
                        >
                          <h4 className="font-display text-lg text-stone font-bold mb-2 flex items-center gap-2">
                            <CheckCircle className={`w-4 h-4 transition-colors ${isHighlighted ? "text-terracotta" : "text-stone/40"}`} />
                            {concept.title}
                          </h4>
                          
                          <p className={`font-serif text-sm leading-relaxed text-stone/85 ${isHighlighted ? "italic font-medium text-stone" : ""}`}>
                            {concept.desc}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Summary Callout Block */}
                  <div className="p-8 bg-ivory/60 border border-stone/10 rounded-sm italic font-serif text-sm text-stone/85 leading-relaxed relative">
                    <span className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-white border border-stone/10 flex items-center justify-center text-xs font-serif font-bold text-gold">!</span>
                    “{activeEra.details}”
                  </div>
                  
                  {/* Action row */}
                  <div className="flex justify-between items-center pt-8 border-t border-stone/10">
                    <button
                      onClick={() => setActiveEraId(null)}
                      className="px-6 py-2.5 bg-stone text-white text-xs uppercase tracking-widest font-serif rounded-sm hover:bg-terracotta transition-all"
                    >
                      Overview Menu
                    </button>

                    <div className="flex gap-4">
                      {activeEraId > 1 && (
                        <button
                          onClick={handlePrevEra}
                          className="px-4 py-2 border border-stone/20 text-stone text-xs uppercase tracking-widest font-serif rounded-sm hover:-translate-x-1 transition-all flex items-center gap-1"
                        >
                          &larr; Prev Era
                        </button>
                      )}
                      
                      {activeEraId < ERAS_DATA.length && (
                        <button
                          onClick={handleNextEra}
                          className="px-4 py-2 bg-[#bf4f36] text-white text-xs uppercase tracking-widest font-serif rounded-sm hover:translate-x-1 transition-all flex items-center gap-1"
                        >
                          Next Era &rarr;
                        </button>
                      )}
                    </div>
                  </div>
                </div>

              </div>

            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-16 border-t border-stone/5">
          <SectionNavigator currentId="eras-exhibition" />
        </div>
      </div>
    </section>
  );
};
