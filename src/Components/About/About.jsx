import React from "react"
import Fade from 'react-reveal/Fade';
import './about.css'
import myAvatar from '../../images/avatar.png'

function About() {
	return (
		<section className='about' id="about">
			<div className='container'>
				<div className='content'>
					<div className="about__content">
						<Fade left duration={800} delay={400} distance="30px">
							<div className="about__image">
							<img className='my-image' alt="avatarImage" width='280' height='350' placeholder="blur" src={myAvatar}></img>
							</div>
						</Fade>
						<Fade right duration={800} delay={800} distance="30px">
							<div className="about__info">
								<h1 className='about__title'>
									Немного о себе
								</h1>
								<div className='about__description'>
									<p>
										Я люблю и не боюсь браться за сложные задачи,
										стараюсь анализировать и выбирать правильный подход к их выполнению.
										Ищу алгоритм решения, разбиваю на более мелкие задачи. 
										Мне нравится разбираться в тонкостях различных технологий и анализировать чужой код. 
										Ищу ответы на возникшие вопросы на англоязычных сайтах.
										Решаю задачки на CodeWars, в работе использую VSCode.
										Занимаюсь написанием своего пет проекта.
									</p>
									<div className="interests">
										<div className="interests__item">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
												<path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
											</svg>
											<span className="span-bold">
												Место жительства:
											</span>
											<span>
												Ростов-на-Дону
											</span>
										</div>
										<div className="interests__item">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
												<path stroke-linecap="round" stroke-linejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path>
											</svg>
											<span className="span-bold">
												Гражданство:
											</span>
											<span>
												Россия
											</span>
										</div>
										<div className="interests__item">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
												<path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
											</svg>
											<span className="span-bold">
												Дата рождения:
											</span>
											<span>
												10 Август 1993
											</span>
										</div>
										<div className="interests__item">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
												<path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
											</svg>
											<span className="span-bold">
												Интересы:
											</span>
											<span>
												Кино, музыка, автомобили.
											</span>
										</div>
									</div>
								</div>
							</div>
						</Fade>
					</div>
				</div>
			</div>
		</section>
	);
};


export default About;