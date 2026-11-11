export const business = {
  name: "Arindam Maitra Tax Consulting Unit",
  phone: "094341 08699",
  phoneHref: "tel:+919434108699",
  phones: [
    { label: "98005 80003", href: "tel:+919800580003" },
    { label: "77971 00177", href: "tel:+917797100177" },
    { label: "094341 08699", href: "tel:+919434108699" },
  ],
  emails: ["arindamtax.maitra.online@gmail.com", "arindamtax.maitra@gmail.com"],
  address: "35/8, Ukilabad Rd, Berhampore, Murshidabad, West Bengal 742101",
  addresses: [
    {
      label: "35/8, Ukilabad Rd, Berhampore, Murshidabad, West Bengal 742101",
      maps: "https://www.google.com/maps?q=24.0844266,88.2559297&z=17&hl=en",
    },
    {
      label: "Bhawani Dreams, 9, Sreema Road, Dum Dum Cantonment, Kolkata 700065",
      maps: "https://www.google.com/maps?q=Bhawani+Dreams%2C+9+Sreema+Road%2C+Dum+Dum+Cantonment%2C+Kolkata+700065&z=17&hl=en",
    },
  ],
  maps: "https://www.google.com/maps?q=24.0844266,88.2559297&z=17&hl=en",
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/share/19nHmVaAmb/",
      only: "/future-dreams",
    },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "#" },
  ] as Array<{ label: string; href: string; only?: string }>,
};
export const sisterVenture = {
  name: "Future Dreams",
  tagline: "Financial & Marketing Consultancy",
  mobiles: [
    { label: "9932232578", href: "tel:+919932232578" },
    { label: "7047532819", href: "tel:+917047532819" },
  ],
  phone: "03482-353045",
  phoneHref: "tel:+913482353045",
  email: "futuredreamsbhp@gmail.com",
  address:
    "35/8, Ukilabad Road (Near Baro Bigha Kabarkhana), P.O. Berhampore, Dist. Murshidabad, PIN - 742101, West Bengal",
};
export const neelkanth = {
  name: "Neelkanth Capital",
  tagline: "Your trusted partner in Wealth Creation",
  since: "Since 2020",
  website: "www.neelkanthcapital.com",
  websiteUrl: "https://www.neelkanthcapital.com",
  phone: "033-65982863",
  phoneHref: "tel:033-65982863",
  phones: [
    { label: "033-65982863", href: "tel:033-65982863" },
    { label: "98300 82863", href: "tel:+919830082863" },
  ],
  email: "neelkanthcapital2026@gmail.com",
  address: "Tulip Towers,42/G/F, Swarnamayee Road, Berhampore, West Bengal 742101",
  stats: [
    { value: "600+", label: "Clients served" },
    { value: "₹500 Cr+", label: "Assets under advisory" },
    { value: "2020", label: "Trusted since" },
  ],
  credentials: [
    "Authorised Partner of Prabhudas Lilladher",
    "AMFI Certified Mutual Fund Distributor",
    "NSE Certified Mutual Fund Distributor",
    "BSE Certified Mutual Fund Distributor",
  ],
  commitments: [
    { title: "Research & Due Diligence", body: "In-depth research for informed decisions." },
    { title: "Transparency", body: "Clear, honest and ethical practices." },
    {
      title: "Long Term Partnership",
      body: "Building lasting relationships for generational wealth.",
    },
    { title: "Client First Approach", body: "Your goals are our priority." },
  ],
  partnerNote:
    "Authorised Partner of Prabhudas Lilladher Private Limited (Estd 1944). Service descriptions are indicative; availability, eligibility and terms are governed by the platform and applicable regulations. Investments in securities and mutual funds are subject to market risks; read all scheme related documents carefully.",
};
export const nav = [
  { to: "/", label: "Home", special: false },
  { to: "/services", label: "Services", special: false },
  { to: "/about", label: "About", special: false },
  { to: "/team", label: "Our Team", special: false },
  { to: "/faq", label: "FAQ", special: false },
  { to: "/resources", label: "Resources", special: false },
  { to: "/contact", label: "Contact", special: false },
  { to: "/future-dreams", label: "Future Dreams", special: true },
  { to: "/neelkanth-capital", label: "Neelkanth Capital", special: true },
] as const;
export function pageHead(title: string, description: string) {
  const full = `${title} — ${business.name}`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
export const services = [
  {
    name: "GST Compliance",
    description:
      "Clear, consistent support for GST registration, return filing and input tax credit reconciliation.",
    items: [
      "GST registration and amendments",
      "GSTR-1 and GSTR-3B preparation",
      "Input tax credit reconciliation",
      "Annual return and notice support",
    ],
  },
  {
    name: "Income Tax Advisory",
    description:
      "Thoughtful tax planning and return preparation for individuals, professionals and businesses.",
    items: [
      "Income tax return preparation",
      "Tax regime comparison and planning",
      "Advance tax assessment",
      "Tax notice response assistance",
    ],
  },
  {
    name: "Corporate Secretarial",
    description:
      "Practical guidance on business registration and statutory requirements as your enterprise grows.",
    items: [
      "Business structure guidance",
      "Registration documentation support",
      "Statutory compliance coordination",
      "Company filing assistance",
    ],
  },
  {
    name: "Accounting & Bookkeeping",
    description:
      "Organised records that make business decisions and statutory filings more straightforward.",
    items: [
      "Bookkeeping and ledger review",
      "Bank and account reconciliation",
      "Financial statement preparation",
      "Invoice and expense organisation",
    ],
  },
  {
    name: "TDS Compliance",
    description:
      "Support with tax deduction records, deposits and statements to help keep your obligations in order.",
    items: [
      "TDS applicability review",
      "Statement preparation and corrections",
      "Tax credit reconciliation",
      "Form 16 / 16A assistance",
    ],
  },
  {
    name: "Startup & Business Advisory",
    description:
      "A clear financial and compliance foundation for new ventures and growing local businesses.",
    items: [
      "Business and registration guidance",
      "Udyam registration assistance",
      "Financial projections",
      "Compliance planning",
    ],
  },
  {
    name: "NGO Darpan",
    description:
      "Registration and ongoing profile support for NGOs, trusts and societies on the NGO Darpan portal.",
    items: [
      "NGO Darpan registration",
      "Profile and project updates",
      "Annual compliance support",
      "CSR-1 registration guidance",
    ],
  },
  {
    name: "EPFO & ESIC",
    description:
      "Establishment-level provident fund and state insurance compliance handled end to end.",
    items: [
      "EPFO registration",
      "ESIC registration",
      "Monthly ECR and return filing",
      "Employee onboarding and exit compliance",
    ],
  },
  {
    name: "Professional Tax (P-Tax)",
    description:
      "West Bengal professional tax registration, deductions and returns for employers and professionals.",
    items: [
      "P-Tax registration",
      "Monthly and quarterly return filing",
      "Employee deduction compliance",
      "Certificate renewal",
    ],
  },
];
export const fdServices = [
  {
    name: "Loans",
    tag: "Borrowing",
    description:
      "From a vehicle or a home to working capital for your business, Future Dreams helps you understand your borrowing options and prepare a complete, well-presented application for the lender.",
    items: [
      "Vehicle loan",
      "Home loan",
      "Project loan",
      "Education loan",
      "Land purchasing loan",
      "Cash credit & term loan",
      "Loan against property (LAP)",
      "All types of mortgage loan",
    ],
    note: "Loan approvals, interest rates and eligibility are decided by the respective lenders. Future Dreams assists with preparing and presenting your application.",
  },
  {
    name: "Taxation & Consultancy",
    tag: "Compliance",
    description:
      "Complete tax and compliance support for individuals and organisations — returns and audits, registrations, trademarks, project reports and day-to-day accounts maintained in Tally.",
    items: [
      "Income tax",
      "Tax audit",
      "GST",
      "P. Tax (professional tax)",
      "EPF & ESIC",
      "Society / Firm / NGO / Nidhi / Company / Trust / LLP registration",
      "Trademark",
      "Project report",
      "Accounts (Tally)",
    ],
    note: "Registrations and filings are subject to applicable laws and departmental processing timelines.",
  },
  {
    name: "Other Financial Products",
    tag: "Growth & protection",
    description:
      "Long-term savings and protection, introduced carefully and matched to what you want your money to do for your family or your business.",
    items: [
      "Mutual funds",
      "General & life insurance",
      "Online share trading",
      "Real estate",
      "Tour & travels",
    ],
    note: "Insurance is the subject matter of solicitation. Mutual fund and securities investments are subject to market risks; read all scheme and product related documents carefully.",
  },
] as const;
export const nkServices = [
  {
    name: "Equity & Stock Broking",
    description: "Trade across NSE, BSE and MCX with a seamless, research-backed experience.",
  },
  {
    name: "Mutual Funds & SIFs",
    description: "Goal-based investments through a wide range of mutual fund solutions.",
  },
  {
    name: "Wealth Management",
    description: "Comprehensive wealth management for long-term growth and legacy planning.",
  },
  {
    name: "Portfolio Advisory",
    description: "Personalised portfolio strategies aligned with your financial goals.",
  },
  {
    name: "IPO Advisory",
    description: "Expert guidance on IPO investments, from analysis to application.",
  },
  {
    name: "Unlisted Shares",
    description: "Investment opportunities in carefully selected unlisted companies.",
  },
  {
    name: "Insurance Solutions",
    description: "Life, health and complete protection cover for you and your family.",
  },
  {
    name: "Debt Products & Bonds",
    description: "Debt instruments chosen for steady and reliable returns.",
  },
  {
    name: "Recovery of Shares",
    description: "Secure, efficient recovery of unclaimed shares and investments from IEPF.",
  },
];
