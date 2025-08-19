// Productos de Telefonía
import cargador from "./Imagenes_mas/cargador.jpg"; 
import audifonosCable from "./Imagenes_mas/audifonos_cable.jpg";
import cascosMusica from "./Imagenes_mas/cascos_musica.jpg";
import audifonosInalambricos from "./Imagenes_mas/audifonos_inalambricos.jpg";
import cargadorPortatil from "./Imagenes_mas/cargador_protatil.jpg";
import cableAuxiliar from "./Imagenes_mas/cable_auxiliar.jpg";
import memorias from "./Imagenes_mas/memorias.jpg";
import popsockets from "./Imagenes_mas/popsockets.avif";
import micas from "./Imagenes_mas/micas.avif";
import estuches from "./Imagenes_mas/estuches.jpg";
import camaras from "./Imagenes_mas/camaras.avif";
import pinesDeCarga from "./Imagenes_mas/pines_de_carga.jpg";
import baterias from "./Imagenes_mas/baterias.jpg";
import pantallas from "./Imagenes_mas/pantallas de celulares.jpg";

// Productos de Computo
import teclados from "./Imagenes_mas/teclados.jpg";
import monitores from "./Imagenes_mas/monitores.jpg";
import mouse from "./Imagenes_mas/mouse.jpg";
import parlantes from "./Imagenes_mas/parlantes.jpg";
import tarjetaMadre from "./Imagenes_mas/tarjeta_madre.jpg";
import memoriasRam from "./Imagenes_mas/memorias_ram.jpg";
import computadora from "./Imagenes_mas/computadora.avif";
import laptop from "./Imagenes_mas/laptop.jpg";
import tarjetasGraficas from "./Imagenes_mas/tarjetas_graficas.jpg";
import discos from "./Imagenes_mas/discos.jpg";
import discosSolidos from "./Imagenes_mas/discos_solidos.jpg";
import cablesVGA from "./Imagenes_mas/cable_vga.webp";
// initMenuToggle.js
function initMenuToggle() {
  const menuIcon = document.getElementById('menu-icon');
  const menu = document.getElementById('menu');
  if (!menuIcon || !menu) return;
  menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initMenuToggle();
});
// productos.js

export const productosTelefonia = [
  { nombre: "Cargadores", imagen: cargador },
  { nombre: "Audífonos de cable", imagen: audifonosCable },
  { nombre: "Cascos", imagen: cascosMusica },
  { nombre: "Audífonos inalámbricos", imagen: audifonosInalambricos },
  { nombre: "Cargador Portátil", imagen: cargadorPortatil },
  { nombre: "Cables auxiliares", imagen: cableAuxiliar },
  { nombre: "Memorias", imagen: memorias },
  { nombre: "Popsockets", imagen: popsockets },
  { nombre: "Micas", imagen: micas },
  { nombre: "Estuches", imagen: estuches },
  { nombre: "Cámaras", imagen: camaras },
  { nombre: "Pines de carga", imagen: pinesDeCarga },
  { nombre: "Baterías", imagen: baterias },
  { nombre: "Pantallas", imagen: pantallas }
];

export const productosComputo = [
  { nombre: "Teclados", imagen: teclados },
  { nombre: "Monitores", imagen: monitores },
  { nombre: "Mouse", imagen: mouse },
  { nombre: "Parlantes", imagen: parlantes },
  { nombre: "Cámaras", imagen: camaras },
  { nombre: "Tarjetas madre", imagen: tarjetaMadre },
  { nombre: "Memorias RAM", imagen: memoriasRam },
  { nombre: "Computadoras", imagen: computadora },
  { nombre: "Laptops", imagen: laptop },
  { nombre: "Tarjetas gráficas", imagen: tarjetasGraficas },
  { nombre: "Discos", imagen: discos },
  { nombre: "Discos sólidos", imagen: discosSolidos },
  { nombre: "Cables VGA", imagen: cablesVGA }
];

