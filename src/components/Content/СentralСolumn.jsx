import React from "react";
import "./CentralColumn.css";
import avatar from "../../assets/avatar.jpg";
import infoIcon from "../../assets/smile.png";
import infoIcon2 from "../../assets/phone.png";
import infoIcon3 from "../../assets/message.png";
import friend1 from "../../assets/friend1.jpg";
import friend2 from "../../assets/friend2.jpg";
import friend3 from "../../assets/friend3.jpg";
import friendOnline1 from "../../assets/onlineFriend1.jpg";
import friendOnline2 from "../../assets/onlineFriend2.png";
import friendOnline3 from "../../assets/onlineFriend3.jpg";
import sub1 from "../../assets/sub.jpg";
import sub2 from "../../assets/sub2.jpg";
import sub3 from "../../assets/sub3.jpg";
import audio from "../../assets/audio.jpg";

const СentralСolumn = () => {
  return (
    <div className="central">
      <div className="central_info">
        <img className="central_avatar" src={avatar} alt="Avatar" />
        <button className="central_button-edit">Редактировать</button>
        <div className="info_icon-text">
          <img className="info_icon" src={infoIcon} alt="icon" />
          <h4>Статистика страницы</h4>
        </div>
        <div className="info_icon-text">
          <img className="info_icon" src={infoIcon} alt="icon" />
          <h4>Воспоминания</h4>
        </div>
        <div className="info_icon-text">
          <img className="info_icon" src={infoIcon3} alt="icon" />
          <h4>Мои вопросы</h4>
        </div>
        <div className="info_icon-text">
          <img className="info_icon" src={infoIcon2} alt="icon" />
          <h4>Денежные переводы</h4>
        </div>
      </div>

      <button className="central_link">
        <img className="img-link" src={infoIcon} alt="icon" />
        <a className="profile-link" href="google.com">
          Ссылка на профиль
        </a>
      </button>

      <div className="info_friends">
        <h4 className="h4">Друзья</h4>
        <div className="friends">
          <div className="info_avatar-name">
            <img className="avatar-friend" src={friend1} alt="friend" />
            <h4>Толя</h4>
          </div>
          <div className="info_avatar-name">
            <img className="avatar-friend" src={friend2} alt="friend" />
            <h4>Лариса</h4>
          </div>
          <div className="info_avatar-name">
            <img className="avatar-friend" src={friend3} alt="friend" />
            <h4>Богдан</h4>
          </div>
        </div>
      </div>

      <div className="info_friends-online">
        <h4 className="h4">Друзья онлайн</h4>
        <div className="friends">
          <div className="info_avatar-name">
            <img className="avatar-friend" src={friendOnline1} alt="friend" />
            <h4>Артем</h4>
          </div>
          <div className="info_avatar-name">
            <img className="avatar-friend" src={friendOnline2} alt="friend" />
            <h4>БигТони</h4>
          </div>
          <div className="info_avatar-name">
            <img className="avatar-friend" src={friendOnline3} alt="friend" />
            <h4>2оборота</h4>
          </div>
        </div>
      </div>

      <div className="info_subscript">
        <h4 className="h4">Подписки</h4>
        <div className="subscript">
          <div className="info_avatar-sub">
            <img className="avatar-sub" src={sub1} alt="avatar" />
            <h4>ГДЗ 10 класс</h4>
          </div>
          <div className="info_avatar-sub">
            <img className="avatar-sub" src={sub3} alt="avatar" />
            <h4>Милфы СПб +18</h4>
          </div>
          <div className="info_avatar-sub">
            <img className="avatar-sub" src={sub2} alt="avatar" />
            <h4>Drugs/Cнюс/Вписки СПб</h4>
          </div>
        </div>
      </div>

      <div className="info_audio">
        <h4 className="h4">Аудиозаписи</h4>
        <div className="info_img-track">
          <img className="img-audio" src={audio} alt="music" />
          <div className="track">
            <h4>Careless Whisper</h4>
            <h4 className="artist">George Michael</h4>
          </div>
        </div>
        <div className="info_img-track">
          <img className="img-audio" src={audio} alt="music" />
          <div className="track">
            <h4>Новый ламбо</h4>
            <h4 className="artist">Егор Крид</h4>
          </div>
        </div>
        <div className="info_img-track">
          <img className="img-audio" src={audio} alt="music" />
          <div className="track">
            <h4>Киса</h4>
            <h4 className="artist">Кровосток</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default СentralСolumn;
