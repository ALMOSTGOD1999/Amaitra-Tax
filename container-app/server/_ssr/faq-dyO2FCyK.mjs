import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./reveal-2qer-yKL.mjs";
import { t as Button } from "./site-CURpZlHm.mjs";
import { c as Search } from "../_libs/lucide-react.mjs";
import { i as PhotoStrip, r as PageBanner } from "./layout-vJt7Uk-S.mjs";
import { n as faqs, t as FAQList } from "./faq-list-r8ZfiMhz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-dyO2FCyK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ledger_faq_default = "/assets/ledger-faq-CI4SJRSP.jpg";
function FAQ() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("All");
	const filtered = faqs.filter((f) => (category === "All" || f.category === category) && `${f.question} ${f.answer}`.toLowerCase().includes(query.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
			eyebrow: "Knowledge base",
			title: "Your questions. Clear answers.",
			description: "Explore tax, GST and compliance essentials, with links to the official government sources."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoStrip, {
			src: ledger_faq_default,
			alt: "Open accounting ledger with a gold fountain pen, spectacles and a brass balance scale"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section faq-band",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap max-w-[950px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "search-box",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							size: 19,
							className: "text-muted-foreground"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							"aria-label": "Search tax and GST questions",
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Search tax, GST, TDS and more…"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "filters",
						"aria-label": "FAQ categories",
						children: [
							"All",
							"GST",
							"Income Tax",
							"TDS",
							"Business"
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: category === c ? "corporate" : "outline",
							"aria-pressed": category === c,
							onClick: () => setCategory(c),
							children: c
						}, c))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground mb-5",
						"aria-live": "polite",
						children: [filtered.length, " questions"]
					}),
					filtered.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQList, { items: filtered }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "faq-item",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "section-heading",
								children: "No matching questions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-intro",
								children: "Try another search or choose a different category."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "corporate",
								className: "mt-4",
								onClick: () => {
									setQuery("");
									setCategory("All");
								},
								children: "Clear filters"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-intro mt-8 text-xs",
						children: "General information only, not personalised tax or legal advice. Rules, forms, thresholds and deadlines may change. Check current official notifications for your year and circumstances, or contact our office for an individual review."
					}) })
				]
			})
		})
	] });
}
//#endregion
export { FAQ as component };
