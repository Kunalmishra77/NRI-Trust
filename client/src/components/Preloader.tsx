import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import * as THREE from "three";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- THREE.JS GLOBE SETUP ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(300, 300);
    containerRef.current.appendChild(renderer.domElement);

    // Globe
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshPhongMaterial({
      color: 0xD4AF37,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xD4AF37, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    camera.position.z = 12;

    // Connection lines simulation (abstract)
    const points = [];
    for (let i = 0; i < 5; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ).normalize().multiplyScalar(5.1);
      const end = new THREE.Vector3(5, 0, 0); // India approx position
      const curve = new THREE.QuadraticBezierCurve3(
        start,
        start.clone().multiplyScalar(1.5),
        end
      );
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(50));
      const lineMaterial = new THREE.LineBasicMaterial({ color: 0xD4AF37, transparent: true, opacity: 0.5 });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      scene.add(line);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.005;
      globe.rotation.x += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => {
      clearTimeout(timer);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050814] overflow-hidden"
        >
          {/* Background ambient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_60%)]" />

          <div ref={containerRef} className="relative h-[300px] w-[300px] mb-8" />

          <div className="text-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-3xl font-serif text-[#F5F3EC] tracking-[0.3em] uppercase mb-6"
            >
              NRI Trust
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#D4AF37]/80 font-semibold"
            >
              Connecting Families Across Continents
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
