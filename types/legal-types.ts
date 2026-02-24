export interface LegalSubsection {
  title: string;
  content?: string;
  points?: string[];
}

export interface LegalSectionItem {
  label: string;
  content: string;
}

export interface LegalSection {
  id: string;
  title: string;
  content?: string;
  subsections?: LegalSubsection[];
  items?: LegalSectionItem[];
  details?: string[];
  grievance?: string;
  extra?: string;
  footer?: string;
}

export interface LegalContent {
  title: string;
  lastUpdated: string;
  introduction: {
    id: string;
    title: string;
    content: string;
  };
  sections: LegalSection[];
}
