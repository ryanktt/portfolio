import React from 'react';
import Flags from './I18n/Flags';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
	return (
		<section className="footer-container">
			<div className="footer">
				<Flags />
				<div className="contact-footer">
					<div>
						<a
							href="https://github.com/ryanktt"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-github-square"></i>
						</a>
					</div>
					<div>
						<a
							href="https://www.linkedin.com/in/ryan-kayro-6338ab209/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-linkedin"></i>
						</a>
					</div>
					<HashLink target="_blank" rel="noopener noreferrer" to="/resume">
						<i
							style={{ fontSize: '1.5rem', paddingTop: '1px' }}
							className="fa-solid fa-file-lines"
						></i>
					</HashLink>
				</div>
				<p>© 2021 https://ryanktt.github.io/portfolio</p>
			</div>
		</section>
	);
};

export default Footer;
