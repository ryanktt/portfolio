import React from 'react'

const alertMsg = (props) => {
    let {type, animate} = props;
    let unanimate = ''
    if(animate) {
        animate = 'animate'
    } else {
        unanimate = 'unanimate'
    }

    return (
        <div className={`alert ${type} ${animate} ${unanimate}`} id='alert'>
            <h4>{props.children}</h4>
        </div>
    )
}

export default alertMsg
