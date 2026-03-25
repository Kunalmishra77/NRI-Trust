import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useScroll, useTransform } from 'framer-motion';

export default function Global3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // React to scroll for 3D transforms
  const globeScale = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 1.2, 0.8]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.5]);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // --- 1. AMBIENT GLOW & FOG ---
    scene.fog = new THREE.FogExp2(0xFDFCFB, 0.05);

    // --- 2. THE CENTRAL STEWARDSHIP CORE ---
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Core Glowing Sphere
    const coreGeo = new THREE.IcosahedronGeometry(3, 15);
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0xD4AF37,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(core);

    // Floating Rings (Data Orbits)
    const rings: THREE.Mesh[] = [];
    for (let i = 0; i < 3; i++) {
      const ringGeo = new THREE.TorusGeometry(4 + i * 0.5, 0.01, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({ 
        color: 0xD4AF37, 
        transparent: true, 
        opacity: 0.2 - i * 0.05 
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      mainGroup.add(ring);
      rings.push(ring);
    }

    // --- 3. CINEMATIC PARTICLES (Nebula Feel) ---
    const particlesCount = 4000;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 40;
      posArray[i+1] = (Math.random() - 0.5) * 40;
      posArray[i+2] = (Math.random() - 0.5) * 40;

      // Gradient from Gold to Soft Purple/Blue
      const mix = Math.random();
      if (mix > 0.5) {
        colorArray[i] = 0.83; colorArray[i+1] = 0.68; colorArray[i+2] = 0.21; // Gold
      } else {
        colorArray[i] = 0.6; colorArray[i+1] = 0.7; colorArray[i+2] = 1.0; // Soft Blue
      }
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeo.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);

    // --- 4. LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xD4AF37, 2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const blueLight = new THREE.PointLight(0x6366f1, 1);
    blueLight.position.set(-5, -5, 2);
    scene.add(blueLight);

    camera.position.z = 12;

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) - 0.5;
      mouseY = (e.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      
      const time = performance.now() * 0.0005;
      
      mainGroup.rotation.y += 0.001;
      core.rotation.x += 0.0005;
      
      rings.forEach((ring, i) => {
        ring.rotation.z += 0.001 * (i + 1);
        ring.rotation.x += 0.0005;
      });

      particles.rotation.y = time * 0.05;

      // Smooth camera parallax
      camera.position.x += (mouseX * 4 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 4 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      if (containerRef.current) containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 bg-[#FDFCFB]" />
      <div className="absolute top-[-20%] left-[-10%] w-[100%] h-[100%] bg-accent/[0.08] rounded-full blur-[180px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[100%] h-[100%] bg-blue-100/40 rounded-full blur-[180px]" />
      <div className="absolute top-[20%] right-[-20%] w-[60%] h-[60%] bg-purple-100/20 rounded-full blur-[150px]" />
      
      <div ref={containerRef} className="w-full h-full" />
      
      <div className="absolute inset-0 noise-overlay opacity-[0.04]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(253,252,251,0.4)_100%)]" />
    </div>
  );
}

