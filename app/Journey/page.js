'use client';
import './journey.css';

import Image from 'next/image';

//images'
import Begin from '../../assets/journey-images/Beginnings.png';
import Encounter from '../../assets/journey-images/Deer.png';
import Friendship from '../../assets/journey-images/Spider.png';
import Foe from '../../assets/journey-images/Bear.png';
import Looting from '../../assets/journey-images/Tamed.png';
import Hydra from '../../assets/journey-images/Hydra.png';
import { useEffect } from 'react';

export default function journey() {

	useEffect(() => {
		let element = document.getElementsByClassName('ShapeContainer');
		let projectsContainer = document.getElementById('ProjectsNavContainer');
		let sphere = document.getElementById('JourneySphere');
		let NavContainer = document.getElementById('JourneyNavContainer');
		let diamond = document.getElementById('ProjectsDiamond');
		if (element) {
			element[0].style.display = 'none';
			element[1].style.display = 'none';
			diamond.style.display = 'none';
			projectsContainer.style.marginRight = 0;
			element[2].style.display = 'flex';
			sphere.style.display = 'flex';
			NavContainer.style.display = 'flex';
			sphere.classList.add('animate-fade-in');
			element[2].classList.add('animate-fade-in');
			setTimeout(() => {
				NavContainer.classList.add('animate-fade-in');
			}, 8000);
		}

	}, []);
	return (
		<div id="JourneyContainer">
			<h2 className="JourneyIntro">A journey of heros...</h2>
			<h2 className="JourneyIntro">An En-Deer-ing Journey...</h2>
			<div id="JourneyImages">
				<div id="Column1">
					<Image
						src={Begin}
						alt=''
					/>
					<Image
						src={Friendship}
						alt=''
					/>
					<Image
						src={Looting}
						alt=''
					/>
				</div>
				<div id="Column2">
					<Image
						src={Encounter}
						alt=''
					/>
					<Image
						src={Foe}
						alt=''
					/>
					<Image
						src={Hydra}
						alt=''
					/>
				</div>
			</div>
		</div>
	);
}
