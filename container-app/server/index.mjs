globalThis.__nitro_main__ = import.meta.url;
import { i as serve, r as NodeResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { a as toEventHandler, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/index-Cw_Oa57x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5e311-6GGUMEMAZjYNBP92ClxkLJyekKE\"",
		"mtime": "2026-11-10T12:11:33.829Z",
		"size": 385809,
		"path": "../public/assets/index-Cw_Oa57x.js"
	},
	"/assets/Niladri Mandal.jpg-rnR5Tq2Z.jpeg": {
		"type": "image/jpeg",
		"etag": "\"61cd5-Uhjaq323mjUDnazXShkvBhmwQMU\"",
		"mtime": "2026-11-10T12:11:33.862Z",
		"size": 400597,
		"path": "../public/assets/Niladri Mandal.jpg-rnR5Tq2Z.jpeg"
	},
	"/assets/Bibek Das.jpg-CkhykEv8.jpeg": {
		"type": "image/jpeg",
		"etag": "\"6e259-ppGQmQQrmHXaUWInKRdPKWtnieg\"",
		"mtime": "2026-11-10T12:11:33.845Z",
		"size": 451161,
		"path": "../public/assets/Bibek Das.jpg-CkhykEv8.jpeg"
	},
	"/assets/traces-portal-BgSZLjv-.png": {
		"type": "image/png",
		"etag": "\"14ac-KTsoJcidKr1LF+L1rDDDD1ujck8\"",
		"mtime": "2026-11-10T12:11:33.893Z",
		"size": 5292,
		"path": "../public/assets/traces-portal-BgSZLjv-.png"
	},
	"/assets/ledger-faq-CI4SJRSP.jpg": {
		"type": "image/jpeg",
		"etag": "\"24ffb-B1KAqY1jIUp3q7xfPUsFGy2rSvQ\"",
		"mtime": "2026-11-10T12:11:33.892Z",
		"size": 151547,
		"path": "../public/assets/ledger-faq-CI4SJRSP.jpg"
	},
	"/assets/Ashok Dutt-Bf_3km_E.jpg": {
		"type": "image/jpeg",
		"etag": "\"37860-dg21Ihq6mclzggID3V2z+0l3bJo\"",
		"mtime": "2026-11-10T12:11:33.845Z",
		"size": 227424,
		"path": "../public/assets/Ashok Dutt-Bf_3km_E.jpg"
	},
	"/assets/itr-filing-CBHAzDTe.jpg": {
		"type": "image/jpeg",
		"etag": "\"1edd1-ubl2UPYWv4w5b3GTiH9tDIQ+k0c\"",
		"mtime": "2026-11-10T12:11:33.891Z",
		"size": 126417,
		"path": "../public/assets/itr-filing-CBHAzDTe.jpg"
	},
	"/assets/team-CkT7hg3p.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10b1-p/CZi2f4zjY05FUwUnUuc3qCjT8\"",
		"mtime": "2026-11-10T12:11:33.838Z",
		"size": 4273,
		"path": "../public/assets/team-CkT7hg3p.js"
	},
	"/assets/fd-loans-fT7LkhwA.jpg": {
		"type": "image/jpeg",
		"etag": "\"31ac6-aRFygtvZ/mtuue56vA57eUwDtF0\"",
		"mtime": "2026-11-10T12:11:33.878Z",
		"size": 203462,
		"path": "../public/assets/fd-loans-fT7LkhwA.jpg"
	},
	"/assets/Amit Karmakar.jpg-qP1ruETG.jpeg": {
		"type": "image/jpeg",
		"etag": "\"ac9e8-nCL95fh/Af/GUsPDlfvs/TAq7qo\"",
		"mtime": "2026-11-10T12:11:33.838Z",
		"size": 707048,
		"path": "../public/assets/Amit Karmakar.jpg-qP1ruETG.jpeg"
	},
	"/assets/Chandan Chakrabarty.jpg-sXaAITt7.jpeg": {
		"type": "image/jpeg",
		"etag": "\"52728-7gRqDmfw5mmPuyvBm3A9hP/e6v8\"",
		"mtime": "2026-11-10T12:11:33.847Z",
		"size": 337704,
		"path": "../public/assets/Chandan Chakrabarty.jpg-sXaAITt7.jpeg"
	},
	"/assets/arindam-maitra-proprietor-SsP47LLm.jpg": {
		"type": "image/jpeg",
		"etag": "\"3f661-lMmQI21IDkuo7Ciule72VhnUk98\"",
		"mtime": "2026-11-10T12:11:33.866Z",
		"size": 259681,
		"path": "../public/assets/arindam-maitra-proprietor-SsP47LLm.jpg"
	},
	"/assets/hero-sky-CcN12uEu.jpg": {
		"type": "image/jpeg",
		"etag": "\"13d76-TwfufycRnsBfhr88BzfaVF9Acjw\"",
		"mtime": "2026-11-10T12:11:33.888Z",
		"size": 81270,
		"path": "../public/assets/hero-sky-CcN12uEu.jpg"
	},
	"/assets/income-tax-efiling-COkdC_tk.svg": {
		"type": "image/svg+xml",
		"etag": "\"3fa54-LPaS2YRynOD1jp73CPdFJj0n1Og\"",
		"mtime": "2026-11-10T12:11:33.889Z",
		"size": 260692,
		"path": "../public/assets/income-tax-efiling-COkdC_tk.svg"
	},
	"/assets/logo-Q-bw5Vbq.png": {
		"type": "image/png",
		"etag": "\"83c83-DuFz9FY09+IHlsf+9aB8iituUaA\"",
		"mtime": "2026-11-10T12:11:33.892Z",
		"size": 539779,
		"path": "../public/assets/logo-Q-bw5Vbq.png"
	},
	"/assets/services-CacwzwS0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"560-eeV6tjU70ep9keRu7pYycWvoxZY\"",
		"mtime": "2026-11-10T12:11:33.838Z",
		"size": 1376,
		"path": "../public/assets/services-CacwzwS0.js"
	},
	"/assets/nse-CzpsTh8w.png": {
		"type": "image/png",
		"etag": "\"23e5-7YAycBmLPCM49VJIzfRaOPb7y2A\"",
		"mtime": "2026-11-10T12:11:33.893Z",
		"size": 9189,
		"path": "../public/assets/nse-CzpsTh8w.png"
	},
	"/assets/canara-robeco-CbE6MW_D.png": {
		"type": "image/png",
		"etag": "\"2e45-YXnjt2kpnJyLAEx1QgCtywojPbg\"",
		"mtime": "2026-11-10T12:11:33.866Z",
		"size": 11845,
		"path": "../public/assets/canara-robeco-CbE6MW_D.png"
	},
	"/assets/future-dreams-g2n2reMX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26c8-cFMhwuHtmcYUlr4UxSWSAldq090\"",
		"mtime": "2026-11-10T12:11:33.838Z",
		"size": 9928,
		"path": "../public/assets/future-dreams-g2n2reMX.js"
	},
	"/assets/arrow-right-PEtH3kpc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-qg40dXYM47lIz+Pwf3mqz6MII/Q\"",
		"mtime": "2026-11-10T12:11:33.838Z",
		"size": 165,
		"path": "../public/assets/arrow-right-PEtH3kpc.js"
	},
	"/assets/fd-partner-3-BeePI29Q.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d808-7/q1SRW3t/XlKlPDVIxqjSRLrFE\"",
		"mtime": "2026-11-10T12:11:33.879Z",
		"size": 120840,
		"path": "../public/assets/fd-partner-3-BeePI29Q.jpg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"ae-hLVBrSrDdpIw3Xl0dJPRkupPepQ\"",
		"mtime": "2026-11-10T12:11:35.202Z",
		"size": 174,
		"path": "../public/robots.txt"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"2ce5-9IAY7FyeTSZMziRF3yFhTqwwrQ4\"",
		"mtime": "2026-11-10T12:11:35.202Z",
		"size": 11493,
		"path": "../public/favicon.png"
	},
	"/apple-touch-icon.png": {
		"type": "image/png",
		"etag": "\"48b0-SjlHmPv4r1Z2h5lmwqko4P+b1Qg\"",
		"mtime": "2026-11-10T12:11:35.202Z",
		"size": 18608,
		"path": "../public/apple-touch-icon.png"
	},
	"/assets/invesco-DnMsV9MS.png": {
		"type": "image/png",
		"etag": "\"22d2-T5bmZBPSAGzBRJ3CPH5X0us6gIg\"",
		"mtime": "2026-11-10T12:11:33.891Z",
		"size": 8914,
		"path": "../public/assets/invesco-DnMsV9MS.png"
	},
	"/assets/pl-capital-C_sRboEl.png": {
		"type": "image/png",
		"etag": "\"3b1b-IrFBLmhBuGw2jdi6VQbE54Fjw04\"",
		"mtime": "2026-11-10T12:11:33.893Z",
		"size": 15131,
		"path": "../public/assets/pl-capital-C_sRboEl.png"
	},
	"/assets/gst-invoice-tj7rmXDR.jpg": {
		"type": "image/jpeg",
		"etag": "\"23b73-11NOwl/J7LTzm2w87btW+00zu3I\"",
		"mtime": "2026-11-10T12:11:33.881Z",
		"size": 146291,
		"path": "../public/assets/gst-invoice-tj7rmXDR.jpg"
	},
	"/assets/neelkanth-capital-P29xlxvX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4894-BiAECMxcpq+hZIrrgvvAECndJuQ\"",
		"mtime": "2026-11-10T12:11:33.838Z",
		"size": 18580,
		"path": "../public/assets/neelkanth-capital-P29xlxvX.js"
	},
	"/assets/Mriganka Sarkar.jpg-5UbdiM0X.jpeg": {
		"type": "image/jpeg",
		"etag": "\"65981-4tFUuw81O/Cw6dhHGe/xmWVGECI\"",
		"mtime": "2026-11-10T12:11:33.855Z",
		"size": 416129,
		"path": "../public/assets/Mriganka Sarkar.jpg-5UbdiM0X.jpeg"
	},
	"/assets/Seryasree Das-DAkMLWqZ.jpg": {
		"type": "image/jpeg",
		"etag": "\"2be77-sUdwoXHM9CG6viGGfkAIT8C+Mdw\"",
		"mtime": "2026-11-10T12:11:33.863Z",
		"size": 179831,
		"path": "../public/assets/Seryasree Das-DAkMLWqZ.jpg"
	},
	"/assets/Kanchan Sanyal.jpg-BoEfihm6.jpeg": {
		"type": "image/jpeg",
		"etag": "\"79e1d-jXcmEwJMlx0XISXL9HY7NS8stDc\"",
		"mtime": "2026-11-10T12:11:33.851Z",
		"size": 499229,
		"path": "../public/assets/Kanchan Sanyal.jpg-BoEfihm6.jpeg"
	},
	"/assets/tradx-logo-DVl6Mg9X.png": {
		"type": "image/png",
		"etag": "\"848d-Y4s2sMzUzLygpi7/yVxx6YLXoHE\"",
		"mtime": "2026-11-10T12:11:33.893Z",
		"size": 33933,
		"path": "../public/assets/tradx-logo-DVl6Mg9X.png"
	},
	"/assets/udyam-registration-eHEoB7PO.png": {
		"type": "image/png",
		"etag": "\"b9f8-k/FKIbqwB0TCHEDuuwoEeYtv+Wo\"",
		"mtime": "2026-11-10T12:11:33.893Z",
		"size": 47608,
		"path": "../public/assets/udyam-registration-eHEoB7PO.png"
	},
	"/assets/Biprodip-Bm1HT5vG.jpg": {
		"type": "image/jpeg",
		"etag": "\"2e22d-conNLoOcxltUTxc94n8vozIBWzI\"",
		"mtime": "2026-11-10T12:11:33.847Z",
		"size": 188973,
		"path": "../public/assets/Biprodip-Bm1HT5vG.jpg"
	},
	"/assets/about-D8aaUzSk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c6e-B1Xgs6pPaNvXiqefibLJldFH0rw\"",
		"mtime": "2026-11-10T12:11:33.833Z",
		"size": 3182,
		"path": "../public/assets/about-D8aaUzSk.js"
	},
	"/assets/Anindya Chandra.jpg-BtZFS4uN.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4a41a-dKtel97MEiJXvhUNtEWOkWV4HMw\"",
		"mtime": "2026-11-10T12:11:33.844Z",
		"size": 304154,
		"path": "../public/assets/Anindya Chandra.jpg-BtZFS4uN.jpeg"
	},
	"/assets/Suraj Singh Rawat.jpg-DQfxDf64.jpeg": {
		"type": "image/jpeg",
		"etag": "\"60108-mB9o6GYyd+IOszdMEX0TtvQRA5A\"",
		"mtime": "2026-11-10T12:11:33.863Z",
		"size": 393480,
		"path": "../public/assets/Suraj Singh Rawat.jpg-DQfxDf64.jpeg"
	},
	"/assets/Asim Datta.jpg-aPLGpD_D.jpeg": {
		"type": "image/jpeg",
		"etag": "\"55f1a-oew3pg8r0L06tp2VAu0wqIDQ4PI\"",
		"mtime": "2026-11-10T12:11:33.845Z",
		"size": 352026,
		"path": "../public/assets/Asim Datta.jpg-aPLGpD_D.jpeg"
	},
	"/assets/Narayan Dey.jpg-DvF6Hm14.jpeg": {
		"type": "image/jpeg",
		"etag": "\"7ef64-ojU8EmxiLHi1fmJU1XeNj6M0gO0\"",
		"mtime": "2026-11-10T12:11:33.857Z",
		"size": 520036,
		"path": "../public/assets/Narayan Dey.jpg-DvF6Hm14.jpeg"
	},
	"/assets/faq-list-Bhp05ftf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21d4-voETOrQwjzZn3+wN6zoDG9pySbo\"",
		"mtime": "2026-11-10T12:11:33.838Z",
		"size": 8660,
		"path": "../public/assets/faq-list-Bhp05ftf.js"
	},
	"/assets/fd-partner-2-5BN4uEls.jpg": {
		"type": "image/jpeg",
		"etag": "\"22b62-hax30kylVxOvegoRgSLNav13kGU\"",
		"mtime": "2026-11-10T12:11:33.879Z",
		"size": 142178,
		"path": "../public/assets/fd-partner-2-5BN4uEls.jpg"
	},
	"/assets/fd-taxation-Cwi2_diG.jpg": {
		"type": "image/jpeg",
		"etag": "\"2ff6b-dFUGK/59A+OCxNqFwT/+oORvoXQ\"",
		"mtime": "2026-11-10T12:11:33.879Z",
		"size": 196459,
		"path": "../public/assets/fd-taxation-Cwi2_diG.jpg"
	},
	"/assets/Biltu Saha.jpg-BwbJEyG9.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4be7f-PbRt7pfrtsJSIwvvworCJ0CPHbQ\"",
		"mtime": "2026-11-10T12:11:33.847Z",
		"size": 310911,
		"path": "../public/assets/Biltu Saha.jpg-BwbJEyG9.jpeg"
	},
	"/assets/hdfc-B6o56J_R.png": {
		"type": "image/png",
		"etag": "\"166f-uZDTm71QOkuXDDtQ82Xd9pEou8M\"",
		"mtime": "2026-11-10T12:11:33.888Z",
		"size": 5743,
		"path": "../public/assets/hdfc-B6o56J_R.png"
	},
	"/assets/rupee-growth-B2UrNN3g.jpg": {
		"type": "image/jpeg",
		"etag": "\"243f8-apLj823PgNzQPl07R38tqNtELBs\"",
		"mtime": "2026-11-10T12:11:33.893Z",
		"size": 148472,
		"path": "../public/assets/rupee-growth-B2UrNN3g.jpg"
	},
	"/assets/routes-Biz3bQGp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1aee-CdUMRRlr7pMKIkmPfdnYqZSK3zA\"",
		"mtime": "2026-11-10T12:11:33.838Z",
		"size": 6894,
		"path": "../public/assets/routes-Biz3bQGp.js"
	},
	"/assets/Arnab Chakraborty.jpg-BAlxuB6r.jpeg": {
		"type": "image/jpeg",
		"etag": "\"5c844-xTwW2cLpK0KU0GJmnLnUji0wAdM\"",
		"mtime": "2026-11-10T12:11:33.844Z",
		"size": 378948,
		"path": "../public/assets/Arnab Chakraborty.jpg-BAlxuB6r.jpeg"
	},
	"/assets/Soumya Pal.jpg-C6pO-63a.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3fd85-1t+7vrwRmsqsqw22ggzZY5QC1+o\"",
		"mtime": "2026-11-10T12:11:33.863Z",
		"size": 261509,
		"path": "../public/assets/Soumya Pal.jpg-C6pO-63a.jpeg"
	},
	"/assets/Madhusudan Mandal.jpg-BsOZ6Sl6.jpeg": {
		"type": "image/jpeg",
		"etag": "\"6b802-i8CWE6SfINF111eAqAkSj5eEVnw\"",
		"mtime": "2026-11-10T12:11:33.852Z",
		"size": 440322,
		"path": "../public/assets/Madhusudan Mandal.jpg-BsOZ6Sl6.jpeg"
	},
	"/assets/amfi-B9ndanAG.png": {
		"type": "image/png",
		"etag": "\"37e8-EzcAu/h+6sgKfb8ZFx3Co800vmE\"",
		"mtime": "2026-11-10T12:11:33.866Z",
		"size": 14312,
		"path": "../public/assets/amfi-B9ndanAG.png"
	},
	"/assets/dsp-DnaTH_98.png": {
		"type": "image/png",
		"etag": "\"4fad-kiNV3E7k2s83brG+JIOnht5eyUU\"",
		"mtime": "2026-11-10T12:11:33.873Z",
		"size": 20397,
		"path": "../public/assets/dsp-DnaTH_98.png"
	},
	"/assets/soumik-kumar-CQ5AdtmU.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ea25-9QmUZlbvkJrrpaRbOmnBv0Hs7g4\"",
		"mtime": "2026-11-10T12:11:33.893Z",
		"size": 125477,
		"path": "../public/assets/soumik-kumar-CQ5AdtmU.jpg"
	},
	"/assets/Kausik Saha.jpg-BaCjuiVW.jpeg": {
		"type": "image/jpeg",
		"etag": "\"5c05d-ZDr4Qahw6JkSMQFN/WPvTPsw1kM\"",
		"mtime": "2026-11-10T12:11:33.851Z",
		"size": 376925,
		"path": "../public/assets/Kausik Saha.jpg-BaCjuiVW.jpeg"
	},
	"/assets/icici-pru-B09bmSIr.png": {
		"type": "image/png",
		"etag": "\"4477-ZZ+YPuPjVz+Jb/dIsoU/5mjdLsk\"",
		"mtime": "2026-11-10T12:11:33.888Z",
		"size": 17527,
		"path": "../public/assets/icici-pru-B09bmSIr.png"
	},
	"/assets/tax-desk-BLhydGFs.jpg": {
		"type": "image/jpeg",
		"etag": "\"4018a-psu3WgMtXb5lGKcam3KnYMyNwKQ\"",
		"mtime": "2026-11-10T12:11:33.893Z",
		"size": 262538,
		"path": "../public/assets/tax-desk-BLhydGFs.jpg"
	},
	"/assets/styles-DWzGZs9v.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1a59e-7cnJvogEZaRQAOEOiieZqpWWXXc\"",
		"mtime": "2026-11-10T12:11:33.893Z",
		"size": 107934,
		"path": "../public/assets/styles-DWzGZs9v.css"
	},
	"/assets/Sanjoy Sarkar.jpg-CbLak30n.jpeg": {
		"type": "image/jpeg",
		"etag": "\"55b3c-t246jyqETid/jbEPtCME756xd8I\"",
		"mtime": "2026-11-10T12:11:33.862Z",
		"size": 351036,
		"path": "../public/assets/Sanjoy Sarkar.jpg-CbLak30n.jpeg"
	},
	"/assets/cbic-gst-jTg5ihSw.svg": {
		"type": "image/svg+xml",
		"etag": "\"82214-txFV3uikczJhYOgKFtcgc2VWxHY\"",
		"mtime": "2026-11-10T12:11:33.866Z",
		"size": 533012,
		"path": "../public/assets/cbic-gst-jTg5ihSw.svg"
	},
	"/assets/neelkanth-logo-DnXsVz13.png": {
		"type": "image/png",
		"etag": "\"c1e3-oehkRJEOKH9H62YwSycdojccL84\"",
		"mtime": "2026-11-10T12:11:33.893Z",
		"size": 49635,
		"path": "../public/assets/neelkanth-logo-DnXsVz13.png"
	},
	"/assets/fd-wealth-DdESZpUl.jpg": {
		"type": "image/jpeg",
		"etag": "\"28ffe-nmAweDDgA2O5mbfWrdhea2253oo\"",
		"mtime": "2026-11-10T12:11:33.879Z",
		"size": 167934,
		"path": "../public/assets/fd-wealth-DdESZpUl.jpg"
	},
	"/assets/arindam-maitra-CTuzCJqg.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c9b6-UWLWksOPnlt1rBPRuh5cHK/8Mjs\"",
		"mtime": "2026-11-10T12:11:33.866Z",
		"size": 117174,
		"path": "../public/assets/arindam-maitra-CTuzCJqg.jpg"
	},
	"/assets/search-DIETGL6f.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae-lcd4m3UintjI/49gpm8QkdcIKBA\"",
		"mtime": "2026-11-10T12:11:33.838Z",
		"size": 174,
		"path": "../public/assets/search-DIETGL6f.js"
	},
	"/assets/createLucideIcon-DxezZrQ2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2558-ckVBpYlOh3GM+vNzGGSlNvNSlAQ\"",
		"mtime": "2026-11-10T12:11:33.838Z",
		"size": 9560,
		"path": "../public/assets/createLucideIcon-DxezZrQ2.js"
	},
	"/assets/consult-desk-DAY3REQl.jpg": {
		"type": "image/jpeg",
		"etag": "\"1f4a6-WdIirKRwmFXrskqqQJ5inhfzC40\"",
		"mtime": "2026-11-10T12:11:33.869Z",
		"size": 128166,
		"path": "../public/assets/consult-desk-DAY3REQl.jpg"
	},
	"/assets/bse-KdRGMEfh.png": {
		"type": "image/png",
		"etag": "\"3e12-m4++0yXvV7zeQsMeW4nCxX6j17Q\"",
		"mtime": "2026-11-10T12:11:33.866Z",
		"size": 15890,
		"path": "../public/assets/bse-KdRGMEfh.png"
	},
	"/assets/fd-partner-1-NVnr6tOX.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e8e0-lpAIiXpFy+9aaTE3KBrGsrn01sQ\"",
		"mtime": "2026-11-10T12:11:33.878Z",
		"size": 125152,
		"path": "../public/assets/fd-partner-1-NVnr6tOX.jpg"
	},
	"/assets/Sayan Kumar Das.jpg-CCFknjli.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4f4f1-m3WOcXV7uAP9Ny6N2m0Lc2kNsoE\"",
		"mtime": "2026-11-10T12:11:33.862Z",
		"size": 324849,
		"path": "../public/assets/Sayan Kumar Das.jpg-CCFknjli.jpeg"
	},
	"/assets/landmark-Ct3BIYD1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2da-TGBK6mDbcx6qmdykBAj0pGpvOEY\"",
		"mtime": "2026-11-10T12:11:33.838Z",
		"size": 730,
		"path": "../public/assets/landmark-Ct3BIYD1.js"
	},
	"/assets/resources-hWGZ9l0H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c19-ezjVyEPAkKrELj9CzRxUO7xG4Hw\"",
		"mtime": "2026-11-10T12:11:33.838Z",
		"size": 7193,
		"path": "../public/assets/resources-hWGZ9l0H.js"
	},
	"/assets/Arya Sengupta-CE2WvklB.jpg": {
		"type": "image/jpeg",
		"etag": "\"2ad33-UEieW4sIujwm5iauyRQ8BmLuSug\"",
		"mtime": "2026-11-10T12:11:33.845Z",
		"size": 175411,
		"path": "../public/assets/Arya Sengupta-CE2WvklB.jpg"
	},
	"/assets/faq-k-hOeOub.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8c6-KiwmwG/0/P6VQPdRFJkbuu5B0mg\"",
		"mtime": "2026-11-10T12:11:33.838Z",
		"size": 2246,
		"path": "../public/assets/faq-k-hOeOub.js"
	},
	"/assets/bajaj-amc-OmD3Sau8.png": {
		"type": "image/png",
		"etag": "\"209e-2z8DtEWQ8QwVH3hiVsIFTb+76+0\"",
		"mtime": "2026-11-10T12:11:33.866Z",
		"size": 8350,
		"path": "../public/assets/bajaj-amc-OmD3Sau8.png"
	},
	"/assets/kotak-BGWWwAyx.png": {
		"type": "image/png",
		"etag": "\"3490-+VyNzawm56cWHABjaeETUq8C0A4\"",
		"mtime": "2026-11-10T12:11:33.891Z",
		"size": 13456,
		"path": "../public/assets/kotak-BGWWwAyx.png"
	},
	"/assets/contact-DcBMFyUU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a03-STVAisttUSUnKZ62WAa0oEogpCQ\"",
		"mtime": "2026-11-10T12:11:33.838Z",
		"size": 2563,
		"path": "../public/assets/contact-DcBMFyUU.js"
	},
	"/assets/Jyotirmay Adhikary.jpg-C6QEg45Q.jpeg": {
		"type": "image/jpeg",
		"etag": "\"7f077-YF0WSGz/qB8oZ2TxW11yzypMxr0\"",
		"mtime": "2026-11-10T12:11:33.848Z",
		"size": 520311,
		"path": "../public/assets/Jyotirmay Adhikary.jpg-C6QEg45Q.jpeg"
	},
	"/assets/fd-logo-Ceox_YIP.png": {
		"type": "image/png",
		"etag": "\"11578f-BG7YRXzZFJfOpCQtdgoXzx/sQkw\"",
		"mtime": "2026-11-10T12:11:33.878Z",
		"size": 1136527,
		"path": "../public/assets/fd-logo-Ceox_YIP.png"
	},
	"/assets/future dreams background-COqdjuqY.png": {
		"type": "image/png",
		"etag": "\"425287-iKdTu2gWrSqa68zqrXyDvWqfYlY\"",
		"mtime": "2026-11-10T12:11:33.880Z",
		"size": 4346503,
		"path": "../public/assets/future dreams background-COqdjuqY.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_jPnBRt = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_jPnBRt
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
