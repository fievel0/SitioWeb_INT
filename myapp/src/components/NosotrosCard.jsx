import React from "react";
import "./Nosotros.css"; 
function NosotrosCard() {
  return (
    <section className="servicios-nosotros" aria-label="Nuestros servicios">
      <div className="container">
        <h2>🔹 Nuestros Servicios</h2>
        <p className="subtitle">Ofrecemos una amplia variedad de servicios técnicos y tecnológicos adaptados a tus necesidades.</p>

      <div className="servicios-grid">
        <article className="servicio-item" tabIndex="0">
          <div className="servicio-icon" aria-hidden="true">🖥️</div>
          <div className="servicio-texto">
            <h3>Reparación de computadoras y laptops</h3>
            <p>Diagnóstico, limpieza, cambio de componentes y optimización de software.</p>
          </div>
        </article>

        <article class="servicio-item" tabindex="0">
          <div class="servicio-icon" aria-hidden="true">📱</div>
          <div class="servicio-texto">
            <h3>Servicio técnico para celulares</h3>
            <p>Reparación de pantallas, cambio de baterías, solución de fallas de carga y más.</p>
          </div>
        </article>

        <article class="servicio-item" tabindex="0">
          <div class="servicio-icon" aria-hidden="true">📷</div>
          <div class="servicio-texto">
            <h3>Instalación y mantenimiento de cámaras</h3>
            <p>Configuración, monitoreo y reparación de sistemas de videovigilancia.</p>
          </div>
        </article>

        <article class="servicio-item" tabindex="0">
          <div class="servicio-icon" aria-hidden="true">💾</div>
          <div class="servicio-texto">
            <h3>Recuperación de datos</h3>
            <p>Rescate de información desde discos duros, memorias y dispositivos móviles.</p>
          </div>
        </article>

        <article class="servicio-item" tabindex="0">
          <div class="servicio-icon" aria-hidden="true">🛒</div>
          <div class="servicio-texto">
            <h3>Venta de repuestos y accesorios</h3>
            <p>Cargadores, pantallas, teclados, discos duros, baterías y más.</p>
          </div>
        </article>
      </div>

      <section class="por-que-elegirnos" aria-label="Por qué elegirnos">
        <h2>💡 ¿Por qué elegirnos?</h2>
        <div class="razones-grid">
          <article class="razon-item" tabindex="0">
            <div class="razon-icon">⚡</div>
            <h3>Atención rápida y confiable</h3>
            <p>Respuesta ágil y soporte que siempre está a tu lado.</p>
          </article>
          <article class="razon-item" tabindex="0">
            <div class="razon-icon">👨‍🔧</div>
            <h3>Técnicos capacitados y con experiencia</h3>
            <p>Profesionales certificados para garantizar calidad.</p>
          </article>
          <article class="razon-item" tabindex="0">
            <div class="razon-icon">💰</div>
            <h3>Precios accesibles y garantía</h3>
            <p>Servicios de calidad con tarifas justas y garantía incluida.</p>
          </article>
          <article class="razon-item" tabindex="0">
            <div class="razon-icon">🏠</div>
            <h3>Atención a domicilio disponible</h3>
            <p>Comodidad y confianza en la comodidad de tu hogar.</p>
          </article>
        </div>
      </section>


      
    </div>
  </section>
  );
}

export default NosotrosCard;
