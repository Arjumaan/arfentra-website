import * as THREE from 'three';

export function initThreeScene(containerId: string): (() => void) | null {
  const container = document.getElementById(containerId);
  if (!container) return null;

  const width = container.clientWidth || 600;
  const height = container.clientHeight || 480;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(0, 0, 18);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight(0xa51d38, 3.5, 50);
  pointLight1.position.set(10, 12, 10);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xf5eed8, 2.0, 50);
  pointLight2.position.set(-10, -10, 8);
  scene.add(pointLight2);

  // Central Node Group (Agent Core)
  const coreGroup = new THREE.Group();
  scene.add(coreGroup);

  // Central Octahedron Solid Node
  const innerGeom = new THREE.OctahedronGeometry(2.4, 0);
  const innerMat = new THREE.MeshPhongMaterial({
    color: 0x7e1128,
    emissive: 0x3d0510,
    shininess: 90,
    wireframe: false,
  });
  const innerCore = new THREE.Mesh(innerGeom, innerMat);
  coreGroup.add(innerCore);

  // Outer Icosahedron Wireframe Cage
  const outerGeom = new THREE.IcosahedronGeometry(3.6, 1);
  const outerMat = new THREE.MeshPhongMaterial({
    color: 0xf5eed8,
    wireframe: true,
    transparent: true,
    opacity: 0.65,
  });
  const outerCage = new THREE.Mesh(outerGeom, outerMat);
  coreGroup.add(outerCage);

  // Orbiting Rings
  const ring1Geom = new THREE.TorusGeometry(5.2, 0.04, 16, 100);
  const ring1Mat = new THREE.MeshBasicMaterial({ color: 0xa51d38, transparent: true, opacity: 0.7 });
  const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
  ring1.rotation.x = Math.PI / 3;
  coreGroup.add(ring1);

  const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xf5eed8, transparent: true, opacity: 0.5 });
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(6.4, 0.03, 16, 100), ring2Mat);
  ring2.rotation.y = Math.PI / 4;
  ring2.rotation.x = -Math.PI / 6;
  coreGroup.add(ring2);

  // Autonomous Micro Nodes (36 Data Packets)
  const nodeCount = 36;
  const nodeGroup = new THREE.Group();
  const nodeGeom = new THREE.BoxGeometry(0.3, 0.3, 0.3);
  const nodeMat1 = new THREE.MeshPhongMaterial({ color: 0xf5eed8, emissive: 0x554422 });
  const nodeMat2 = new THREE.MeshPhongMaterial({ color: 0xa51d38, emissive: 0x440812 });

  interface NodeData {
    mesh: THREE.Mesh;
    speed: number;
    radius: number;
    angle: number;
    phi: number;
  }

  const nodes: NodeData[] = [];
  for (let i = 0; i < nodeCount; i++) {
    const mesh = new THREE.Mesh(nodeGeom, i % 2 === 0 ? nodeMat1 : nodeMat2);
    const radius = 4.2 + Math.random() * 3.5;
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
      speed: 0.005 + Math.random() * 0.015,
      radius,
      angle: theta,
      phi,
    });
  }
  coreGroup.add(nodeGroup);

  // Connecting Dynamic Lines representing Agentic Workflows
  const lineMat = new THREE.LineBasicMaterial({ color: 0x7e1128, transparent: true, opacity: 0.35 });
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

  function onMouseMove(event: MouseEvent) {
    const rect = container?.getBoundingClientRect();
    if (!rect) return;
    mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  }

  function onTouchMove(event: TouchEvent) {
    if (event.touches.length > 0) {
      const touch = event.touches[0];
      const rect = container?.getBoundingClientRect();
      if (!rect) return;
      mouseX = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
    }
  }

  window.addEventListener('mousemove', onMouseMove, { passive: true });
  window.addEventListener('touchmove', onTouchMove, { passive: true });

  function onWindowResize() {
    if (!container) return;
    const w = container.clientWidth || 600;
    const h = container.clientHeight || 480;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener('resize', onWindowResize);

  // Animation Loop
  let animationFrameId: number;
  function animate() {
    animationFrameId = requestAnimationFrame(animate);

    targetX += (mouseX * 0.8 - targetX) * 0.05;
    targetY += (mouseY * 0.8 - targetY) * 0.05;

    coreGroup.rotation.y += 0.008 + targetX * 0.02;
    coreGroup.rotation.x += 0.004 - targetY * 0.02;

    innerCore.rotation.y -= 0.012;
    outerCage.rotation.x -= 0.006;
    outerCage.rotation.z += 0.005;

    ring1.rotation.z += 0.01;
    ring2.rotation.z -= 0.008;

    // Animate micro nodes & dynamic connection rays
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
  }

  animate();

  // Return cleanup function
  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('resize', onWindowResize);
    renderer.dispose();
  };
}
