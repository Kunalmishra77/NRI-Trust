import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis smooth scroll
const lenis = new Lenis({
  duration: 1.4,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

// Sync Lenis with GSAP ticker so ScrollTrigger works correctly
// Do NOT use ScrollTrigger.normalizeScroll(true) — conflicts with Lenis
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// Expose lenis globally for hook access
(window as Window & { __lenis?: Lenis }).__lenis = lenis;

createRoot(document.getElementById("root")!).render(<App />);
