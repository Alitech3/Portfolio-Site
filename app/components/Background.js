'use client';
import '../css/background.css';

import Image from 'next/image';

// Image Assets
import Mario from '../../assets/background-images/Mario.png';
import Ghost from '../../assets/background-images/Ghost.png';
import Minecraft from '../../assets/background-images/Minecraft.png';
import Planetside from '../../assets/background-images/Planetside.png';
import Republic from '../../assets/background-images/Republic.png';
import Vanu from '../../assets/background-images/Vanu.png';
import Goku from '../../assets/background-images/Goku.png';
import { useEffect } from 'react';

export default function Background({children}) {

	// useEffect(() => {
	// 	const Sphere1 = {
	// 		left: document.getElementById('Sphere-1').getBoundingClientRect().left,
	// 		right: document.getElementById('Sphere-1').getBoundingClientRect().right,
	// 		top: document.getElementById('Sphere-1').getBoundingClientRect().top,
	// 		bottom: document.getElementById('Sphere-1').getBoundingClientRect().bottom
	// 	};
	// 	const Sphere2 = {
	// 		left: document.getElementById('Sphere-2').getBoundingClientRect().left,
	// 		right: document.getElementById('Sphere-2').getBoundingClientRect().right,
	// 		top: document.getElementById('Sphere-2').getBoundingClientRect().top,
	// 		bottom: document.getElementById('Sphere-2').getBoundingClientRect().bottom
	// 	};
	// 	const Sphere3 = {
	// 		left: document.getElementById('Sphere-3').getBoundingClientRect().left,
	// 		right: document.getElementById('Sphere-3').getBoundingClientRect().right,
	// 		top: document.getElementById('Sphere-3').getBoundingClientRect().top,
	// 		bottom: document.getElementById('Sphere-3').getBoundingClientRect().bottom
	// 	};
	// 	const Sphere4 = {
	// 		left: document.getElementById('Sphere-4').getBoundingClientRect().left,
	// 		right: document.getElementById('Sphere-4').getBoundingClientRect().right,
	// 		top: document.getElementById('Sphere-4').getBoundingClientRect().top,
	// 		bottom: document.getElementById('Sphere-4').getBoundingClientRect().bottom
	// 	};
	// 	const Sphere5 = {
	// 		left: document.getElementById('Sphere-5').getBoundingClientRect().left,
	// 		right: document.getElementById('Sphere-5').getBoundingClientRect().right,
	// 		top: document.getElementById('Sphere-5').getBoundingClientRect().top,
	// 		bottom: document.getElementById('Sphere-5').getBoundingClientRect().bottom
	// 	};
	// 	const Sphere6 = {
	// 		left: document.getElementById('Sphere-6').getBoundingClientRect().left,
	// 		right: document.getElementById('Sphere-6').getBoundingClientRect().right,
	// 		top: document.getElementById('Sphere-6').getBoundingClientRect().top,
	// 		bottom: document.getElementById('Sphere-6').getBoundingClientRect().bottom
	// 	};
	// 	const Sphere7 = {
	// 		left: document.getElementById('Sphere-7').getBoundingClientRect().left,
	// 		right: document.getElementById('Sphere-7').getBoundingClientRect().right,
	// 		top: document.getElementById('Sphere-7').getBoundingClientRect().top,
	// 		bottom: document.getElementById('Sphere-7').getBoundingClientRect().bottom
	// 	};

	// 	let Hovered = false;
	// 	document.body.addEventListener('mousemove', (moveEvent) => {
	// 		let mousePosX = moveEvent.clientX;
	// 		let mousePosY = moveEvent.clientY;

	// 		if ((Sphere1.left <= mousePosX && mousePosX <= Sphere1.right) && (Sphere1.top <= mousePosY && mousePosY <= Sphere1.bottom)) {
	// 			Hovered = true;
	// 		}
	// 		else if ((Sphere2.left <= mousePosX && mousePosX <= Sphere2.right) && (Sphere2.top <= mousePosY && mousePosY <= Sphere2.bottom)) {
	// 			Hovered = true;
	// 		}
	// 		else if ((Sphere3.left <= mousePosX && mousePosX <= Sphere3.right) && (Sphere3.top <= mousePosY && mousePosY <= Sphere3.bottom)) {
	// 			Hovered = true;
	// 		}
	// 		else if ((Sphere4.left <= mousePosX && mousePosX <= Sphere4.right) && (Sphere4.top <= mousePosY && mousePosY <= Sphere4.bottom)) {
	// 			Hovered = true;
	// 		}
	// 		else if ((Sphere5.left <= mousePosX && mousePosX <= Sphere5.right) && (Sphere5.top <= mousePosY && mousePosY <= Sphere5.bottom)) {
	// 			Hovered = true;
	// 		}
	// 		else if ((Sphere6.left <= mousePosX && mousePosX <= Sphere6.right) && (Sphere6.top <= mousePosY && mousePosY <= Sphere6.bottom)) {
	// 			Hovered = true;
	// 		}
	// 		else if ((Sphere7.left <= mousePosX && mousePosX <= Sphere7.right) && (Sphere7.top <= mousePosY && mousePosY <= Sphere7.bottom)) {
	// 			Hovered = true;
	// 		} else {
	// 			Hovered = false;
	// 		}
	// 		if (Hovered) {
	// 			document.getElementById('Sphere-1').style.backgroundImage = 'linear-gradient(to bottom left, #00385E, #006634 40%, #006D7B)';
	// 			document.getElementById('Sphere-2').style.backgroundImage = 'linear-gradient(to bottom left, #00385E, #006634 40%, #006D7B)';
	// 			document.getElementById('Sphere-3').style.backgroundImage = 'linear-gradient(to bottom left, #00385E, #006634 40%, #006D7B)';
	// 			document.getElementById('Sphere-4').style.backgroundImage = 'linear-gradient(to bottom left, #00385E, #006634 40%, #006D7B)';
	// 			document.getElementById('Sphere-5').style.backgroundImage = 'linear-gradient(to bottom left, #00385E, #006634 40%, #006D7B)';
	// 			document.getElementById('Sphere-6').style.backgroundImage = 'linear-gradient(to bottom left, #00385E, #006634 40%, #006D7B)';
	// 			document.getElementById('Sphere-7').style.backgroundImage = 'linear-gradient(to bottom left, #00385E, #006634 40%, #006D7B)';
	// 		} else {
	// 			document.getElementById('Sphere-1').style.backgroundImage = '';
	// 			document.getElementById('Sphere-2').style.backgroundImage = '';
	// 			document.getElementById('Sphere-3').style.backgroundImage = '';
	// 			document.getElementById('Sphere-4').style.backgroundImage = '';
	// 			document.getElementById('Sphere-5').style.backgroundImage = '';
	// 			document.getElementById('Sphere-6').style.backgroundImage = '';
	// 			document.getElementById('Sphere-7').style.backgroundImage = '';
	// 		}
	// 	});
	// }, []);

	return(
		<div id='Container'>
			<Image
				src={Mario}
				id='Mario'
				alt=''
			/>
			<div id="Sphere-1"/>
			<div id="Sphere-2"/>
			<div id="Sphere-3"/>
			<div id="Sphere-4"/>
			<div id="Sphere-5"/>
			<div id="Sphere-6"/>
			<div id="Sphere-7"/>
			<Image
				src={Republic}
				id='Republic'
				alt=''
			/>
			<Image
				src={Vanu}
				width={50}
				height={50}
				id='Vanu'
				alt=''
			/>
			<Image
				src={Minecraft}
				width={50}
				height={50}
				id='Minecraft'
				alt=''
			/>
			<Image
				src={Planetside}
				width={50}
				height={50} 
				id='Planetside'
				alt=''
			/>
			<Image
				src={Ghost}
				width={50}
				height={50}
				id='Ghost'
				alt=''
			/>
			<Image
				src={Goku}
				width={50}
				height={50}
				id='Goku'
				alt=''
			/>
		</div>
	);
}