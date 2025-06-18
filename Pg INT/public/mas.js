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

const productosTelefonia = [
  { nombre: "Cargadores", imagen: "./Imagenes_mas/cargador.jpg" },
  { nombre: "Audífonos de cable", imagen: "./Imagenes_mas/audifonos_cable.jpg" },
  { nombre: "Cascos", imagen: "./Imagenes_mas/cascos_musica.jpg" },
  { nombre: "Audífonos inalámbricos", imagen: "./Imagenes_mas/audifonos_inalambricos.jpg" },
  { nombre: "Cargador Portátil", imagen: "./Imagenes_mas/cargador_protatil.jpg" },
  { nombre: "Cables auxiliares", imagen: "./Imagenes_mas/cable_auxiliar.jpg" },
  { nombre: "Memorias", imagen: "./Imagenes_mas/memorias.jpg" },
  { nombre: "Popsockets", imagen: "./Imagenes_mas/popsockets.avif" },
  { nombre: "Micas", imagen: "./Imagenes_mas/micas.avif" },
  { nombre: "Estuches", imagen: "./Imagenes_mas/estuches.jpg" },
  { nombre: "Cámaras", imagen: "./Imagenes_mas/camaras.avif" },
  { nombre: "Pines de carga", imagen: "./Imagenes_mas/pines_de_carga.jpg" },
  { nombre: "Baterías", imagen: "./Imagenes_mas/baterias.jpg" },
  { nombre: "Pantallas", imagen: "./Imagenes_mas/pantallas de celulares.jpg" }
];

const productosComputo = [
  { nombre: "Teclados", imagen: "./Imagenes_mas/teclados.jpg" },
  { nombre: "Monitores", imagen: "./Imagenes_mas/monitores.jpg" },
  { nombre: "Mouse", imagen: "./Imagenes_mas/mouse.jpg" },
  { nombre: "Parlantes", imagen: "./Imagenes_mas/parlantes.jpg" },
  { nombre: "Cámaras", imagen: "./Imagenes_mas/camaras.webp" },
  { nombre: "Tarjetas madre", imagen: "./Imagenes_mas/tarjeta_madre.jpg" },
  { nombre: "Memorias RAM", imagen: "./Imagenes_mas/memorias_ram.jpg" },
  { nombre: "Computadoras", imagen: "./Imagenes_mas/computadora.avif" },
  { nombre: "Laptops", imagen: "./Imagenes_mas/laptop.jpg" },
  { nombre: "Tarjetas gráficas", imagen: "./Imagenes_mas/tarjetas_graficas.jpg" },
  { nombre: "Discos", imagen: "./Imagenes_mas/discos.jpg" },
  { nombre: "Discos sólidos", imagen: "./Imagenes_mas/discos_solidos.jpg" },
  { nombre: "Cables VGA", imagen: "./Imagenes_mas/cable_vga.webp" }
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

function createContactModal() {
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
function tuFuncion() {
  createContactModal();
}
