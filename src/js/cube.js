import { BoxGeometry, Mesh, MeshBasicMaterial, CylinderGeometry, AmbientLight, LineSegments, WireframeGeometry, PlaneGeometry, MeshPhongMaterial, RepeatWrapping, NearestFilter, DoubleSide, SphereGeometry, TextureLoader } from './three.module.js'
import { scene, camera } from './classicInitVideo.js'
import { GUI } from './dat.gui.js'
import { ColorGUIHelper } from './ColorGUIHelper.js';

var unitMeasure = 20
const cubeGeometry = new BoxGeometry(unitMeasure, unitMeasure, unitMeasure);
const cubeMaterial = new MeshPhongMaterial({ 
    color: 0xff0000 
});
const cube = new Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

const color = 0xFFFFFF;
const intensity = 1;
const light = new AmbientLight(color, intensity);
scene.add(light);

let geometry_cylinder = new CylinderGeometry( 0.1, 0.1, unitMeasure );
const material_cylinder = new MeshBasicMaterial( {color: 0xffffff} );

const cylinder1 = new Mesh( geometry_cylinder, material_cylinder );

let cylinder2 = cylinder1.clone();
let cylinder3 = cylinder1.clone();
let cylinder4 = cylinder1.clone();

let cylinder5 = cylinder1.clone();
cylinder5.rotation.z += Math.PI / 2;
let cylinder6 = cylinder5.clone();
let cylinder7 = cylinder5.clone();
let cylinder8 = cylinder5.clone();

let cylinder9 = cylinder1.clone();
cylinder9.rotation.x += Math.PI / 2;
let cylinder10 = cylinder9.clone();
let cylinder11 = cylinder9.clone();
let cylinder12 = cylinder9.clone();

cylinder1.position.x -= unitMeasure / 2
cylinder1.position.z -= unitMeasure / 2

cylinder2.position.x += unitMeasure / 2
cylinder2.position.z -= unitMeasure / 2

cylinder3.position.x -= unitMeasure / 2
cylinder3.position.z += unitMeasure / 2

cylinder4.position.x += unitMeasure / 2
cylinder4.position.z += unitMeasure / 2

cylinder5.position.z += unitMeasure / 2
cylinder5.position.y += unitMeasure / 2

cylinder6.position.z += unitMeasure / 2
cylinder6.position.y -= unitMeasure / 2

cylinder7.position.z -= unitMeasure / 2
cylinder7.position.y += unitMeasure / 2

cylinder8.position.z -= unitMeasure / 2
cylinder8.position.y -= unitMeasure / 2

cylinder9.position.x -= unitMeasure / 2
cylinder9.position.y -= unitMeasure / 2

cylinder10.position.x -= unitMeasure / 2
cylinder10.position.y += unitMeasure / 2

cylinder11.position.x += unitMeasure / 2
cylinder11.position.y += unitMeasure / 2

cylinder12.position.x += unitMeasure / 2
cylinder12.position.y -= unitMeasure / 2

cube.add( cylinder1 );
cube.add( cylinder2 );
cube.add( cylinder3 );
cube.add( cylinder4 );
cube.add( cylinder5 );
cube.add( cylinder6 );
cube.add( cylinder7 );
cube.add( cylinder8 );
cube.add( cylinder9 );
cube.add( cylinder10 );
cube.add( cylinder11 );
cube.add( cylinder12 );


const gui = new GUI();

const geometryFolder = gui.addFolder('Cube Geometry');
geometryFolder.open();
const scaleFolder = geometryFolder.addFolder('Scale');
scaleFolder.add(cube.scale, 'x', 0, 10).name('Scale X Axis');
scaleFolder.add(cube.scale, 'y', 0, 10).name('Scale Y Axis');
scaleFolder.add(cube.scale, 'z', 0, 10).name('Scale Z Axis');
scaleFolder.open();
const materialFolder = gui.addFolder('Cube Material');
const materialParams = {
    cubeColor: cube.material.color.getHex(),
};
materialFolder.add(cube.material, 'wireframe');
materialFolder
    .addColor(materialParams, 'cubeColor')
    .onChange((value) => cube.material.color.set(value));
const lightFolder = gui.addFolder('Ambiant Light');
lightFolder.add(light, 'intensity',  0, 1, 0.01).name('Intensity Light');
lightFolder.addColor(new ColorGUIHelper(light, 'color'), 'value').name('Color Light');

const BorderCubeFolder = gui.addFolder('Border Cube');
BorderCubeFolder.addColor(new ColorGUIHelper(material_cylinder, 'color'), 'value').name('Color Border Cube');

camera.position.x = 30