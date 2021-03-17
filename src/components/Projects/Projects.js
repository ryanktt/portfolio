import React, {useEffect} from 'react';
import Project from './Items/Project';
import forum from '../../assets/projects/forum.jpg';
import blog from '../../assets/projects/blog.jpg';
import portfolio from '../../assets/projects/portfolio.jpg';

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
                <h2>Projetos</h2>
                <div className='project-list'>
                    <div className='project-box 0'>
                        <Project
                        text='Fórum desenvolvido com o intuito de aprimorar meu conhecimento em backend, possui autenticação, sistema de moderação simples, e coisas básicas de um fórum, como: postar, like/dislike, notificação simples etc.'
                        title='FórumPlayers'
                        tags={['HTML', 'CSS', 'JavaScript', 'MongoDB', 'NodeJs', 'NPM', 'ExpressJs', 'React', 'Redux']}
                        imgPath={forum}/>
                    </div> 

                    <div className='project-box 1'>
                        <Project
                        text='Fórum desenvolvido com o intuito de aprimorar meu conhecimento em backend, possui autenticação, sistema de moderação simples, e coisas básicas de um fórum, como: postar, like/dislike, notificação simples etc.'
                        title='TickTech Blog'
                        tags={['HTML', 'CSS', 'JavaScript', 'MySQL', 'NodeJs', 'NPM', 'ExpressJs']}
                        imgPath={blog}/>
                    </div> 
                    <div className='project-box 2'>
                        <Project
                        text='Fórum desenvolvido com o intuito de aprimorar meu conhecimento em backend, possui autenticação, sistema de moderação simples, e coisas básicas de um fórum, como: postar, like/dislike, notificação simples etc.'
                        title='TickTech Blog'
                        tags={['HTML', 'CSS', 'JavaScript', 'MySQL', 'NodeJs', 'NPM', 'ExpressJs']}
                        imgPath={portfolio}/>
                    </div> 
                </div>
               
            </div>
            
        </section>
    )
}

export default Projects;
