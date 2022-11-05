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
        "service_ytuwlwr",
        "template_y3obgsr",
        form.current,
        "3uzqwllFkNXwO3oZ-"
      )
      .then(
        () => {
          alert("ваши данные успешно отправлены!");       
         },
        (error) => {
          alert(error.text);
        }
      );
      e.target.reset()
  };
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
        <form className="input__section" ref={form} onSubmit={sendEmail}>
          <input className="input__section-name" placeholder="Имя" name="user_name" required />
          <input
            className="input__section-number"
            placeholder="Телефон"
            name="user_tele"
            required
          />
          <button className="input__section-button">Отправить заявку</button>
        </form>
      </div>
    </div>
  );
}