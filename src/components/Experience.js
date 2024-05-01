import engaged from '../assets/experience/engaged-logo.png';
import Translator from './I18n/Translator';
import React, { useEffect } from 'react';

const Experience = () => {
	useEffect(() => {
		const experience = document.querySelector('.experience');

		const observer = new IntersectionObserver((entries) => {
			if (entries[0].intersectionRatio > 0) {
				experience.classList.add('animate');
			}
		});
		observer.observe(experience);
	}, []);

	return (
		<section id="experience" className="experience">
			<div className="experience-item">
				<div className="experience-title">
					<h1>
						<Translator path="experience.title" />
					</h1>
				</div>
				<div>
					<img src={engaged} alt="" />
					<div className="experience-name">
						<h3>EngagED/Campli</h3>
						<h4>
							- <Translator path="experience.engaged.duration.time" />
						</h4>
					</div>
					<p className="experience-description">
						<Translator path="experience.engaged.description" />
					</p>
				</div>
			</div>
		</section>
	);
};

export default Experience;
