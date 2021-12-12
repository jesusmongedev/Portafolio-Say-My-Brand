import React from 'react';
import ReactDOM from 'react-dom';
import './RegisterModal.scss'

const RegisterModal = ({children}) => {
    return ReactDOM.createPortal(
            <div className='modal'>
                {children}
            </div>, 
            document.getElementById('register')
        );
}

export {RegisterModal}
