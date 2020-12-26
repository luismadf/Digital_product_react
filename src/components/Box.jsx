import React from "react";
import { Link } from "react-router-dom";

const box = ({ title, img }) => (
  <div className="product fadeInUp">
    <div className="content">
      <div className="img_content">
        <img src={img} alt="" />
      </div>
      <div className="text">
        <h1>{title}</h1>
        <p>
          Miles de productos hay en el mercado, pero nada como nuestra caja para
          humanos, calida y espaciosa, perfecta para esa tardes de domingo en
          otoño.
        </p>
      </div>
      <Link to={{ pathname: "/Venta", state: { img: img, title: title } }}>
        <button className="main_button">Lo quiero</button>
      </Link>
    </div>
  </div>
);

export default box;
