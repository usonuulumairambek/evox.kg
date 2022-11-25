import React from "react";
import "./style.css";
export default function Stages() {
  return (
    <div className="stages">
      <div className="stages__container">
        <h2 className="tittle">Этапы установки</h2>
        <div className="stages__items">
          <div className="stages__item">
            <div className="stages__item-number">
              <span className="number">1</span>
            </div>
            <div className="stages__item-tittle">
              <h4>Заявка</h4>
            </div>
            <div className="stages__item-subtittle">
              <p>Вы оставляете заявку и встречаетесь с мастером</p>
            </div>
          </div>{" "}
          <div className="stages__item">
            <div className="stages__item-number">
              <span className="number">2</span>
            </div>
            <div className="stages__item-tittle">
              <h4>Расчет стоимости</h4>
            </div>
            <div className="stages__item-subtittle">
              <p>
                В этот же день мы производим расчет и высылаем вам договор на
                подпись
              </p>
            </div>
          </div>{" "}
          <div className="stages__item">
            <div className="stages__item-number">
              <span className="number">3</span>
            </div>
            <div className="stages__item-tittle">
              <h4>Установка</h4>
            </div>
            <div className="stages__item-subtittle">
              <p>На следующий день мы завозим оборудование и начинаем работы</p>
            </div>
          </div>{" "}
          <div className="stages__item">
            <div className="stages__item-number">
              <span className="number">4</span>
            </div>
            <div className="stages__item-tittle">
              <h4>Прием работы</h4>
            </div>
            <div className="stages__item-subtittle">
              <p>Вы принимаете, утверждаете и оплачиваете каждый этап работ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
