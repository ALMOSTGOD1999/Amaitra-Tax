import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { a as pageHead } from "./site-CURpZlHm.mjs";
import { _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, v as createFileRoute, x as useRouter, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteFooter, o as SiteHeader } from "./layout-vJt7Uk-S.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Zc_SNbWn.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DWzGZs9v.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Arindam Maitra Tax Consulting Unit" },
			{
				name: "description",
				content: "Tax, GST compliance and business advisory in Berhampore, West Bengal."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var $$splitComponentImporter$8 = () => import("./routes-C4eB2M8F.mjs");
var Route$8 = createFileRoute("/")({
	head: () => pageHead("Tax, Compliance & Advisory in Berhampore", "Arindam Maitra Tax Consulting Unit helps individuals and businesses with GST, income tax, accounting and compliance in Berhampore, West Bengal."),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./about-CdbcGJZI.mjs");
var Route$7 = createFileRoute("/about")({
	head: () => pageHead("About the Practice", "Meet Arindam Maitra Tax Consulting Unit, a Berhampore-based practice focused on clear tax guidance, organised records and dependable compliance support."),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./contact-CmQjAqEZ.mjs");
var Route$6 = createFileRoute("/contact")({
	head: () => pageHead("Contact & Consultation", "Call Arindam Maitra Tax Consulting Unit on 98005 80003, 77971 00177 or 094341 08699, email arindamtax.maitra.online@gmail.com or arindamtax.maitra@gmail.com, or visit 35/8, Ukilabad Road, Gora Bazar, Berhampore, West Bengal 742101 or Bhawani Dreams, 9, Sreema Road, Dum Dum Cantonment, Kolkata 700065."),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./faq-dyO2FCyK.mjs");
var Route$5 = createFileRoute("/faq")({
	head: () => pageHead("Tax & GST Frequently Asked Questions", "Find answers to 18 questions about GST, income tax, TDS and business registration, with direct links to official Indian government resources."),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./future-dreams-CCDHzJav.mjs");
var Route$4 = createFileRoute("/future-dreams")({
	head: () => pageHead("Future Dreams — Our Sister Venture", "Future Dreams Financial & Marketing Consultancy offers loans, taxation and registration support, mutual funds, insurance and share trading from Berhampore, Murshidabad."),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./neelkanth-capital-CU9D69z7.mjs");
var Route$3 = createFileRoute("/neelkanth-capital")({
	head: () => pageHead("Neelkanth Capital — Our Sister Concern", "Neelkanth Capital is a Berhampore-based wealth advisory and financial services firm — equity broking, mutual funds, wealth management, IPO advisory and insurance solutions, an authorised partner of Prabhudas Lilladher."),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./resources-BnQmp8mK.mjs");
var Route$2 = createFileRoute("/resources")({
	head: () => pageHead("Official Tax & Business Resources", "Access official government portals for income tax, GST, TDS, Udyam, Startup India, company compliance and West Bengal professional tax."),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services-DruFM743.mjs");
var Route$1 = createFileRoute("/services")({
	head: () => pageHead("Tax & Compliance Services", "Explore GST compliance, income tax advisory, accounting, TDS, corporate compliance and startup guidance from Arindam Maitra Tax Consulting Unit."),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./team-B7gNnOHp.mjs");
var Route = createFileRoute("/team")({
	head: () => pageHead("Our Team", "Meet the tax consultants & assistants, accountants and office executives behind Arindam Maitra Tax Consulting Unit in Berhampore, West Bengal."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	AboutRoute: Route$7.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$9
	}),
	ContactRoute: Route$6.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$9
	}),
	FaqRoute: Route$5.update({
		id: "/faq",
		path: "/faq",
		getParentRoute: () => Route$9
	}),
	FutureDreamsRoute: Route$4.update({
		id: "/future-dreams",
		path: "/future-dreams",
		getParentRoute: () => Route$9
	}),
	NeelkanthCapitalRoute: Route$3.update({
		id: "/neelkanth-capital",
		path: "/neelkanth-capital",
		getParentRoute: () => Route$9
	}),
	ResourcesRoute: Route$2.update({
		id: "/resources",
		path: "/resources",
		getParentRoute: () => Route$9
	}),
	ServicesRoute: Route$1.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$9
	}),
	TeamRoute: Route.update({
		id: "/team",
		path: "/team",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
