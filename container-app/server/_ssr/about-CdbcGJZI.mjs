import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./reveal-2qer-yKL.mjs";
import { t as Button } from "./site-CURpZlHm.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { N as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { r as PageBanner } from "./layout-vJt7Uk-S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CdbcGJZI.js
var import_jsx_runtime = require_jsx_runtime();
var gst_invoice_default = "/assets/gst-invoice-tj7rmXDR.jpg";
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
			eyebrow: "The practice",
			title: "A clear view of your finances.",
			description: "Focused on taxation, compliance and financial decisions more straightforward."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section wrap split-content",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "prose",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: "Arindam Maitra Tax Consulting Unit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "section-heading",
						children: [
							"Your goals.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Our attention to detail."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tax obligations are part of life and business. Understanding them should not get in the way of the work you want to do." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our practice supports individuals, professionals and businesses with income tax, GST, accounting and related compliance. We start with your circumstances, organise the information that matters and help you understand the next steps." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Visit our office or call to discuss the support you need. Each engagement begins with a conversation about your requirements and the relevant records." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "corporate",
						asChild: true,
						className: "mt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							children: ["Meet your tax partner ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						})
					})
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: gst_invoice_default,
					alt: "GST tax invoice with a calculator, fountain pen and brass balance scale on a consultant's desk",
					width: 1600,
					height: 1072,
					loading: "lazy",
					className: "editorial-photo"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: "Privacy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-heading",
						children: "Your trust, safeguarded."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-intro",
						children: "We are committed to protecting our client's privacy and safeguarding their confidential information. Trust, discretion, and data security are at the heart of everything we do. Your information is always handled with the utmost care, responsibility, and confidentiality."
					})
				]
			})
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section faq-band",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: "How we work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-heading",
						children: "Clarity at every step."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "process-row",
						children: [
							{
								title: "Understand",
								body: "We discuss your income, business activity and compliance needs before suggesting a way forward."
							},
							{
								title: "Organise",
								body: "We review the relevant records, reconcile information and identify what needs attention."
							},
							{
								title: "Support",
								body: "We assist with the agreed filings and documentation, explaining the outcome and next steps."
							}
						].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "number",
								children: ["0", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: p.title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p.body })
						] }, p.title))
					})
				]
			})
		}) })
	] });
}
//#endregion
export { About as component };
