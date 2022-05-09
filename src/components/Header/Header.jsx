import React from "react";
import "./Header.css";
import MainLogo from "./MainLogo";
import Search from './Search';
import Notification from "./Notification";
import MusicPlayer from "./MusicPlayer";
import Catalog from "./Catalog";

const Header = () => {
  return (
  <div className="big-container">
    <div className="container">
      <MainLogo/>
      <Search/>
      <Notification/>
      <MusicPlayer/>
      <Catalog/>
    </div>
  </div>
  )}

export default Header;
