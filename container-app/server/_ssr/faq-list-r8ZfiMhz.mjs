import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./site-CURpZlHm.mjs";
import { N as ArrowUpRight, f as Plus, m as Minus } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-list-r8ZfiMhz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var faqs = [
	{
		category: "GST",
		question: "What are the primary GST return deadlines for businesses?",
		answer: "For monthly filers, GSTR-1 is generally due on the 11th and GSTR-3B on the 20th of the following month. Quarterly filing and payment arrangements have different dates. Extensions and notifications can change deadlines, so always check the portal for your return period.",
		url: "https://www.gst.gov.in/",
		source: "Official GST Portal"
	},
	{
		category: "Income Tax",
		question: "How do I check my income tax refund status?",
		answer: "Sign in to the Income Tax e-Filing portal and open your filed returns for the relevant year. The return details show processing and refund status. Ensure that your bank account is validated and nominated for refunds.",
		url: "https://www.incometax.gov.in/iec/foportal/",
		source: "Income Tax e-Filing"
	},
	{
		category: "Income Tax",
		question: "Which ITR form is applicable to a business or professional?",
		answer: "The correct return depends on your legal status, income sources and the applicable year. ITR-3 generally covers individuals and HUFs with business or professional income; eligible presumptive taxpayers may use ITR-4. Check the form instructions for the year before filing.",
		url: "https://www.incometax.gov.in/iec/foportal/",
		source: "e-Filing form guidance"
	},
	{
		category: "GST",
		question: "When does my business need GST registration?",
		answer: "Registration depends on aggregate turnover, the nature of your supplies, your state and any compulsory-registration provisions or exemptions. Goods and services can have different thresholds. Review your complete business activity rather than relying on a single turnover figure.",
		url: "https://cbic-gst.gov.in/",
		source: "CBIC GST guidance"
	},
	{
		category: "GST",
		question: "What is the difference between GSTR-1 and GSTR-3B?",
		answer: "GSTR-1 reports details of outward supplies. GSTR-3B is a summary return used to declare tax liability, eligible input tax credit and payment of tax. Reconcile your books and both returns before submission.",
		url: "https://www.gst.gov.in/",
		source: "GST return resources"
	},
	{
		category: "GST",
		question: "How are GSTR-2A and GSTR-2B different?",
		answer: "GSTR-2A is a dynamic inward-supply statement that updates as supplier information changes. GSTR-2B is a period-based input tax credit statement. Availability in a statement alone does not establish eligibility: the legal conditions and restrictions still apply.",
		url: "https://www.gst.gov.in/",
		source: "GST input tax credit guidance"
	},
	{
		category: "GST",
		question: "Can I claim input tax credit on business purchases?",
		answer: "ITC may be available for eligible business purchases if the statutory requirements are met, including prescribed documentation, receipt of supply and other applicable conditions. Some purchases are blocked or restricted, and time limits apply. Reconcile records before claiming credit.",
		url: "https://cbic-gst.gov.in/",
		source: "CBIC input tax credit rules"
	},
	{
		category: "GST",
		question: "Who can opt for the GST Composition Scheme?",
		answer: "The scheme is available only to eligible taxpayers within the applicable turnover limits and activity restrictions. A composition taxpayer generally cannot collect GST separately or claim ITC. Eligibility, interstate supplies and e-commerce conditions require case-specific review.",
		url: "https://www.gst.gov.in/",
		source: "GST Composition Scheme"
	},
	{
		category: "GST",
		question: "What is the reverse charge mechanism?",
		answer: "Under reverse charge, the recipient pays GST instead of the supplier for notified supplies. It does not apply to every purchase from an unregistered supplier. Check the notified category, recipient conditions and payment requirements for the transaction.",
		url: "https://cbic-gst.gov.in/",
		source: "CBIC reverse charge guidance"
	},
	{
		category: "Income Tax",
		question: "What documents should I prepare before filing my return?",
		answer: "Gather PAN details, bank interest statements, salary or pension records, relevant tax deduction certificates, tax credit statements and evidence of deductions. Business taxpayers should also organise books, invoices and financial statements. The documents needed depend on your income.",
		url: "https://www.incometax.gov.in/iec/foportal/",
		source: "Income Tax filing resources"
	},
	{
		category: "Income Tax",
		question: "How do I choose between tax regimes?",
		answer: "Compare the tax result using your actual income, permitted exemptions and deductions for the applicable year. Business-income taxpayers may face additional rules when opting in or out. Use current official guidance rather than a generic recommendation.",
		url: "https://www.incometax.gov.in/iec/foportal/",
		source: "Income Tax regime guidance"
	},
	{
		category: "Income Tax",
		question: "When do I need to pay advance tax?",
		answer: "Advance tax may be required when your estimated tax liability after eligible tax credits exceeds the applicable statutory limit. Instalment rules, presumptive-income provisions and exemptions differ by taxpayer. Recalculate when income changes and check current payment guidance.",
		url: "https://www.incometax.gov.in/iec/foportal/",
		source: "Official tax payment guidance"
	},
	{
		category: "TDS",
		question: "What is TDS and how do I check my tax credits?",
		answer: "Tax Deducted at Source is tax withheld on specified payments under the applicable rules. Reconcile deduction certificates and your tax credit statements before filing. If a deduction is missing or incorrect, contact the deductor to arrange a correction.",
		url: "https://www.tdscpc.gov.in/",
		source: "TRACES tax credit resources"
	},
	{
		category: "TDS",
		question: "Can a TDS statement be corrected?",
		answer: "Deductors can use the prescribed correction process on TRACES to resolve eligible challan, PAN and deductee-detail errors. Available online corrections depend on the statement and processing status. Keep supporting records and verify the corrected result.",
		url: "https://www.tdscpc.gov.in/",
		source: "TRACES correction guidance"
	},
	{
		category: "Income Tax",
		question: "What should I do if I receive a tax notice?",
		answer: "Verify the communication through the official portal, identify the relevant year and response deadline, and compare it with your filed return and records. A notice does not automatically mean wrongdoing. Seek help promptly and respond using the prescribed process.",
		url: "https://www.incometax.gov.in/iec/foportal/",
		source: "Income Tax notices and proceedings"
	},
	{
		category: "Business",
		question: "Does Udyam registration need periodic renewal?",
		answer: "Udyam registration provides a permanent registration number and does not require periodic renewal. Your enterprise details and applicable classification must still remain accurate. Use the government portal; registration through it is free.",
		url: "https://udyamregistration.gov.in/",
		source: "Official Udyam Registration"
	},
	{
		category: "Business",
		question: "Does Startup India recognition automatically give a tax holiday?",
		answer: "No. Recognition and eligibility for an income tax exemption are separate matters. A startup must satisfy the relevant statutory conditions and obtain the prescribed approval where required. Verify current eligibility before including any exemption in your financial plan.",
		url: "https://www.startupindia.gov.in/",
		source: "Startup India official guidance"
	},
	{
		category: "Business",
		question: "What is enrolment versus registration for West Bengal professional tax?",
		answer: "Enrolment generally relates to the liability of a person or entity to pay professional tax for itself. Registration generally relates to an employer deducting and paying professional tax for employees. Your obligations depend on your activity and the applicable state schedule.",
		url: "https://comtax.wb.gov.in/",
		source: "West Bengal Commercial Taxes"
	}
];
function FAQList({ items = faqs, initialOpen = 0 }) {
	const [open, setOpen] = (0, import_react.useState)(items[initialOpen]?.question ?? null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "faq-list",
		children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "faq-item",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "ghost",
				className: "faq-question",
				"aria-expanded": open === item.question,
				"aria-controls": `answer-${index}`,
				onClick: () => setOpen(open === item.question ? null : item.question),
				children: [item.question, open === item.question ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { size: 17 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 17 })]
			}), open === item.question && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: `answer-${index}`,
				className: "faq-answer",
				children: [
					item.answer,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "official-link",
						href: item.url,
						target: "_blank",
						rel: "noopener noreferrer",
						children: [item.source, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 13 })]
					})
				]
			})]
		}, item.question))
	});
}
//#endregion
export { faqs as n, FAQList as t };
