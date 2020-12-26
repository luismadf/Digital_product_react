import React from "react";

const Venta = (props) => {
  let img = props.location.state.img;
  let title = props.location.state.title;
  return (
    <div className="">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="modulo_pago">
              <div className="modulo_pago_images">
                <img src={img} alt="" />
              </div>
              <h3>{title}</h3>
              <p>
                Miles de productos hay en el mercado, pero nada como una caja
                con gatitos
              </p>
            </div>
          </div>
          <div class="col-8">
            <div class="modulo_pago">
              <form action="exito.html">
                <label htmlFor="name">Nombre</label>
                <br />
                <input
                  type="text"
                  placeholder=""
                  name="name"
                  className="data"
                />
                <br />
                <label htmlFor="email">E-mail</label>
                <br />
                <input
                  type="text"
                  placeholder=""
                  name="email"
                  className="data"
                />
                <br />
                <label htmlFor="phone">Telefono</label>
                <br />
                <input
                  type="text"
                  placeholder=""
                  name="phone"
                  className="data"
                />
                <br />
                <input
                  type="submit"
                  className="main_button"
                  name="submit"
                  value="Procesar pago"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Venta;
