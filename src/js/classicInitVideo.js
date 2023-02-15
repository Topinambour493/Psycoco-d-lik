import { Scene, PerspectiveCamera, WebGLRenderer} from './three.module.js'
import { OrbitControls } from './orbitControls.js'

export const scene = new Scene();
export const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

export const renderer = new WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

export const controls = new OrbitControls( camera, renderer.domElement );
