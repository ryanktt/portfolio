import React from 'react';
import Translator from '../../I18n/Translator';
import { HashLink } from 'react-router-hash-link';

const Toolbar = () => {
	return (
		<ul className="toolbar">
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
	);
};

export default Toolbar;
