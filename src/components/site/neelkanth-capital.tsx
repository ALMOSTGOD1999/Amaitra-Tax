import type { ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Coins,
  Gem,
  Landmark,
  Mail,
  MapPin,
  Phone,
  PieChart,
  Rocket,
  RotateCcw,
  SearchCheck,
  Shield,
  ShieldCheck,
  TrendingUp,
  Users,
  Globe,
} from "lucide-react";

import heroSky from "@/assets/hero-sky.jpg";
import ncLogo from "@/assets/neelkanth-logo.png";
import tradxLogo from "@/assets/tradx-logo.png";
import plCapital from "@/assets/pl-capital.png";
import amfiLogo from "@/assets/amfi.png";
import bseLogo from "@/assets/bse.png";
import nseLogo from "@/assets/nse.png";
import hdfcLogo from "@/assets/hdfc.png";
import invescoLogo from "@/assets/invesco.png";
import canaraLogo from "@/assets/canara-robeco.png";
import kotakLogo from "@/assets/kotak.png";
import dspLogo from "@/assets/dsp.png";
import iciciLogo from "@/assets/icici-pru.png";
import bajajLogo from "@/assets/bajaj-amc.png";
import arindamPhoto from "@/assets/md/arindam-maitra.jpg";
import soumikPhoto from "@/assets/md/soumik-kumar.jpg";

const PHONE = "033-65982863";
const EMAIL = "neelkanthcapital2026@gmail.com";
const WEBSITE = "www.neelkanthcapital.com";
const ADDRESS = "Tulip Towers, 42/G/F, Swarnamayee Road, Berhampore, West Bengal 742101";

const COMMITMENTS = [
  {
    icon: Users,
    title: "Client First Approach",
    text: "Your goals are our priority.",
  },
  {
    icon: SearchCheck,
    title: "Research & Due Diligence",
    text: "In-depth research for informed decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency",
    text: "Clear, honest and ethical practices.",
  },
  {
    icon: TrendingUp,
    title: "Long Term Partnership",
    text: "Building lasting relationships for generational wealth.",
  },
];

const SERVICES = [
  {
    icon: TrendingUp,
    title: "Equity & Stock Broking",
    text: "Trade across NSE, BSE and MCX with a seamless experience.",
  },
  {
    icon: PieChart,
    title: "Portfolio Advisory",
    text: "Personalized portfolio strategies aligned with your financial goals.",
  },
  {
    icon: Landmark,
    title: "Debt Products / Bonds",
    text: "Debt instruments for steady and reliable returns.",
  },
  {
    icon: Coins,
    title: "Mutual Funds & SIFs",
    text: "Goal-based investments through a wide range of mutual fund solutions.",
  },
  {
    icon: Rocket,
    title: "IPO Advisory",
    text: "Expert guidance on IPO investments — from analysis to application.",
  },
  {
    icon: Gem,
    title: "Wealth Management",
    text: "Comprehensive wealth management solutions for long-term growth and legacy planning.",
  },
  {
    icon: Shield,
    title: "Insurance Solutions",
    text: "Life, health and cyber insurance — complete protection for you and your family.",
  },
  {
    icon: Building2,
    title: "Unlisted Shares",
    text: "Investment opportunities in carefully selected unlisted companies.",
  },
  {
    icon: RotateCcw,
    title: "Recovery of Shares",
    text: "Secure and efficient recovery of unclaimed investments from IEPF.",
  },
];

const CERTIFICATIONS = [
  {
    logo: plCapital,
    title: "Authorised Partner",
    subtitle: "of Prabhudas Lilladher",
    dark: false,
  },
  {
    logo: amfiLogo,
    title: "AMFI Certified",
    subtitle: "Mutual Fund Distributor (MFD)",
    dark: true,
  },
  {
    logo: bseLogo,
    title: "BSE Certified",
    subtitle: "Mutual Fund Distributor (MFD)",
    dark: true,
  },
  {
    logo: nseLogo,
    title: "NSE Certified",
    subtitle: "Mutual Fund Distributor (MFD)",
    dark: false,
  },
];

