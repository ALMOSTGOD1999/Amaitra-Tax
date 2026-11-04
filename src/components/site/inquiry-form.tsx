import { useState, type FormEvent } from "react";
import { MessageSquare, Copy, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site";

const SLOTS = [
  "12:00 – 12:30 PM",
  "12:30 – 1:00 PM",
  "1:00 – 1:30 PM",
  "1:30 – 2:00 PM",
  "2:00 – 2:30 PM",
  "2:30 – 3:00 PM",
];

export function InquiryForm() {
  const [draft, setDraft] = useState("");
  const [copied, setCopied] = useState(false);

  function buildDraft(data: FormData) {
    const slot = data.get("slot");
    const lines = [
      "Consultation enquiry",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Service: ${data.get("service")}`,
    ];
    if (slot) lines.push(`Preferred slot (Mon–Fri): ${slot}`);
    lines.push(String(data.get("message") ?? ""));
    return lines.join("\n");
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDraft(buildDraft(new FormData(e.currentTarget)));
  }

  function whatsappHref(form: HTMLFormElement) {
    const data = new FormData(form);
    const slot = data.get("slot");
    const parts = [
      "Hello, I would like to book a consultation slot at Arindam Maitra Tax Consulting Unit.",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Service: ${data.get("service")}`,
    ];
    if (slot) parts.push(`Preferred slot (Mon–Fri, 12–3 PM): ${slot}`);
    const msg = data.get("message");
    if (msg) parts.push(`Message: ${msg}`);
    return `https://wa.me/919434108699?text=${encodeURIComponent(parts.join("\n"))}`;
  }

  return (
    <div className="inquiry-form">
      <h3>Request a consultation</h3>
      <form onSubmit={submit}>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="inquiry-name">Your name</label>
            <input
              id="inquiry-name"
              name="name"
              autoComplete="name"
              required
              placeholder="Full name"
              maxLength={100}
            />
          </div>
          <div className="field">
            <label htmlFor="inquiry-phone">Phone number</label>
            <input
              id="inquiry-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              placeholder="Your contact number"
              pattern="[+0-9 ()-]{7,20}"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="inquiry-service">Service</label>
          <select id="inquiry-service" name="service">
            {services.map((s) => (
              <option key={s.name}>{s.name}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="inquiry-slot">
            Preferred slot — Monday to Friday, 12 PM – 3 PM (30 minutes each)
          </label>
          <select id="inquiry-slot" name="slot" defaultValue="">
            <option value="">Select a slot…</option>
            {SLOTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="inquiry-message">Your enquiry</label>
          <textarea
            id="inquiry-message"
            name="message"
            placeholder="Tell us what you need assistance with"
            rows={3}
            required
            maxLength={2000}
          />
        </div>
        <p className="form-note">
          Prepare your enquiry to send by SMS to 094341 08699. Nothing is sent automatically.
        </p>
        <Button variant="hero" className="w-full mt-3" type="submit">
          <MessageSquare />
          Prepare enquiry
        </Button>
        <Button
          variant="heroOutline"
          className="w-full mt-3"
          type="button"
          onClick={(e) => {
            window.open(
              whatsappHref(e.currentTarget.form as HTMLFormElement),
              "_blank",
              "noopener,noreferrer",
            );
          }}
        >
          <MessageCircle />
          Book slot on WhatsApp
        </Button>
      </form>
      {draft && (
        <div role="status" className="mt-5">
          <p className="form-note">
            Your enquiry is ready. Send it from your messaging app, or copy it and contact our
            office.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="hero" asChild>
              <a href={`sms:+919434108699?body=${encodeURIComponent(draft)}`}>
                Open SMS <MessageSquare />
              </a>
            </Button>
            <Button
              variant="heroOutline"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(draft);
                  setCopied(true);
                } catch {
                  setCopied(false);
                }
              }}
            >
              {copied ? <Check /> : <Copy />}
              {copied ? "Copied" : "Copy enquiry"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
