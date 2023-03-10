import React from 'react';
import cl from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={cl.myInput} {...props}/>
    )
});

export default Input;