import * as THREE from '../build/three.module.js';

import { OrbitControls } from './jsm/controls/OrbitControls.js';
import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';
import { RGBELoader } from './jsm/loaders/RGBELoader.js';
import { RoughnessMipmapper } from './jsm/utils/RoughnessMipmapper.js';

const ID = location.hash.replace(/\#/gim, '');

console.log("Initializing with id: "+ID);

const AJAX = {
	load: function(url){
		let promise = new Promise((resolve, reject)=> {
			const xhttp = new XMLHttpRequest();
			xhttp.onload = function(data){
				resolve(JSON.parse(data.target.response));
			}
			xhttp.onerror = function(){
				reject();
			}
			xhttp.open("GET", url);
			xhttp.send();

		});

		return promise;
	}
}
let data = [];
let lang = {};
let vehicle = {};

let L = function(key){
	console.log(lang, key);
	return "";
};



AJAX.load('localization.json').then((_lang)=> {
	// console.log(_lang);
	lang = _lang;

	AJAX.load('data.json').then((_data)=> {
		_data = _data.reverse();
		data = _data;

		vehicle = {};

		setTimeout(()=> {
			init();
		}, 20);

	});
});


let camera, scene, renderer;

let meshes = {};

// render();

function init() {

	const container = document.createElement( 'div' );
	container.classList.add('render-div');
	document.body.appendChild( container );

	camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 0.25, 1000 );
	// camera.position.set( 15, 200, 0 );
	camera.position.set( -90, 150, -100 );

	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xEBC997);
	// scene.fog = new THREE.FogExp2( 0x444444, 0.005 );



	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.toneMapping = THREE.ACESFilmicToneMapping;
	renderer.toneMappingExposure = 1;
	renderer.outputEncoding = THREE.sRGBEncoding;
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	container.appendChild( renderer.domElement );

	const pmremGenerator = new THREE.PMREMGenerator( renderer );
	pmremGenerator.compileEquirectangularShader();

	const controls = new OrbitControls( camera, renderer.domElement );
	controls.mouseButtons = {
		LEFT: THREE.MOUSE.ROTATE,// LEFT: 	THREE.MOUSE.DOLLY,
		MIDDLE: THREE.MOUSE.PAN,
		// RIGHT: 	THREE.MOUSE.PAN
	}
	// controls.target = new THREE.Vector3(0,200,0);
	controls.addEventListener( 'change', render ); // use if there is no animation loop
	controls.minDistance = 10;
	controls.maxDistance = 200;
	controls.maxPolarAngle = 1.61; // 1.61
	// controls.enableDamping = true;
	// controls.dampingFactor = 0.01;
	controls.target.set( 15, 0, 0 );
	controls.update();

	controls.addEventListener('start', ()=> {
		// console.log("start");
		document.body.classList.add('rotating');
	});
	controls.addEventListener('end', ()=> {
		// console.log("end");
		console.log(camera.position)
		document.body.classList.remove('rotating');
	});

	window.addEventListener( 'resize', onWindowResize );

	// let geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
	// let material = new THREE.MeshBasicMaterial();

	// let mesh = new THREE.Mesh( geometry, material );
	// scene.add( mesh );

	// {
	// 	const geometry = new THREE.PlaneGeometry( 1, 1 );
	// 	const material = new THREE.MeshBasicMaterial( {color: 0x000000} );

	// 	const plane = new THREE.Mesh( geometry, material );
	// 	// plane.scale.set(new THREE.Vector3(1,1,1));
	// 	material.color.set(0xEBC997);
	// 	plane.scale.x = plane.scale.y = plane.scale.z = 200;
	// 	plane.rotation.x = -Math.PI/2;
	// 	plane.position.y = 1;
	// 	plane.receiveShadow = true;
	// 	scene.add( plane );
	// }

	const light = new THREE.AmbientLight( 0x888888 ); // soft white light
	scene.add( light );


	// // White directional light at half intensity shining from the top.
	// const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.5 );
	// directionalLight.position.set( 1050, 1050, 1050 ); //default; light shining from top
	// directionalLight.castShadow = true;
	// //Set up shadow properties for the light
	// directionalLight.shadow.mapSize.width = 256; // default
	// directionalLight.shadow.mapSize.height = 256; // default
	// directionalLight.shadow.camera.near = 0.05; // default
	// directionalLight.shadow.camera.far = 2000; // default
	// scene.add( directionalLight );

	let brightnessMultiplier = vehicle._brightness || 1;

	const spotLight = new THREE.SpotLight( 0xffffff, 1 );
	spotLight.position.set( 100, 200, 100 );

	spotLight.castShadow = true;

	spotLight.shadow.mapSize.width = 1024;
	spotLight.shadow.mapSize.height = 1024;

	spotLight.shadow.camera.near = 5;
	spotLight.shadow.camera.far = 4000;
	spotLight.shadow.camera.fov = 30;
	scene.add( spotLight );

	const spotLight2 = new THREE.SpotLight( 0xffffff, 1 );
	spotLight2.position.set( -100, 200, -100 );

	spotLight2.castShadow = false;

	spotLight2.shadow.mapSize.width = 1024;
	spotLight2.shadow.mapSize.height = 1024;

	spotLight2.shadow.camera.near = 5;
	spotLight2.shadow.camera.far = 4000;
	spotLight2.shadow.camera.fov = 30;

	scene.add( spotLight2 );


	loadMesh('suspension').then(()=> {
		loadMesh('hull').then(()=> {
			loadMesh('turret').then(()=> {
				loadMesh('stuff').then(()=> {
					document.querySelector('.loading').classList.add('disabled');
					document.querySelector('.drag-controls').classList.add('active');
					[].slice.call(document.querySelectorAll('.smooth-loading')).map((n)=> {
						n.classList.add('loaded');
					});
					setTimeout(()=> {
						document.querySelector('.render-div').classList.add('loaded');
						renderer.setAnimationLoop(render);
					}, 100);
				});
			});
		});
	});


}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

	// render();

}

