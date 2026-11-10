import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-CURpZlHm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			corporate: "corporate-button navy-button",
			hero: "corporate-button hero-button",
			heroOutline: "corporate-button hero-outline",
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var business = {
	name: "Arindam Maitra Tax Consulting Unit",
	phone: "094341 08699",
	phoneHref: "tel:+919434108699",
	phones: [
		{
			label: "98005 80003",
			href: "tel:+919800580003"
		},
		{
			label: "77971 00177",
			href: "tel:+917797100177"
		},
		{
			label: "094341 08699",
			href: "tel:+919434108699"
		}
	],
	emails: ["arindamtax.maitra.online@gmail.com", "arindamtax.maitra@gmail.com"],
	address: "35/8, Ukilabad Rd, Berhampore, Murshidabad, West Bengal 742101",
	addresses: [{
		label: "35/8, Ukilabad Rd, Berhampore, Murshidabad, West Bengal 742101",
		maps: "https://www.google.com/maps?q=24.0844266,88.2559297&z=17&hl=en"
	}, {
		label: "Bhawani Dreams, 9, Sreema Road, Dum Dum Cantonment, Kolkata 700065",
		maps: "https://www.google.com/maps?q=Bhawani+Dreams%2C+9+Sreema+Road%2C+Dum+Dum+Cantonment%2C+Kolkata+700065&z=17&hl=en"
	}],
	maps: "https://www.google.com/maps?q=24.0844266,88.2559297&z=17&hl=en",
	socials: [
		{
			label: "Facebook",
			href: "https://www.facebook.com/share/19nHmVaAmb/",
			only: "/future-dreams"
		},
		{
			label: "Instagram",
			href: "#"
		},
		{
			label: "LinkedIn",
			href: "#"
		},
		{
			label: "YouTube",
			href: "#"
		}
	]
};
var sisterVenture = {
	name: "Future Dreams",
	tagline: "Financial & Marketing Consultancy",
	mobiles: [{
		label: "9932232578",
		href: "tel:+919932232578"
	}, {
		label: "7047532819",
		href: "tel:+917047532819"
	}],
	phone: "03482-353045",
	phoneHref: "tel:+913482353045",
	email: "futuredreamsbhp@gmail.com",
	address: "35/8, Ukilabad Road (Near Baro Bigha Kabarkhana), P.O. Berhampore, Dist. Murshidabad, PIN - 742101, West Bengal"
};
var nav = [
	{
		to: "/",
		label: "Home",
		special: false
	},
	{
		to: "/services",
		label: "Services",
		special: false
	},
	{
		to: "/about",
		label: "About",
		special: false
	},
	{
		to: "/team",
		label: "Our Team",
		special: false
	},
	{
		to: "/faq",
		label: "FAQ",
		special: false
	},
	{
		to: "/resources",
		label: "Resources",
		special: false
	},
	{
		to: "/contact",
		label: "Contact",
		special: false
	},
	{
		to: "/future-dreams",
		label: "Future Dreams",
		special: true
	},
	{
		to: "/neelkanth-capital",
		label: "Neelkanth Capital",
		special: true
	}
];
function pageHead(title, description) {
	const full = `${title} — ${business.name}`;
	return { meta: [
		{ title: full },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: full
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] };
}
var services = [
	{
		name: "GST Compliance",
		description: "Clear, consistent support for GST registration, return filing and input tax credit reconciliation.",
		items: [
			"GST registration and amendments",
			"GSTR-1 and GSTR-3B preparation",
			"Input tax credit reconciliation",
			"Annual return and notice support"
		]
	},
	{
		name: "Income Tax Advisory",
		description: "Thoughtful tax planning and return preparation for individuals, professionals and businesses.",
		items: [
			"Income tax return preparation",
			"Tax regime comparison and planning",
			"Advance tax assessment",
			"Tax notice response assistance"
		]
	},
	{
		name: "Corporate Secretarial",
		description: "Practical guidance on business registration and statutory requirements as your enterprise grows.",
		items: [
			"Business structure guidance",
			"Registration documentation support",
			"Statutory compliance coordination",
			"Company filing assistance"
		]
	},
	{
		name: "Accounting & Bookkeeping",
		description: "Organised records that make business decisions and statutory filings more straightforward.",
		items: [
			"Bookkeeping and ledger review",
			"Bank and account reconciliation",
			"Financial statement preparation",
			"Invoice and expense organisation"
		]
	},
	{
		name: "TDS Compliance",
		description: "Support with tax deduction records, deposits and statements to help keep your obligations in order.",
		items: [
			"TDS applicability review",
			"Statement preparation and corrections",
			"Tax credit reconciliation",
			"Form 16 / 16A assistance"
		]
	},
	{
		name: "Startup & Business Advisory",
		description: "A clear financial and compliance foundation for new ventures and growing local businesses.",
		items: [
			"Business and registration guidance",
			"Udyam registration assistance",
			"Financial projections",
			"Compliance planning"
		]
	},
	{
		name: "NGO Darpan",
		description: "Registration and ongoing profile support for NGOs, trusts and societies on the NGO Darpan portal.",
		items: [
			"NGO Darpan registration",
			"Profile and project updates",
			"Annual compliance support",
			"CSR-1 registration guidance"
		]
	},
	{
		name: "EPFO & ESIC",
		description: "Establishment-level provident fund and state insurance compliance handled end to end.",
		items: [
			"EPFO registration",
			"ESIC registration",
			"Monthly ECR and return filing",
			"Employee onboarding and exit compliance"
		]
	},
	{
		name: "Professional Tax (P-Tax)",
		description: "West Bengal professional tax registration, deductions and returns for employers and professionals.",
		items: [
			"P-Tax registration",
			"Monthly and quarterly return filing",
			"Employee deduction compliance",
			"Certificate renewal"
		]
	}
];
var fdServices = [
	{
		name: "Loans",
		tag: "Borrowing",
		description: "From a vehicle or a home to working capital for your business, Future Dreams helps you understand your borrowing options and prepare a complete, well-presented application for the lender.",
		items: [
			"Vehicle loan",
			"Home loan",
			"Project loan",
			"Education loan",
			"Land purchasing loan",
			"Cash credit & term loan",
			"Loan against property (LAP)",
			"All types of mortgage loan"
		],
		note: "Loan approvals, interest rates and eligibility are decided by the respective lenders. Future Dreams assists with preparing and presenting your application."
	},
	{
		name: "Taxation & Consultancy",
		tag: "Compliance",
		description: "Complete tax and compliance support for individuals and organisations — returns and audits, registrations, trademarks, project reports and day-to-day accounts maintained in Tally.",
		items: [
			"Income tax",
			"Tax audit",
			"GST",
			"P. Tax (professional tax)",
			"EPF & ESIC",
			"Society / Firm / NGO / Nidhi / Company / Trust / LLP registration",
			"Trademark",
			"Project report",
			"Accounts (Tally)"
		],
		note: "Registrations and filings are subject to applicable laws and departmental processing timelines."
	},
	{
		name: "Other Financial Products",
		tag: "Growth & protection",
		description: "Long-term savings and protection, introduced carefully and matched to what you want your money to do for your family or your business.",
		items: [
			"Mutual funds",
			"General & life insurance",
			"Online share trading",
			"Real estate",
			"Tour & travels"
		],
		note: "Insurance is the subject matter of solicitation. Mutual fund and securities investments are subject to market risks; read all scheme and product related documents carefully."
	}
];
//#endregion
export { pageHead as a, nav as i, business as n, services as o, fdServices as r, sisterVenture as s, Button as t };
