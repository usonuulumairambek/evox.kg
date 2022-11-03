import React from "react";
import "./voprosy.css";
import Accordion from "./../Accordion";
function Voprosy() {
  return (
    <div className="questions">
      <div className="questions__wrapper">
        <div className="app__tittle">
          <h1 className="tittle">Самые важные вопросы и ответы на них</h1>
        </div>
        <div className="App">
          <Accordion 
            title="Сколько стоит вызов замерщика?"
            content="Эта бесплатная услуга"
          />
          <Accordion
            title="У вашей компании есть реквизиты, счет фактуры?"
            content="Да, подробнее об этом вы можете узнать в разделе «Документы»"
          />
          <Accordion
            title="Может ли заказчик сам предоставить материалы?"
            content="Конечно. Об этом нужно будет сказать замерщику или нашему менеджеру по телефону до начала составления договора"
          />
          <Accordion
            title="Сколько времени длится заказ?"
            content="Это зависит от типа работ и размера площади."
          />
        </div>
      </div>
    </div>
  );
}

export default Voprosy;
