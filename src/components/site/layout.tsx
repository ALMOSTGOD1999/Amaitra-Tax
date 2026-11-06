import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Menu,
  X,
  Phone,
  MapPin,
  ArrowUpRight,
  RotateCcw,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const socialIcons = { Facebook, Instagram, LinkedIn: Linkedin, YouTube: Youtube };
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { InquiryForm } from "./inquiry-form";
import { business, nav } from "@/lib/site";
import amLogo from "@/assets/logo.png";
import fdLogo from "@/assets/fd-logo.png";
import ncLogo from "@/assets/neelkanth-logo.png";

function brandFor(pathname: string) {
  if (pathname === "/future-dreams") return { src: fdLogo, alt: "Future Dreams logo", wide: true };
  if (pathname === "/neelkanth-capital")
    return { src: ncLogo, alt: "Neelkanth Capital logo", wide: true };
  return { src: amLogo, alt: "Arindam Maitra Tax Consulting Unit logo", wide: false };
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const brand = brandFor(pathname);
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link to="/" className="brand" aria-label="Arindam Maitra Tax Consulting Unit home">
          <img
            src={brand.src}
            alt={brand.alt}
            width={84}
            height={84}
            className="brand-logo"
            style={brand.wide ? { width: "auto", height: 84 } : undefined}
            fetchPriority="high"
          />
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {nav.map((n) => (
            <Link
              to={n.to}
              key={n.to}
              activeOptions={{ exact: true }}
              className={n.special ? "nav-sister" : undefined}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Button variant="corporate" asChild className="header-consultation">
          <Link to="/contact">
            Let’s talk <ArrowUpRight />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="mobile-menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav aria-label="Mobile navigation" className="mobile-nav">
          {nav.map((n) => (
            <Link
              to={n.to}
              key={n.to}
              onClick={() => setOpen(false)}
              className={n.special ? "nav-sister" : undefined}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function ContactDetails() {
  return (
    <>
      {business.addresses.map((entry) => (
        <div className="contact-line" key={entry.label}>
          <MapPin size={18} />
          <a href={entry.maps} target="_blank" rel="noopener noreferrer">
            {entry.label}
          </a>
        </div>
      ))}
      <div className="contact-line">
        <Phone size={18} />
        <span>
          {business.phones.map((entry, index) => (
            <span key={entry.href}>
              {index > 0 && " / "}
              <a href={entry.href}>{entry.label}</a>
            </span>
          ))}
        </span>
      </div>
      <div className="contact-line">
        <Mail size={18} />
        <span>
          {business.emails.map((entry, index) => (
            <span key={entry}>
              {index > 0 && " / "}
              <a href={`mailto:${entry}`}>{entry}</a>
            </span>
          ))}
        </span>
      </div>
      <div className="contact-line">
        <ArrowUpRight size={18} />
        <a href={business.maps} target="_blank" rel="noopener noreferrer">
          Get directions to our Berhampore office
        </a>
      </div>
      <p className="form-note">Please call to confirm office hours and appointment availability.</p>
    </>
  );
}

export function SiteFooter() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const brand = brandFor(pathname);
  return (
    <footer className="site-footer">
      <div className="wrap">
        {pathname !== "/contact" && pathname !== "/neelkanth-capital" && (
          <div className="contact-grid">
            <div>
              <h2 className="footer-title">
                Let’s align your
                <br />
                <em>financial future.</em>
              </h2>
              <ContactDetails />
            </div>
            <InquiryForm />
          </div>
        )}
        <div className="footer-bottom">
          <div className="footer-legal">
            <img
              src={brand.src}
              alt={brand.alt}
              width={40}
              height={40}
              loading="lazy"
              className="footer-logo"
              style={brand.wide ? { width: "auto", height: 48 } : undefined}
            />
            <span>
              © {new Date().getFullYear()} Arindam Maitra Tax Consulting Unit. All rights reserved.
            </span>
          </div>
          <div className="footer-socials">
            {business.socials.map((entry) => {
              const Icon = socialIcons[entry.label as keyof typeof socialIcons];
              return (
                <a
                  key={entry.label}
                  href={entry.href}
                  aria-label={`${business.name} on ${entry.label}`}
                  target={entry.href.startsWith("http") ? "_blank" : undefined}
                  rel={entry.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <Icon size={19} />
                </a>
              );
            })}
          </div>
          <div className="footer-links">
            <a href="https://www.gst.gov.in/" target="_blank" rel="noopener noreferrer">
              GST Portal ↗
            </a>
            <a
              href="https://www.incometax.gov.in/iec/foportal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Income Tax Portal ↗
            </a>
            {pathname === "/" && (
              <Button
                variant="ghost"
                className="h-auto p-0 text-[10px] text-inverse-muted"
                onClick={() => window.dispatchEvent(new Event("replay-welcome"))}
              >
                <RotateCcw size={12} />
                Replay welcome
              </Button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageBanner({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-banner">
      <div className="wrap">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <span className="banner-rule" aria-hidden="true" />
        <p>{description}</p>
      </div>
    </section>
  );
}

export function PhotoStrip({ src, alt }: { src: string; alt: string }) {
  return (
    <Reveal>
      <div className="photo-strip-frame">
        <img className="photo-strip" src={src} alt={alt} width={1920} height={704} loading="lazy" />
      </div>
    </Reveal>
  );
}
