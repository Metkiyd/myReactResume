import React from "react"
import works from "./works";
import './portfolio.css'

function Portfolio() {
	return (
		<div className='portfolio'>
			<div className='container'>
				<div className="content">
					<div className="portfolio__content">
						<div className="portfolio__title">
							<h2>Ознакомьтесь с моими работами</h2>
						</div>
						<div className="portfolio__items">
							{works.map((work, id) => {
								return(
								<a
									href={work.link}
									className='portfolio-item'
									key={id}
								>
								<div className='portfolio-item__title'>
									{work.title}
								</div>
								<div className='portfolio-item__title'>
									{work.description}
								</div>
								<div className='portfolio-item__title'>
									{work.stack}
								</div>
								<img alt={work.title} layout="responsive" placeholder="blur" src={work.image} />
								</a>)
								})};
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};


export default Portfolio;