import React from 'react';
import classes from './Modal.module.css';

const Modal = ({children, visible, setVisible}) => {
    
    const baseClasses = [classes.modal];
    if (visible) baseClasses.push(classes.active)
    
    return (
        <div
            className={baseClasses.join(' ')}
            onClick={() => setVisible(false)}
        >
            <div
                className={classes.modalBody}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

export default Modal;