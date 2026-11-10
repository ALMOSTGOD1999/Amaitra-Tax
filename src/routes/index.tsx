import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Welcome } from "@/components/site/welcome";
import { FAQList } from "@/components/site/faq-list";
import { Reveal } from "@/components/site/reveal";
import { faqs } from "@/lib/faqs";
import { pageHead, services } from "@/lib/site";
import taxDesk from "@/assets/tax-desk.jpg";
import rupeeGrowth from "@/assets/rupee-growth.jpg";
export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Tax, Compliance & Advisory in Berhampore",
      "Arindam Maitra Tax Consulting Unit helps individuals and businesses with GST, income tax, accounting and compliance in Berhampore, West Bengal.",
    ),
  component: Home,
});
function Home() {
  return (
    <main>
      <Welcome />
      <section className="hero">
        <img
          className="hero-image"
          src={taxDesk}
          alt="Desk with Indian income tax return forms, GST filings, rupee notes and a brass scale"
          width={1920}
          height={1088}
          fetchPriority="high"
        />
        <div className="wrap hero-copy">
          <div className="eyebrow">Tax • Compliance • Advisory</div>
          <h1>
            <span>Arindam Maitra</span>
            <em>Tax Consulting Unit</em>
          </h1>
          <p className="hero-description text-blue-600 font-bold mt-0">
            Your Trust, Our Responsibility. Your Privacy, Our Priority.
</p>
          <p className="hero-description mt-2">
            We are committed to protecting our clients' privacy and safeguarding their confidential
            information. Trust, discretion, and data security are at the heart of everything we do.
            Your information is always handled with the utmost care, responsibility, and
            confidentiality. forward.
          </p>
          <div className="hero-actions">
            <Button variant="hero" asChild>
              <Link to="/contact">
                Request consultation <ArrowUpRight />
              </Link>
            </Button>
            <Button variant="heroOutline" asChild>
              <Link to="/services">
                Our expertise <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
        <div className="wrap hero-location">
          <MapPin size={13} />
          BERHAMPORE, WEST BENGAL &nbsp; / &nbsp; YOUR LOCAL TAX & COMPLIANCE PARTNER
        </div>
      </section>
      <section className="wrap services-preview">
        {services.slice(0, 3).map((s, i) => (
          <Reveal key={s.name} delay={i * 120}>
            <article>
              <div className="service-rule" />
              <h3>{s.name}</h3>
              <p>{s.description}</p>
              <Link to="/services" className="text-link">
                Explore service <ArrowUpRight size={14} />
              </Link>
            </article>
          </Reveal>
        ))}
      </section>
      <section className="photo-band">
        <img
          src={rupeeGrowth}
          alt="Stacked rupee banknotes and growing stacks of brass coins beside a balance scale"
          width={1920}
          height={704}
          loading="lazy"
        />
        <Reveal>
          <div className="wrap photo-band-copy">
            <p className="photo-band-quote">
              Clear numbers.
              <br />
              <em>Confident decisions.</em>
            </p>
          </div>
        </Reveal>
      </section>
      <Reveal>
        <section className="section faq-band">
          <div className="wrap max-w-[900px]">
            <div className="center-heading">
              <div className="eyebrow justify-center">Clarity, before complexity</div>
              <h2 className="section-heading">Knowledge Base & FAQ</h2>
              <p className="section-intro mx-auto">
                Answers to everyday tax and GST questions, with official sources.
              </p>
            </div>
            <FAQList items={faqs.slice(0, 3)} />
            <div className="faq-preview-grid">
              {[faqs[12], faqs[16], faqs[5], faqs[11]].map(
                (f) =>
                  f && (
                    <article key={f.question} className="faq-mini">
                      <h3>{f.question}</h3>
                      <p>{f.answer}</p>
                      <a
                        href={f.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="official-link"
                      >
                        {f.source}
                        <ArrowUpRight size={12} />
                      </a>
                    </article>
                  ),
              )}
            </div>
            <div className="text-center mt-8">
              <Button variant="corporate" asChild>
                <Link to="/faq">
                  Explore all 18 questions <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
