import React from "react";

const Testimonial = ({ name, img }) => {
  return (
    <div className="testimonial">
      <img src={img} alt="" />
      <div className="details">
        <h3>{name}</h3>
        <p>
          Miles de productos hay en el mercado, pero nada como una caja con
          gatitos
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
