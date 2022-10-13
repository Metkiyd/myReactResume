import React from "react"
import './main.css'
import mainImage from '../../images/background.png';

function Main() {
	return (
		<section className='main'>
			<div className='main__bg'>
				<img className='background-image' alt="backgroundImage" src={mainImage}></img>
			</div>
			<div className='main__container'>
				<h1 className='main__title'>
					Привет!
					<br />
					Я, Свириденко Дмитрий
					<br />
					Junior Frontend - разработчик
				</h1>
				<div className='main__description'>
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


export default Main;