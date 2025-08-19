// BlogsCard.jsx
import React, { useState } from "react";
import "./Blogs.css";

// Importa todas las imágenes que usarás
import soporte from "../components/Imagenes/entrada1.png";
import ciberseguridad from "../components/Imagenes/ciberseguridad.jpg";
import telecomunicaciones from "../components/Imagenes/telecomunicaciones.avif";

const blogsData = [
  {
    id: 1,
    titulo: "Soporte Informático",
    categoria: "FotoTécnico",
    fecha: "22 de Febrero de 2021",
    duracion: "1 Min. de Lectura",
    imagen: soporte,
    descripcion: `Tener soporte informático ya no es un lujo, es una necesidad. Detrás de cada empresa que funciona sin interrupciones, hay un equipo técnico resolviendo problemas antes de que se noten. INT-SOLUTIONS ofrece asistencia técnica completa: soporte de software privado (Windows, Mac, Unix), software libre (GNU, Linux) y soporte de hardware (reparaciones de componentes, reemplazo de piezas y dispositivos). Un contrato bien definido asegura que todas las acciones de soporte se realicen correctamente. La importancia del mantenimiento informático es clara: con cuidados adecuados se prolonga la vida útil del equipo, se implementan sistemas de seguridad y se solucionan problemas rápidamente, evitando largas búsquedas y asegurando eficiencia a largo plazo.`
  },
  {
    id: 2,
    titulo: "Consultoría Ciberseguridad",
    categoria: "Ciberseguridad",
    fecha: "22 de Febrero de 2021",
    duracion: "1 Min. de Lectura",
    imagen: ciberseguridad,
    descripcion: `Las amenazas a la seguridad informática llegan a través de programas dañinos o maliciosos que se instalan en un dispositivo o acceden por medio de la nube. Information Systems Audit and Control Association (ISACA), asociación internacional referente en la materia, define la ciberseguridad como "una capa de protección para los archivos de información. A partir de ella, se trabaja para evitar todo tipo de amenazas, las cuales ponen en riesgo la información que es procesada, transportada y almacenada en cualquier dispositivo”. ¿Dudas que tu empresa esté totalmente protegida contra ataques cibernéticos? ¿Sabías que el 80% de personas desconocen que los cibercriminales pueden acceder al router de su casa fácilmente? O que estos pueden clonar tu chip de celular para descubrir tu información personal? Instalar programas antivirus y sistemas de detección de intrusos, conocidos como anti-spyware, que puede detectar de manera temprana los programas espías o presencia de programas maliciosos, son algunas de las buenas prácticas para proteger la seguridad informática. 

    ¿Cuáles son los ciberataques más comunes? El ransomware, ataque de denegación de servicio (DDoS) y troyanos bancarios. El ransomware, también llamado malware de rescate, restringe el acceso a un sistema y pide un rescate para eliminar el bloqueo. WannaCry y Petya son ejemplos: durante el ataque, los datos del ordenador infectado se bloquean y, para desencriptarlos, se exige el pago, usualmente en bitcoins. Si no se paga a tiempo, los datos se eliminan o bloquean permanentemente. 

    Los ataques DDoS consisten en sobrecargar un servidor con tráfico excesivo, causando interrupciones. En sistemas financieros, se usan para colapsar servidores de bancos y plataformas de trading. Los troyanos bancarios afectan principalmente dispositivos móviles: se instalan al visitar sitios infectados, abrir anexos de correos o descargar apps, y capturan datos personales y bancarios cuando se usan servicios en línea.

    Prueba de penetración (pen test) consiste en evaluar un sistema, red o aplicación web para encontrar vulnerabilidades explotables. Las políticas de seguridad informática protegen la privacidad, integridad de datos y disponibilidad de servicios, estableciendo pautas para personal y usuarios. Las normas ISO/IEC 27000 facilitan buenas prácticas en la gestión de seguridad de la información: ISO 27000 proporciona bases y lenguaje común, mientras ISO 27001 especifica los requerimientos necesarios para implantar y gestionar un SGSI certificable.`
    },
  {
    id: 3,
    titulo: "Telecomunicaciones",
    categoria: "Telecomunicaciones",
    fecha: "22 de Febrero de 2021",
    duracion: "3 Min. de Lectura",
    imagen: telecomunicaciones,
    descripcion: `Las telecomunicaciones son ya una constante en la vida de las personas y hoy no es posible concebir el mundo sin ellas. Pero, ¿qué son las telecomunicaciones? Se trata de un conjunto de técnicas que permiten la comunicación a distancia, lo que puede referirse a la habitación de al lado o a una nave espacial situada a millones de kilómetros de distancia. 

    En la actualidad, las telecomunicaciones son imprescindibles para las personas, las empresas y las Administraciones Públicas, y su importancia se multiplica con el número de usuarios. Cuanto más usuarios haya conectados a los sistemas de telecomunicaciones, mayores son las posibilidades y necesidades de comunicación.

    Desde el punto de vista del usuario, su utilización se basa en una serie de terminales (teléfonos fijos, móviles, smartphones, ordenadores, tabletas, etc.) mediante los cuales accede a una amplia gama de servicios de telecomunicaciones, ya sean fijos o móviles, de voz o de datos. Como elemento complementario de los terminales, y para que sea posible disfrutar de los servicios, existe un conjunto de redes de telecomunicación creadas y mantenidas por operadores y proveedores de servicios. Aunque para el usuario final muchas veces no es importante conocer la existencia de las redes ni cuál está utilizando, son las que hacen posibles los servicios.

    ¿Sabías que el 80% de las personas desconocen que los cibercriminales pueden acceder al router de su casa fácilmente? O que pueden clonar tu chip de celular para descubrir tu información personal? Instalar programas antivirus y sistemas de detección de intrusos, conocidos como anti-spyware, que pueden detectar tempranamente programas espías o maliciosos, es una buena práctica para proteger la seguridad informática.

    Esas redes cuentan hoy con tecnologías avanzadas como movilidad, banda ancha, protocolos de Internet (IP), fibra óptica, satélites de comunicaciones, cables submarinos, etc. Gracias a ellas, es posible ofrecer al usuario lo que demanda: poder conectarse cuando y donde quiera para acceder a información y servicios.

    FotoTécnico: Las telecomunicaciones sirven para transmitir información, pero esa información puede adoptar infinitas formas o empaquetarse de múltiples maneras, lo que se encuadra bajo el concepto de contenidos. Las redes y servicios de telecomunicación manejan contenidos de cualquier naturaleza: películas, música, cursos de formación, páginas web, documentos, fotografías, vídeos o simple voz.`
    }
];

