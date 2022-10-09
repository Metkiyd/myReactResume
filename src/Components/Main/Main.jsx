import React from "react"
import './main.css'

function About() {
	return (
		<section className='about'>
			<div className='about__bg'></div>
			<div className='container'>
				<h1 className='about__title'>
					Приветствую!
					<br />
					Я Свириденко Дмитрий
					<br />
					Junior Frontend Разработчик
				</h1>
				<div className='about__description'>
					<p>
						Учился профессии JavaScript React разработчик на Hexlet.io
					</p>
					<p>
						Изучаю разработку с Июля 2021г.
					</p>
					<div className='socials'>Социалки</div>
					<div className='actions'>Кнопки</div>
				</div>
			</div>
		</section>
	);
};


export default About;