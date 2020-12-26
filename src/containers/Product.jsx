import React from "react";
import ProductDescription from "../components/ProductDescription";
import ProductDescription2 from "../components/ProductDescription2";
import img1 from "../assets/statics/box2.png";
import img2 from "../assets/statics/ben2.png";
import img3 from "../assets/statics/ben3.png";

const Product = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Productos</h1>
        </div>
      </div>
      <ProductDescription img={img1} title="Producto 1" />
      <ProductDescription2 img={img2} title="Producto 2" />
      <ProductDescription img={img3} title="Producto 3" />
    </div>
  );
};

export default Product;
