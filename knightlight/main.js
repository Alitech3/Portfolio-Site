import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


export default function knightLightDrone(droneURL, document, window) {

	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	scene.background = new THREE.Color('#0A0A0A');

	const renderer = new THREE.WebGLRenderer();
	renderer.setSize( 180, 180);
	const droneCanvas = document.getElementById('KnightLightShowCase').appendChild( renderer.domElement );
	droneCanvas.style.borderRadius = '0.75rem';

	//lighting
	const light = new THREE.AmbientLight(0x333333, 10);
	scene.add( light );

	// helpers
	const axes = new THREE.AxesHelper(1000);
	scene.add(axes);

	const gridHelperZ = new THREE.GridHelper( 1000, 10 );
	scene.add( gridHelperZ );

	// controls
	const controls = new OrbitControls( camera, renderer.domElement );

	controls.update();

	camera.position.set(0, 2, 8);

	const loader = new GLTFLoader();
	let drone;
	let mixer;
	loader.load(droneURL, ( glb ) => {
		drone = glb.scene;
		mixer = new THREE.AnimationMixer(drone);

		const clips = glb.animations;

		for (let i = 0; i < clips.length; i++){
			const action = mixer.clipAction(clips[i]);
			if (i == 2 || i == 3) {
				action.timeScale = -1;
			}
			action.play();
		}

		// drone.traverse((child) => {
		// 	if (child.isMesh) {
		// 		// disabling cast shadows for now as it casts shadows onto itself in a wierd manner. you can see this through the lines that appera on it.
		// 		// child.castShadow = true;
		// 		child.receiveShadow = true;
		// 	}
		// });

		camera.lookAt(drone.position);
		drone.scale.set(20, 20, 20);
		scene.add( drone );

	}, undefined, function ( error ) {
			
		console.error( error );
			
	});

	const clock = new THREE.Clock();
	function animate() {
		requestAnimationFrame( animate );
		if (drone) {
			drone.rotation.y += .01;
			if (mixer) {
				mixer.update(clock.getDelta());
			}
		}

		renderer.render( scene, camera );
	}
	
	animate();

	// return () => {
	// 	scene.remove(drone);
	// 	renderer.domElement.remove();
	// };
}
