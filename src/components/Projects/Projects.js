import React, {useEffect} from 'react';
import Project from './Items/Project';
import forum from '../../assets/projects/forum.jpg';
import blog from '../../assets/projects/blog.jpg';
import portfolio from '../../assets/projects/portfolio.jpg';
import chat from '../../assets/projects/chat.jpg';
import intoit from '../../assets/projects/intoit.jpg';
import Translator from '../I18n/Translator';

const Projects = () => {
    useEffect(() => {
        //project animation
        const projects = document.querySelectorAll('.project-box');
        projects.forEach(project => {
            const observer = new IntersectionObserver((entries) => {
                observerCallback(entries, observer, project);
            }, {threshold: 0.3});
            observer.observe(project); 
        })
        const observerCallback = (entries, observer, header) => {
            entries.forEach((entry, i) => {
                 if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                 }
            });
        };
    }, []);

    return (
        <section id='projects' className='projects-wrapper'>
            <div className='projects'>
                <h2><Translator path='projects.title'/></h2>
                <div className='project-list'>
                    <div className='project-box '>
                        <Project
                        text={<Translator path='projects.forumPlayersDescription'/>}
                        title='FórumPlayers'
                        site='https://forumplayers.herokuapp.com/'
                        code='https://github.com/ryanktt/forum-server'
                        tags={['HTML', 'CSS', 'JavaScript', 'MongoDB', 'NodeJs', 'NPM', 'ExpressJs', 'React', 'Redux']}
                        imgPath={forum}/>
                    </div> 

                    <div className='project-box '>
                        <Project
                        text={<Translator path='projects.tickTechDescription'/>}
                        title='TickTech Blog'
                        site='https://ticktech.herokuapp.com/'
                        code='https://github.com/ryanktt/blog-app'
                        tags={['HTML', 'CSS', 'JavaScript', 'EJS', 'MySQL', 'NodeJs', 'NPM', 'ExpressJs']}
                        imgPath={blog}/>
                    </div> 
                    <div className='project-box '>
                        <Project
                        text={<Translator path='projects.chatalkDescription'/>}
                        title='Chatalk'
                        site='https://lchatalkl.herokuapp.com/'
                        code='https://github.com/ryanktt/chat-app/'
                        tags={['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'EJS', 'NPM', 'NodeJs']}
                        imgPath={chat}/>
                    </div> 
                    <div className='project-box '>
                        <Project
                        text={<Translator path='projects.intoitDescription'/>}
                        title='IntoIT'
                        site='https://intoit.herokuapp.com/'
                        code='https://github.com/ryanktt/course-app/'
                        tags={['HTML', 'CSS', 'JavaScript', 'MongoDB', 'NodeJs', 'NPM', 'ExpressJs', 'React', 'Redux', 'Sass']}
                        imgPath={intoit}/>
                    </div> 
                    <div className='project-box '>
                        <Project
                        text={<Translator path='projects.portfolioDescription'/>}
                        title={<Translator path='projects.portfolioTitle'/>}
                        site='https://ryanktt.github.io/portfolio/'
                        code='https://github.com/ryanktt/portfolio'
                        tags={['HTML', 'CSS', 'JavaScript', 'React', 'NPM', 'Sass']}
                        imgPath={portfolio}/>
                    </div> 
                    
                </div>
               
            </div>
            
        </section>
    )
}

export default Projects;
