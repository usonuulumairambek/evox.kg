import React, { useEffect } from "react";
import img12 from "./../images/img15.jpg";
import img13 from "./../images/img12.jpg";
import img14 from "./../images/img14.jpg";
import aos from "aos";
import "aos/dist/aos.css";
import "./style.css";

export default function Uslugi() {
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="uslugi" id="uslugi">
      <div className="uslugi__wrapper">
        <h1 className="tittle">Наши услуги</h1>
        <p className="subtittle">Мы выполняем качественный проект.</p>
        <div className="uslugi__items">
          <div data-aos="fade-up" className="uslugi__item ">
            <img src={img12} alt="" />
            <h3>Зарядка в частном доме</h3>
            <h4>от 7 кв</h4>
            <p>
              Сметчик выезжает на замеры, расчитывает работу и материалы. В этот
              же день мы обговариваем сроки выполнения работ.
            </p>
            <div className="service_button_wrap">
              <a href="#calculation">
                <button>Рассчитать стоимость</button>
              </a>
            </div>
          </div>
          <div data-aos="fade-up" className="uslugi__item ">
            <img alt="img" src={img13} />
            <h3>Общественная сеть зарядок</h3>
            <h4>от 22 кв</h4>
            <p>
              Сюда входит бесплатный дизайн проект, работа мастеров и материалы.
              Расчет всех работ мы произведем в день замеров.
            </p>
            <div className="service_button_wrap">
              <a href="#calculation">
                <button>Рассчитать стоимость</button>
              </a>
            </div>
          </div>
          <div data-aos="fade-up" className="uslugi__item">
            <img src={img14} alt="" />
            <h3>Зарядка для предприятия</h3>
            <h4>от 80 кв</h4>
            <p>
              В услугу входят бесплатные консультации с нашими дизайнерами,
              замеры помещения, расчет и полный перечень ремонтных работ.
            </p>
            <div className="service_button_wrap">
              <a href="#calculation">
                <button>Рассчитать стоимость</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
