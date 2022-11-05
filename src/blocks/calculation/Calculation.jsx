import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./style.css";
export default function Calculation() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bomoy2c",
        "template_rotvrcm",
        form.current,
        "E4TMsHujNX-Jn_6FU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="calculation" id="calculation">
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
        <form className="input__section" ref={form} onSubmit={sendEmail}>
          <input
            className="input__section-name"
            placeholder="Имя"
            name="user_name"
            required
          />
          <input
            className="input__section-number"
            placeholder="Телефон"
            name="user_tel"
            required
          />
          <button className="input__section-button">Отправить заявку</button>
        </form>
      </div>
    </div>
  );
}
