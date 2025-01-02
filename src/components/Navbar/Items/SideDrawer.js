import React from 'react';
import Translator from '../../I18n/Translator';
import { HashLink } from 'react-router-hash-link';

const SideDrawer = (props) => {
	const { active } = props;

	let sdStyle = '';
	if (active) sdStyle = 'active';

	return (
		<div className={`sidedrawer ${sdStyle}`}>
			<ul>
				<li>
					<HashLink smooth to="#home">
						<Translator path="header.title" />
					</HashLink>
				</li>
				<li>
					<HashLink smooth to="#skills">
						<Translator path="skills.title" />
					</HashLink>
				</li>
				<li>
					<HashLink smooth to="#experience">
						<Translator path="experience.title" />
					</HashLink>
				</li>
				<li>
					<HashLink smooth to="#projects">
						<Translator path="projects.title" />
					</HashLink>
				</li>
				<li>
					<HashLink smooth to="#contact">
						<Translator path="contact.title" />
					</HashLink>
				</li>
			</ul>
		</div>
	);
};

export default SideDrawer;
