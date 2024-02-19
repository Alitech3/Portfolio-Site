'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BackContainer({ children }) {
	const { push } = useRouter();
	// left right left right dumbass
	const konamiCode = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a', 'enter'];
	const CSSID = ['KU', 'KU2', 'KD', 'KD2', 'KL', 'KR', 'KL2', 'KR2', 'KB', 'KA', 'KE'];
	let userCode = 0;

	useEffect(() => {
		globalThis.addEventListener('keydown', (press) => {
			if (window.location.pathname === '/Journey') {
				return;
			}

			let keyPress = press.key.toLowerCase();
			switch (keyPress) {
			case 'escape':
				for (let i = 0; i < CSSID.length; i++) {
					document.getElementById(CSSID[i]).style.display = '';
				}
				userCode = 0;
				break;
			case konamiCode[userCode]:
				document.getElementById(CSSID[userCode]).style.display = 'flex';
				userCode++;
				break;
			default:
				for (let i = 0; i < CSSID.length; i++) {
					document.getElementById(CSSID[i]).style.display = '';
				}
				userCode = 0;
			}

			if (userCode == konamiCode.length) {
				push('/Journey');
				userCode = 0;
			}
		});
	}, []);

	return(
		<div id='BackContainer'>
			{children}
		</div>
	);
}