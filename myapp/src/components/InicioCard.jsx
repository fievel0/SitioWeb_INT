import React, { useEffect } from "react"; // Importa useEffect
import "./InicioCard.css"; 
import fondo from "./Imagenes/fondo.jpeg"; 
import fondo1 from "./Imagenes/desarrolloWeb.webp";
import fondo2 from "./Imagenes/media.jpg";
import entrada1 from "./Imagenes/entrada1.png";
import cyberseguridad from "./Imagenes/ciberseguridad.jpg";
import telecomunicaciones from "./Imagenes/telecomunicaciones.avif";

import soporte from "./Imagenes/Soporte.avif";
import cursos from "./Imagenes/cursos.avif";
import implementos from "./Imagenes/implementos.avif";
import implementos_celular from "./Imagenes/implementos_celular.avif";



//Blogs
import { initCarousel } from "./carrusel";

function InicioCard({ setActivePage }) {
  // Inicializar el carrusel al montar el componente
  useEffect(() => {
    const stopCarousel = initCarousel("slides", "prev", "next", "dots", 5000);
    return () => stopCarousel(); // Limpiar intervalos al desmontar
  }, []);

  return (
    <main className="Cuerpo">
      <div className="carousel">
        <div className="slides" id="slides">
          <div className="slide">
            <div className="Letras">
              <div className="titulodos">INT-SOLUTIONS</div>
              <div className="encabezadodoss">Tu fuente de información</div>
              <div className="encabezadotres">
                Para interactuar y saber más, da clic en las siguientes entradas
              </div>
            </div>
            <img
              className="FondoCuerpo"
              src={fondo}
              alt="Fondo 1"
              loading="lazy"
            />
          </div>

          <div className="slide">
            <div className="Letras">
              <div className="titulodos">Desarrollo páginas web</div>
              <div className="encabezadodoss">
                Transformamos tus ideas en sitios web impactantes que conectan con
                tus clientes y potencian tu negocio.
              </div>
            </div>
            <img
              className="FondoCuerpo"
              src={fondo1}
              alt="Fondo 1"
              loading="lazy"
            />
          </div>

          <div className="slide">
            <div className="Letras">
              <div className="titulodos">Software a la medida</div>
              <div className="encabezadodoss">
                Aplicaciones hechas específicamente para ti
              </div>
            </div>
            <img
              className="FondoCuerpo"
              src={fondo2}
              alt="Fondo 1"
              loading="lazy"
            />
          </div>
        </div>

        <button className="arrow arrow-left" id="prev" aria-label="Slide anterior">
          &#10094;
        </button>
        <button className="arrow arrow-right" id="next" aria-label="Siguiente slide">
          &#10095;
        </button>
        <div className="dots" id="dots"></div>
      </div>
      {/* Espacio para Promos */}
      {/* <div id="promoToast" className="toast">
        💻🔥🔥🔥🔥🔥<br />
        <strong>¡Por apertura!</strong><br />
        Solo para clientes antiguos o referidos:<br />
        <span style={{ fontWeight: "bold", fontSize: "18px", color: "#0111f1" }}>
          2x1 en mantenimiento preventivo
        </span>
        <br />
        <span style={{ fontWeight: "bold", color: "#ff5722" }}>
          30% de descuento en mantenimiento correctivo
        </span>
        <br />
        😉 ¡Ven y visítanos! ❤️
      </div> */}

        {/* Publicidad */}
        <div id="promoToastt" className="toastt" onClick={() => setActivePage("cursos")}>
        Descubre:
        <br />
        <span className="bold-fullstack">• Curso Fullstack Web</span>
        <br />
        🚀 ¡Inscríbete y lleva tus habilidades al siguiente nivel! ❤️
        <br />
        <span className="learn-more">👉 Haz clic para saber más</span>
        </div>

      {/* Entradas */}
      <div className="entradas">
        <div className="tituloentradas">Todas las entradas</div>

     

        <div className="contenedor-entradas">
  {/* Entrada 1 */}
  <div className="entrada" onClick={() => setActivePage("blogs")}>
    <h3>Soporte Informático</h3>
    <img src={entrada1} alt="FotoTecnico" />
    <p>
      Tener soporte informático ya no es un lujo, es una necesidad. Detrás de cada
      empresa que funciona sin interrupciones, hay un equipo técnico resolviendo
      problemas antes de que se noten. ¿Sabes realmente todo lo que puede hacer
      por ti un buen servicio de soporte? Te sorprendería.
    </p>
    <div className="meta">
      <span className="creador1">INT-SOLUTIONS</span> <br />
      <span className="fecha">22 de Febrero de 2021</span> <br />
      <span className="tiempo">1 Min. de Lectura</span>
    </div>
  </div>

  {/* Entrada 2 */}
  <div className="entrada" onClick={() => setActivePage("blogs")}>
    <h3>Consultoría Ciberseguridad</h3>
    <img src={cyberseguridad} alt="Ciberseguridad" />
    <p>
      ¿Tu empresa está realmente protegida contra los ataques cibernéticos que
      acechan a diario? Desde ransomware que bloquea tus datos hasta troyanos que
      roban tu información bancaria, las amenazas están más cerca de lo que crees.
      Conocer cómo funcionan estos ataques y aplicar buenas prácticas de seguridad
      puede marcar la diferencia entre perder todo o mantener tus datos a salvo.
      ¿Quieres saber cómo blindar tu negocio?
    </p>
    <div className="meta">
      <span className="creador2">INT-SOLUTIONS</span> <br />
      <span className="fecha">22 de Febrero de 2021</span> <br />
      <span className="tiempo">3 Min. de Lectura</span>
    </div>
  </div>

  {/* Entrada 3 */}
  <div className="entrada" onClick={() => setActivePage("blogs")}>
    <h3>Telecomunicaciones</h3>
    <img src={telecomunicaciones} alt="Telecomunicaciones" />
    <p>
      Las telecomunicaciones son la base invisible que conecta nuestro mundo,
      desde llamadas y mensajes hasta el acceso a internet en cualquier lugar.
      Gracias a redes avanzadas y tecnologías como fibra óptica y satélites, podemos
      comunicarnos sin límites. ¿Sabías que gran parte de la información que usas
      a diario viaja gracias a estas redes? Descubre por qué entenderlas es clave
      para aprovechar al máximo la era digital.
    </p>
    <div className="meta">
      <span className="creador3">INT-SOLUTIONS</span> <br />
      <span className="fecha">22 de Febrero de 2021</span> <br />
      <span className="tiempo">2 Min. de Lectura</span>
    </div>
  </div>
</div>
      </div>

      {/* Servicios */}
        <section className="servicios">
        <h2 className="tituloServicios">Servicios</h2>
        <p className="descripcionServicios">Disponemos para Nuestros Clientes</p>

        <div className="contenedor-servicios">
            <article className="servicio" onClick={() => setActivePage("servicios")}>
            <h3>Soporte Técnico</h3>
            <img src={soporte} alt="Soporte Técnico" />
            <p>
                El soporte técnico para celulares nace para resolver rápidamente las fallas de
                tus dispositivos, utilizando conocimientos y herramientas especializadas.
                Contamos con tres niveles de servicio para atender cada problema de forma
                adecuada y eficaz.
            </p>
            <div className="boton-info">Más información</div>
            </article>

            <article className="servicio" onClick={() => setActivePage("cursos")}>
            <h3>Cursos</h3>
            <img src={cursos} alt="Cursos" />
            <p>
                Contamos con un equipo de capacitadores expertos en cada área, que se
                mantienen siempre actualizados con las últimas tecnologías. Gracias a ellos,
                nuestro personal está preparado para ofrecer soluciones rápidas, efectivas y
                de calidad ante cualquier problema.
            </p>
            <div className="boton-info">Más información</div>
            </article>

            <article className="servicio" onClick={() => setActivePage("servicios")}>
            <h3>Venta de Implementos Informáticos</h3>
            <img src={implementos} alt="Implementos Informáticos" />
            <p>
                Encuentra todo lo que necesitas para tus equipos en un solo lugar. Ofrecemos
                una amplia variedad de productos de calidad, desde accesorios básicos hasta
                componentes especializados, pensados para mejorar el rendimiento y la
                funcionalidad de tus dispositivos.
            </p>
            <div className="boton-info">Más información</div>
            </article>

            <article className="servicio" onClick={() => setActivePage("servicios")}>
            <h3>Venta de implementos de Telefonía celular</h3>
            <img src={implementos_celular} alt="Implementos de Telefonía" />
            <p>
                Encuentra artículos de calidad diseñados para mejorar y proteger tu celular.
                Desde accesorios esenciales hasta complementos innovadores, aquí tienes todo
                lo que necesitas para mantener tu dispositivo funcionando al máximo y con
                estilo.
            </p>
            <div className="boton-info">Más información</div>
            </article>
        </div>
        </section>


      {/* Contacto y Ubicación */}
      <div className="seccion-contacto-ubicacion">
        {/* CONTACTO */}
        <div className="Contactoo">
          <div className="TituloContactoo">Contacto</div>
          <div className="descripcionContactoo">
            Gracias por tu interés en INT-SOLUTIONS. Si quieres saber más, escríbeme y
            pronto me pondré en contacto.
          </div>

          <div className="correosContactoo">
            <strong>Correos</strong>
            <div className="correoo1">faibol_men19@hotmail.com</div>
            <div className="correoo2">intsolutionstec@gmail.com</div>
          </div>

          <div className="numerosContactoo">
            <strong>Números</strong>
            <div className="numeroo1">0961306164</div>
            <div className="numeroo2">0982401789</div>
          </div>

          <div className="redSocialContactoo">
            <strong>Red Social</strong>
            <br />
            <a
              href="https://www.facebook.com/share/1Aau188kMz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Int-Solutions QUITO
            </a>
          </div>
        </div>

        {/* UBICACIÓN */}
        <div className="Ubicacioon">
          <div className="tituloUbicacioon">Ubicación</div>
          <div className="descripcionUbicacioon">
            Calderón - Calle Duchicela S/N y 9 de Agosto, sobre "Los Pollos El Granjero",
            2do piso.
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1750216581382!6m8!1m7!1s-YBpkohSErczNm4Btna-rQ!2m2!1d-0.103176330392388!2d-78.42525181146215!3f357.16188798797435!4f14.041263643316839!5f1.1924812503605782"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

export default InicioCard;
