import React from "react";
import "./Productos.css";
import { productosTelefonia, productosComputo } from "./mas.js";

function ProductosCard() {
  return (
    <div className="contenido">
      <h2 className="titulo-seccion">Implementos de telefonía</h2>
      <p className="subtitulo">
        Estos artículos puedes encontrarlos en nuestro local o solicitar bajo pedido
      </p>

      

      <div className="galeria" id="galeriaTelefonia">
        {productosTelefonia.map((producto, index) => (
          <div className="item" key={index}>
            <img src={producto.imagen} alt={producto.nombre} />
            <p>{producto.nombre}</p>
          </div>
        ))}
      </div>

      <h2 className="titulo-seccion">Implementos Informáticos</h2>
      <div className="galeria" id="galeriaCompu">
        {productosComputo.map((producto, index) => (
          <div className="item" key={index}>
            <img src={producto.imagen} alt={producto.nombre} />
            <p>{producto.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductosCard;
