import React from 'react'
import Translator from '../../I18n/Translator';

const Toolbar = () => {
    return (
        <ul className='toolbar'>
                <li><a href='#'><Translator path='header.title'/></a></li>
                <li><a href='#skills'><Translator path='skills.title'/></a></li>
                <li><a href='#projects'><Translator path='projects.title'/></a></li>
                <li><a href='#contact'><Translator path='contact.title'/></a></li>
        </ul>
    )
}

export default Toolbar;
