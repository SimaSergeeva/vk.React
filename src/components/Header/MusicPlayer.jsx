import React from 'react';
import './MusicPlayer.css';
import music from '../../assets/music.png'

const MusicPlayer = () => {
    return (
        <div className='logoMusic'>
            <img className='imgMusic' src={music} alt="Логотип"/>
            <h4 className='textMusic'>polnalyubvi - Кометы</h4>
        </div>
    );
};

export default MusicPlayer;