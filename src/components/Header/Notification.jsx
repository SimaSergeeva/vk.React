import React from 'react';
import './Notification.css';
import notification from '../../assets/notification.png'

const Notification = () => {
    return (
        <div className='logoNtfc'>
            <img className='imgNtfc' src={notification} alt="Логотип"/>
        </div>
    );
};

export default Notification;