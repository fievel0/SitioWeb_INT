// Obtiene el elemento del toast principal
const toast = document.getElementById('promoToast');

// Muestra el toast después de 1 segundo
setTimeout(() => {
  toast.classList.add('show');
}, 1000);

// Oculta el toast después de 10 segundos
setTimeout(() => {
  toast.classList.remove('show');
  toast.classList.add('hide');
}, 11000);


// Segunda instancia de toast (si usas otro con ID distinto)
document.addEventListener('DOMContentLoaded', () => {
  const toastt = document.getElementById('promoToastt');

  function onClickToast() {
    // Aquí puedes colocar lógica extra si se desea hacer algo al dar clic en el toast
    // Por ejemplo, redireccionar: window.location.href = 'https://tupagina.com/promo';
  }

  // Mostrar el segundo toast 1 segundo después de cargar
  setTimeout(() => {
    toastt.classList.add('show');
  }, 1000);

  // Ocultar el segundo toast después de 10 segundos y remover el listener
  setTimeout(() => {
    toastt.classList.remove('show');
    toastt.classList.add('hide');
    toastt.removeEventListener('click', onClickToast);
  }, 11000);

  toastt.addEventListener('click', onClickToast);
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
const slides = document.getElementById("slides");
const totalSlides = slides.children.length;
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const dotsContainer = document.getElementById("dots");

let index = 0;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let isDragging = false;
let animationID = 0;

// Crear puntos indicadores dinámicamente
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    index = i;
    setPositionByIndex();
    resetAutoplay();
  });
  dotsContainer.appendChild(dot);
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Funciones botones
prevBtn.addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  setPositionByIndex();
  resetAutoplay();
});
nextBtn.addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  setPositionByIndex();
  resetAutoplay();
});

// Eventos touch y mouse para drag/swipe
slides.addEventListener("mousedown", dragStart);
slides.addEventListener("touchstart", dragStart);

slides.addEventListener("mouseup", dragEnd);
slides.addEventListener("touchend", dragEnd);

slides.addEventListener("mouseleave", dragEnd);

slides.addEventListener("mousemove", dragMove);
slides.addEventListener("touchmove", dragMove);

function dragStart(event) {
  isDragging = true;
  startPos = getPositionX(event);
  slides.classList.add("dragging");
  animationID = requestAnimationFrame(animation);
}

function dragEnd() {
  if (!isDragging) return;
  isDragging = false;
  cancelAnimationFrame(animationID);

  const movedBy = currentTranslate - prevTranslate;

  // Si movió más de 50px, cambia slide
  if (movedBy < -50 && index < totalSlides - 1) index++;
  else if (movedBy > 50 && index > 0) index--;

  setPositionByIndex();

  slides.classList.remove("dragging");
}

function dragMove(event) {
  if (!isDragging) return;
  const currentPosition = getPositionX(event);
  currentTranslate = prevTranslate + currentPosition - startPos;
}

function getPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
}

function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
  slides.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
  currentTranslate = index * -window.innerWidth; // ancho pantalla para efecto full width
  prevTranslate = currentTranslate;
  slides.style.transition = 'transform 0.3s ease-out';
  setSliderPosition();
  updateDots(); // Actualiza el punto activo
}

// Ajustar cuando cambia tamaño ventana para evitar errores
window.addEventListener("resize", () => {
  setPositionByIndex();
});

let autoplayInterval = setInterval(() => {
  if (!isDragging) {
    index = (index + 1) % totalSlides;
    setPositionByIndex();
  }
}, 8000);

// Reiniciar intervalo al usar botones para evitar saltos abruptos
function resetAutoplay() {
  clearInterval(autoplayInterval);
  autoplayInterval = setInterval(() => {
    if (!isDragging) {
      index = (index + 1) % totalSlides;
      setPositionByIndex();
    }
  }, 8000);
}

// Pausar autoplay cuando el mouse esté sobre el carrusel (opcional)
const carousel = document.getElementById("carousel");
carousel.addEventListener("mouseenter", () => clearInterval(autoplayInterval));
carousel.addEventListener("mouseleave", () => resetAutoplay());
