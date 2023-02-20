import React from 'react';
import '../styles/App.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div style={{marginTop: '15px'}}>
                Двойное нажатие по задаче: отметить как выполненное
            </div>
            <div style={{marginTop: '15px'}}>
                Двойное нажатие по выполненной задаче: отмена выполнения
            </div>
        </div>
    )
}

export default Footer
