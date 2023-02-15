import { renderer, scene, camera } from "./classicInitVideo.js";

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();