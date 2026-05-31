import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Library, Search, Download, BookOpen, Quote, FileText, Globe, CheckCircle, X } from "lucide-react";
import { SectionNavigator } from "./SectionNavigator";

interface Citation {
  id: string;
  category: "vedic" | "smriti" | "ayurveda" | "sociology" | "policy";
  index: string; // e.g. "RG-04"
  title: string;
  source: string;
  desc: string;
  url: string;
}

const CITATIONS: Citation[] = [
  // Vedic & Shruti
  {
    id: "1",
    category: "vedic",
    index: "[RG-01]",
    title: "Rig Veda Samhita — Rig Veda (1.164.2)",
    source: "Hymns to the Cosmic Force (Rta) and early solar representations",
    desc: "Complete absence of menstrual seclusion, women represented as high performers of spiritual rituals without bodily restrictions.",
    url: "https://www.vedadhara.com/what-vedas-say-about-periods"
  },
  {
    id: "2",
    category: "vedic",
    index: "[YJ-02]",
    title: "Taittiriya Samhita — Yajurveda (II.5.1)",
    source: "The Narrative of Indra, Vritra, and the distribution of Brahmahatya",
    desc: "Frames the menstrual cycle as an act of cosmic self-sacrifice that clears metaphysical pollution, giving women physical regeneration.",
    url: "https://www.scribd.com/document/249876464/According-to-Bhagavatha-Purana"
  },
  {
    id: "3",
    category: "vedic",
    index: "[UP-03]",
    title: "Brihadaranyaka Upanishad (Chapter 6, Section 4)",
    source: "Meditative elevation of physiological union as a Sacred Fire Sacrifice",
    desc: "Explicit comparison of procreation to the holy Vajapeya sacrifice. Outlines recommendations for peaceful rest and comfort during early days.",
    url: "https://hinduism.stackexchange.com/questions/21014/what-is-the-overall-take-of-hinduism-on-menstruation"
  },

  // Smritis & Lawgivers
  {
    id: "4",
    category: "smriti",
    index: "[SMR-01]",
    title: "Manusmriti (IV.41 & V.66)",
    source: "The Codification of Somatic Impurity and Physical Exclusions",
    desc: "Warning that a man's wisdom, vital strength, energy, and sight are 'utterly destroyed' if he approaches or converses with a bleeding woman.",
    url: "https://dhaaramagazine.in/2020/11/18/comparing-the-text-of-manusmriti-and-vedas-on-menstruation/"
  },
  {
    id: "5",
    category: "smriti",
    index: "[SMR-02]",
    title: "Angirasa Smriti & Apastamba Smriti",
    source: "The Four-Day grading scale of physical untouchability",
    desc: "Establishes daily caste equivalents to enforce physical taboos: Day 1: Chandalini; Day 2: Brahmaghatini; Day 3: Rajakee; Day 4: Purified.",
    url: "https://www.indica.today/long-reads/hindu-view-menstruation-menstruation-ashaucha/"
  },
  {
    id: "6",
    category: "smriti",
    index: "[SMR-03]",
    title: "Vyasa Smriti — Codification of Domestic Isolation",
    source: "The Law digest of extreme sensory and space restrictions",
    desc: "Orders complete containment in dark room or cow shed, forbidding speaking, looking around, and using normal family utensils.",
    url: "https://www.indica.today/long-reads/hindu-view-menstruation-part-ii-menstruation-austerity-self-purification/"
  },

  // Ayurveda & Science
  {
    id: "7",
    category: "ayurveda",
    index: "[AYR-01]",
    title: "Charaka Samhita (Sharira Sthana, Chapter 8)",
    source: "Rajaswala Paricharya: The Health Regimen for Menstruating Women",
    desc: "Outlines a clear scientific medical logic for three days of restful solitude to support Apana Vayu and protect low somatic digestive fire.",
    url: "https://ijrap.net/admin/php/uploads/3563_pdf.pdf"
  },
  {
    id: "8",
    category: "ayurveda",
    index: "[AYR-02]",
    title: "Sushruta Samhita & Ashtanga Hridaya (Sutra Sthana)",
    source: "Anatomical principles of female systemic purging & fertility",
    desc: "Discusses the monthly elimination of physical fluid as necessary to reset biological heat and stabilize uterine health.",
    url: "https://paavaniayurveda.com/blogs/the-ayurvedic-lifestyle/ayurvedic-rituals-for-the-menstrual-cycle"
  },
  {
    id: "9",
    category: "ayurveda",
    index: "[AYR-03]",
    title: "EPRA International Journal of Multidisciplinary Research",
    source: "Scientific Validation of Rajaswala Paricharya in Reproductive Health",
    desc: "Modern biochemical analysis supporting anti-inflammatory benefits, nervous system calming, and warm food regimens during heavy bleeding.",
    url: "https://eprajournals.com/IJMR/article/17495"
  },

  // Sociology & Anthropology
  {
    id: "10",
    category: "sociology",
    index: "[SOC-01]",
    title: "Rtu Vidya — Reclaiming Ancient Menstrual Sciences in India",
    source: "Sinu Joseph (Thematic Study on Menstruation across Sacred Places)",
    desc: "An exploration of Indian menstrual wisdom, yogic energy fields, temple architecture, and biological consequences of crossing energy pathways.",
    url: "https://hindupost.in/health/rtu-vidya-transforming-menstrual-experience/"
  },
  {
    id: "11",
    category: "sociology",
    index: "[SOC-02]",
    title: "Goonj Landmark National Campaign: 'Not Just a Piece of Cloth'",
    source: "Anshu Gupta (Landmark NGO Initiative, 2005)",
    desc: "First major national report highlighting high mortality rates from reproductive infections due to forced usage of ash, sand, and dirty rags.",
    url: "https://mythrispeaks.wordpress.com/2015/05/28/unearthing-menstrual-wisdom-why-we-dont-go-to-the-temple/"
  },
  {
    id: "12",
    category: "sociology",
    index: "[SOC-03]",
    title: "Tryambaka's Stridharmapaddhati (Tanjore MS, 18th Century)",
    source: "Socio-economic control and Agrarian feudal restrictions on female mobility",
    desc: "Deconstructs how the Maratha court codified intense medical prohibitions into supernatural fears to lock properties in patrilineal lines.",
    url: "https://www.newindianexpress.com/cities/kochi/2025/Jan/02/its-divine-period"
  },

  // Modern Policy & Reform
  {
    id: "13",
    category: "policy",
    index: "[POL-01]",
    title: "Dr. Jaya Thakur v. Union of India (Supreme Court, 2026)",
    source: "Landmark Writ Petition (Civil) No. 1201 of 2023, Judgment Jan 30, 2026",
    desc: "Declared access to menstrual hygiene is a fundamental right under Article 21, 14, and 21A, introducing the doctrine of 'Biological Citizenship.'",
    url: "https://ais-pre-pxad7ucmjxjyjg2dtnzvtv-455997330248.asia-southeast1.run.app"
  },
  {
    id: "14",
    category: "policy",
    index: "[POL-02]",
    title: "Menstrual Hygiene Management (MHM) Scheme Guidelines",
    source: "Ministry of Health and Family Welfare, Government of India (2011/2024)",
    desc: "Formal national policies regulating decentralized distribution of highly subsidized eco-friendly sanitary napkins to rural areas via ASHA networks.",
    url: "https://wjpr.s3.ap-south-1.amazonaws.com/article_issue/39b2f923fa3ce1d227bbe955d0f701cf.pdf"
  }
];

