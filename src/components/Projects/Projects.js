import React, { useEffect } from 'react';
import Project from './Items/Project';
import forum from '../../assets/projects/forum.jpg';
import blog from '../../assets/projects/blog.jpg';
import chat from '../../assets/projects/chat.jpg';
import intoit from '../../assets/projects/intoit.jpg';
import Translator from '../I18n/Translator';

const Projects = () => {
	useEffect(() => {
		const projects = document.querySelectorAll('.project-box');
		projects.forEach((project) => {
			const observer = new IntersectionObserver(
				(entries) => {
					observerCallback(entries, observer, project);
				},
				{ threshold: 0.3 },
			);
			observer.observe(project);
		});
		const observerCallback = (entries, observer, header) => {
			entries.forEach((entry, i) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate');
				}
			});
		};
	}, []);

	return (
		<section id="projects" className="projects-wrapper">
			<div className="projects">
				<h2>
					<Translator path="projects.title" />
				</h2>
				<div className="project-list">
					<div className="project-box ">
						<Project
							text={<Translator path="projects.forumPlayersDescription" />}
							title="FórumPlayers"
							site="https://forum-client.onrender.com"
							code="https://github.com/ryanktt/forum-website"
							tags={[
								'HTML',
								'CSS',
								'JavaScript',
								'MongoDB',
								'NodeJs',
								'NPM',
								'ExpressJs',
								'React',
								'Redux',
							]}
							imgPath={forum}
						/>
					</div>

					<div className="project-box ">
						<Project
							text={<Translator path="projects.tickTechDescription" />}
							title="TickTech Blog"
							site="https://blog-app-4d39.onrender.com"
							code="https://github.com/ryanktt/blog-app"
							tags={[
								'HTML',
								'CSS',
								'JavaScript',
								'EJS',
								'MySQL',
								'NodeJs',
								'NPM',
								'ExpressJs',
							]}
							imgPath={blog}
						/>
					</div>
					<div className="project-box ">
						<Project
							text={<Translator path="projects.chatalkDescription" />}
							title="Chatalk"
							code="https://github.com/ryanktt/chat-app/"
							tags={[
								'HTML',
								'CSS',
								'JavaScript',
								'Bootstrap',
								'EJS',
								'NPM',
								'NodeJs',
							]}
							imgPath={chat}
						/>
					</div>
					<div className="project-box ">
						<Project
							text={<Translator path="projects.intoitDescription" />}
							title="IntoIT"
							code="https://github.com/ryanktt/course-app/"
							tags={[
								'HTML',
								'CSS',
								'JavaScript',
								'MongoDB',
								'NodeJs',
								'ExpressJs',
								'React',
								'Redux',
								'Sass',
							]}
							imgPath={intoit}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
