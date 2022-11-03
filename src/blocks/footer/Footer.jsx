import React from "react";
import tg from "./img/tg.svg";
import wb from "./img/wb.svg";
import phone from "./img/phone.svg";
import ins from "./img/ins.svg";

import "./style.css";
export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer__contaner">
        <div className="tittle tittle2">"EVOX" - оператор электрозарядных станций</div>
        <div className="footer__contacts">
          <a href="tel:+996504888864">+996 504 888 864</a> <br />
          <a href="mailto:evoxkg@gmail.com">evoxkg@gmail.com</a>
          <br />
          <p>Адрес нашего офиса: Бишкек, ул. Чуйкова 24.</p>
        </div>
        <div className="footer__social">
          <a href="https://t.me/evoxkg" target={"_blank"}>
            <img src={tg} alt="" />
          </a>{" "}
          <a href="https://wa.me/+996504888864" target={"_blank"}>
            <img src={wb} alt="" />
          </a>{" "}
          <a href="tel:0504888864" target={"_blank"}>
            <img src={phone} alt="" />
          </a>{" "}
          <a href="https://www.instagram.com/evoxkg" target={"_blank"}>
            <img src={ins} alt="" />
          </a>
        </div>
      </div>
      <div className="footer__contaner-bottom">
        <p>© "EVOX" - оператор электрозарядных станций 2022год </p>
      </div>
    </div>
  );
}
