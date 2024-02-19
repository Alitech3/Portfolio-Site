'use client';

// TODO
// Hide Scrollbar
// Descriptions
// Hyperlink images to website e.g bot to github spf to website knightlight to ???
import './projects.css';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

// Images
import Mars from '../../assets/project-images/Mars.png';
import SPF from '../../assets/project-images/SPF.png';
import AC from '../../assets/project-images/AC.png';

// Three
import knightLightDrone from '../../knightlight/main.js';
import { app } from '../../firebase/init.js';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

export default function Projects() {
	useEffect(() => {
		async function UrlReady() {
			const storage = getStorage(app);
			const storageRef = ref(storage, 'KnightLight/drone-animated.glb');
			let droneURL = await getDownloadURL(storageRef);
			knightLightDrone(droneURL, document, window);
		}
		UrlReady();

		let element = document.getElementsByClassName('ShapeContainer');

		if (element) {
			element[0].style.display = 'none';
			element[2].style.display = 'none';
			element[1].style.display = 'flex';
			element[1].classList.add('animate-fade-in');
		}
	}, []);

	return (
		<div id="PageContainer">
			<div className='ProjectsIntro'>
				<p>
					Heres a look at a few projects I've had the pleasure to work on.
				</p>
			</div>
			{/* KnightLight */}
			<div className='ProjectContainer'>
				<div id='ShowcaseContainer'>
					<h1 className='Title'>
						KnightLight
					</h1>
					<div id="KnightLightShowCase"/>
				</div>
				<div className="ProjectDescription">
					<p>
						Web-Previewer
					</p>
					<p>
						Tech Stack: JavaScript, Vite, Three.js
					</p>
					<p>
						KnightLight is a student led club at the University of Central Florida. Our aim is to bring drone shows to UCF. The club operates through several teams such as Manufacturing, Power Systems, Design, Public Affairs/Legal, and the one I am apart of Control and Software. Currently I am helping design a Web-Based previewer for our drone shows. The drone spinning is sneak peak and a mock up of one of our designs; you can interact with it here in this webpage. <br/> Controls: Left Click to rotate, Right Click to pan, Middle Mouse up/down to zoom<br/>Keep up with us work on <a href='https://www.instagram.com/knightlight.ucf/' target='_blank' rel="noreferrer"><u>Instagram</u></a>
					</p>
				</div>
			</div>
			{/* Ascraeus */}
			<div className='ProjectContainer'>
				<div id='ShowcaseContainer'>
					<h1 className='Title'>
						Ascraeus
					</h1>
					<div className="Showcase">
						<a href='https://github.com/Alitech3/Ascraeus' target='_blank' rel="noreferrer">
							<Image 
								src={Mars}
								fill={true}
								alt=''
								width={50}
							/>
						</a>
					</div>
				</div>
				<div className="ProjectDescription">
					<p>
						Discord Chat Bot
					</p>
					<p>
						Tech Stack: JavaScript, Node.js
					</p>
					<p>
						This is one of several Discord bots I've created. One key feature wwas that it monitors voice channels to detect when users join rewarding them with XP for time spent in call. Users are subsequently able to earn new roles. It also made use of a sound board type of system long before discord added it as a feature in the client. On top of this it has several minigames such as black jack, a maze game, an AI chatbot that responds and interacts with the user, music commands and many more things.<br/>Check out the source code on <a href='https://github.com/Alitech3/Ascraeus' target='_blank' rel="noreferrer"><u>GitHub</u></a>
					</p>
				</div>
			</div>
			{/* Portfolio Site */}
			<div className='ProjectContainer'>
				<div id='ShowcaseContainer'>
					<h1 className='Title'>
						Portfolio Site
					</h1>
					<div className="Showcase">
						<Link href={'/'} className='NavLink'>
							<Image
								src={AC}
								fill={true}
								alt=''
								width={50}
							/>
						</Link>
					</div>
				</div>
				<div className="ProjectDescription">
					<p>
						This Website
					</p>
					<p>
						TechStack: JavaScript, React.js, Next.js, Three.js, Firebase
					</p>
					<p>
						This website is intended to showcase some of my works. Youll find things such as websites, modelers, and Chatbot's.
						<br/>It also has an easter egg on desktop if you can find it.
					</p>
				</div>
			</div>
			{/* SPF-50 */}
			<div className='ProjectContainer'>
				<div id='ShowcaseContainer'>
					<h1 className='Title'>
						SPF-50
					</h1>
					<div className="Showcase">
						<a href='https://spf50music.com/' target='_blank' rel="noreferrer">
							<Image
								src={SPF}
								fill={true}
								alt=''
								width={50}
							/>
						</a>
					</div>
				</div>
				<div className="ProjectDescription">
					<p>
						Band Website
					</p>
					<p>
						Tech Stack: JavaScript, React Native, Expo, Firebase
					</p>
					<p>
						SPF-50 was a band based in Daytona consisting of students from Embry Riddle. I was fortunate enough to be able to make the a website from scratch using React and Firebase. You are able to listen to them on all major platforms and I urge you to check out my work and theirs here:<br/> <a href='https://spf50music.com/' target='_blank' rel="noreferrer"><u>SPF50Music.com</u></a>
					</p>
				</div>
			</div>
			{/* TBA */}
			<div className='ProjectContainer'>
				<div id='ShowcaseContainer'>
					<h1 className='Title'>
						This Portfolio Site(?)
					</h1>
					<div className="Showcase">
					
					</div>
				</div>
				<div className="ProjectDescription">
					<p>
						TBA
					</p>
					<p>
						TechStack: JavaScript, Vite, Three.js
					</p>
					<p>
						Website thing thgin
					</p>
				</div>
			</div>
		</div>
	);
}