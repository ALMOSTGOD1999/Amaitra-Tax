import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./reveal-2qer-yKL.mjs";
import { i as nav, n as business, o as services, t as Button } from "./site-CURpZlHm.mjs";
import { t as neelkanth_logo_default } from "./neelkanth-logo-DoEhuGVC.mjs";
import { b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Copy, E as Facebook, N as ArrowUpRight, S as Instagram, _ as Menu, b as Linkedin, g as MessageCircle, h as MessageSquare, k as Check, n as X, p as Phone, t as Youtube, u as RotateCcw, v as MapPin, y as Mail } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/layout-vJt7Uk-S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SLOTS = [
	"12:00 – 12:30 PM",
	"12:30 – 1:00 PM",
	"1:00 – 1:30 PM",
	"1:30 – 2:00 PM",
	"2:00 – 2:30 PM",
	"2:30 – 3:00 PM"
];
function toISODate(date) {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function tomorrowISO() {
	const now = /* @__PURE__ */ new Date();
	return toISODate(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1));
}
function formatDate(value) {
	const [year, month, day] = value.split("-").map(Number);
	if (!year || !month || !day) return value;
	return new Date(year, month - 1, day).toLocaleDateString("en-IN", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	});
}
function InquiryForm() {
	const [draft, setDraft] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [minDate] = (0, import_react.useState)(tomorrowISO);
	function buildDraft(data) {
		const date = data.get("date");
		const slot = data.get("slot");
		const lines = [
			"Consultation enquiry",
			`Name: ${data.get("name")}`,
			`Phone: ${data.get("phone")}`,
			`Service: ${data.get("service")}`
		];
		if (date) lines.push(`Preferred date: ${formatDate(String(date))}`);
		if (slot) lines.push(`Preferred slot (Mon–Fri): ${slot}`);
		lines.push(String(data.get("message") ?? ""));
		return lines.join("\n");
	}
	function submit(e) {
		e.preventDefault();
		setDraft(buildDraft(new FormData(e.currentTarget)));
	}
	function whatsappHref(form) {
		const data = new FormData(form);
		const date = data.get("date");
		const slot = data.get("slot");
		const parts = [
			"Hello, I would like to book a consultation slot at Arindam Maitra Tax Consulting Unit.",
			`Name: ${data.get("name")}`,
			`Phone: ${data.get("phone")}`,
			`Service: ${data.get("service")}`
		];
		if (date) parts.push(`Preferred date: ${formatDate(String(date))}`);
		if (slot) parts.push(`Preferred slot (Mon–Fri, 12–3 PM): ${slot}`);
		const msg = data.get("message");
		if (msg) parts.push(`Message: ${msg}`);
		return `https://wa.me/919434108699?text=${encodeURIComponent(parts.join("\n"))}`;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inquiry-form",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Request a consultation" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "form-grid",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "field",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "inquiry-name",
								children: "Your name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "inquiry-name",
								name: "name",
								autoComplete: "name",
								required: true,
								placeholder: "Full name",
								maxLength: 100
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "field",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "inquiry-phone",
								children: "Phone number"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "inquiry-phone",
								name: "phone",
								type: "tel",
								autoComplete: "tel",
								required: true,
								placeholder: "Your contact number",
								pattern: "[+0-9 ()-]{7,20}"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "inquiry-service",
							children: "Service"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							id: "inquiry-service",
							name: "service",
							children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s.name }, s.name))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "field",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "inquiry-date",
								children: "Preferred date"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "inquiry-date",
								name: "date",
								type: "date",
								required: true,
								min: minDate
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "form-note",
								children: "Pick any date after today — today and earlier dates are unavailable. Saturday and Sunday are not available for appointment."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "inquiry-slot",
							children: "Preferred slot — Monday to Friday, 12 PM – 3 PM (30 minutes each)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "inquiry-slot",
							name: "slot",
							defaultValue: "",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select a slot…"
							}), SLOTS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: s,
								children: s
							}, s))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "inquiry-message",
							children: "Your enquiry"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "inquiry-message",
							name: "message",
							placeholder: "Tell us what you need assistance with",
							rows: 3,
							required: true,
							maxLength: 2e3
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "form-note",
						children: "Prepare your enquiry to send by SMS to 094341 08699. Nothing is sent automatically."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "hero",
						className: "w-full mt-3",
						type: "submit",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {}), "Prepare enquiry"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "heroOutline",
						className: "w-full mt-3",
						type: "button",
						onClick: (e) => {
							const form = e.currentTarget.form;
							if (!form.reportValidity()) return;
							window.open(whatsappHref(form), "_blank", "noopener,noreferrer");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), "Book slot on WhatsApp"]
					})
				]
			}),
			draft && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "status",
				className: "mt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "form-note",
					children: "Your enquiry is ready. Send it from your messaging app, or copy it and contact our office."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "hero",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `sms:+919434108699?body=${encodeURIComponent(draft)}`,
							children: ["Open SMS ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "heroOutline",
						onClick: async () => {
							try {
								await navigator.clipboard.writeText(draft);
								setCopied(true);
							} catch {
								setCopied(false);
							}
						},
						children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), copied ? "Copied" : "Copy enquiry"]
					})]
				})]
			})
		]
	});
}
var logo_default = "/assets/logo-Q-bw5Vbq.png";
var fd_logo_default = "/assets/fd-logo-Ceox_YIP.png";
var socialIcons = {
	Facebook,
	Instagram,
	LinkedIn: Linkedin,
	YouTube: Youtube
};
function brandFor(pathname) {
	if (pathname === "/future-dreams") return {
		src: fd_logo_default,
		alt: "Future Dreams logo",
		wide: true
	};
	if (pathname === "/neelkanth-capital") return {
		src: neelkanth_logo_default,
		alt: "Neelkanth Capital logo",
		wide: true
	};
	return {
		src: logo_default,
		alt: "Arindam Maitra Tax Consulting Unit logo",
		wide: false
	};
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const brand = brandFor(useRouterState({ select: (s) => s.location.pathname }));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "site-header",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap header-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "brand",
					"aria-label": "Arindam Maitra Tax Consulting Unit home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: brand.src,
						alt: brand.alt,
						width: 84,
						height: 84,
						className: "brand-logo",
						style: brand.wide ? {
							width: "auto",
							height: 84
						} : void 0,
						fetchPriority: "high"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Main navigation",
					className: "desktop-nav",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						activeOptions: { exact: true },
						className: n.special ? "nav-sister" : void 0,
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "corporate",
					asChild: true,
					className: "header-consultation",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						children: ["Let’s talk ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "mobile-menu-toggle",
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					onClick: () => setOpen(!open),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			"aria-label": "Mobile navigation",
			className: "mobile-nav",
			children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: n.to,
				onClick: () => setOpen(false),
				className: n.special ? "nav-sister" : void 0,
				children: n.label
			}, n.to))
		})]
	});
}
function ContactDetails() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		business.addresses.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "contact-line",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: entry.maps,
				target: "_blank",
				rel: "noopener noreferrer",
				children: entry.label
			})]
		}, entry.label)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "contact-line",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2",
				children: business.phones.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: entry.href,
					className: "text-primary hover:underline",
					children: entry.label
				}, entry.href))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "contact-line",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: business.emails.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [index > 0 && " / ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `mailto:${entry}`,
				children: entry
			})] }, entry)) })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "form-note",
			children: "Please call to confirm office hours and appointment availability."
		})
	] });
}
function SiteFooter() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const brand = brandFor(pathname);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "site-footer",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [pathname !== "/contact" && pathname !== "/neelkanth-capital" && pathname !== "/future-dreams" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "contact-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "footer-title",
					children: [
						"Let’s align your",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "financial future." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactDetails, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquiryForm, {})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-bottom",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-legal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: brand.src,
							alt: brand.alt,
							width: 40,
							height: 40,
							loading: "lazy",
							className: "footer-logo",
							style: brand.wide ? {
								width: "auto",
								height: 48
							} : void 0
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Arindam Maitra Tax Consulting Unit. All rights reserved."
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "footer-socials",
						children: business.socials.map((entry) => {
							const Icon = socialIcons[entry.label];
							if (!(!entry.only || entry.only === pathname)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								title: entry.label,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 19 })
							}, entry.label);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: entry.href,
								"aria-label": `${business.name} on ${entry.label}`,
								target: entry.href.startsWith("http") ? "_blank" : void 0,
								rel: entry.href.startsWith("http") ? "noopener noreferrer" : void 0,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 19 })
							}, entry.label);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-links",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.gst.gov.in/",
								target: "_blank",
								rel: "noopener noreferrer",
								children: "GST Portal ↗"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.incometax.gov.in/iec/foportal/",
								target: "_blank",
								rel: "noopener noreferrer",
								children: "Income Tax Portal ↗"
							}),
							pathname === "/" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								className: "h-auto p-0 text-[10px] text-inverse-muted",
								onClick: () => window.dispatchEvent(new Event("replay-welcome")),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { size: 12 }), "Replay welcome"]
							})
						]
					})
				]
			})]
		})
	});
}
function PageBanner({ eyebrow, title, description, image, imageAlt = "", descriptionClassName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: image ? "page-banner page-banner-photo" : "page-banner",
		children: [image && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image,
			alt: imageAlt,
			className: "page-banner-img"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "page-banner-scrim",
			"aria-hidden": "true"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: image ? "wrap page-banner-content" : "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: title }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "banner-rule",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: descriptionClassName,
					children: description
				})
			]
		})]
	});
}
function PhotoStrip({ src, alt }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "photo-strip-frame",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			className: "photo-strip",
			src,
			alt,
			width: 1920,
			height: 704,
			loading: "lazy"
		})
	}) });
}
//#endregion
export { SiteFooter as a, PhotoStrip as i, InquiryForm as n, SiteHeader as o, PageBanner as r, ContactDetails as t };
