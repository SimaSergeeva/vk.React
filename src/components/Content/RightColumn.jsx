import React from "react";
import "./RightColumn.css";
import foto from "../../assets/foto.jpg";
import foto2 from "../../assets/foto2.jpg";
import foto3 from "../../assets/foto3.jpg";
import foto4 from "../../assets/foto4.jpg";
import avatar from "../../assets/avatar.jpg";
import notification from "../../assets/notification.png";
import phone from "../../assets/phone.png";
import smile from "../../assets/smile.png";
import message from "../../assets/message.png";
import search from "../../assets/search.png";
import bigAvatar from "../../assets/bigFoto.jpg";
import like from '../../assets/like.png';
import comment from '../../assets/comment.png';
import repost from '../../assets/repost.png';

const RightColumn = () => {
  return (
    <div className="right">
      <div className="info_user">
        <div className="header_info_user">
          <div className="header_name-activ">
            <h3 className="user-name">Family Page :з</h3>
            <h4 className="last-activ">заходила 6 минут назад</h4>
          </div>
          <h4 className="header_status">установить статус</h4>
        </div>
        <div className="cenral_info_user">
          <div className="info_date-birth">
            <h4 className="db">День рождения:</h4>
            <h4 className="date-birth">12 мая 2021 г.</h4>
          </div>
          <h4 className="detailed-info">Показать подробную информацию</h4>
        </div>
        <div className="bottom-part-info">
          <div className="amount-obj">
            <h3 className="amount">299</h3>
            <h4 className="object">друзей</h4>
          </div>
          <div className="amount-obj">
            <h3 className="amount">249</h3>
            <h4 className="object">подписчиков</h4>
          </div>
          <div className="amount-obj">
            <h3 className="amount">28</h3>
            <h4 className="object">фотографий</h4>
          </div>
          <div className="amount-obj">
            <h3 className="amount">56</h3>
            <h4 className="object">видеозаписей</h4>
          </div>
          <div className="amount-obj">
            <h3 className="amount">190</h3>
            <h4 className="object">подарков</h4>
          </div>
        </div>
      </div>

      <div className="info_my-foto">
        <div className="header_info_foto">
          <h4 className="text-my">Мои фотографии</h4>
          <h4 className="text-map">показать на карте</h4>
        </div>
        <div className="blok-foto">
          <img className="foto" src={foto} alt="foto" />
          <img className="foto" src={foto2} alt="foto" />
          <img className="foto" src={foto3} alt="foto" />
          <img className="foto" src={foto4} alt="foto" />
        </div>
      </div>

      <div className="info_news">
        <div className="avatar-question">
          <img className="mini-avatar" src={avatar} alt="avatar" />
          <h4 className="question">Что у вас нового?</h4>
        </div>
        <div className="tool">
          <img className="img-tool" src={notification} alt="//" />
          <img className="img-tool" src={phone} alt="//" />
          <img className="img-tool" src={smile} alt="//" />
          <img className="img-tool" src={message} alt="//" />
        </div>
      </div>

      <div className="wall">
        <div className="header-wall">
          <div className="records">
            <h4 className="inactive">Все записи</h4>
            <h4 className="inactive">Мои записи</h4>
            <h4 className="inactive">Архив записи</h4>
          </div>
          <img className="mini-search" src={search} alt="search" />
        </div>
        <div className="info-foto">
          <img className="avatar-my" src={avatar} alt="avatar" />
          <div>
            <div className="text-info">
              <h3 className="user-name-info-foto">Family Page</h3>
              <h4 className="update-text">обновила фотографию на странице:</h4>
            </div>
            <h4 className="update-date">19 фев 2022</h4>
          </div>
        </div>
        <img className="big-foto" src={bigAvatar} alt="avatar" />
        <div className="like-comm-repost">
          <button className="like">
          <img className="img-like" src={like} alt="like" />
          <h4 className="amount-like">131</h4>
          </button>
          <button className="comment">
          <img className="img-comment" src={comment} alt="comment" />
          <h4 className="amount-comment">10</h4>
          </button>
          <button className="repost">
          <img className="img-repost" src={repost} alt="repost" />
          <h4 className="amount-repost">100</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightColumn;
