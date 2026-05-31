import { ArrowLeft, ArrowRight } from "lucide-react";

export interface AppSection {
  id: string;
  title: string;
  chapter: string;
  tab: "home" | "somatic" | "social" | "practice" | "research";
}

export const SECTIONS_SEQUENCE: AppSection[] = [
  { id: "hero", title: "The Gateway Portal", chapter: "Intro", tab: "home" },
  { id: "intro", title: "When Rest Became Restriction", chapter: "Chapter I", tab: "home" },
  { id: "timeline", title: "Vedic Naturalism to Restriction", chapter: "Chapter II", tab: "home" },
  { id: "eras-exhibition", title: "The Blood of the Cosmos", chapter: "Chapter III", tab: "home" },
  
  { id: "ashaucha", title: "The Meaning of 'Ashaucha'", chapter: "Chapter IV", tab: "social" },
  { id: "stigma", title: "How Care Became Stigma", chapter: "Chapter VII", tab: "social" },
  { id: "taboo-deconstruction-chamber", title: "Deconstructing Taboos", chapter: "Chapter VIII & IX", tab: "social" },
  
  { id: "energetics", title: "Apana Vayu & Energetic Flow", chapter: "Chapter V", tab: "somatic" },
  { id: "biomedical", title: "Ayurveda meets Modern Physiology", chapter: "Chapter VI", tab: "somatic" },
  
  { id: "retain-discard", title: "Restoring Care, Leaving Stigma", chapter: "Modern Choice", tab: "practice" },
  { id: "self-care", title: "Modern Self-Care", chapter: "Chapter X", tab: "practice" },
  
  { id: "research-archive", title: "The Core Research Ledger", chapter: "Chapter XIV", tab: "research" },
  { id: "conclusion", title: "The Civilizational Horizon", chapter: "Conclusion", tab: "research" }
];

interface SectionNavigatorProps {
  currentId: string;
}

export const SectionNavigator = ({ currentId }: SectionNavigatorProps) => {
  return null;
};
