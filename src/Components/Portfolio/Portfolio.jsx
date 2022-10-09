import React from "react"
import works from "./works";
import './portfolio.css'

function Portfolio() {
	return (
		<div className='portfolio'>
			<div className='container'>
				<div className="content">
					{works.map((work, id) => (
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
						</a>
					))}
				</div>
			</div>
		</div>
	);
};


export default Portfolio;