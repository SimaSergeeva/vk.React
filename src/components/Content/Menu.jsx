import React from 'react';
import './Menu.css';
import menuIcon from '../../assets/smile.png';
import menuIcon2 from '../../assets/phone.png';
import menuIcon3 from '../../assets/message.png';


const Menu = () => {
    return (
        <div className='menu'>
                <div className='menu_icon-text'>
                <img className='menu_icon' src={menuIcon} alt="logo" />
                <h4>Моя страница</h4>
                </div>
                <div className='menu_icon-text'>
                <img className='menu_icon' src={menuIcon2} alt="logo" />
                <h4>Новости</h4>
                </div>
                <div className='menu_icon-text'>
                <img className='menu_icon' src={menuIcon3} alt="logo" />
                <h4>Мессенджер</h4>
                </div>
                <div className='menu_icon-text'>
                <img className='menu_icon' src={menuIcon2} alt="logo" />
                <h4>Звонки</h4>
                </div>
                <div className='menu_icon-text'>
                <img className='menu_icon' src={menuIcon} alt="logo" />
                <h4>Друзья</h4>
                </div>
                <div className='menu_icon-text'>
                <img className='menu_icon' src={menuIcon} alt="logo" />
                <h4>Сообщества</h4>
                </div>
                <div className='menu_icon-text'>
                <img className='menu_icon' src={menuIcon3} alt="logo" />
                <h4>Фотографии</h4>
                </div>
                <div className='menu_icon-text'>
                <img className='menu_icon' src={menuIcon3} alt="logo" />
                <h4>Музыка</h4>
                </div>
                <div className='menu_icon-text'>
                <img className='menu_icon' src={menuIcon2} alt="logo" />
                <h4>Видео</h4>
                </div>
                <div className='menu_icon-text'>
                <img className='menu_icon' src={menuIcon3} alt="logo" />
                <h4>Клипы</h4>
                </div>
                <div className='menu_icon-text'>
                <img className='menu_icon' src={menuIcon2} alt="logo" />
                <h4>Игры</h4>
                </div>
                <div className='menu_icon-text'>
                <img className='menu_icon' src={menuIcon} alt="logo" />
                <h4>Стикеры</h4>
                </div>
                <div className='menu_icon-text'>
                <img className='menu_icon' src={menuIcon3} alt="logo" />
                <h4>Объявления</h4>
                </div>
            <div className='menu_blok1'>
            </div>

                <div className='menu_icon-text'>
                <img className='menu_icon' src={menuIcon2} alt="logo" />
                <h4>Мини-приложения</h4>
                </div>
                <div className='menu_icon-text'>
                <img className='menu_icon' src={menuIcon} alt="logo" />
                <h4>VK Pay</h4>
                </div>
                <div className='menu_icon-text'>
                <img className='menu_icon' src={menuIcon3} alt="logo" />
                <h4>Работа</h4>
                </div>

            <div className='menu_blok2'>
            </div>
                <div className='menu_icon-text'>
                <img className='menu_icon' src={menuIcon2} alt="logo" />
                <h4>Файлы</h4>
                </div>
                <div className='menu_icon-text'>
                <img className='menu_icon' src={menuIcon} alt="logo" />
                <h4>Реклама</h4>
                </div>

        </div>
    );
};

export default Menu;