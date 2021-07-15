"use strict";

import * as THREE from 'https://unpkg.com/three@0.119.0/build/three.module.js';
import anime from '../libraries/anime/lib/anime.es.js';

let window_scroll = 0;
let mouse = new THREE.Vector2();
let meshes = [];
let renderer;
let camera;

let canvas_size_x;
let canvas_size_y;

function set_canvas_size()
{
	function update_size()
	{
		canvas_size_x = window.innerWidth;
		canvas_size_y = window.innerWidth * (7.5 / 16);

		renderer.setSize(canvas_size_x, canvas_size_y);
		camera.aspect = canvas_size_x / canvas_size_y;
		camera.updateProjectionMatrix();

		document.querySelector("#title_background #gradiant").style.width = canvas_size_x + 'px';
		document.querySelector("#title_background #gradiant").style.height = canvas_size_y + 'px';
		document.querySelector("#title_background #black").style.width = canvas_size_x + 'px';
		document.querySelector("#title_background #black").style.height = canvas_size_y + 'px';
	}

	update_size();

	window.addEventListener('resize', () => {
		update_size();
	});
}

function shapes_direction()
{
	mouse.x = canvas_size_x / 2;
	mouse.y = canvas_size_y / 2;

	let mouse_x = ((mouse.x / canvas_size_x) * 2 - 1) * 7;
	let mouse_y = (-(mouse.y / canvas_size_y) * 2 + 1) * 7;

	for (let i = 0; i < meshes.length; i++)
	{
		let target = new THREE.Vector3(mouse_x - meshes[i].position.x, mouse_y - meshes[i].position.y, 5);
		meshes[i].lookAt(target);
	}

	window_scroll = window.scrollY;

	function update_mouse(e)
	{
		mouse.x = e.pageX;
		mouse.y = e.pageY;

		let mouse_x = ((mouse.x / canvas_size_x) * 2 - 1) * 7;
		let mouse_y = (-(mouse.y / canvas_size_y) * 2 + 1) * 7;

		for (let i = 0; i < meshes.length; i++)
		{
			let target = new THREE.Vector3(mouse_x - meshes[i].position.x, mouse_y - meshes[i].position.y, 5);
			meshes[i].lookAt(target);
		}

		window_scroll = window.scrollY;
	}

	window.addEventListener('mouseover', update_mouse, true);
	window.addEventListener('mousemove', update_mouse);

	window.addEventListener('scroll', e => {
		mouse.y += window.scrollY - window_scroll;

		let mouse_x = ((mouse.x / canvas_size_x) * 2 - 1) * 7;
		let mouse_y = (-(mouse.y / canvas_size_y) * 2 + 1) * 7;

		for (let i = 0; i < meshes.length; i++)
		{
			let target = new THREE.Vector3(mouse_x - meshes[i].position.x, mouse_y - meshes[i].position.y, 5);
			meshes[i].lookAt(target);
		}

		window_scroll = window.scrollY;
	});
}

export function title_baground_init()
{
	window.addEventListener('scroll', () =>
	{
		is_visible("#title_background #canvas");
	});

	let scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(75, canvas_size_x / canvas_size_y, 0.1, 1000);
	camera.position.z = 5;

	renderer = new THREE.WebGLRenderer(
	{
		antialias: true,
		canvas: document.getElementById("canvas")
	});

	renderer.setClearColor("#000000");
	renderer.setSize(window.innerWidth, window.innerWidth * (7 / 16));

	set_canvas_size();
	let pair = true;
	let shift = 2;

	for (let i = -8; i < 8; i += shift)
		for (let j = -4; j < 4; j += shift * 0.7)
		{
			let geometry = new THREE.OctahedronGeometry();
			let material = new THREE.MeshPhongMaterial(
			{
				color: 0x000000,
				emissive: 0x151517,
				emissiveIntensity: 1,
				shininess: 30,
				side: THREE.DoubleSide
			});

			//material.color.setHex(0x777a8c);
			//material.roughness = 0.5;
			//material.metalness = 0.9;

			let mesh = new THREE.Mesh(geometry, material);

			if (pair)
				mesh.translateX(i);

			else
				mesh.translateX(i + shift / 2);

			pair = !pair;
			mesh.translateY(j);
			scene.add(mesh);
			meshes.push(mesh);
		}

	let light_1 = new THREE.DirectionalLight(0xe6e9ff, 2.5, 500);
	light_1.position.set(0, 5.65, 5);

	let light_2 = new THREE.DirectionalLight(0xe6e9ff, 2.5, 500);
	light_2.position.set(-4, -4, 5);

	let light_3 = new THREE.DirectionalLight(0xe6e9ff, 2.5, 500);
	light_3.position.set(4, -4, 5);

	let light_4 = new THREE.AmbientLight(0xe6e9ff, 0.2);

	scene.add(light_1);
	scene.add(light_2);
	scene.add(light_3);
	scene.add(light_4);

	function update()
	{
		requestAnimationFrame(update);

		if (is_visible("#title_background #canvas"))
			renderer.render(scene, camera);
	}

	document.styleSheets[0].insertRule('canvas { outline:none; border:none; }', 0);

	anime({
		targets: '#title_background #black',
		opacity: [1, 0],
		easing: 'easeOutQuad',
		duration: 4000,
		delay: 500
	});

	update();
	shapes_direction();
}
