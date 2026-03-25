import { useEffect } from "react";
import { useLocation } from "wouter";
import { motion, useScroll, useSpring } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
 const [location] = useLocation();
 const { scrollYProgress } = useScroll();
 const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

 useEffect(() => {
  window.scrollTo(0, 0);
 }, [location]);

 return (
  <div className="min-h-screen bg-background relative">
   {/* Scroll progress line — thin single-color line */}
   <motion.div

    style={{ scaleX }}
    className="fixed top-0 left-0 right-0 h-[1px] bg-[rgba(212,175,55,0.6)] z-[60] origin-left"
   />

   <Navigation />
   <main className="relative z-[2]">{children}</main>
   <Footer />
  </div>
 );
}
