import React from "react";
import { useRef } from "react";
// import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import { toast, ToastContainer } from "react-toastify";
export default function Calculation() {
  const form = useRef();
  const notify = () => toast("ваши данные успешно отправлены!");
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm(
  //     "service_ytuwlwr",
  //     "template_y3obgsr",
  //     form.current,
  //     "3uzqwllFkNXwO3oZ-"
  //   );
  //   e.target.reset();
  // };
  return (
    <div className="calculation" id="calculation">
      <div className="calculation-bg"></div>

      <div className="calculation__wrapper">
        <div className="calculation__tittle">
          <span className="tittle">Расчет стоимости установки бесплатно</span>
        </div>
        <div className="calculation__subtittle">
          <span>
            С вами свяжется наши специалисты и приедут в удобное время. <br />
            Мы составим расчет в течение 24 часов.
          </span>
        </div>
        {/* onSubmit={sendEmail} */}
        <form className="input__section" ref={form}>
          <input
            className="input__section-name"
            placeholder="Имя"
            name="user_name"
            required
          />
          <input
            className="input__section-number"
            placeholder="Телефон"
            name="user_tele"
            required
          />
          <button className="input__section-button" onClick={notify}>
            Отправить заявку
          </button>
          <ToastContainer style={{ marginTop: 50 }} />
        </form>
      </div>
    </div>
  );
}
