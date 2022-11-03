import React from "react";
import { useEffect } from "react";
import Header from "./Header";
import "./style.css";
import aos from "aos";
import "aos/dist/aos.css";
export default function Main() {
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="main">
      <Header />
      <div  data-aos="fade-up" className="main__content">
        <h1 data-aos="fade-up" className="about_text">
          Общественная сеть <br /> электрозарядных станций
        </h1>
        <p>Мы занимаемся развитием инфраструктуры ЭЗС в Кыргызстане</p>
        <div className="main__content-buttons btn-10">
          <button className="btn_price">Рассчитать стоимость</button>
          <button className="btn_service">Услуги</button>
        </div>
      </div>
      <div className="main__bg"></div>
    </div>
  );
}
