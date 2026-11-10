import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./reveal-2qer-yKL.mjs";
import { o as services } from "./site-CURpZlHm.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { N as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as PhotoStrip, r as PageBanner } from "./layout-vJt7Uk-S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-DruFM743.js
var import_jsx_runtime = require_jsx_runtime();
var itr_filing_default = "/assets/itr-filing-CBHAzDTe.jpg";
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
			eyebrow: "Our expertise",
			title: "The right support. In every detail.",
			description: "From an individual tax return to day-to-day business compliance, practical assistance shaped around your needs."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoStrip, {
			src: itr_filing_default,
			alt: "Income tax return booklet, PAN card, ledgers and calculator on a navy desk in warm lamplight"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap section",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "service-list",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 2 * 110,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "service-detail",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "eyebrow",
								children: [
									"0",
									i + 1,
									" / Expertise"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: s.name }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: s.description }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: s.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item)) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								className: "text-link",
								to: "/contact",
								children: ["Discuss your requirements ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })]
							})
						]
					})
				}, s.name))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "section-intro mt-9",
				children: "Scope, fees and any specialist coordination are agreed after reviewing your requirements. Services are subject to applicable law and eligibility."
			}) })]
		})
	] });
}
//#endregion
export { Services as component };
