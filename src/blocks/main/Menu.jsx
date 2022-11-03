import React from "react";
import "./style.css";
function Menu({ active, setActive }) {
  return (
    <div className={active ? "menu activee" : "menu"}>
      <div className="blur"></div>
      <div className="menu__content">
        <ul>
          <li className="header_li">
            <a href="#uslugi" onClick={() => setActive(!active)}>
              Услуги
            </a>
          </li>
          <li className="header_li">
            <a href="#works" onClick={() => setActive(!active)}>
              Проекты
            </a>
          </li>
          {/* <li className="header_li">
            <a href="#works"> Сеть EVOX</a>
          </li> */}
          <li className="header_li">
            <a href="#development" onClick={() => setActive(!active)}>
              ESG
            </a>
          </li>
          <li className="header_li">
            <a href="#footer" onClick={() => setActive(!active)}>
              Контакты
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
