import React from "react";
import Box from "../components/Box";
import Charasteristic from "../components/Charasteristic";
import Testimonial from "../components/Testimonial";
import img1 from "../assets/statics/box1.png";
import img2 from "../assets/statics/box2.png";
import b1 from "../assets/statics/b1.png";
import b2 from "../assets/statics/b2.png";
import b3 from "../assets/statics/b3.png";
import p1 from "../assets/statics/p1.png";
import p2 from "../assets/statics/p2.png";
import p3 from "../assets/statics/p3.png";
import p4 from "../assets/statics/p4.png";

const Home = ({}) => {
  return (
    <div className="">
      <div className="main_section fadeIn">
        <h1>
          Este es un producto increíble, <br />
          ¡Pidelo fácil y rápido!
        </h1>
      </div>
      <div class="products">
        <Box title="Caja para humanos" img={img1} />
        <Box title="Caja para gatitos" img={img2} />
      </div>
      <section class="characteristics">
        <Charasteristic title="Los más suavecitos" img={b1} />
        <Charasteristic title="Los más increíble" img={b2} />
        <Charasteristic title="Los más confiable" img={b3} />
      </section>
      <div class="testimonials_container">
        <div class="testimonials">
          <h2>Menciones</h2>
          <div class="container">
            <Testimonial name="Mario" img={p1} />
            <Testimonial name="Maria" img={p2} />
            <Testimonial name="Paula" img={p3} />
            <Testimonial name="Jamaica" img={p4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
