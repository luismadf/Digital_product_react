import React from "react";
import { Link } from "react-router-dom";
import brand from "../assets/statics/box_brand.png";
import "../assets/styles/paypal.css";

const Fail = ({}) => {
  return (
    <div class="content_paypal">
      <img src={brand} alt="" />
      <h3>¡Ouch! Tu compra no se pudo realizar.</h3>
      <p>
        Haz <Link to="/">click aquí</Link> para ir al home
      </p>
    </div>
  );
};

export default Fail;
