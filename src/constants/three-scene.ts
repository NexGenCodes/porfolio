import * as THREE from "three";

export default function initThreeScene(canvas: HTMLCanvasElement) {
  // Create scene
  const scene = new THREE.Scene();

  // Create camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Create renderer
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Create particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 1000;

  const posArray = new Float32Array(particlesCount * 3);
  const colorsArray = new Float32Array(particlesCount * 3);

  // Create a color palette with high contrast colors
  const colors = [
    new THREE.Color("#4361ee"), // primary blue
    new THREE.Color("#3a0ca3"), // deep purple
    new THREE.Color("#7209b7"), // bright purple
    new THREE.Color("#f72585"), // pink
    new THREE.Color("#4cc9f0"), // light blue
  ];

  for (let i = 0; i < particlesCount * 3; i += 3) {
    // Position
    posArray[i] = (Math.random() - 0.5) * 10;
    posArray[i + 1] = (Math.random() - 0.5) * 10;
    posArray[i + 2] = (Math.random() - 0.5) * 10;

    // Colors - use high contrast colors
    const color = colors[Math.floor(Math.random() * colors.length)];
    colorsArray[i] = color.r;
    colorsArray[i + 1] = color.g;
    colorsArray[i + 2] = color.b;
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(posArray, 3)
  );
  particlesGeometry.setAttribute(
    "color",
    new THREE.BufferAttribute(colorsArray, 3)
  );

  // Material
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
  });

  // Mesh
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  // Handle resize
  const handleResize = () => {
    // Update sizes
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Update camera
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };

  window.addEventListener("resize", handleResize);

  // Animation
  const clock = new THREE.Clock();

  const animate = () => {
    const elapsedTime = clock.getElapsedTime();

    // Rotate particles with a gentle automatic motion
    particlesMesh.rotation.x = elapsedTime * 0.05;
    particlesMesh.rotation.y = elapsedTime * 0.03;
    particlesMesh.rotation.z = elapsedTime * 0.02;

    // Add a gentle floating motion
    particlesMesh.position.y = Math.sin(elapsedTime * 0.3) * 0.1;

    // Render
    renderer.render(scene, camera);

    // Call animate again on the next frame
    window.requestAnimationFrame(animate);
  };

  animate();

  // Cleanup function
  return () => {
    window.removeEventListener("resize", handleResize);

    // Dispose resources
    particlesGeometry.dispose();
    particlesMaterial.dispose();
    renderer.dispose();
  };
}
