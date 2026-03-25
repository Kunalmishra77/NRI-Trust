import { Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

// ─── Original variants (backward-compatible) ───

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const staggerContainer: Variants = {
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const maskUp: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export const zoomIn: Variants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" }
  }
};

// ─── New Premium / Luxury variants ───

const luxuryEase = [0.16, 1, 0.3, 1] as const;

export const elegantFadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: luxuryEase }
  }
};

export const charReveal: Variants = {
  hidden: { opacity: 0, y: 20, rotateX: 40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: luxuryEase }
  }
};

export const smoothScale: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: luxuryEase }
  }
};

export const luxuryStagger: Variants = {
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 }
  }
};

export const cardStagger: Variants = {
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

export const lineDraw: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: luxuryEase }
  }
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: luxuryEase }
  }
};

export const cardHover = {
  y: -8,
  transition: { type: "spring" as const, stiffness: 300, damping: 20 }
};

export const glowHover = {
  boxShadow: "0 0 30px hsl(38 85% 55% / 0.15), 0 0 60px hsl(180 45% 18% / 0.08)",
  transition: { duration: 0.3 }
};

// ─── New Cinematic / Anthropic-inspired variants ───

// Primary heading animation — clip-path mask reveal
export const textMaskReveal: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)", y: 20 },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    y: 0,
    transition: { duration: 1, ease: luxuryEase }
  }
};

// Stagger wrapper for text lines
export const lineStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

// Card entrance — replaces elegantFadeUp for cards (shorter travel distance)
export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: luxuryEase }
  }
};

// Grid stagger container for cards
export const gridStagger: Variants = {
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

// ─── useCountUp hook ───

export function useCountUp(end: number, duration: number = 2) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState("0");
  const motionVal = useMotionValue(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionVal, end, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => {
        if (end >= 100) {
          setDisplay(Math.round(v).toLocaleString());
        } else if (end >= 1) {
          setDisplay(v.toFixed(1));
        } else {
          setDisplay(v.toFixed(2));
        }
      },
    });

    return () => controls.stop();
  }, [isInView, end, duration, motionVal]);

  return { ref, display };
}
