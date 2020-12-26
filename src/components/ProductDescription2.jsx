import React from "react";

const ProductDescription2 = ({ img, title }) => {
  return (
    <div className="row">
      <div className="col-9">
        <div className="text_cont">
          <h3>{title}</h3>
          <p>
            Miles de productos hay en el mercado, pero nada como una caja con
            gatitos. Miles de productos hay en el mercado, pero nada como una
            caja con gatitos.
          </p>
        </div>
      </div>
      <div className="col-3">
        <div className="img_cont">
          <img src={img} alt="" className="img_productos" />
        </div>
      </div>
    </div>
  );
};

export default ProductDescription2;
