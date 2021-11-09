import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js'

// Debug
//const gui = new dat.GUI()

// Texture Loader
const loader = new THREE.TextureLoader();
const img = loader.load('../static/image/star.png')

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
//const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );

const particle_geometry = new THREE.BufferGeometry
const particle_count = 10000

const array_pos = new Float32Array(particle_count * 3)

//for loop for particles

for(let i=0; i < particle_count * 3; i++){
    // array_pos[i] = Math.random()
    // array_pos[i] = Math.random() - 0.5
    array_pos[i] = (Math.random() - 0.5) *10
}

particle_geometry.setAttribute('position', new THREE.BufferAttribute(array_pos, 3))

// Materials

// const material = new THREE.PointsMaterial({
//     size: 0.002, // individual point size
// })
const particles_material = new THREE.PointsMaterial({
    size: 0.02, // individual point size
    map: img,
    transparent: true,
    color: 0x00FF66,
})

// Mesh
//const sphere = new THREE.Points(geometry,material)
const particle_mesh = new THREE.Points(particle_geometry, particles_material)
scene.add(particle_mesh) // you can add another mesh here

// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight 

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(new THREE.Color('#191A19'), 1) // 1 is opacity

//Mouse movement
document.addEventListener('mousemove',animateParticles)

let mouseX = 0
let mouseY = 0

function animateParticles(event) {
    mouseY = event.clientY
    mouseX = event.clientX
}

/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    //sphere.rotation.y = .5 * elapsedTime
    if (mouseX > -1) {
        particle_mesh.rotation.x = -mouseY * (elapsedTime * 0.000005)
        particle_mesh.rotation.y = -mouseX * (elapsedTime * 0.000005)
    }
    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()





