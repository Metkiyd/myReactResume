import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import './header.css'


const Header = () => {

	return (
		<>
			<DesktopNavigation />
			<MobileNavigation />
		</>

	);
};

const DesktopNavigation = () => {

	return (
		<Fade top duration={800} delay={400}>
			<header className='desktop-header'>
				<nav className='desktop-menu'>
					<NavItem />
				</nav>
			</header>
		</Fade>
	);
};

const MobileNavigation = () => {

	const [isOpen, setIsOpen] = useState(false);

	const baseClass = "menu-item";

	return (
		<>
			<div className='mobile-navigation'>
				<Fade top duration={800} delay={400}>
					<button className={isOpen ? "menu-button focus" : 'menu-button'} onClick={()=> setIsOpen(!isOpen)}>
						<svg className="menu-ico" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
							<circle cx="5" cy="6" fill="none" r="1" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></circle>
							<circle cx="5" cy="16" fill="none" r="1" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></circle>
							<circle cx="5" cy="26" fill="none" r="1" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></circle>
							<path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M10 6h18M10 16h18M10 26h18"></path>
						</svg>
					</button>
				</Fade>
				<div className={isOpen ? 'mobile-menu opacity' : 'mobile-menu'} onClick={()=> setIsOpen(false)}>
					<div className={isOpen ? 'menu-blur opacity' : 'menu-blur'}></div>
					<div className={isOpen ? 'menu active' : 'menu'}>
						<nav className="mobile-nav" onClick={()=> setIsOpen(!isOpen)}>
							<NavItem baseClass={baseClass}/>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
};

const NavItem = ({baseClass}) => {
	return (
		<>
			<a className={baseClass} href='/#about'>Обо мне</a>
			<a className={baseClass} href="/#resume">Резюме</a>
			<a className={baseClass} href="/#portfolio">Портфолио</a>
			<a className={baseClass} href="/#contacts">Контакты</a>
		</>
	);
};

export default Header;
