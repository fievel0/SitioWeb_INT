import React from "react";
import "./Servicios.css"; 
import imagen from "./Imagenes/primeraServicios.avif";
import imagen1 from "./Imagenes/segundaServicios.avif";
import imagen2 from "./Imagenes/terceraServicios.avif";

// Nuevos videos de reparación
import video1 from "./Videos/video1.mp4";
import video2 from "./Videos/video2.mp4";
import video3 from "./Videos/video3.mp4";
import video4 from "./Videos/video4.mp4";
import video5 from "./Videos/video5.mp4";
import video6 from "./Videos/video6.mp4";

function ServiciosCard() {
  return (
    <div className="servicios">
      <div className="tituloServicios">
        Aquí conocerás un poco más en lo que nos especializamos
      </div>

      <div className="contenedor-tarjetas">
        <div className="tarjeta">
          <h3>Soporte de software</h3>
          <img src={imagen1} alt="Soporte de software" />
          <p>
            Estamos capacitados en la asistencia por fallas en la programación
            como: desconfiguraciones y pérdida de datos del sistema; en la
            instalación de aplicaciones y actualizaciones, y otras utilidades.
          </p>
        </div>

        <div className="tarjeta">
          <h3>Soporte de hardware</h3>
          <img src={imagen2} alt="Soporte de hardware" />
          <p>
            Nos enfocamos en los elementos físicos del equipo. Algunos errores
            frecuentes pueden ser: fallas en la fuente de alimentación o puerto
            de carga, sobrecalentamiento o daños en la pantalla.
          </p>
        </div>

        <div className="tarjeta">
          <h3>Tarjeta lógica</h3>
          <img src={imagen} alt="Tarjeta lógica" />
          <p>
            La cual es un elemento primordial en los celulares. Las fallas más
            comunes que puede presentar son: el teléfono no tiene señal, hay
            cortocircuito en la placa base, entre otros.
          </p>
        </div>
      </div>

      {/* Nueva sección de videos */}
      <div className="tituloServicios" style={{ marginTop: "50px" }}>
        Mira nuestros videos de reparación
      </div>
      <p style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 40px", color: "#555" }}>
        En esta sección podrás observar algunos de nuestros trabajos y procesos de reparación, 
        donde mostramos cómo solucionamos diferentes problemas técnicos con profesionalismo y calidad.
      </p>

      <div className="contenedor-tarjetas">
        <div className="tarjeta">
          <video controls width="100%">
            <source src={video1} type="video/mp4" />
            Tu navegador no soporta reproducción de video.
          </video>
        </div>

        <div className="tarjeta">
          <video controls width="100%">
            <source src={video2} type="video/mp4" />
            Tu navegador no soporta reproducción de video.
          </video>
        </div>

        <div className="tarjeta">
          <video controls width="100%">
            <source src={video3} type="video/mp4" />
            Tu navegador no soporta reproducción de video.
          </video>
        </div>

        <div className="tarjeta">
          <video controls width="100%">
            <source src={video4} type="video/mp4" />
            Tu navegador no soporta reproducción de video.
          </video>
        </div>

        <div className="tarjeta">
          <video controls width="100%">
            <source src={video5} type="video/mp4" />
            Tu navegador no soporta reproducción de video.
          </video>
        </div>

        <div className="tarjeta">
          <video controls width="100%">
            <source src={video6} type="video/mp4" />
            Tu navegador no soporta reproducción de video.
          </video>
        </div>
      </div>
    </div>
  );
}

export default ServiciosCard;
