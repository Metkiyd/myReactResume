import React from "react"
import Fade from 'react-reveal/Fade';
import works from "./works";
import './portfolio.css'

function Portfolio() {
	return (
		<section className='portfolio' id="portfolio">
			<div className='container'>
				<div className="content">
					<div className="portfolio__content">
						<Fade top duration={800} delay={400} distance="30px">
							<div className="portfolio__title">
								<h2 className="title-underline portfolio__title-head">Ознакомьтесь с моими работами</h2>
							</div>
						</Fade>
						<Fade bottom duration={800} delay={800} distance="30px">
							<div className="portfolio__items">
								{works.map((work, id) => {
									return(
										<div className="padding-b">
											<div className="items-rounded">
												<a
													href={work.link}
													className='portfolio-item'
													key={id}
												>
												{/* <div className='portfolio-item__title'>
													{work.title}
												</div>
												<div className='portfolio-item__title'>
													{work.description}
												</div>
												<div className='portfolio-item__title'>
													{work.stack}
												</div> */}
												<img className="img-size" alt={work.title} layout="responsive" placeholder="blur" src={work.image} />
												</a>
											</div>
										</div>
									)
								})}
							</div>
						</Fade>
					</div>
				</div>
			</div>
		</section>
	);
};


export default Portfolio;