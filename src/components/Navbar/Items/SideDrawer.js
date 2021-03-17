import React from 'react';
import Backdrop from '../../UI/Backdrop';

const SideDrawer = (props) => {
    const {active} = props;

    let sdStyle = '';
    if(active) sdStyle = 'active';

    return (
        <div className={`sidedrawer ${sdStyle}`}>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#skills'>Habilidades</a></li>
                <li><a href='#projects'>Projetos</a></li>
                <li><a href='#contact'>Contatar</a></li>
            </ul>

        </div>
    )
}

export default SideDrawer;
