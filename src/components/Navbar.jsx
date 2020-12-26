import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/statics/logo.png";

const Navbar = () => {
  return (
    <nav class="fadeInDown">
      <div class="brand_image">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div class="nav_options">
        <ul>
          <li>
            <a href="/">Faqs</a>
          </li>
          <li>
            <Link to="/Product">Descripción del Producto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
