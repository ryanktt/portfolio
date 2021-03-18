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
                    <div className='project-box '>
                        <Project
                        text='Um fórum SPA simples, porém com todas as funcionalidades de um fórum normal. Desenvolvido com intuito de fixar e aprimorar meus conhecimentos em React e back-end. 
                        Possui autenticação, validação, sistema de moderação, tudo que alguém esperaria de um fórum e o fato interessante de que não é preciso recarregar a página, o que garante mais velocidade e menos uso de dados.'
                        title='FórumPlayers'
                        site='https://forumplayers.herokuapp.com/'
                        code='https://github.com/ryanktt/forum-server'
                        tags={['HTML', 'CSS', 'JavaScript', 'MongoDB', 'NodeJs', 'NPM', 'ExpressJs', 'React', 'Redux']}
                        imgPath={forum}/>
                    </div> 

                    <div className='project-box '>
                        <Project
                        text='Blog completo pensado para solidificar conhecimentos previamente adquiridos em nodeJs e banco de dados MySQL. Possui sistemar de publicar, editar e apagar posts, também como login para administradores, e sistema de hierarquia, onde administradores não podem alterar posts que não tenham publicado, sendo isso possível para o dono.'
                        title='TickTech Blog'
                        site='https://ticktech.herokuapp.com/'
                        code='https://github.com/ryanktt/blog-app'
                        tags={['HTML', 'CSS', 'JavaScript', 'MySQL', 'NodeJs', 'NPM', 'ExpressJs']}
                        imgPath={blog}/>
                    </div> 
                    <div className='project-box '>
                        <Project
                        text='Portfólio planejado com o foco no design para demonstrar minhas habilidades e projetos.'
                        title='Portfólio'
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
