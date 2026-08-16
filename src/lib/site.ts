export const siteConfig = {
  name: "Landownersignal",
  domain: "landownersignal.com",
  parentCompany: "Landsignal, LLC",
  description:
    "Landownersignal helps landowners in Texas and Oklahoma evaluate oil & gas, data center, and solar lease offers, prepare negotiation talking points, and understand their rights.",
  states: ["Texas", "Oklahoma"],
};

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type Track = {
  key: string;
  label: string;
  href: string;
  shortLabel: string;
  description: string;
  intakeHref: string;
  children?: NavLink[];
};

export const tracks: Track[] = [
  {
    key: "oil-gas",
    label: "Oil & Gas",
    shortLabel: "Oil & Gas",
    href: "/oil-gas",
    description:
      "For mineral owners and surface owners approached by landmen about a lease, offer, or surface use agreement.",
    intakeHref: "/intake/oil-gas-mineral-owner",
    children: [
      { label: "Mineral Owners", href: "/oil-gas/mineral-owners" },
      { label: "Surface Owners", href: "/oil-gas/surface-owners" },
      { label: "Inherited Minerals", href: "/oil-gas/inherited-minerals" },
    ],
  },
  {
    key: "data-centers",
    label: "Data Centers",
    shortLabel: "Data Centers",
    href: "/data-centers",
    description:
      "For landowners approached about large land leases or easements for data center development.",
    intakeHref: "/intake/data-center",
  },
  {
    key: "solar",
    label: "Solar",
    shortLabel: "Solar",
    href: "/solar",
    description: "For landowners approached about solar lease agreements.",
    intakeHref: "/intake/solar",
  },
];

// Primary nav: the three tracks are top-level, clearly selectable links (never
// collapsed into a dropdown), plus Shop as its own visible item.
export const primaryNav: NavLink[] = [
  { label: "Oil & Gas", href: "/oil-gas" },
  { label: "Data Centers", href: "/data-centers" },
  { label: "Solar", href: "/solar" },
  { label: "Shop", href: "/shop" },
];

// Secondary nav: informational / company pages.
export const secondaryNav: NavLink[] = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Education", href: "/education" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const intakeLinks: NavLink[] = [
  {
    label: "Oil & Gas – Mineral Owner Intake",
    href: "/intake/oil-gas-mineral-owner",
    description: "Start a review of your mineral lease or offer.",
  },
  {
    label: "Oil & Gas – Surface Owner Intake",
    href: "/intake/oil-gas-surface-owner",
    description: "Start a review of a surface use or damage agreement.",
  },
  {
    label: "Data Center Intake",
    href: "/intake/data-center",
    description: "Start a review of a data center land lease or easement offer.",
  },
  {
    label: "Solar Intake",
    href: "/intake/solar",
    description: "Start a review of a solar lease agreement.",
  },
];

export const footerLinks: NavLink[] = [...primaryNav, ...secondaryNav];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
];
