'use client';
import { useEffect } from 'react';
import './css/home.css';

import Link from 'next/link';

// Todo
// mobile css
export default function Home() {
	useEffect(() => {
		let element = document.getElementsByClassName('ShapeContainer');

		if (element) {
			element[1].style.display = 'none';
			element[2].style.display = 'none';
			element[0].style.display = 'flex';
			element[0].classList.add('animate-fade-in');
		}
	}, []);
	return (
		<div className="HomeIntro">
			<p>
				Hey,
			</p>
			<p>
				My names{' '}
				<span id='Name'>
					Ali Chapman
				</span>
				.
			</p>
			<p>
				I'm a current student at the University of Central Florida;<br/>Where I am pursuing a bachelor of science in Computer Science.<br/>I always have something in the works so headover to the {<Link href={'/Projects'}><i><u>projects</u></i></Link>} tab to see what I've been up to :{')'}
			</p>
		</div>
	);
}
