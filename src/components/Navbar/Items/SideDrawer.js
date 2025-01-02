import React from 'react';
import Translator from '../../I18n/Translator';
import { HashLink as Link } from 'react-router-hash-link';
const SideDrawer = (props) => {
	const { active } = props;

	let sdStyle = '';
	if (active) sdStyle = 'active';

	return (
		<div className={`sidedrawer ${sdStyle}`}>
			<ul>
				<li>
					<Link smooth to="#home">
						<Translator path="header.title" />
					</Link>
				</li>
				<li>
					<Link smooth to="#skills">
						<Translator path="skills.title" />
					</Link>
				</li>
				<li>
					<Link smooth to="#experience">
						<Translator path="experience.title" />
					</Link>
				</li>
				<li>
					<Link smooth to="#projects">
						<Translator path="projects.title" />
					</Link>
				</li>
				<li>
					<Link smooth to="#contact">
						<Translator path="contact.title" />
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideDrawer;
