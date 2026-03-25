import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // --- 1. CORE GLOW ---
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    const coreGeo = new THREE.IcosahedronGeometry(15, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(core);

    // Inner glow sphere
    const innerGeo = new THREE.SphereGeometry(8, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.05,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(inner);

    // --- 2. DYNAMIC PARTICLES ---
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000;
    const posArray = new Float32Array(particlesCount * 3);
    const velocityArray = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 150;
      if (i % 3 === 0) velocityArray[i/3] = Math.random() * 0.02;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.2,
      color: 0xd4af37,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // --- 3. FLOATING RINGS ---
    const rings: THREE.Mesh[] = [];
    for (let i = 0; i < 3; i++) {
      const ringGeo = new THREE.TorusGeometry(25 + i * 5, 0.05, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xd4af37,
        transparent: true,
        opacity: 0.1 - i * 0.02,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      scene.add(ring);
      rings.push(ring);
    }

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.05;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.05;
    };
    document.addEventListener('mousemove', onDocumentMouseMove);

    // Animation loop
    let startTime = performance.now();

    const tick = () => {
      const elapsedTime = (performance.now() - startTime) / 1000;

      // Rotate core
      coreGroup.rotation.y = elapsedTime * 0.1;
      coreGroup.rotation.x = elapsedTime * 0.05;
      
      // Pulse effect
      const pulse = 1 + Math.sin(elapsedTime * 2) * 0.1;
      core.scale.set(pulse, pulse, pulse);

      // Rotate particles
      particlesMesh.rotation.y = elapsedTime * 0.02;
      
      // Rotate rings
      rings.forEach((ring, i) => {
        ring.rotation.z += 0.01 * (i + 1);
        ring.rotation.x += 0.005;
      });

      // Parallax effect
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };

    tick();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      rings.forEach(r => {
        r.geometry.dispose();
        (r.material as THREE.Material).dispose();
      });
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen" />;
}

