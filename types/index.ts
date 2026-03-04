// ─── Project Types ────────────────────────────────────────────────────────────

export type ProjectCategory =
  | 'residential'
  | 'commercial'
  | 'land-development'
  | 'infrastructure';

export type ProjectStatus = 'ongoing' | 'completed' | 'planning';

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  status: ProjectStatus;
  location: string;
  year: number;
  area: string;
  description: string;
  longDescription: string;
  coverImage: ProjectImage;
  images: ProjectImage[];
  specs: ProjectSpec[];
  featured: boolean;
  mapEmbedUrl?: string;
  coordinates?: { lat: number; lng: number };
}

// ─── Service Types ─────────────────────────────────────────────────────────────

export interface ServiceFeature {
  text: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: ServiceFeature[];
  color: string;
}

// ─── Testimonial Types ─────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
  rating: number;
  project?: string;
}

// ─── About / Profile Types ─────────────────────────────────────────────────────

export interface TimelineEvent {
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

// ─── Calculator Types ──────────────────────────────────────────────────────────

export type ConstructionType = 'basic' | 'standard' | 'premium' | 'luxury';
export type LocationTier = 'tier1' | 'tier2' | 'tier3';

export interface CalculatorInput {
  plotArea: number;
  floors: number;
  constructionType: ConstructionType;
  locationTier: LocationTier;
  includeInterior: boolean;
  includeParking: boolean;
}

export interface CostBreakdown {
  construction: number;
  materials: number;
  labor: number;
  interior: number;
  parking: number;
  contingency: number;
  total: number;
}

// ─── Form Types ────────────────────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
  projectId?: string;
}

// ─── Nav Types ─────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
