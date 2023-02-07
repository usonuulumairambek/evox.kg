import React, { useEffect } from "react";
import evoxkg from "./img/evoxkg.jpeg";
import evoxkg1 from "./img/evoxkg1.jpeg";
import evoxkg2 from "./../images/img11.jpg";
import evoxkg3 from "./../images/img13.jpg";
import evoxkg4 from "./img/evoxkg4.jpeg";
import evoxkg5 from "./../images/img12.jpg";
import evoxkg6 from "./img/works24.jpg";
import evoxkg7 from "./img/works24-2.jpg";
import evoxkg8 from "./img/works24-3.jpg";

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
    {
      alt: "",
      src: evoxkg8,
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
