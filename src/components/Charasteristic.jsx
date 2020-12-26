import React from "react";

const Charasteristic = ({ title, img }) => {
  return (
    <div className="characteristic">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <h2>{title}</h2>
      <p>
        Miles de productos hay en el mercado, pero nada como una caja con
        gatitos
      </p>
    </div>
  );
};

export default Charasteristic;
