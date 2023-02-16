import { BoxGeometry, Mesh, MeshBasicMaterial, AmbientLight, LineSegments, WireframeGeometry, PlaneGeometry, MeshPhongMaterial, RepeatWrapping, NearestFilter, DoubleSide, SphereGeometry, TextureLoader } from './three.module.js'
import { scene, camera } from './classicInitVideo.js'
import { GUI } from './dat.gui.js'
import { ColorGUIHelper } from './ColorGUIHelper.js';


const boxGeometry = new BoxGeometry(20, 20, 20);
const boxMaterial = new MeshPhongMaterial({ 
    color: 0xff0000,
    wireframe: true 
});
const boxMesh = new Mesh(boxGeometry, boxMaterial);
scene.add(boxMesh);

const color = 0xFFFFFF;
const intensity = 1;
const light = new AmbientLight(color, intensity);
scene.add(light);

const gui = new GUI();

const geometryFolder = gui.addFolder('Mesh Geometry');
geometryFolder.open();
const rotationFolder = geometryFolder.addFolder('Rotation');
rotationFolder.add(boxMesh.rotation, 'x', 0, Math.PI).name('Rotate X Axis');
rotationFolder.add(boxMesh.rotation, 'y', 0, Math.PI).name('Rotate Y Axis');
rotationFolder.add(boxMesh.rotation, 'z', 0, Math.PI).name('Rotate Z Axis');
const scaleFolder = geometryFolder.addFolder('Scale');
scaleFolder.add(boxMesh.scale, 'x', 0, 10).name('Scale X Axis');
scaleFolder.add(boxMesh.scale, 'y', 0, 10).name('Scale Y Axis');
scaleFolder.add(boxMesh.scale, 'z', 0, 10).name('Scale Z Axis');
scaleFolder.open();
const materialFolder = gui.addFolder('Mesh Material');
const materialParams = {
    boxMeshColor: boxMesh.material.color.getHex(),
};
materialFolder.add(boxMesh.material, 'wireframe');
materialFolder
    .addColor(materialParams, 'boxMeshColor')
    .onChange((value) => boxMesh.material.color.set(value));
const lightFolder = gui.addFolder('Ambiant Light');
lightFolder.add(light, 'intensity',  0, 1, 0.01).name('Intensity Light');
lightFolder.addColor(new ColorGUIHelper(light, 'color'), 'value').name('Color Light');

// PART 5 - Custom Function
// const customFunctionFolder = gui.addFolder('Custom Function');
// customFunctionFolder.open();
// const customParams = {
//   printHello: false,
// };
// customFunctionFolder
//   .add(customParams, 'printHello')
//   .name('Print "Hello!"')
//   .onChange((value) => {
//     if (value === true) {
//       console.log('Hello!');
//     }
//   });


camera.position.x = 30
