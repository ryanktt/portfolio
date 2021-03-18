import React from 'react';
import Button from './UI/Button';

const Header = () => {
    return (
        <header>
            <div className="presentation">
                <h1>Olá, me chamo <span>Ryan Kayro</span></h1>
                <h2>Um Desenvolver de Software</h2>
            </div>
            <div className='contact-me'>
                <div>
                    <a href='https://github.com/ryanktt' target="_blank"><i className="fab fa-github-square"></i></a>
                    
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/ryan-kayro-6338ab209/' target="_blank"><i className="fab fa-linkedin"></i></a>
                    
                </div>
            </div>
            <div className='header-btn'><Button path={`https://ryanktt.github.io/portfolio/#projects`}>Veja Meu Trabalho</Button></div>
        </header>
    )
}

export default Header;
