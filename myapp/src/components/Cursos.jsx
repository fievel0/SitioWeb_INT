import React from "react";
import "./Cursos.css"; 
import curso1 from "./Imagenes/curso1.avif";
import curso2 from "./Imagenes/curso2.avif";
import curso3 from "./Imagenes/curso3.png";

import finCurso from "./Imagenes/fin-de-curso.jpg";
import excelPDF from "./Imagenes/excel.pdf";
import gestionPDF from "./Imagenes/gestion.pdf";
import MetodosPDF from "./Imagenes/Metodos.pdf";
import javaPDF from "./Imagenes/java.pdf";
import TranformarPDF from "./Imagenes/Certificacion_Curso_Transformar.pdf";
import Scratch from "./Imagenes/scratch.pdf";


import graduado1 from "./Imagenes/graduado1.jpg";
import graduado2 from "./Imagenes/graduado2.jpg";

function CursosCard() {
    const whatsappNumber = { display: '+593 96 130 6164', code: '593961306164' };

  return (
    <div>
      {/* Entradas */}
      <div className="entradas">
        <div className="tituloEntradas">Cursos</div>

        {/* Contenedor de tarjetas de cursos */}
        <div className="contenedor-cursos">
          {/* Curso 1 */}
          <div className="tarjeta-curso">
            <h3>Curso de Electrónica</h3>
            <img src={curso1} alt="Foto Técnico Electrónica" />
            <p><strong>Facilitador/a:</strong> TGLA. Anaid Santamaría</p>
            <p><strong>Horario:</strong> Sábado 08:00 - 10:00</p>
          </div>

          {/* Curso 2 */}
          <div className="tarjeta-curso">
            <h3>Curso de Soporte y Mantenimiento de Computadores</h3>
            <img src={curso2} alt="Foto Técnico Soporte" />
            <p><strong>Facilitador/a:</strong> TGLO. Ariel Paucar</p>
            <p><strong>Horario:</strong> Sábado 09:00 - 11:00</p>
          </div>

          {/* Curso 3 */}
          <div className="tarjeta-curso">
            <h3>Curso de Programación JAVA - PYTHON</h3>
            <img src={curso3} alt="Foto Técnico Programación" />
            <p><strong>Facilitador/a:</strong> MSc. Fabián Paucar</p>
            <p><strong>Horario:</strong> Sábado 09:00 - 11:00</p>
          </div>
        </div>
      </div>

      {/* Curso Full Stack */}
      <div className="curso-fullstack">
        <h1>¡Curso Full Stack!</h1>
        <p>
          💻 Dominá el desarrollo web completo: Frontend + Backend 🌐<br />
          Aprendé a crear aplicaciones modernas, dinámicas y funcionales.
        </p>
        <ul>
          <li>⚙️ HTML, CSS, JavaScript, React</li>
          <li>🗄️ Node.js, Express y MongoDB</li>
          <li>🧑‍💻 Proyectos reales y prácticas guiadas</li>
          <li>📈 Nivelá tu perfil profesional al máximo</li>
        </ul>
        <p className="date">
          🚀 ¡Inscripciones abiertas!<br />📅 Inicio:  28 de Septiembre
          🌟 Ideal para quienes buscan reconvertirse, avanzar en tecnología y destacar en el mundo laboral.
        </p>
      <div className="whatsapp-buttons">
        <button
          style={{
            margin: '5px',
            padding: '8px 12px',
            borderRadius: '6px',
            border: 'none',
            background: '#25D366',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '14px'
          }}
          onClick={() => window.open(`https://wa.me/${whatsappNumber.code}`, '_blank')}
        >
          Más información
        </button>
      </div>

      </div>

      {/* Graduados */}
      <div className="graduados">
        <h2>Graduados del Curso de Scratch</h2>
        <p>¡Felicitaciones a nuestros estudiantes que culminaron exitosamente el curso!</p>
        <div className="contenedor-graduados">
          <div className="graduado">
            <img src={graduado1} alt="Graduado 1" />
            <p>Montserrat</p>
          </div>
          <div className="graduado">
            <img src={graduado2} alt="Graduado 2" />
            <p>Nicolas</p>
          </div>
        </div>
      </div>

      {/* Cursos culminados */}
      <div className="servicios">
        <div className="tituloServicios">Cursos Culminados</div>
        <div className="tarjeta1">
          <img className="ImgServicio1" src={finCurso} alt="Img_Soporte" />
          <div className="Curso1">
            Excel Medio y Avanzado 
            <a href={excelPDF} target="_blank" rel="noreferrer">(Estudiantes que han culminado el curso)</a>
          </div>
          <div className="Curso2">
            Gestión Empresarial 
            <a href={gestionPDF} target="_blank" rel="noreferrer">(Estudiantes que han culminado el curso)</a>
          </div>
          <div className="Curso3">
            Métodos de Investigación
            <a href={MetodosPDF} target="_blank" rel="noreferrer">(Estudiantes que han culminado el curso)</a>
          </div>
          <div className="Curso4">
            Java básico al medio superior
            <a href={javaPDF} target="_blank" rel="noreferrer">(Estudiantes que han culminado el curso)</a>
          </div>
          <div className="Curso5">
            Preparación para el Ingreso a la Universidad
            <a href={TranformarPDF} target="_blank" rel="noreferrer">(Estudiantes que han culminado el curso)</a>
          </div>
          <div className="Curso6">
            Curso de Scratch
            <a href={Scratch} target="_blank" rel="noreferrer">(Estudiantes que han culminado el curso)</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CursosCard;
