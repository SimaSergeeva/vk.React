import React from 'react';
import './MainLogo.css';
import mainLogo from '../../assets/mainLogo.jpg'

const MainLogo = () => {
    return (
        <div className='mainLogo'>
            <img className='imgLogo' src={mainLogo} alt="Логотип"/>
            <h4 className='textLogo'>вконтакте</h4>
        </div>
    );
};

export default MainLogo;