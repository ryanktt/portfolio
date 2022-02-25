import React, {useEffect} from 'react';

import html from '../assets/icons/html.svg';
import javascript from '../assets/icons/javascript.svg';
import nodejs from '../assets/icons/nodejs.svg';
import css from '../assets/icons/css.svg';
import expressjs from '../assets/icons/expressjs.svg';
import git from '../assets/icons/git.svg';
import github from '../assets/icons/github.svg';
import npm from '../assets/icons/npm.svg';
import react from '../assets/icons/react.svg';
import redux from '../assets/icons/redux.svg';
import sass from '../assets/icons/sass.svg';
import mongodb from '../assets/icons/mongodb.svg';
import mysql from '../assets/icons/mysql.svg';
import restapi from '../assets/icons/restapi.png';
import graphql from '../assets/icons/graphql.svg';
import typescript from '../assets/icons/typescript.svg';
import yarn from '../assets/icons/yarn.svg';
import Translator from './I18n/Translator';

const Skills = () => {

    useEffect(() => {
        //icon animation
        const icons = document.querySelector('.icons');
  
        const observer = new IntersectionObserver((entries) => {
            if(entries[0].intersectionRatio > 0) {
                icons.classList.add('animate');
            }
        })
        observer.observe(icons); 
    }, []);


    return (
        <section id='skills' className='skills'>
            <div className='skills-title'>
                <h2><Translator path='skills.title'/></h2>
                <p><Translator path='skills.tecsUsed'/></p>
            </div>
            <div className='icons'>
                <div className='icon'>
                    <img alt='' src={html}/>
                    <p>HTML</p>
                </div>
                <div className='icon'>
                    <img alt='' src={css}/>
                    <p>CSS</p>
                </div>
                <div className='icon'>
                    <img alt='' src={javascript}/>
                    <p>JavaScript</p>
                </div>
                <div className='icon'>
                    <img alt='' src={typescript}/>
                    <p>Typescript</p>
                </div>
                <div className='icon'>
                    <img alt='' src={nodejs}/>
                    <p>NodeJs</p>
                </div>
                <div className='icon'>
                    <img alt='' src={expressjs}/>
                    <p>ExpressJs</p>
                </div>
                <div className='icon'>
                    <img alt='' src={graphql}/>
                    <p>GraphQL</p>
                </div>
                <div className='icon'>
                    <img alt='' src={restapi}/>
                    <p>Api REST</p>
                </div>
                <div className='icon'>
                    <img alt='' src={npm}/>
                    <p>NPM</p>
                </div>
                <div className='icon'>
                    <img alt='' src={yarn}/>
                    <p>Yarn</p>
                </div>
                <div className='icon'>
                    <img alt='' src={sass}/>
                    <p>Sass</p>
                </div>
                <div className='icon'>
                    <img alt='' src={react}/>
                    <p>ReactJs</p>
                </div>
                <div className='icon'>
                    <img alt='' src={redux}/>
                    <p>Redux</p>
                </div>
                <div className='icon'>
                    <img alt='' src={mysql}/>
                    <p>MySQL</p>
                </div>
                <div className='icon'>
                    <img alt='' src={mongodb}/>
                    <p>MongoDB</p>
                </div>
                <div className='icon'>
                    <img alt='' src={git}/>
                    <p>Git</p>
                </div>
                <div className='icon'>
                    <img alt='' src={github}/>
                    <p>GitHub</p>
                </div>
            </div>

        </section>
    )
}

export default Skills;
