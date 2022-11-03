import React, { useEffect } from "react";
import evoxkg from "./img/evoxkg.jpeg";
import evoxkg1 from "./img/evoxkg1.jpeg";
import evoxkg2 from "./img/evoxkg2.jpeg";
import evoxkg3 from "./img/evoxkg3.jpeg";
import evoxkg4 from "./img/evoxkg4.jpeg";
import evoxkg5 from "./img/evoxkg5.jpg";
import evoxkg6 from "./img/evoxkg6.png";
import evoxkg7 from "./img/evoxkg7.jpeg";

import aos from "aos";
import "aos/dist/aos.css";
import "./style.css";
export default function Works() {
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);

  let dbworks = [
    {
      alt: "",
      src: evoxkg,
    },
    {
      alt: "",
      src: evoxkg1,
    },
    {
      alt: "",
      src: evoxkg2,
    },
    {
      alt: "",
      src: evoxkg3,
    },
    {
      alt: "",
      src: evoxkg4,
    },
    {
      alt: "",
      src: evoxkg5,
    },
    {
      alt: "",
      src: evoxkg6,
    },
    {
      alt: "",
      src: evoxkg7,
    },
  ];
  return (
    <div className="works" id="works">
      <div className="works__container">
        <h1 className="tittle">Наши работы</h1>
        <p className="subtittle">
          Примеры выполненных работ, которыми гордится наша команда
        </p>

        <div className="img_wrapp">
          {dbworks.map((t) => {
            return <img data-aos="fade-up" src={t.src} alt="" />;
          })}
        </div>
      </div>
    </div>
  );
}