const FUND_PARTNERS = [
  { logo: hdfcLogo, name: "HDFC Mutual Fund" },
  { logo: invescoLogo, name: "Invesco Mutual Fund" },
  { logo: dspLogo, name: "DSP Mutual Fund" },
  { logo: canaraLogo, name: "Canara Robeco" },
  { logo: bajajLogo, name: "Bajaj Asset Management" },
  { logo: kotakLogo, name: "Kotak Mutual Fund" },
  { logo: iciciLogo, name: "ICICI Prudential" },
];

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <img
        src={heroSky}
        alt=""
        width={1920}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover object-right"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="section-shell relative flex min-h-[42rem] flex-col justify-center py-20">
        <div className="max-w-2xl">
          <div className="inline-flex animate-fade-up items-center gap-3 rounded-full border border-primary/25 bg-card/80 px-4 py-2 shadow-[var(--shadow-card)] backdrop-blur">
            <img src={tradxLogo} alt="TradX Equisearch" className="h-6 w-auto" />
            <span className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
              In association with TradX Equisearch
            </span>
          </div>
          <h1 className="mt-6 animate-fade-up text-5xl font-extrabold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            Your trusted partner in <span className="text-gradient-sky">Wealth Creation…</span>
          </h1>
          <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-muted-foreground">
            Neelkanth Capital is a premier financial services and wealth advisory firm — helping
            individuals and businesses create, preserve and grow wealth through research-driven
            investment solutions.
          </p>
          <div className="mt-8 flex animate-fade-up flex-wrap items-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/70 px-7 py-3.5 text-sm font-bold text-foreground backdrop-blur transition-colors hover:bg-accent"
            >
              Talk to an Advisor
            </a>
          </div>
          <dl className="mt-12 grid animate-fade-up max-w-lg grid-cols-3 gap-3">
            {[
              { value: "600+", label: "Clients Served" },
              { value: "₹500+ Cr", label: "Assets Under Advisory" },
              { value: "2020", label: "Trusted Since" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-primary/15 bg-card/80 px-4 py-4 shadow-[var(--shadow-card)] backdrop-blur"
              >
                <dt className="text-xs font-semibold text-muted-foreground">{stat.label}</dt>
                <dd className="mt-1 font-display text-2xl font-extrabold text-primary">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="relative border-y border-primary/10 bg-primary-deep">
        <div className="section-shell flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-4 font-display text-sm font-bold tracking-[0.3em] text-primary-foreground uppercase">
          <span>Research</span>
          <span className="text-primary-glow">|</span>
          <span>Analyse</span>
          <span className="text-primary-glow">|</span>
          <span>Invest</span>
          <span className="text-primary-glow">|</span>
          <span>Grow</span>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"}>
      <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-4xl font-extrabold text-foreground sm:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{text}</p> : null}
    </div>
  );
}

