import React from 'react';
import Flags from './I18n/Flags';

const Footer = () => {
	return (
		<section className="footer-container">
			<div className="footer">
				<Flags />
				<div className="contact-footer">
					<div>
						<a href="https://github.com/ryanktt" target="_blank">
							<i className="fab fa-github-square"></i>
						</a>
					</div>
					<div>
						<a
							href="https://www.linkedin.com/in/ryan-kayro-6338ab209/"
							target="_blank"
						>
							<i className="fab fa-linkedin"></i>
						</a>
					</div>
				</div>
				<p>© 2021 https://ryanktt.github.io/portfolio</p>
			</div>
		</section>
	);
};

export default Footer;
