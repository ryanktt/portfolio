import React from 'react'

const Tag = (props) => {
    return (
        <div className='tag'>
            <p className='text'>{props.children}</p>
        </div>
    )
}

export default Tag
