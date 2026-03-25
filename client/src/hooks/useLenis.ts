import Lenis from "lenis";

/**
 * Returns the global Lenis instance initialized in main.tsx.
 * Use to pause/resume smooth scroll (e.g., during horizontal scroll sections).
 */
export function useLenis(): Lenis | undefined {
  return (window as Window & { __lenis?: Lenis }).__lenis;
}
