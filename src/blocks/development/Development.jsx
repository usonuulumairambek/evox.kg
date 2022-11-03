import React from "react";
import img1 from "./img/noroot.png";
import simg from "./img/сertification.png";
import "./style.css";
export default function Development() {
  return (
    <div className="development" id="development" >
      <h2 className="tittle">Устойчивое Развитие</h2>
      <p className="subtittle">
        Мы работаем в соответствии со стандартами устойчивого развития ООН
      </p>
      <div className="development__container">
        <div className="development__container-img">
          <img src={img1} alt="" />
          <p>
            ESG (Environmental, Social, Governance) principles — принципы
            деятельности компании, основанные на защите окружающей среды,
            создание благоприятных социальных условий, добросовестном отношении
            с сотрудниками и клиентами и надлежащем корпоративном управлении.
          </p>
        </div>
        <div className="development__container-left">
          <p>
            Компания "EVOX" руководствуется в своей деятельности принципами
            ответственного ведения бизнеса, отражающими взаимосвязь между
            экологическими, социальными вопросами, корпоративным управлением.
            Компания соотносит свои бизнес-цели с общественными интересами,
            учитывает социальные, экологические и управленческие факторы (ESG
            факторы). <br /> Основными принципами компании "EVOX" в области
            устойчивого развития являются: <br />
            <ul>
              <li>
                {" "}
                улучшение качества жизни за счет развития бизнеса и внедрения
                новых технологий;
              </li>
              <li>
                {" "}
                обеспечение безопасности труда и инвестирование в развитие
                человеческого капитала;{" "}
              </li>
              <li>
                {" "}
                забота об окружающей среде и минимизация негативного воздействия
                на нее;
              </li>
              <li>
                {" "}
                эффективная деятельность, связанная с развитием локаций ЭЗС,
                ориентированных на повышение конкурентоспособности в интересах
                бизнеса и экономики в целом;
              </li>
              <li>
                {" "}
                учет интересов заинтересованных сторон, системный подход к
                построению добросовестных и взаимовыгодных отношений с ними на
                основании требований деловой этики;{" "}
              </li>
              <li> вклад в развитие районов присутствия объектов Компании;</li>
              <li>
                публичная открытость и прозрачность, развитие нефинансовой
                отчетности.
              </li>
            </ul>
          </p>
        </div>
        <div className="сertification">
          <div className="certification-img">
            <img src={simg} alt="" />
          </div>
          <div className="certification-text">
            <h3>Сертификация GPM-b</h3>
            <p>
              Cертификат управления проектами, с использованием устойчивых
              методов. https://greenprojectmanagement.org/
            </p>
            <p>
              (GPM-b) - Основополагающая, основанная на знаниях устойчивого
              развития, которая поддерживает приверженность тех, кто занимается
              управлением проектами, максимизировать устойчивость в течение
              жизненного цикла проекта, улучшать конструкцию и доставку
              производимых товаров и услуг. в качестве результатов проекта, а
              также использовать измеримые стандарты для рассмотрения и учета
              социальных, экологических и экономических последствий проектов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
