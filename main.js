let scene, camera, renderer, cube, cylinder, cone;

function init() {
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(
    65,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

/* レンダラー　*/
renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.shadowMap.enabled = true;

document.body.appendChild(renderer.domElement);

/*光*/
const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(5, 10, 5);
light.castShadow = true;
scene.add(light);

/* ボックスのサイズ確定、メッシュ、追加 */
const geometry = new THREE.BoxGeometry(2, 2, 2);

const texture = new THREE.TextureLoader().load("textures/Brick01.jpg");
const material = new THREE.MeshStandardMaterial({ map: texture });

cube = new THREE.Mesh(geometry, material);
cube.position.x = -5;
scene.add(cube);

const cylinderGeometry = new THREE.CylinderGeometry(2, 2, 4, 20);
const cylinderMaterial = new THREE.MeshStandardMaterial({color: 0xff0000});
cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinder.position.x = 0;
cylinder.castShadow = true;
scene.add(cylinder);

const coneGeometry = new THREE.ConeGeometry(2, 4, 20);
const coneMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
cone = new THREE.Mesh(coneGeometry, coneMaterial);
cone.position.x = 5;
cone.castShadow = true;
scene.add(cone);
 

camera.position.z = 20;
}

/*アニメーション　*/
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01; /* x軸を中心として回転 */
    cube.rotation.y += 0.01; /* y軸を中心として回転 */

    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.02;

    cone.rotation.x += 0.01;
    cone.rotation.y += 0.02;


    renderer.render(scene, camera);
}

/*ウィンドウ変更時にサイズを維持する処理*/
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize);

init();
animate();
  