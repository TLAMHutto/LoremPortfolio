import './css/style.css'
import './css/navigation.css'
import * as THREE from 'three'
import * as dat from 'lil-gui'
import gsap from 'gsap'
import { MathUtils } from 'three';

import { HexGridMaterial } from "threejs-shader-materials";


const parameters = {
    materialColor: '#fafafa',
    sphereColor: '#00dfff',
}
// const gui = new dat.GUI()
// gui
//     .addColor(parameters, 'materialColor')
//     .onChange(() =>{
//         material.color.set(parameters.materialColor)
//     })
// gui
//     .addColor(parameters, 'sphereColor')
//     .onChange(() =>{
//         materialShpere.color.set(parameters.sphereColor)
//     })
// gui.addColor(parameters, 'particalsColor')
//     .onChange(() =>{
//         particalMaterial.color.set(parameters.particalsColor)
//     }


/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
const textureLoader = new THREE.TextureLoader()
// const gradientTexture = textureLoader.load('./textures/gradients/3.jpg')
const colorTexture = textureLoader.load('./textures/Marble/color.jpg')
const normalTexture = textureLoader.load('./textures/Metal/normal.jpg')
const heightTexture = textureLoader.load('./textures/Metal/height.png')
const metalTexture = textureLoader.load('./textures/Metal/metallic.jpg')
const aoTexture = textureLoader.load('./textures/Metal/ao.jpg')
const roughTexture = textureLoader.load('./textures/Metal/roughness.jpg')
const matCapTexture = textureLoader.load('./textures/MatCap/2.png')
const matCapMaterialSphere = textureLoader.load('./textures/MatCap/red.png')



const newmesh =  new HexGridMaterial();
// gradientTexture.magFilter = THREE.NearestFilter
const material = new THREE.MeshMatcapMaterial({ 
    matcap: matCapTexture,
    color: parameters.materialColor,

 })
 const materialShpere = new THREE.MeshMatcapMaterial({ 
    matcap: matCapMaterialSphere,
    color: parameters.sphereColor,
    

 })
 const geo = new THREE.SphereGeometry(10, 64, 64);
 const mat = new HexGridMaterial();
 const mesh = new THREE.Mesh(geo, mat);
 scene.add(mesh);






const firstGroup = new THREE.Group()
const secondGroup = new THREE.Group()
const thirdGroup = new THREE.Group()
scene.add(firstGroup, secondGroup, thirdGroup)
const objectDistance = 4

const mesh1 = new THREE.Mesh(
    new THREE.ConeGeometry(1,1.5,4,240),
    material
)
const mesh1Sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5,20,64),
    materialShpere
)
firstGroup.add(mesh1, mesh1Sphere)
firstGroup.position.y=-.7
firstGroup.rotateX(Math.PI * 6)
mesh1Sphere.position.y = 1.5
mesh1Sphere.position.x = 2

const mesh2 = new THREE.Mesh(
    new THREE.OctahedronGeometry( 1, 0),
    material
)
const mesh2Sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.3,20,64),
    materialShpere
)
const mesh2Sphere2 = new THREE.Mesh(
    new THREE.SphereGeometry(0.3,20,64),
    materialShpere
)
secondGroup.add(mesh2, mesh2Sphere, mesh2Sphere2)
mesh2Sphere.position.y = -1
mesh2Sphere.position.x = -2
mesh2Sphere2.position.y = -4.5
mesh2Sphere2.position.x = -2

const mesh3 = new THREE.Mesh(
    new THREE.ConeGeometry(1,1.5,4,100),
    material
)
const mesh3Sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.3,20,64),
    materialShpere
)
thirdGroup.add(mesh3, mesh3Sphere)
mesh3Sphere.position.y = -9.5
mesh3Sphere.position.x = 2

const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(1, 1, 1)
scene.add(directionalLight)
mesh1.position.y = -objectDistance*0
mesh2.position.y = -objectDistance * 1
mesh3.position.y = -objectDistance *2
mesh1.position.x =2
mesh2.position.x = -2
mesh3.position.x = 2
const sectionMeshes = [mesh1, mesh2, mesh3]
const sectionSpheres = [mesh1Sphere, mesh2Sphere, mesh2Sphere2, mesh3Sphere]

const particalsCount = 600

const positions = new Float32Array(particalsCount * 3)
for (let i = 0; i < particalsCount; i ++)
{
    positions[i * 3] = (Math.random() - .5) * 10
    positions[i*3+1] = (Math.random() - .5) * 25
    positions[i*3+ 2] = (Math.random() - .5) * 10
}
const particlasGeometry = new THREE.BufferGeometry()
particlasGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
    // w: window.innerWidth,
    // h: window.innerHeight,
    // firstGroupSize: firstGroup.scale.set(1,1,1),
    // firstGroupPosition: firstGroup.position.set(0,0,
}


