import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./reveal-2qer-yKL.mjs";
import { o as services, t as Button } from "./site-CURpZlHm.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { N as ArrowUpRight, P as ArrowRight, v as MapPin } from "../_libs/lucide-react.mjs";
import { n as faqs, t as FAQList } from "./faq-list-r8ZfiMhz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C4eB2M8F.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var terms = [
	"₹",
	"GST",
	"ITR",
	"TDS",
	"Invoices",
	"Balance sheets",
	"Startup funding",
	"Tax notices",
	"18%",
	"25%",
	"ITR-3",
	"GSTR-1",
	"GSTR-3B",
	"31 MAR",
	"15 JUN",
	"%",
	"↗",
	"▥"
];
function WelcomeScene({ onClose }) {
	const canvas = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const node = canvas.current;
		if (!node) return;
		const maybe = node.getContext("2d");
		if (!maybe) return;
		const ctx = maybe;
		let frame = 0;
		const start = performance.now();
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			onClose();
			return;
		}
		const css = getComputedStyle(document.documentElement);
		const gold = css.getPropertyValue("--primary").trim();
		const ink = css.getPropertyValue("--inverse").trim();
		let w = window.innerWidth, h = window.innerHeight;
		const resize = () => {
			w = window.innerWidth;
			h = window.innerHeight;
			const d = Math.min(window.devicePixelRatio, 2);
			node.width = w * d;
			node.height = h * d;
			ctx.setTransform(d, 0, 0, d, 0, 0);
		};
		resize();
		window.addEventListener("resize", resize);
		function draw(now) {
			const t = (now - start) / 1e3;
			ctx.clearRect(0, 0, w, h);
			const collapse = Math.max(0, Math.min(1, (t - 3) / 1.05));
			const alpha = Math.max(0, 1 - collapse);
			if (t < 4.2) {
				const radius = Math.min(w * .47, h * .43);
				for (let i = 0; i < 230; i++) {
					const angle = i * 2.39996 + t * (.15 + i % 5 * .024);
					const r = (.29 + i * 37 % 100 / 140) * radius * (1 - collapse) ** 2;
					const x = w / 2 + Math.cos(angle) * r;
					const y = h / 2 + Math.sin(angle) * r * .68;
					const featured = i % 16 === 0;
					ctx.globalAlpha = alpha * (featured ? .95 : .12 + i % 7 * .045) * Math.min(1, t * 1.5);
					ctx.fillStyle = featured ? gold : ink;
					const size = featured ? w < 760 ? 19 : 30 : (w < 760 ? 10 : 12) + i % 5;
					ctx.font = `${featured ? "600" : "400"} ${size}px Inter, sans-serif`;
					ctx.textAlign = "center";
					ctx.fillText(terms[i % terms.length] ?? "₹", x, y);
				}
				ctx.globalAlpha = alpha;
				ctx.fillStyle = gold;
				ctx.font = `400 ${w < 760 ? 88 : 130}px 'Playfair Display',serif`;
				ctx.textAlign = "center";
				ctx.fillText("₹", w / 2, h / 2 + 35);
				ctx.globalAlpha = 1;
			}
			frame = requestAnimationFrame(draw);
		}
		frame = requestAnimationFrame(draw);
		const timer = window.setTimeout(onClose, 7700);
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			cancelAnimationFrame(frame);
			clearTimeout(timer);
			window.removeEventListener("resize", resize);
			document.body.style.overflow = previous;
		};
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "intro",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Welcome to Arindam Maitra Tax Consultancy",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvas,
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "intro-brand",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "intro-name",
						children: "ARINDAM MAITRA"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "intro-subtitle",
						children: "TAX CONSULTING UNIT"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "intro-line" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "intro-services",
						children: "Tax • Compliance • Advisory"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "intro-tagline",
						children: [
							"Your Trust, Our Responsibility.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Your Privacy, Our Priority."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "intro-bottom",
				children: "PRECISION. CLARITY. PEACE OF MIND."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "ghost",
				className: "intro-skip",
				onClick: onClose,
				children: ["Skip intro ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
			})
		]
	});
}
function Welcome() {
	const [show, setShow] = (0, import_react.useState)(false);
	const [run, setRun] = (0, import_react.useState)(0);
	const close = (0, import_react.useRef)(() => setShow(false));
	(0, import_react.useEffect)(() => {
		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && !sessionStorage.getItem("amtc-welcome")) {
			setShow(true);
			sessionStorage.setItem("amtc-welcome", "seen");
		}
		const replay = () => {
			setRun((r) => r + 1);
			setShow(true);
		};
		window.addEventListener("replay-welcome", replay);
		return () => window.removeEventListener("replay-welcome", replay);
	}, []);
	return show ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WelcomeScene, { onClose: close.current }, run) : null;
}
var tax_desk_default = "/assets/tax-desk-BLhydGFs.jpg";
var rupee_growth_default = "/assets/rupee-growth-B2UrNN3g.jpg";
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Welcome, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "hero",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					className: "hero-image",
					src: tax_desk_default,
					alt: "Desk with Indian income tax return forms, GST filings, rupee notes and a brass scale",
					width: 1920,
					height: 1088,
					fetchPriority: "high"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap hero-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow",
							children: "Tax • Compliance • Advisory (since 1997-98)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Arindam Maitra" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Tax Consulting Unit" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hero-description text-blue-600 font-bold mt-0 text-lg",
							style: { color: "var(--primary)" },
							children: "Your Trust, Our Responsibility - Your Privacy, Our Priority."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hero-description mt-2",
							children: "We are committed to protecting our clients' privacy and safeguarding their confidential information. Trust, discretion, and data security are at the heart of everything we do. Your information is always handled with the utmost care, responsibility, and confidentiality. forward."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "hero",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									children: ["Request consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "heroOutline",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/services",
									children: ["Our expertise ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
								})
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap hero-location",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 13 }), "BERHAMPORE, WEST BENGAL \xA0 / \xA0 YOUR LOCAL TAX & COMPLIANCE PARTNER"]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap services-preview",
			children: services.slice(0, 3).map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "service-rule" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: s.name }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: s.description }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services",
						className: "text-link",
						children: ["Explore service ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })]
					})
				] })
			}, s.name))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "photo-band",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: rupee_growth_default,
				alt: "Stacked rupee banknotes and growing stacks of brass coins beside a balance scale",
				width: 1920,
				height: 704,
				loading: "lazy"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "wrap photo-band-copy",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "photo-band-quote",
					children: [
						"Clear numbers.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Confident decisions." })
					]
				})
			}) })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section faq-band",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap max-w-[900px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "center-heading",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow justify-center",
								children: "Clarity, before complexity"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "section-heading",
								children: "Knowledge Base & FAQ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-intro mx-auto",
								children: "Answers to everyday tax and GST questions, with official sources."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQList, { items: faqs.slice(0, 3) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "faq-preview-grid",
						children: [
							faqs[12],
							faqs[16],
							faqs[5],
							faqs[11]
						].map((f) => f && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "faq-mini",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: f.question }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: f.answer }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: f.url,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "official-link",
									children: [f.source, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 12 })]
								})
							]
						}, f.question))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "corporate",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/faq",
								children: ["Explore all 18 questions ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
							})
						})
					})
				]
			})
		}) })
	] });
}
//#endregion
export { Home as component };
