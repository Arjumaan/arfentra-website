import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Modern lighting with refined emerald & cyan ambient tones
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0x38bdf8, 3.0, 45); // sky blue
    light1.position.set(10, 12, 10);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x34d399, 2.5, 45); // emerald
    light2.position.set(-10, -10, 8);
    scene.add(light2);

    // Central Node Group (Agent Mesh)
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner Core: Diamond Geometry
    const innerGeom = new THREE.OctahedronGeometry(2.2, 0);
    const innerMat = new THREE.MeshPhongMaterial({
      color: 0x0ea5e9,
      emissive: 0x0284c7,
      emissiveIntensity: 0.35,
      shininess: 100,
    });
    const innerCore = new THREE.Mesh(innerGeom, innerMat);
    coreGroup.add(innerCore);

    // Outer Cage: Icosahedron Wireframe
    const outerGeom = new THREE.IcosahedronGeometry(3.5, 1);
    const outerMat = new THREE.MeshPhongMaterial({
      color: 0x93c5fd,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const outerCage = new THREE.Mesh(outerGeom, outerMat);
    coreGroup.add(outerCage);

    // Orbital Rings
    const ring1Geom = new THREE.TorusGeometry(5.0, 0.03, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.7 });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ring2Geom = new THREE.TorusGeometry(6.2, 0.025, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x34d399, transparent: true, opacity: 0.5 });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    coreGroup.add(ring2);

    // Micro Agent Nodes
    const nodeCount = 32;
    const nodeGroup = new THREE.Group();
    const nodeGeom = new THREE.BoxGeometry(0.28, 0.28, 0.28);
    const nodeMat1 = new THREE.MeshPhongMaterial({ color: 0x38bdf8, emissive: 0x0284c7 });
    const nodeMat2 = new THREE.MeshPhongMaterial({ color: 0x34d399, emissive: 0x059669 });

    interface NodeItem {
      mesh: THREE.Mesh;
      speed: number;
      radius: number;
      angle: number;
      phi: number;
    }

    const nodes: NodeItem[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const mesh = new THREE.Mesh(nodeGeom, i % 2 === 0 ? nodeMat1 : nodeMat2);
      const radius = 4.2 + Math.random() * 3.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      mesh.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
      nodeGroup.add(mesh);
      nodes.push({
        mesh,
        speed: 0.006 + Math.random() * 0.012,
        radius,
        angle: theta,
        phi,
      });
    }
    coreGroup.add(nodeGroup);

    // Dynamic Connection Lines
    const lineMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.3 });
    const linePositions = new Float32Array(nodeCount * 6);
    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeom, lineMat);
    coreGroup.add(lines);

    // Mouse & Touch Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const rect = container.getBoundingClientRect();
        mouseX = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    const onWindowResize = () => {
      if (!container) return;
      const w = container.clientWidth || 500;
      const h = container.clientHeight || 450;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onWindowResize);

    // Animation loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      targetX += (mouseX * 0.8 - targetX) * 0.05;
      targetY += (mouseY * 0.8 - targetY) * 0.05;

      coreGroup.rotation.y += 0.007 + targetX * 0.02;
      coreGroup.rotation.x += 0.003 - targetY * 0.02;

      innerCore.rotation.y -= 0.015;
      innerCore.rotation.x += 0.008;

      outerCage.rotation.x -= 0.006;
      outerCage.rotation.z += 0.005;

      ring1.rotation.z += 0.01;
      ring2.rotation.z -= 0.008;

      // Update micro nodes & line connections
      const positions = lineGeom.attributes.position.array as Float32Array;
      let lineIdx = 0;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.angle += n.speed;
        n.mesh.position.x = n.radius * Math.sin(n.phi) * Math.cos(n.angle);
        n.mesh.position.y = n.radius * Math.sin(n.phi) * Math.sin(n.angle);
        n.mesh.position.z = n.radius * Math.cos(n.phi);
        n.mesh.rotation.x += 0.02;
        n.mesh.rotation.y += 0.02;

        if (i % 2 === 0 && lineIdx < positions.length - 6) {
          positions[lineIdx++] = 0;
          positions[lineIdx++] = 0;
          positions[lineIdx++] = 0;
          positions[lineIdx++] = n.mesh.position.x;
          positions[lineIdx++] = n.mesh.position.y;
          positions[lineIdx++] = n.mesh.position.z;
        }
      }
      lineGeom.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', onWindowResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />;
};
