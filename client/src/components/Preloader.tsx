import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const SESSION_KEY = 'nritrust_preloaded';

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Animate progress bar
    const start = Date.now();
    const duration = 2000;
    const raf = requestAnimationFrame(function tick() {
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / duration, 1);
      // Ease out cubic
      setProgress(1 - Math.pow(1 - p, 3));
      if (p < 1) requestAnimationFrame(tick);
    });

    // Start exit after 2s
    const exitTimer = setTimeout(() => {
      setVisible(false);
    }, 2100);

    // Fire onDone after exit animation (300ms)
    const doneTimer = setTimeout(() => {
      try { sessionStorage.setItem(SESSION_KEY, '1'); } catch {}
      onDone();
    }, 2500);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  const EASE = [0.16, 1, 0.3, 1] as const;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050914] overflow-hidden"
        >
          {/* Subtle radial */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none" />

          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col items-center gap-5 mb-14"
          >
            {/* Gold badge */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{
                background: '#D4AF37',
                boxShadow: '0 0 40px rgba(212,175,55,0.35)',
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              </svg>
            </div>

            {/* Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-3xl font-black text-white tracking-tight leading-none">
                NRI TRUST
              </span>
              <span className="text-[9px] font-mono font-bold uppercase tracking-[0.45em] text-[#D4AF37]/60">
                Protecting What Matters Most
              </span>
            </motion.div>
          </motion.div>

          {/* Progress bar track */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="w-48 relative"
          >
            {/* Track */}
            <div className="h-[1px] w-full bg-white/8 rounded-full overflow-hidden">
              {/* Fill */}
              <div
                className="h-full rounded-full transition-none"
                style={{
                  width: `${progress * 100}%`,
                  background: 'linear-gradient(90deg, #D4AF37, #F3E5AB)',
                  boxShadow: '0 0 8px rgba(212,175,55,0.6)',
                  transition: 'width 16ms linear',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Returns true if preloader has already been shown this session
export function hasPreloaded(): boolean {
  try { return !!sessionStorage.getItem(SESSION_KEY); } catch { return false; }
}
