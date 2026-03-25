import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useScroll, useTransform, useSpring } from 'framer-motion';

export default function UnifiedGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // --- HIGH-SPEED CINEMATIC SCROLL JOURNEY (Calibrated for 400vh + 400vh) ---
  // Hero is approx [0 to 0.28], Anxiety is approx [0.28 to 0.56]
  
  // 0.00 - 0.06: RAPID ENTRY (Side to Full Screen - happens at the very start of Hero)
  // 0.06 - 0.12: PEAK HOLD (Immersion in Hero)
  // 0.12 - 0.24: THE RETRACTION (Back to Small size - MUST complete within Hero)
  // 0.24 - 0.35: THE GLIDE (Transitioning into the next section's center)
  // 0.35 - 0.60: THE ORBIT ANCHOR (Locked and steady in Anxiety center)
  
  const springConfig = { stiffness: 40, damping: 35, restDelta: 0.0001 };

  // X-Axis: Lateral movement from right to center
  const rawX = useTransform(
    scrollYProgress, 
    [0, 0.06, 0.30, 0.40], 
    [15, 0, 0, 0] 
  );
  const globeX = useSpring(rawX, springConfig);

  // Scale: Small -> EXPLOSION -> FAST SHRINK (In Hero) -> Orbit Size
  const rawScale = useTransform(
    scrollYProgress, 
    [0, 0.06, 0.12, 0.24, 0.35, 0.55], 
    [0.6, 5.0, 5.0, 1.0, 1.0, 1.5] // Explosion -> Hold -> Shrink back (by 0.24) -> Transition -> Anchor
  );
  const globeScale = useSpring(rawScale, springConfig);

  // Intensity & Opacity: Peak brightness at start
  const rawIntensity = useTransform(
    scrollYProgress, 
    [0, 0.06, 0.12, 0.35], 
    [0.4, 1, 1, 0.7]
  );
  const intensity = useSpring(rawIntensity, springConfig);

  // Color Transition: Shift to Blue right at the section border (~0.28)
  const colorProgress = useTransform(scrollYProgress, [0.25, 0.35], [1, 0]);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance" 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // --- GLOBE LAYERS ---
    const innerGeo = new THREE.IcosahedronGeometry(3, 15);
    const innerMat = new THREE.MeshPhongMaterial({
      color: 0xD4AF37,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
      emissive: 0xD4AF37,
      emissiveIntensity: 0.5,
    });
    const core = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(core);

    const shellGeo = new THREE.IcosahedronGeometry(4.5, 8);
    const shellMat = new THREE.MeshPhongMaterial({
      color: 0xD4AF37,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const shell = new THREE.Mesh(shellGeo, shellMat);
    mainGroup.add(shell);

    const auraGeo = new THREE.SphereGeometry(6, 32, 32);
    const auraMat = new THREE.MeshBasicMaterial({
      color: 0xD4AF37,
      transparent: true,
      opacity: 0.08,
    });
    const aura = new THREE.Mesh(auraGeo, auraMat);
    mainGroup.add(aura);

    // --- RINGS ---
    const rings: THREE.Mesh[] = [];
    for (let i = 0; i < 5; i++) {
      const ringGeo = new THREE.TorusGeometry(6 + i * 1.5, 0.012, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0xD4AF37, transparent: true, opacity: 0.2 });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      mainGroup.add(ring);
      rings.push(ring);
    }

    // --- PARTICLES ---
    const particlesCount = 4000;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) posArray[i] = (Math.random() - 0.5) * 60;
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({ size: 0.02, color: 0xD4AF37, transparent: true, opacity: 0.4 });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xD4AF37, 2, 100);
    pointLight.position.set(20, 20, 20);
    scene.add(pointLight);

    camera.position.z = 20;

    const animate = () => {
      requestAnimationFrame(animate);
      
      const p = colorProgress.get();
      const i = intensity.get();
      const gold = new THREE.Color(0xD4AF37);
      const blue = new THREE.Color(0x1E40AF);
      const currentColor = new THREE.Color().lerpColors(blue, gold, p);
      
      innerMat.color.copy(currentColor);
      innerMat.emissive.copy(currentColor);
      innerMat.emissiveIntensity = 0.5 * i;
      shellMat.color.copy(currentColor);
      auraMat.color.copy(currentColor);
      particlesMat.color.copy(currentColor);
      rings.forEach(r => (r.material as THREE.MeshBasicMaterial).color.copy(currentColor));
      pointLight.color.copy(currentColor);

      core.rotation.y += 0.004;
      shell.rotation.y -= 0.002;
      rings.forEach((ring, idx) => {
        ring.rotation.z += 0.01 * (idx + 1);
        ring.rotation.x += 0.002;
      });
      particles.rotation.y += 0.0005;

      mainGroup.scale.setScalar(globeScale.get());
      mainGroup.position.x = globeX.get();
      
      innerMat.opacity = 0.7 * i;
      shellMat.opacity = 0.15 * i;
      auraMat.opacity = 0.08 * i;

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
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (containerRef.current) containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}

