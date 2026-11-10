import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./reveal-2qer-yKL.mjs";
import { n as business, t as Button } from "./site-CURpZlHm.mjs";
import { N as ArrowUpRight, p as Phone } from "../_libs/lucide-react.mjs";
import { n as InquiryForm, r as PageBanner, t as ContactDetails } from "./layout-vJt7Uk-S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CmQjAqEZ.js
var import_jsx_runtime = require_jsx_runtime();
var consult_desk_default = "/assets/consult-desk-DAY3REQl.jpg";
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
			eyebrow: "Let’s talk",
			title: "Your next step starts here.",
			description: "Speak with our office about your tax, GST or business compliance requirements. We’ll help you understand where to begin."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "contact-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap contact-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "footer-title",
						children: [
							"Visit our office.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Let’s make things clear." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactDetails, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3 mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "hero",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: business.phoneHref,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}), "Call our office"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "heroOutline",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: business.maps,
								target: "_blank",
								rel: "noopener noreferrer",
								children: ["Get directions ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
							})
						})]
					})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquiryForm, {})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section wrap split-content",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "prose",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: "Before your consultation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-heading",
						children: "A little preparation goes a long way."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-intro",
						children: "Bring what you have — we will tell you what else matters."
					})
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: consult_desk_default,
					alt: "Consultant pointing at a tax notice during a client meeting at the desk",
					width: 1600,
					height: 1072,
					loading: "lazy",
					className: "editorial-photo"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap pb-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "process-row",
				children: [
					{
						title: "Your requirements",
						text: "Make a note of the filing, registration or financial questions you would like to discuss."
					},
					{
						title: "Relevant records",
						text: "Bring available notices, tax statements or business records. We will advise which documents are needed."
					},
					{
						title: "An appointment",
						text: "Call ahead to confirm availability and office hours before travelling to our office."
					}
				].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "number",
						children: ["0", i + 1]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: r.title }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: r.text })
				] }, r.title))
			}) })
		})
	] });
}
//#endregion
export { Contact as component };
