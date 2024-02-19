import { Inter } from 'next/font/google';
import './globals.css';

// components
import Navbar from './components/Navbar';
import Background from './components/Background';
import BackContainer from './components/BackContainer';
import Footer from './components/Footer';
 
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'AJLC - Home',
	description: 'A portfolio website for Ali Chapman',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<BackContainer>
					<Background/>
					<Navbar />
					<div id='Foreground'>
						{children}
					</div>
					<Footer/>
				</BackContainer>
			</body>
		</html>
	);
}