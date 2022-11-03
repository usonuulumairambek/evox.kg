import React from "react";
import "./style.css";
export default function Calculation() {
  return (
    <div className="calculation">
      <div className="calculation-bg"></div>

      <div className="calculation__wrapper">
        <div className="calculation__tittle">
          <span>Расчет стоимости установки бесплатно</span>
        </div>
        <div className="calculation__subtittle">
          <span>
            С вами свяжется наши специалисты и приедут в удобное время. <br />{" "}
            Мы составим расчет в течение 24 часов.
          </span>
        </div>
        <div className="input__section">
          <input className="input__section-name" placeholder="Имя" />
          <input className="input__section-number" placeholder="Телефон" />
          <button className="input__section-button">Отправить заявку</button>
        </div>
      </div>
    </div>  
  );
}