const fov = 50;
const planeAspectRatio = 16 / 9;
window.addEventListener('resize', () =>
{
    
    
    if (window.innerWidth< 994){
        firstGroup.visible = false
        secondGroup.scale.set(.5,.5,.5)
        secondGroup.position.set(1,-3,1)
        thirdGroup.visible = false
    } else {
        firstGroup.visible = true,
        secondGroup.scale.set(1,1,1)
        secondGroup.position.set(0,0,0)
        thirdGroup.visible = true
    }
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    // sizes.w = window.innerWidth
    // sizes.h = window.innerHeight
    // sizes.firstGroupSize = firstGroup.scale.set((sizes.width/sizes.height)*1.5,(sizes.height/sizes.width),1)
    // sizes.firstGroupPosition = firstGroup.position.set((1*sizes.w),0,0)
    // if (camera.aspect > planeAspectRatio) {
	// 	// window too large
	// 	const cameraHeight = Math.tan(MathUtils.degToRad(fov / 2));
	// 	const ratio = camera.aspect / planeAspectRatio;
	// 	const newCameraHeight = cameraHeight / ratio;
	// 	camera.fov = MathUtils.radToDeg(Math.atan(newCameraHeight)) * 2;
	// } else {
	// 	// window too narrow
	// 	camera.fov = fov;
	// }
    // if (camera.aspect > planeAspectRatio) {
	// 	// window too large
	// 	camera.fov = fov;
	// } else {
	// 	// window too narrow
	// 	const cameraHeight = Math.tan(MathUtils.degToRad(fov / 2));
	// 	const ratio = camera.aspect / planeAspectRatio;
	// 	const newCameraHeight = cameraHeight / ratio;
	// 	camera.fov = MathUtils.radToDeg(Math.atan(newCameraHeight)) * 2;
	// }
    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

let currentSection = 0
window.addEventListener('scroll', () =>
{
    scrollY = window.scrollY
    const newSection = Math.round(scrollY / sizes.height)

    if(newSection != currentSection)
    {
        currentSection = newSection

        console.log('changed', currentSection)
        gsap.to(
            sectionMeshes[currentSection].rotation,
            {
                duration: 1,
                ease: 'power1.inOut',
                // x: '+=6',
                y: '+=6'
            }
        )
    }
})


/**
 * Camera
 */
// Base camera
const cameraGroup = new THREE.Group()
scene.add(cameraGroup)
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 6
cameraGroup.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
let scrollY = window.scrollY
window.addEventListener('scroll', () =>{
    scrollY = window.scrollY
    
})
const cursor = {}
cursor.x = 0
cursor.y = 0
window.addEventListener('mousemove', event =>{
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
})
/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0
const tick = () =>
{
    mesh1Sphere.position.y = 1.5 + Math.sin(clock.getElapsedTime() * 2) * 0.2
    mesh2Sphere.position.y = -2.5 + Math.sin(clock.getElapsedTime() * 2) * 0.1
    mesh2Sphere2.position.y = -5.5 + Math.sin(clock.getElapsedTime() * 2) * 0.2
    mesh3Sphere.position.y = -9.3 + Math.sin(clock.getElapsedTime() * 2) * 0.2
    
    const elapsedTime = clock.getElapsedTime()
    mesh1Sphere.rotation.y = elapsedTime 
    mesh2Sphere.rotation.y = elapsedTime
    mesh2Sphere2.rotation.y = elapsedTime
    mesh3Sphere.rotation.y = elapsedTime
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime 
    for(const mesh of sectionMeshes)
    {
        // mesh.rotation.x += deltaTime * 1
        mesh.rotation.y += deltaTime * 0.2
        
        
    }
    // mesh1Sphere.rotateY(elapsedTime * 0.5)
    // for (const mesh of sectionMeshes)
    // {
    //     mesh.rotation.x = elapsedTime * 0.5
    //     mesh.rotation.y = elapsedTime * .3
    // }    
    
    camera.position.y = -scrollY/sizes.height * objectDistance 
    const parallaxX = cursor.x
    const parallaxY = cursor.y
    const timerColor = elapsedTime
    parameters.particalsColor = `hsl(${(timerColor*1.7)*10}, 100%, 50%)`
    const particalMaterial = new THREE.PointsMaterial({
        size: .03,
        color: parameters.particalsColor,
        sizeAttenuation: true,
        // transparent: true,
        // opacity: .5
    })
    const particals = new THREE.Points(particlasGeometry, particalMaterial)
    scene.add(particals)
    // cameraGroup.position.x = parallaxY * .15
    // cameraGroup.position.y = parallaxX * .15
    cameraGroup.position.x += (parallaxX - cameraGroup.position.x)  * deltaTime
    cameraGroup.position.y += (parallaxY - cameraGroup.position.y)  * deltaTime
    
    
    // Render
    renderer.render(scene, camera)
    
    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()