import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Building2, FileText, Landmark, Search } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { pageHead } from "@/lib/site";
import incomeTaxLogo from "@/assets/portal-logos/income-tax-efiling.svg.asset.json";
import cbicLogo from "@/assets/portal-logos/cbic-gst.svg.asset.json";
import tracesLogo from "@/assets/portal-logos/traces-portal.png.asset.json";
import udyamLogo from "@/assets/portal-logos/udyam-registration.png.asset.json";
import startupLogo from "@/assets/portal-logos/startup-india.png.asset.json";

const resources = [
  {
    name: "Income Tax e-Filing",
    domain: "incometax.gov.in",
    url: "https://www.incometax.gov.in/iec/foportal/",
    text: "Income tax returns and taxpayer services",
    mark: "Income Tax",
    logo: incomeTaxLogo.url,
    icon: FileText,
  },
  {
    name: "GST Portal",
    domain: "gst.gov.in",
    url: "https://www.gst.gov.in/",
    text: "GST registration, returns and services",
    mark: "GST",
    icon: Landmark,
  },
  {
    name: "CBIC — GST Guidance",
    domain: "cbic-gst.gov.in",
    url: "https://cbic-gst.gov.in/",
    text: "GST laws, notifications and guidance",
    mark: "CBIC",
    logo: cbicLogo.url,
    icon: Landmark,
  },
  {
    name: "TRACES",
    domain: "tdscpc.gov.in",
    url: "https://www.tdscpc.gov.in/",
    text: "TDS statements, certificates and services",
    mark: "TRACES",
    logo: tracesLogo.url,
    icon: FileText,
  },
  {
    name: "Udyam Registration",
    domain: "udyamregistration.gov.in",
    url: "https://udyamregistration.gov.in/",
    text: "Official MSME registration and information",
    mark: "Udyam",
    logo: udyamLogo.url,
    icon: Building2,
  },
  {
    name: "Startup India",
    domain: "startupindia.gov.in",
    url: "https://www.startupindia.gov.in/",
    text: "Startup recognition and programme information",
    mark: "Startup India",
    logo: startupLogo.url,
    icon: Building2,
  },
  {
    name: "Ministry of Corporate Affairs",
    domain: "mca.gov.in",
    url: "https://www.mca.gov.in/",
    text: "Company, LLP and corporate filing services",
    mark: "MCA",
    icon: Building2,
  },
  {
    name: "West Bengal Commercial Taxes",
    domain: "comtax.wb.gov.in",
    url: "https://comtax.wb.gov.in/",
    text: "West Bengal commercial tax information",
    mark: "West Bengal",
    icon: Landmark,
  },
];

export const Route = createFileRoute("/resources")({
  head: () =>
    pageHead(
      "Official Tax & Business Resources",
      "Access official government portals for income tax, GST, TDS, Udyam, Startup India, company compliance and West Bengal professional tax.",
    ),
  component: Resources,
});
function Resources() {
  const [query, setQuery] = useState("");
  const filtered = resources.filter((r) =>
    `${r.name} ${r.domain} ${r.text}`.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <main className="resources-page">
      <section className="resources-heading">
        <div className="wrap">
          <span className="eyebrow">Official government portals</span>
          <h1>Trusted. Authorised. Official.</h1>
          <p>Direct access to India’s tax, business and registration portals.</p>
        </div>
      </section>
      <section className="resources-section wrap" aria-label="Official tax and business portals">
        <Reveal>
          <label className="search-box">
            <Search size={19} />
            <input
              aria-label="Search official resources"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find a government portal…"
            />
          </label>
        </Reveal>
        <div className="resource-grid">
          {filtered.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.name} delay={(i % 4) * 70}>
                <a
                  className="resource-tile"
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${r.name} official website`}
                >
                  <span className="resource-mark">
                    {r.logo ? (
                      <img src={r.logo} alt={`${r.name} official mark`} loading="lazy" />
                    ) : (
                      <>
                        <Icon aria-hidden="true" />
                        <span>{r.mark}</span>
                      </>
                    )}
                  </span>
                  <span className="resource-tile-title">{r.name}</span>
                  <span className="resource-tile-description">{r.text}</span>
                  <span className="resource-tile-link">
                    Visit official website <ArrowUpRight size={15} />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
        {!filtered.length && (
          <p className="section-intro" role="status">
            No resources match your search.
          </p>
        )}
        <Reveal>
          <p className="resource-disclaimer">
            These links open external government websites. Never share your portal password or OTP
            with an unverified person.
          </p>
        </Reveal>
      </section>
    </main>
  );
}
