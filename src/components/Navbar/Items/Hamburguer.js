import React, {useState} from 'react';

const Hamburguer = (props) => {
    const {clicked} = props;

    return (
        <>
            <div className='hamburguer' onClick={clicked}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            
        </>
    )
}

export default Hamburguer
