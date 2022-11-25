import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import "./style.css";
export default function Why() {
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);

  let db = [
    {
      number: 1,
      title: "Цена известна заранее.",
      subtittle:
        "  Она фиксирована. Мы составляем план и смету в день приезда мастера.",
    },
    {
      number: 2,
      title: "Дизайн проект",
      subtittle: "Может быть полностью ваш или доработан нашими специалистами.",
    },
    {
      number: 3,
      title: "Гарантия на установку",
      subtittle: "  На все установки мы даем официальную гарантию 2 года.",
    },
    {
      number: 4,
      title: "Качественные оборудования",
      subtittle:
        "Закупку и доставку на нас. Мы работаем с компаниями Orbis, Sitronics.",
    },
    {
      number: 5,
      title: "Специалисты своего дела",
      subtittle:
        "                Над каждым проектом работают специалисты узкого профиля.      ",
    },
    {
      number: 6,
      title: "Поэтапная оплата",
      subtittle: "Прием работ заказчиком и оплата поделены на 2 части.",
    },
  ];

  return (
    <div className="why">
      <div className="why__container">
        <div className="why__container-tittle">
          <h2 className="tittle">Почему мы?</h2>
        </div>

        <div className="favorite_wrapp">
          {db.map((text) => {
            return (
              <div data-aos="fade-up" className="inner_div">
                <div className="number_div">
                  <span className="number">{text.number}</span>
                </div>
                <div className="text-div">
                  <h3>{text.title}</h3>
                  <span>{text.subtittle}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
