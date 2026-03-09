import { useEffect } from "react";
import { useLocation } from "wouter";
import { motion, useScroll, useSpring } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export default function Layout({ children }: { children: React.ReactNode }) {
 const [location] = useLocation();
 const { scrollYProgress } = useScroll();
 const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

 useEffect(() => {
  window.scrollTo(0, 0);
 }, [location]);

 return (
  <div className="min-h-screen bg-background relative">
   <Preloader />
   {/* Scroll progress bar */}
   <motion.div
    style={{ scaleX }}
    className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-amber-400 to-accent z-[60] origin-left"
   />

   {/* Global noise texture overlay */}
   <div
    className="fixed inset-0 pointer-events-none z-[1] opacity-[0.015]"
    style={{
     backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
     backgroundRepeat: "repeat",
     backgroundSize: "256px 256px",
    }}
   />

   <Navigation />
   <main className="relative z-[2]">{children}</main>
   <Footer />
  </div>
 );
}
