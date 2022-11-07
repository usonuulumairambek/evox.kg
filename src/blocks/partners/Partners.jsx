import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "./partners.css";
import partner1 from "./partners/1.jpeg";
import partner2 from "./partners/2.png";
import partner3 from "./partners/3.jpg";
import partner4 from "./partners/4.png";
import partner5 from "./partners/5.png";
import partner6 from "./partners/6.png";
import partner7 from "./../images/partnero.jpg";
export default function Partners() {
  SwiperCore.use([Autoplay]);

  let amount = 9;
  if (window.matchMedia("(max-width:500px)").matches) {
    amount = 3;
  } else if (window.matchMedia("(max-width:768px)").matches) {
    amount = 6;
  }
  return (
    <div className="partner">
      <h2
        className="tittle"
        style={{ margin: 0, paddingBottom: 10, textAlign: "center" }}
      >
        Партнеры
      </h2>
      <p className="subtittle">Взаимодействие с партнерами</p>
      <div className="partners">
        <Swiper
          spaceBetween={50}
          slidesPerView={amount}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000 }}
        >
          <SwiperSlide className="swiper_partners">
            <div className="swiper_partners">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://norma.kg"
              >
                <img src={partner1} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper_partners">
            <div className="swiper_partners">
              <a rel="noopener noreferrer" target="_blank" href="/">
                <img src={partner2} alt="" />
              </a>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className="swiper_partners">
            <div className="swiper_partners">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://sbis.ru/"
              >
                <img src={partner3} alt="Маркировка в бишкеке" />
              </a>
            </div>
          </SwiperSlide> */}
          <SwiperSlide className="swiper_partners">
            <div className="swiper_partners">
              <a target="_blank" rel="noopener noreferrer" href="GPM">
                <img src={partner4} alt="Маркировка в бишкеке" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper_partners">
            <div className="swiper_partners">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/betastores2"
              >
                <img src={partner5} alt="Маркировка в бишкеке" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper_partners">
            <div className="swiper_partners">
              <a target="_blank" rel="noopener noreferrer" href="sitroniks">
                <img src={partner6} alt="Маркировка в бишкеке" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper_partners">
            <div className="swiper_partners">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.o.kg/"
              >
                <img src={partner7} alt="Маркировка в бишкеке" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
