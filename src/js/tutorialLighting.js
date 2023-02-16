import { BoxGeometry, Mesh, MeshBasicMaterial, AmbientLight, PlaneGeometry, MeshPhongMaterial, RepeatWrapping, NearestFilter, DoubleSide, SphereGeometry, TextureLoader } from './three.module.js'
import { scene, camera } from './classicInitVideo.js'
import { GUI } from './dat.gui.js'

camera.position.set(0, 10, 20);

const planeSize = 200;
 
const loader = new TextureLoader();
const texture = loader.load('resources/images/checker.png');
texture.wrapS = RepeatWrapping;
texture.wrapT = RepeatWrapping;
texture.magFilter = NearestFilter;
const repeats = planeSize / 2;
texture.repeat.set(repeats, repeats);
const planeGeo = new PlaneGeometry(planeSize, planeSize);
const planeMat = new MeshPhongMaterial({
  map: texture,
  side: DoubleSide,
});
const checker = new Mesh(planeGeo, planeMat);
checker.rotation.x = Math.PI * -.5;
scene.add(checker);


const cubeSize = 4;
const cubeGeo = new BoxGeometry(cubeSize, cubeSize, cubeSize);
const cubeMat = new MeshPhongMaterial({color: '#8AC'});
const cube = new Mesh(cubeGeo, cubeMat);
cube.position.set(cubeSize + 1, cubeSize / 2, 0);
scene.add(cube);

const sphereRadius = 3;
const sphereWidthDivisions = 32;
const sphereHeightDivisions = 16;
const sphereGeo = new SphereGeometry(sphereRadius, sphereWidthDivisions, sphereHeightDivisions);
const sphereMat = new MeshPhongMaterial({color: '#CA8'});
const sphere = new Mesh(sphereGeo, sphereMat);
sphere.position.set(-sphereRadius - 1, sphereRadius + 2, 0);
scene.add(sphere);

const color = 0xFFFFFF;
const intensity = 1;
const light = new AmbientLight(color, intensity);
scene.add(light);