function Commitment() {
  return (
    <section className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Our Commitment"
          title="Built on trust, guided by research"
          text="Four principles shape every recommendation we make and every relationship we build."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {COMMITMENTS.map((item) => (
            <div
              key={item.title}
              className="card-hover group rounded-3xl border border-primary/10 bg-card p-7 shadow-[var(--shadow-card)]"
            >
              <div className="inline-flex rounded-2xl bg-secondary p-3.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const DIRECTORS = [
  { name: "ARINDAM MAITRA", photo: arindamPhoto, alt: "Arindam Maitra, Managing Partner" },
  { name: "SOUMIK KUMAR", photo: soumikPhoto, alt: "Soumik Kumar, Managing Partner" },
];

function ManagingDirectors() {
  return (
    <section className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Leadership" title="Our Leaderships" />
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2">
          {DIRECTORS.map((d) => (
            <div
              key={d.name}
              className="card-hover rounded-3xl border border-primary/10 bg-card p-10 text-center shadow-[var(--shadow-card)] sm:p-12"
            >
              <img
                src={d.photo}
                alt={d.alt}
                loading="lazy"
                className="mx-auto h-44 w-44 rounded-full object-cover sm:h-56 sm:w-56"
              />
              <h3 className="mt-8 text-2xl font-bold text-foreground">{d.name}</h3>
              <p className="mt-2 text-base font-semibold text-primary">Managing Partner</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="overflow-hidden bg-secondary/60 py-24">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="One stop solution for all your financial needs"
          />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Neelkanth Capital is a premier financial services and wealth advisory firm committed to
            helping individuals and businesses create, preserve and grow wealth through
            research-driven investment solutions.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Research-driven, goal-based investment planning",
              "Certified across AMFI, BSE and NSE distribution",
              "Authorised partner of Prabhudas Lilladher (PL Capital)",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="font-semibold text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-primary-glow/10 blur-2xl" />
          <div className="relative rounded-[2rem] border border-primary/15 bg-card p-10 shadow-[var(--shadow-soft)]">
            <img
              src={ncLogo}
              alt="Neelkanth Capital"
              className="mx-auto h-28 w-auto animate-float"
            />
            <div className="mt-8 grid grid-cols-2 gap-4 text-center">
              <div className="rounded-2xl bg-secondary p-5">
                <p className="font-display text-3xl font-extrabold text-primary">600+</p>
                <p className="mt-1 text-xs font-semibold text-muted-foreground">Clients Served</p>
              </div>
              <div className="rounded-2xl bg-secondary p-5">
                <p className="font-display text-3xl font-extrabold text-primary">₹500+ Cr</p>
                <p className="mt-1 text-xs font-semibold text-muted-foreground">
                  Assets Under Advisory
                </p>
              </div>
            </div>
            <p className="mt-6 text-center text-sm font-semibold text-muted-foreground">
              Proudly serving investors since 2020
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything your money needs, under one roof"
          text="From your first SIP to generational wealth planning — nine specialised services, one trusted advisor."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="card-hover group relative overflow-hidden rounded-3xl border border-primary/10 bg-card p-7 shadow-[var(--shadow-card)]"
            >
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-secondary transition-colors group-hover:bg-accent" />
              <div className="relative">
                <div className="inline-flex rounded-2xl bg-secondary p-3.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-secondary/60 py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Certified, authorised, accountable"
          text="Recognised by India's leading market institutions and asset managers."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className={
                cert.dark
                  ? "card-hover flex flex-col items-center rounded-3xl bg-primary-deep p-7 text-center text-primary-foreground shadow-[var(--shadow-soft)]"
                  : "card-hover flex flex-col items-center rounded-3xl border border-primary/15 bg-card p-7 text-center shadow-[var(--shadow-card)]"
              }
            >
              <div className="flex h-24 w-full items-center justify-center">
                <img
                  src={cert.logo}
                  alt={cert.title}
                  className={
                    cert.logo === amfiLogo || cert.logo === bseLogo
                      ? "h-16 w-auto"
                      : "max-h-16 w-auto rounded-lg"
                  }
                />
              </div>
              <p className="mt-5 font-display text-lg font-bold">{cert.title}</p>
              <p
                className={
                  cert.dark
                    ? "mt-1 text-sm text-primary-glow"
                    : "mt-1 text-sm text-muted-foreground"
                }
              >
                {cert.subtitle}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <p className="text-center text-xs font-bold tracking-widest text-muted-foreground uppercase">
            Mutual fund partners
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {FUND_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                title={partner.name}
                className="flex h-20 items-center justify-center rounded-2xl border border-primary/10 bg-card p-4 shadow-[var(--shadow-card)]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 w-auto max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const items = [
    {
      icon: Phone,
      label: "Call Us",
      value: PHONE,
      href: `tel:+91${PHONE}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: EMAIL,
      href: `mailto:${EMAIL}`,
    },
    {
      icon: Globe,
      label: "Website",
      value: WEBSITE,
      href: `https://${WEBSITE}`,
    },
    {
      icon: MapPin,
      label: "Office",
      value: ADDRESS,
    },
  ];
  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-primary to-primary-deep p-10 shadow-[var(--shadow-soft)] sm:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-bold tracking-widest text-primary-foreground uppercase">
                Contact Us
              </span>
              <h2 className="mt-4 text-4xl font-extrabold text-primary-foreground sm:text-5xl">
                Let's plan your wealth journey
              </h2>
              <p className="mt-4 max-w-md text-primary-foreground/85">
                One stop solution for all your financial needs. Reach out today for a conversation
                that's focused entirely on your goals.
              </p>
              <a
                href={`tel:+91${PHONE}`}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-bold text-primary-deep transition-transform hover:scale-[1.03]"
              >
                <Phone className="h-4 w-4" />
                {PHONE}
              </a>
            </div>
            <ul className="grid gap-4">
              {items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-4 rounded-2xl bg-primary-foreground/10 p-5 backdrop-blur-sm"
                >
                  <span className="rounded-xl bg-primary-foreground/15 p-3 text-primary-foreground">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-primary-foreground/70 uppercase">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block font-semibold break-all text-primary-foreground hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-semibold text-primary-foreground">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function NeelkanthCapitalPage() {
  return (
    <div className="nc-page min-h-screen bg-background text-foreground">
      <Hero />
      <ManagingDirectors />
      <Commitment />
      <About />
      <Services />
      <WhyChooseUs />
      <Contact />
    </div>
  );
}