function renderGaleria(productos, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  productos.forEach(producto => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<img src="${producto.imagen}" alt="${producto.nombre}"><p>${producto.nombre}</p>`;
    contenedor.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderGaleria(productosTelefonia, "galeriaTelefonia");
  renderGaleria(productosComputo, "galeriaCompu");
});
// contactModal.js

export function createContactModal() {
  if (document.getElementById('contact-overlay')) return;

  // Crea el overlay
  const overlay = document.createElement('div');
  overlay.id = 'contact-overlay';
  Object.assign(overlay.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1000',
    padding: '1rem',
  });

  // Modal principal
  const modal = document.createElement('div');
  modal.id = 'contact-modal';
  Object.assign(modal.style, {
    background: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '420px',
    boxSizing: 'border-box',
    textAlign: 'center',
    position: 'relative',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    fontFamily: 'Arial, sans-serif',
  });

  // Botón cerrar
  const closeBtn = document.createElement('span');
  closeBtn.innerHTML = '&times;';
  Object.assign(closeBtn.style, {
    position: 'absolute',
    top: '10px',
    right: '15px',
    cursor: 'pointer',
    fontSize: '28px',
    color: '#999',
  });
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(overlay);
  });
  modal.appendChild(closeBtn);

  // Título principal
  const title = document.createElement('h2');
  title.textContent = '¿Cómo deseas contactarnos?';
  title.style.marginBottom = '1rem';
  title.style.color = '#333';
  modal.appendChild(title);

  // SECCIÓN 1: Correo
  const correoDiv = document.createElement('div');
  correoDiv.style.marginBottom = '1.5rem';

  const correoMsg = document.createElement('p');
  correoMsg.textContent = '📩 ¿Quieres enviarnos un correo? Pulsa uno de los siguientes:';
  correoMsg.style.marginBottom = '0.5rem';
  correoMsg.style.fontWeight = 'bold';
  correoDiv.appendChild(correoMsg);

  ['faibol_men19@hotmail.com', 'intsolutionstec@gmail.com'].forEach(email => {
    const btn = document.createElement('button');
    btn.textContent = email;
    Object.assign(btn.style, {
      margin: '5px',
      padding: '8px 12px',
      borderRadius: '6px',
      border: 'none',
      background: '#007BFF',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '14px',
    });
    btn.addEventListener('click', () => {
      window.location.href = `mailto:${email}`;
    });
    correoDiv.appendChild(btn);
  });
  modal.appendChild(correoDiv);

  // SECCIÓN 2: Llamada
  const callDiv = document.createElement('div');
  callDiv.style.marginBottom = '1.5rem';

  const callMsg = document.createElement('p');
  callMsg.textContent = '📞 ¿Prefieres llamarnos directamente? Pulsa un número:';
  callMsg.style.marginBottom = '0.5rem';
  callMsg.style.fontWeight = 'bold';
  callDiv.appendChild(callMsg);

  ['0961306164', '0982401789'].forEach(num => {
    const btn = document.createElement('button');
    btn.textContent = num;
    Object.assign(btn.style, {
      margin: '5px',
      padding: '8px 12px',
      borderRadius: '6px',
      border: 'none',
      background: '#28a745',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '14px',
    });
    btn.addEventListener('click', () => {
      window.location.href = `tel:${num}`;
    });
    callDiv.appendChild(btn);
  });
  modal.appendChild(callDiv);

  // SECCIÓN 3: WhatsApp
  const waDiv = document.createElement('div');
  waDiv.style.marginBottom = '1.5rem';

  const waMsg = document.createElement('p');
  waMsg.textContent = '💬 ¿Quieres escribirnos por WhatsApp? Pulsa aquí:';
  waMsg.style.marginBottom = '0.5rem';
  waMsg.style.fontWeight = 'bold';
  waDiv.appendChild(waMsg);

  [
    { display: '0961306164', code: '593961306164' },
    { display: '0982401789', code: '593982401789' }
  ].forEach(({ display, code }) => {
    const btn = document.createElement('button');
    btn.textContent = display;
    Object.assign(btn.style, {
      margin: '5px',
      padding: '8px 12px',
      borderRadius: '6px',
      border: 'none',
      background: '#25D366',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '14px',
    });
    btn.addEventListener('click', () => {
      window.open(`https://wa.me/${code}`, '_blank');
    });
    waDiv.appendChild(btn);
  });
  modal.appendChild(waDiv);

  

  // Agrega el modal al overlay y al body
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}

// Puedes llamarlo desde un botón o evento

