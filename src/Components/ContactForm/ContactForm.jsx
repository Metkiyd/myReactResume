import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import './contactForm.css'

function ContactForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		const data = {
			name,
			email,
			message,
		};
		console.log(data);
	};
	return (
		<section className='contactForm' id="contacts">
			<div className='contactForm__container'>
				<div className="content">
					<div className="contact__content">
						<Fade left duration={800} delay={200} distance="30px">
							<div className="contact__title">
								<svg className="mail-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
								</svg>
								<h2>Будем на связи!</h2>
							</div>
						</Fade>
						<div className="contact__block">
							<Fade bottom duration={800} delay={400} distance="30px">
								<div className="contact__form">
									<form className="contact-form" onSubmit={handleSubmit}>
										<input 
											className="form-item" 
											name="name" 
											placeholder="Ваше Имя" 
											required 
											onChange={e => setName(e.target.value)}
											type="text" />
											
										<input
											className="form-item"
											autoComplete="email"
											name="email"
											placeholder="Email для связи"
											required
											type="email"
											onChange={e => setEmail(e.target.value)}
										/>
										<textarea
											className="form-item"
											name="message"
											placeholder="Ваше предложение"
											required
											onChange={e => setMessage(e.target.value)}
										/>
										<button
											className="form-button"
											aria-label="Submit contact form"
											type="submit">
											Отправить
										</button>
									</form>
								</div>
							</Fade>
							<Fade bottom duration={800} delay={800} distance="30px">
								<div className="contacts">
									<p className="title-underline contacts-title">
										Напишите мне! <br />
										Буду рад сотрудничеству
									</p>
									<dl>
										<div>
											<dt></dt>
											<dd>
												<a href="tel:+79996983680">
													<svg className="phone-ico" fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
														<path d="M0 0h256v256H0z"></path>
														<path d="M92.5 124.8a83.6 83.6 0 0 0 39 38.9 8 8 0 0 0 7.9-.6l25-16.7a7.9 7.9 0 0 1 7.6-.7l46.8 20.1a7.9 7.9 0 0 1 4.8 8.3A48 48 0 0 1 176 216 136 136 0 0 1 40 80a48 48 0 0 1 41.9-47.6 7.9 7.9 0 0 1 8.3 4.8l20.1 46.9a8 8 0 0 1-.6 7.5L93 117a8 8 0 0 0-.5 7.8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18"></path>
													</svg>
													<span className="contact-span">+7 (999) 698-36-80</span></a>
											</dd>
										</div>
										<div>
											<dt></dt>
											<dd>
												<a href="mailto:sviridenko.dev@gmail.com">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
														<path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
													</svg>
													<span className="contact-span">sviridenko.dev@gmail.com</span>
												</a>
											</dd>
										</div>
										<div>
											<dt></dt>
											<dd>
												<a href="https://goo.gl/maps/o1Topi6GTJJnHPmCA">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
														<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
														<path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
													</svg>
													<span className="contact-span">Ростов-на-Дону</span>
												</a>
											</dd>
										</div>
									</dl>
								</div>
							</Fade>
							</div>
							<Fade bottom duration={800} delay={600}>
								<div className="nav-button">
									<a className="nav-ring" href="/#main">
										<svg className="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"></path>
										</svg>
									</a>
								</div>
							</Fade>
					</div>
				</div>
			</div>
		</section>
	);
};


export default ContactForm;