import '../css/footer.css';

import Image from 'next/image';
import Cherry from '../../assets/background-images/cherry.png';

// should the pacman really go <-
// or should it be ->?
export default function Footer() {
	return(
		<div id='Footer'>
			<div id='Links'>
				<a target='_blank' href='https://github.com/Alitech3' rel="noreferrer">Github</a><span>•</span>
				<a target='_blank' href='https://www.linkedin.com/in/ali-chapman-ajlc/' rel="noreferrer">Linkedin</a><span>•</span>
				<a href='mailto:algenericemailchap@gmail.com' rel="noreferrer">Email</a><span>•</span>
				<p>
					Last Updated: 2024
				</p>
			</div>
			<div id='PacFooterContainer'>
				<div id='KonamiPacman'/>
				<div id='KonamiDotContainer'>
					<div className='KonamiDot'/>
					<div className='KonamiDot'/>
					<div className='KonamiDot'/>
					<p id='KU'>
						↑
					</p>
					<p id='KU2'>
						↑
					</p>
					<p id='KD'>
						↓
					</p>
					<p id='KD2'>
						↓
					</p>
					<p id='KL'>
						←
					</p>
					<p id='KR'>
						→
					</p>
					<p id='KL2'>
						←
					</p>
					<p id='KR2'>
						→
					</p>
					<p id='KB'>
						B
					</p>
					<p id='KA'>
						A
					</p>
					{/* cherry */}
					<div id='KE'>
						<Image 
							src={Cherry}
							alt=''
						/>
					</div>
				</div>
			</div>
		</div>
	);
}