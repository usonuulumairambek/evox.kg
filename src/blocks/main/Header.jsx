import React, { useState } from "react";
import Menu from "./Menu";
import iconburger from "./icon-menu.png";
import iconburgerx from "./Frame.png";
import "./style.css";
export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div>
      <header className="header">
        <div className="header__wrapper">
          <div className="logo">
            <a href="#" className="logo" id="logo" data-dropdown="logoDropDown">
              EVOX
            </a>
          </div>
          <Menu active={menuActive} setActive={setMenuActive} />
          <div className="burger" onClick={() => setMenuActive(!menuActive)}>
            {!menuActive ? (
              <img src={iconburger} alt="" />
            ) : (
              <img style={{ width: 20, heght: 20 }} src={iconburgerx} alt="" />
            )}
          </div>
          <nav className="header_nav" id="logoDropDown">
            <li className="header_li">
              <a href="#uslugi" onClick={() => setMenuActive(false)}>
                Услуги
              </a>
            </li>
            <li className="header_li">
              <a href="#works" >Проекты</a>
            </li>
            <li className="header_li">
              <a href="#development"> Сеть EVOX</a>
            </li>
            <li className="header_li">
              <a href="#development">ESG</a>
            </li>
            <li className="header_li">
              <a href="#footer">Контакты</a>
            </li>
          </nav>
          <div className="header_nav-contact">
            <a className="header_li" id="header_li" href="tel:996504888864">
              +996 504 888 864
            </a>
          </div>
          {/* <div id="logoDropDown">
            </div> */}
        </div>
      </header>
    </div>
  );
}
