import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageBanner } from "@/components/site/layout";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/site";
import gstInvoice from "@/assets/gst-invoice.jpg";
export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About the Practice",
      "Meet Arindam Maitra Tax Consulting Unit, a Berhampore-based practice focused on clear tax guidance, organised records and dependable compliance support.",
    ),
  component: About,
});
function About() {
  return (
    <main>
      <PageBanner
        eyebrow="The practice"
        title="A clear view of your finances."
        description="Focused on taxation, compliance and financial decisions more straightforward."
      />
      <section className="section wrap split-content">
        <div className="prose">
          <Reveal>
            <div className="eyebrow">Arindam Maitra Tax Consulting Unit</div>
            <h2 className="section-heading">
              Your goals.
              <br />
              Our attention to detail.
            </h2>
            <p>
              Tax obligations are part of life and business. Understanding them should not get in
              the way of the work you want to do.
            </p>
            <p>
              Our practice supports individuals, professionals and businesses with income tax, GST,
              accounting and related compliance. We start with your circumstances, organise the
              information that matters and help you understand the next steps.
            </p>
            <p>
              Visit our office or call to discuss the support you need. Each engagement begins with
              a conversation about your requirements and the relevant records.
            </p>
            <Button variant="corporate" asChild className="mt-5">
              <Link to="/contact">
                Meet your tax partner <ArrowUpRight />
              </Link>
            </Button>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <img
            src={gstInvoice}
            alt="GST tax invoice with a calculator, fountain pen and brass balance scale on a consultant's desk"
            width={1600}
            height={1072}
            loading="lazy"
            className="editorial-photo"
          />
        </Reveal>
      </section>
      <Reveal>
        <section className="section">
          <div className="wrap">
            <div className="eyebrow">Privacy</div>
            <h2 className="section-heading">Your trust, safeguarded.</h2>
            <p className="section-intro">
              We are committed to protecting our client's privacy and safeguarding their
              confidential information. Trust, discretion, and data security are at the heart of
              everything we do. Your information is always handled with the utmost care,
              responsibility, and confidentiality.
            </p>
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section className="section faq-band">
          <div className="wrap">
            <div className="eyebrow">How we work</div>
            <h2 className="section-heading">Clarity at every step.</h2>
            <div className="process-row">
              {[
                {
                  title: "Understand",
                  body: "We discuss your income, business activity and compliance needs before suggesting a way forward.",
                },
                {
                  title: "Organise",
                  body: "We review the relevant records, reconcile information and identify what needs attention.",
                },
                {
                  title: "Support",
                  body: "We assist with the agreed filings and documentation, explaining the outcome and next steps.",
                },
              ].map((p, i) => (
                <article key={p.title}>
                  <span className="number">0{i + 1}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
