import Translator from './I18n/Translator';
import Button from './UI/Button';
import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="presentation">
                <h1><Translator path='header.hiImCalled'/> <span>Ryan Kayro</span></h1>
                <h2><Translator path='header.aSoftwareDeveloper'/></h2>
            </div>
            <div className='contact-me'>
                <div>
                    <a href='https://github.com/ryanktt' target="_blank"><i className="fab fa-github-square"></i></a>
                    
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/ryan-kayro-6338ab209/' target="_blank"><i className="fab fa-linkedin"></i></a>
                    
                </div>
            </div>
            <div className='header-btn'><Button path={`https://ryanktt.github.io/portfolio/#projects`}><Translator path='header.seeMyWork'/></Button></div>
        </header>
    )
}

export default Header;
