import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

export function init3DHeroScene(canvas: HTMLCanvasElement) {
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
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.5;

  // Create post-processing
  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.5, // strength
    0.4, // radius
    0.85 // threshold
  );
  composer.addPass(bloomPass);

  // Create particles
  const particlesCount = 2000;
  const particlesGeometry = new THREE.BufferGeometry();
  const posArray = new Float32Array(particlesCount * 3);
  const scaleArray = new Float32Array(particlesCount);
  const colorArray = new Float32Array(particlesCount * 3);

  // Create a color palette based on primary color
  const colors = [
    new THREE.Color("#4361ee"), // primary blue
    new THREE.Color("#3a0ca3"), // deep purple
    new THREE.Color("#7209b7"), // bright purple
    new THREE.Color("#f72585"), // pink
    new THREE.Color("#4cc9f0"), // light blue
  ];

  for (let i = 0; i < particlesCount; i++) {
    // Position - create a sphere distribution
    const radius = 4 + Math.random() * 2;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    posArray[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    posArray[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    posArray[i * 3 + 2] = radius * Math.cos(phi);

    // Scale - random sizes
    scaleArray[i] = Math.random() * 2;

    // Color - from palette
    const color = colors[Math.floor(Math.random() * colors.length)];
    colorArray[i * 3] = color.r;
    colorArray[i * 3 + 1] = color.g;
    colorArray[i * 3 + 2] = color.b;
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(posArray, 3)
  );
  particlesGeometry.setAttribute(
    "scale",
    new THREE.BufferAttribute(scaleArray, 1)
  );
  particlesGeometry.setAttribute(
    "color",
    new THREE.BufferAttribute(colorArray, 3)
  );

  // Create shader material for particles
  const particlesMaterial = new THREE.ShaderMaterial({
    vertexShader: `
      attribute float scale;
      attribute vec3 color;
      varying vec3 vColor;
      
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = scale * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      
      void main() {
        // Create a circular particle
        float r = distance(gl_PointCoord, vec2(0.5, 0.5));
        if (r > 0.5) discard;
        
        // Add a glow effect
        float strength = 1.0 - (r / 0.5);
        gl_FragColor = vec4(vColor, strength);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  // Create particle system
  const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particleSystem);

  // Add a subtle ambient light
  const ambientLight = new THREE.AmbientLight(0x404040, 2);
  scene.add(ambientLight);

  // Add a directional light
  const directionalLight = new THREE.DirectionalLight(0x4361ee, 1);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  // Handle resize
  const handleResize = () => {
    // Update sizes
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Update camera
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    // Update renderer and composer
    renderer.setSize(width, height);
    composer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };

  window.addEventListener("resize", handleResize);

  // Mouse movement
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  const handleMouseMove = (event: MouseEvent) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  window.addEventListener("mousemove", handleMouseMove);

  // Animation
  // const clock = new THREE.Clock()

  const animate = () => {
    // const elapsedTime = clock.getElapsedTime()

    // Smooth mouse movement
    targetX = mouseX * 0.1;
    targetY = mouseY * 0.1;

    // Rotate particle system
    particleSystem.rotation.x += 0.002;
    particleSystem.rotation.y += 0.001;

    // Add mouse interaction
    particleSystem.rotation.x += (targetY - particleSystem.rotation.x) * 0.02;
    particleSystem.rotation.y += (targetX - particleSystem.rotation.y) * 0.02;

    // Render with post-processing
    composer.render();

    // Call animate again on the next frame
    window.requestAnimationFrame(animate);
  };

  animate();

  // Cleanup function
  return () => {
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("mousemove", handleMouseMove);

    // Dispose resources
    particlesGeometry.dispose();
    particlesMaterial.dispose();
    renderer.dispose();
    composer.dispose();
  };
}

export function initThreeScene(canvas: HTMLCanvasElement) {
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
