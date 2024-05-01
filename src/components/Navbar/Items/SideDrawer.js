import React from 'react';
import Translator from '../../I18n/Translator';

const SideDrawer = (props) => {
	const { active } = props;

	let sdStyle = '';
	if (active) sdStyle = 'active';

	return (
		<div className={`sidedrawer ${sdStyle}`}>
			<ul>
				<li>
					<a href="#">
						<Translator path="header.title" />
					</a>
				</li>
				<li>
					<a href="#skills">
						<Translator path="skills.title" />
					</a>
				</li>
				<li>
					<a href="#experience">
						<Translator path="experience.title" />
					</a>
				</li>
				<li>
					<a href="#projects">
						<Translator path="projects.title" />
					</a>
				</li>
				<li>
					<a href="#contact">
						<Translator path="contact.title" />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default SideDrawer;
