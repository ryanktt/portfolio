import React from 'react'

const Backdrop = (props) => {
    const {clicked} = props;

    return (
        <div className={`backdrop`} onClick={clicked}></div>
    )
}

export default Backdrop;
