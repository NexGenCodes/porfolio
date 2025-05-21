import * as THREE from "three"

export function initThreeScene(canvas: HTMLCanvasElement) {
  // Create scene
  const scene = new THREE.Scene()

  // Create camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5

  // Create renderer
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Create particles
  const particlesGeometry = new THREE.BufferGeometry()
  const particlesCount = 1000

  const posArray = new Float32Array(particlesCount * 3)
  const colorsArray = new Float32Array(particlesCount * 3)

  for (let i = 0; i < particlesCount * 3; i++) {
    // Position
    posArray[i] = (Math.random() - 0.5) * 10

    // Colors - use theme colors
    colorsArray[i] = Math.random()
  }

  particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
  particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colorsArray, 3))

  // Material
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
  })

  // Mesh
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
  scene.add(particlesMesh)

  // Handle resize
  const handleResize = () => {
    // Update sizes
    const width = window.innerWidth
    const height = window.innerHeight

    // Update camera
    camera.aspect = width / height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  window.addEventListener("resize", handleResize)

  // Mouse movement
  let mouseX = 0
  let mouseY = 0

  const handleMouseMove = (event: MouseEvent) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1
  }

  window.addEventListener("mousemove", handleMouseMove)

  // Animation
  const clock = new THREE.Clock()

  const animate = () => {
    const elapsedTime = clock.getElapsedTime()

    // Rotate particles
    particlesMesh.rotation.x = elapsedTime * 0.05
    particlesMesh.rotation.y = elapsedTime * 0.03

    // Mouse interaction
    particlesMesh.rotation.x += mouseY * 0.05
    particlesMesh.rotation.y += mouseX * 0.05

    // Render
    renderer.render(scene, camera)

    // Call animate again on the next frame
    window.requestAnimationFrame(animate)
  }

  animate()

  // Cleanup function
  return () => {
    window.removeEventListener("resize", handleResize)
    window.removeEventListener("mousemove", handleMouseMove)

    // Dispose resources
    particlesGeometry.dispose()
    particlesMaterial.dispose()
    renderer.dispose()
  }
}
