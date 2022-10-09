import React from "react"
import './header.css'

function Header() {
	return (
		<header className='header'>
			<nav className='header__nav'>
				<a className='header__nav-item' href="/">Обо мне</a>
				<a className='header__nav-item' href="/">Резюме</a>
				<a className='header__nav-item' href="/">Портфолио</a>
				<a className='header__nav-item' href="/">Контакты</a>
			</nav>
		</header>

	);
};


export default Header;