function BlogsCard() {
  const [blogSeleccionado, setBlogSeleccionado] = useState(null);

  return (
    <div className="blogs-container">
      <h2>Blogs</h2>
      <p className="blogs-descripcion">
        🌟 Explora nuestros artículos y descubre secretos, consejos y soluciones tecnológicas que pueden transformar tu negocio. Haz clic en un blog y sumérgete en un mundo de innovación e información. 🚀
      </p>

      <div className="blogs-botones">
        {blogsData.map((blog) => (
          <button
            key={blog.id}
            onClick={() => setBlogSeleccionado(blog)}
            className="blog-button"
          >
            {blog.titulo}
          </button>
        ))}
      </div>

      <div className="blogs-detalle">
        {blogSeleccionado ? (
          <div className="blog-card">
            <img
              src={blogSeleccionado.imagen}
              alt={blogSeleccionado.titulo}
              className="blog-imagen"
            />
            <h3>{blogSeleccionado.titulo}</h3>
            <p className="blog-meta">
              {blogSeleccionado.fecha} | {blogSeleccionado.duracion} | {blogSeleccionado.categoria}
            </p>
            <p className="blog-descripcion">{blogSeleccionado.descripcion}</p>
          </div>
        ) : (
          <p>Selecciona un blog para ver los detalles.</p>
        )}
      </div>
    </div>
  );
}

export default BlogsCard;
