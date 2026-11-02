import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const terms = [
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
  "▥",
];
function WelcomeScene({ onClose }: { onClose: () => void }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const node = canvas.current;
    if (!node) return;
    const maybe = node.getContext("2d");
    if (!maybe) return;
    const ctx: CanvasRenderingContext2D = maybe;
    let frame = 0;
    const start = performance.now();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      onClose();
      return;
    }
    const css = getComputedStyle(document.documentElement);
    const gold = css.getPropertyValue("--primary").trim();
    const ink = css.getPropertyValue("--inverse").trim();
    let w = window.innerWidth,
      h = window.innerHeight;
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
    function draw(now: number) {
      const t = (now - start) / 1000;
      ctx.clearRect(0, 0, w, h);
      const collapse = Math.max(0, Math.min(1, (t - 5.4) / 1.7));
      const alpha = Math.max(0, 1 - collapse);
      if (t < 7.5) {
        const radius = Math.min(w * 0.47, h * 0.43);
        for (let i = 0; i < 230; i++) {
          const angle = i * 2.39996 + t * (0.15 + (i % 5) * 0.024);
          const r = (0.29 + ((i * 37) % 100) / 140) * radius * (1 - collapse) ** 2;
          const x = w / 2 + Math.cos(angle) * r;
          const y = h / 2 + Math.sin(angle) * r * 0.68;
          const featured = i % 16 === 0;
          ctx.globalAlpha =
            alpha * (featured ? 0.95 : 0.12 + (i % 7) * 0.045) * Math.min(1, t * 1.5);
          ctx.fillStyle = featured ? gold : ink;
          const size = featured ? (w < 760 ? 19 : 30) : (w < 760 ? 10 : 12) + (i % 5);
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
    const timer = window.setTimeout(onClose, 15500);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
      window.removeEventListener("resize", resize);
      document.body.style.overflow = previous;
    };
  }, [onClose]);
  return (
    <div
      className="intro"
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to Arindam Maitra Tax Consultancy"
    >
      <canvas ref={canvas} aria-hidden="true" />
      <div className="intro-brand">
        <p className="intro-name">ARINDAM MAITRA</p>
        <p className="intro-subtitle">TAX CONSULTING requestAnimationFrame</p>
        <div className="intro-line" />
        <p className="intro-services">Tax • Compliance • Advisory</p>
        <p className="intro-tagline">
          You focus on your goals.
          <br />
          We take care of the numbers.
        </p>
      </div>
      <span className="intro-bottom">PRECISION. CLARITY. PEACE OF MIND.</span>
      <Button variant="ghost" className="intro-skip" onClick={onClose}>
        Skip intro <ArrowRight />
      </Button>
    </div>
  );
}
export function Welcome() {
  const [show, setShow] = useState(false);
  const [run, setRun] = useState(0);
  const close = useRef(() => setShow(false));
  useEffect(() => {
    if (
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      !sessionStorage.getItem("amtc-welcome")
    ) {
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
  return show ? <WelcomeScene key={run} onClose={close.current} /> : null;
}
