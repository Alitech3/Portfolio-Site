import '../css/navbar.css';
import Link from 'next/link';

export default function Navbar() {
	return(
		<nav id='NavContainer'>
			<div id='HomeNavContainer'>
				<Link href={'/'} className='NavLink'>Home</Link>
				<div className='ShapeContainer'>
					<div id="HomeDiamond"/>
					<div id="HomeLine"/>
				</div>
			</div>
			<div id='Sphere'/>
			<div id='ProjectsNavContainer'>
				<Link href={'/Projects'} className='NavLink'>Projects</Link>
				<div className='ShapeContainer'>
					<div id='ProjectsLine'/>
					<div id='ProjectsDiamond'/>
				</div>
			</div>
			<div id='JourneySphere'/>
			<div id='JourneyNavContainer'>
				<Link href={'/Journey'} className='NavLink'>Journey</Link>
				<div className='ShapeContainer'>
					<div id='JourneyLine'/>
					<div id='JourneyDiamond'/>
				</div>
			</div>
		</nav>
	);
}
