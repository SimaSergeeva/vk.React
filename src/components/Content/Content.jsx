import React from 'react';
import './Content.css'
import Menu from './Menu';
import CentralColumn from './СentralСolumn';
import RightColumn from './RightColumn';


const Content = () => {
    return (
        <div className='conteiner'>
            <Menu />
            <CentralColumn />
            <RightColumn />
        </div>
    );
};

export default Content;