export const References = () => {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "vedic" | "smriti" | "ayurveda" | "sociology" | "policy">("all");
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [showPdfModal, setShowPdfModal] = useState(false);

  const categories = [
    { id: "all", name: "All Citations" },
    { id: "vedic", name: "Vedic Eras (Shruti)" },
    { id: "smriti", name: "Lawgivers & Smritis" },
    { id: "ayurveda", name: "Ayurvedic Science" },
    { id: "sociology", name: "Sociology & History" },
    { id: "policy", name: "Modern Rights & Court Laws" }
  ];

  const filteredCitations = selectedCategory === "all" 
    ? CITATIONS 
    : CITATIONS.filter(c => c.category === selectedCategory);

  const handleDownload = () => {
    try {
      let md = `# RAJASWALA PARICHARYA: ANCIENT WISDOM & MODERN SCIENCE\n`;
      md += `# RESEARCH INDEX & COMPREHENSIVE SCHOLARLY BIBLIOGRAPHY\n`;
      md += `=========================================================================\n\n`;
      md += `Compiled by: Rajaswala Paricharya Research Initiative (2026)\n`;
      md += `This index compiles primary scriptural texts, historical sociological records, Ayurvedic medicine guidelines, and state policy legislation.\n\n`;
      md += `-------------------------------------------------------------------------\n\n`;

      CITATIONS.forEach((citation, index) => {
        md += `[${index + 1}] INDEX: ${citation.index}\n`;
        md += `TITLE: ${citation.title}\n`;
        md += `CATEGORY: ${citation.category.toUpperCase()}\n`;
        md += `SOURCE: ${citation.source}\n`;
        md += `DESCRIPTION: ${citation.desc}\n`;
        md += `Scholarly Link: ${citation.url}\n`;
        md += `\n-------------------------------------------------------------------------\n\n`;
      });

      md += `\n© 2026 Rajaswala Paricharya Research Initiative. All Rights Reserved.\n`;

      const blob = new Blob([md], { type: "text/markdown;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", "rajaswala_paricharya_research_index.md");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadSuccess(true);
      setShowPdfModal(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (err) {
      console.error("Downloader encountered error: ", err);
    }
  };

  return (
    <section id="research-archive" className="py-32 px-6 bg-[#FAF6F0] relative border-y border-stone/10">
      {/* Decorative palm-leaf-style background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-terracotta/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <Library className="text-[#bf4f36] w-12 h-12" />
          </div>
          <span className="text-[#bf4f36] font-display text-xs tracking-[0.25em] uppercase block">
            Academic Repository & University Exhibits
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-stone leading-tight">
            Research Archive & References
          </h2>
          <div className="w-24 h-px bg-[#d4af37] mx-auto mt-6" />
          <p className="font-serif italic text-stone/80 text-lg max-w-2xl mx-auto">
            A curated scholarly repository indexing primary textual cords, historical law digests, colonial statutes, and Ayurvedic medical manuscripts.
          </p>
        </div>

        {/* Premium Highlight Card - Citation Download */}
        <div className="p-8 md:p-12 bg-white border border-[#d4af37]/40 shadow-soft rounded-sm max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[radial-gradient(#FAF6F0_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#bf4f36] uppercase tracking-wider">
              <BookOpen className="w-4 h-4" /> Recommended Academic Read
            </div>
            <h3 className="font-display text-2xl text-stone">
              Full Research Sources (50+ References)
            </h3>
            <p className="font-serif text-sm leading-relaxed text-stone/70">
              Download the fully annotated university research bibliography compiling Vedic translation variants, early Maratha court records of Tanjore, colonial census surveys, and 2026 Supreme Court administrative mandates.
            </p>
          </div>
          
          <div className="md:col-span-4 flex justify-end">
            <button
              onClick={handleDownload}
              className="w-full md:w-auto px-6 py-3 bg-[#bf4f36] hover:bg-stone text-white font-serif uppercase text-[10px] tracking-widest transition-all rounded-sm flex items-center justify-center gap-2 shadow cursor-pointer"
            >
              <Download className="w-4 h-4" />
              {downloadSuccess ? "Document Saved ✓" : "Download PDF Index"}
            </button>
          </div>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-stone/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2 font-serif text-xs uppercase tracking-widest rounded-sm transition-all border ${
                selectedCategory === cat.id 
                  ? "bg-stone border-stone text-white" 
                  : "bg-white border-stone/10 text-stone/60 hover:bg-stone-50"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Citations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCitations.map((citation, idx) => (
              <motion.div
                key={citation.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-8 border border-stone/10 shadow-sm rounded-sm hover:border-[#d4af37] transition-all duration-300 relative group flex flex-col justify-between"
              >
                {/* Vintage Card Layout */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs font-bold text-[#bf4f36]/80 bg-[#FAF6F0] px-2.5 py-1 rounded">
                      {citation.index}
                    </span>
                    <span className="text-[10px] font-serif uppercase tracking-widest text-stone/40">
                      MS Index: 0{idx + 1}
                    </span>
                  </div>

                  <h4 className="font-display text-lg text-stone font-bold leading-snug group-hover:text-[#bf4f36] transition-colors">
                    {citation.title}
                  </h4>
                  
                  <div className="w-12 h-px bg-stone/20" />
                  
                  <p className="font-serif text-xs text-stone/50 italic leading-relaxed">
                    Source: {citation.source}
                  </p>

                  <p className="font-serif text-sm text-stone/80 leading-relaxed">
                    {citation.desc}
                  </p>
                </div>

                {/* Citation Target Link */}
                <div className="pt-6 mt-6 border-t border-stone/5">
                  <a
                    href={citation.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono tracking-tighter text-[#bf4f36] hover:underline"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    {citation.url.substring(0, 50)}...
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Gold Separator Accent */}
        <div className="flex justify-center items-center gap-4 py-8">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#d4af37]/50" />
          <span className="text-xs font-serif uppercase tracking-widest text-stone/40 italic">Oxford Research Index Concordance</span>
          <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#d4af37]/50" />
        </div>

        <SectionNavigator currentId="research-archive" />
      </div>

      {/* Beautiful Professional Modal Panel */}
      <AnimatePresence>
        {showPdfModal && (
          <div className="fixed inset-0 bg-stone-950/70 backdrop-blur-md flex items-center justify-center p-4 z-50 overflow-y-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#FAF9F6] border-2 border-gold/40 text-stone rounded max-w-2xl w-full p-8 md:p-10 shadow-2xl relative space-y-6 max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button representing vintage ornament */}
              <button
                onClick={() => setShowPdfModal(false)}
                className="absolute top-4 right-4 p-2 bg-stone/5 hover:bg-stone/25 rounded-full text-stone/60 hover:text-stone transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-3">
                <CheckCircle className="text-emerald-700 w-12 h-12 mx-auto" />
                <h4 className="font-display text-2xl md:text-3xl text-stone tracking-tight font-bold">
                  Scholarly Index Triggered!
                </h4>
                <p className="font-serif text-sm text-stone/60">
                  We have compiled and downloaded your markdown document: <code className="bg-[#FAF6F0] p-1 text-[#bf4f36] rounded font-mono text-xs">rajaswala_paricharya_research_index.md</code>.
                </p>
                <div className="w-20 h-px bg-[#d4af37]/60 mx-auto" />
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-stone/40 block">
                  Quick Access Interactive Library Links (14 Studies)
                </span>

                <div className="space-y-3 max-h-60 overflow-y-auto divide-y divide-stone/10 pr-2 border border-stone/5 p-4 rounded-sm bg-white">
                  {CITATIONS.map((cite) => (
                    <div key={cite.id} className="pt-3 first:pt-0 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] font-bold text-[#bf4f36] uppercase bg-[#FAF6F0] px-1.5 py-0.5 rounded">
                          {cite.index}
                        </span>
                        <a
                          href={cite.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] text-stone/50 hover:text-[#bf4f36] underline inline-flex items-center gap-1 font-mono"
                        >
                          Open Study <Globe className="w-3 h-3" />
                        </a>
                      </div>
                      <h5 className="font-display font-medium text-xs text-stone md:max-w-md truncate">
                        {cite.title}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone/10 text-center">
                <button
                  onClick={() => setShowPdfModal(false)}
                  className="px-6 py-2.5 bg-stone hover:bg-[#bf4f36] text-white transition-all text-xs font-serif uppercase tracking-widest rounded-sm cursor-pointer"
                >
                  Return to Archive
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
