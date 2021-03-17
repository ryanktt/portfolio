import React from 'react';


const Button = (props) => {
    const {children, path, small, dark} = props;
    let {type} = props;
    let classes = 'button'
    if(small) classes = `${classes} small`;
    if(dark) classes = `${classes} dark`;
    if(!type) type='button';

    return (
        <button className={classes} type={type} ><a href={path} >{children}</a></button>
    )
}

export default Button;
