export const siteConfig = {
  name: "Landownersignal",
  domain: "landownersignal.com",
  parentCompany: "Landsignal, LLC",
  description:
    "Landownersignal helps mineral owners and surface owners in Texas and Oklahoma understand lease and offer documents, prepare for landman negotiations, and protect their rights.",
  states: ["Texas", "Oklahoma"],
};

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export const primaryNav: NavLink[] = [
  { label: "Mineral Owners", href: "/mineral-owners" },
  { label: "Surface Owners", href: "/surface-owners" },
  { label: "Inherited Minerals", href: "/inherited-minerals" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Education", href: "/education" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const intakeLinks: NavLink[] = [
  {
    label: "Mineral Owner Intake",
    href: "/intake/mineral-owner",
    description: "Start a review of your mineral lease or offer.",
  },
  {
    label: "Surface Owner Intake",
    href: "/intake/surface-owner",
    description: "Start a review of a surface use or damage agreement.",
  },
];

export const footerLinks: NavLink[] = [
  { label: "Mineral Owners", href: "/mineral-owners" },
  { label: "Surface Owners", href: "/surface-owners" },
  { label: "Inherited Minerals", href: "/inherited-minerals" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Education", href: "/education" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