//

function render() {

	// requestAnimationFrame(render);

	renderer.render( scene, camera );

}

function humanFileSize(bytes, si=false, dp=1) {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }

  const units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  let u = -1;
  const r = 10**dp;

  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);


  return bytes.toFixed(dp) + ' ' + units[u];
}


function loadMesh(name){
	let promise = new Promise((resolve, reject)=> {

			// use of RoughnessMipmapper is optional
	const roughnessMipmapper = new RoughnessMipmapper( renderer );

	const loader = new GLTFLoader().setPath( 'mesh/'+ID+'/' );
	loader.load( name+'.glb', function ( gltf ) {
		// console.log(gltf);

		// console.log(gltf.scene);
		if (vehicle && vehicle.shift){
			gltf.scene.position.z -= vehicle.shift;
			// console.log(gltf.scene);
		}
		if (vehicle && vehicle.shiftZ){
			gltf.scene.position.y += vehicle.shiftZ;
		}

		gltf.scene.traverse( function ( child ) {

			if ( child.isMesh ) {

				// console.log(child)
				// roughnessMipmapper.generateMipmaps( child.material );
				child.castShadow = true;
				// child.receiveShadow = true;

			}

		} );

		gltf.scene.castShadow = true;
		gltf.scene.receiveShadow = true;
		// gltf.scene.castShadow = true;

		scene.add( gltf.scene );

		roughnessMipmapper.dispose();

		meshes[name] = gltf;

		resolve();
		document.querySelector('.loading #status').innerHTML = ``;

		// render();
		// renderer.setAnimationLoop(render);

	}, function ( xhr ) {
		// console.log(xhr);
		let progress = xhr.loaded / xhr.total * 100;
		let percent = ( progress ).toFixed(0) + '%';
		document.querySelector('.loading #status').innerHTML = `
			loading ${name} (${humanFileSize(xhr.total)})
		`;
		//			(${humanFileSize(xhr.total)} > ${humanFileSize(xhr.loaded)})

		let span = document.querySelector('.loading #'+name+' span');
		span.style.width = percent;

		if ((progress > 0 && progress < 100)) {
			span.classList.add('active');
		} else {
			span.classList.remove('active');
		}
		document.querySelector('.loading #'+name+' span b').innerHTML = progress <= 0 || progress >= 100 ? '' : percent;
	}, function (error) {
		resolve();
		console.error("Unable to load "+name);
	});


	});

	return promise;
};

function toggleMesh(name, state){
	// console.log(meshes[name])
	meshes[name].scene.visible = state;
};

[].slice.call(document.querySelectorAll('input')).map((node)=> {
	node.addEventListener('change', (event)=> {
		toggleMesh(node.getAttribute('name'), node.checked);
		// console.log(node.checked);
	});
});



document.addEventListener('keyup', (e)=> {
	if (e.keyCode === 27) {
		location.href = "/";
	}
});
