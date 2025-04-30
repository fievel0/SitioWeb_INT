// 0) Modal de contacto: creación y lógica
function createContactModal() {
  if (document.getElementById('contact-overlay')) return;
  // Overlay
  const overlay = document.createElement('div');
  overlay.id = 'contact-overlay';
  Object.assign(overlay.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1000'
  });

  // Modal container
  const modal = document.createElement('div');
  modal.id = 'contact-modal';
  Object.assign(modal.style, {
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '400px',
    boxSizing: 'border-box',
    textAlign: 'center',
    position: 'relative'
  });

  // Close button
  const closeBtn = document.createElement('span');
  closeBtn.innerHTML = '&times;';
  Object.assign(closeBtn.style, {
    position: 'absolute',
    top: '10px',
    right: '15px',
    cursor: 'pointer',
    fontSize: '24px'
  });
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(overlay);
  });
  modal.appendChild(closeBtn);

  // Title
  const title = document.createElement('h2');
  title.textContent = 'Contáctanos';
  modal.appendChild(title);

  // Sección Correo
  const correoDiv = document.createElement('div');
  const correoTitle = document.createElement('h3');
  correoTitle.textContent = 'Correo';
  correoDiv.appendChild(correoTitle);
  ['faibol_men19@hotmail.com', 'intsolutionstec@gmail.com'].forEach(email => {
    const btn = document.createElement('button');
    btn.textContent = email;
    btn.style.margin = '5px';
    btn.addEventListener('click', () => {
      window.location.href = `mailto:${email}`;
    });
    correoDiv.appendChild(btn);
  });
  modal.appendChild(correoDiv);

  // Sección Llamada
  const callDiv = document.createElement('div');
  const callTitle = document.createElement('h3');
  callTitle.textContent = 'Llamada';
  callDiv.appendChild(callTitle);
  ['0961306164', '0982401789'].forEach(num => {
    const btn = document.createElement('button');
    btn.textContent = num;
    btn.style.margin = '5px';
    btn.addEventListener('click', () => {
      window.location.href = `tel:${num}`;
    });
    callDiv.appendChild(btn);
  });
  modal.appendChild(callDiv);

  // Sección WhatsApp
  const waDiv = document.createElement('div');
  const waTitle = document.createElement('h3');
  waTitle.textContent = 'WhatsApp';
  waDiv.appendChild(waTitle);
  [{ display: '0961306164', code: '593961306164' }, { display: '0982401789', code: '593982401789' }].forEach(({ display, code }) => {
    const btn = document.createElement('button');
    btn.textContent = display;
    btn.style.margin = '5px';
    btn.addEventListener('click', () => {
      window.open(`https://wa.me/${code}`, '_blank');
    });
    waDiv.appendChild(btn);
  });
  modal.appendChild(waDiv);

  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}

// 1) tuFuncion llama al modal en lugar de prompt
function tuFuncion() {
  createContactModal();
}

// 2) Toggle menú
function initMenuToggle() {
  const menuIcon = document.getElementById('menu-icon');
  const menu = document.getElementById('menu');
  if (!menuIcon || !menu) return;
  menuIcon.addEventListener('click', () => menu.classList.toggle('active'));
}

// 3) Contador genérico de vistas
function initViewsCounter(countSelector, linkSelector, storageKey) {
  const counterEl = document.querySelector(countSelector);
  if (!counterEl) return;
  let count = parseInt(localStorage.getItem(storageKey)) || parseInt(counterEl.innerText) || 0;
  counterEl.innerText = count;
  document.querySelectorAll(linkSelector).forEach(el => {
    el.addEventListener('click', () => {
      count++;
      localStorage.setItem(storageKey, count);
      counterEl.innerText = count;
    });
  });
}

// 4) Contador genérico de "me gusta"
function initLikesCounter(countSelector, triggerSelectors, storageKey) {
  const counterEl = document.querySelector(countSelector);
  if (!counterEl) return;
  let likesCount = parseInt(localStorage.getItem(storageKey + '_count'));
  if (isNaN(likesCount)) likesCount = parseInt(counterEl.innerText) || 0;
  const hasLiked = localStorage.getItem(storageKey + '_liked') === 'true';
  counterEl.innerText = likesCount;
  if (!hasLiked) {
    document.querySelectorAll(triggerSelectors).forEach(el => {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        likesCount++;
        localStorage.setItem(storageKey + '_count', likesCount);
        localStorage.setItem(storageKey + '_liked', 'true');
        counterEl.innerText = likesCount;
      });
    });
  }
}

// 5) Actualiza contador de comentarios
function updateCommentCount(containerSelector, countSelector) {
  const containerEl = document.querySelector(containerSelector);
  const countEl = document.querySelector(countSelector);
  if (!containerEl || !countEl) return;
  const numComments = containerEl.children.length;
  countEl.innerText = numComments;
}

// 6) Funcionalidad de comentarios
function initComentarios(formSelector, textareaSelector, containerSelector, storageKey, countSelector) {
  const formEl = document.querySelector(formSelector);
  const textareaEl = document.querySelector(textareaSelector);
  const containerEl = document.querySelector(containerSelector);
  if (!formEl || !textareaEl || !containerEl) return;
  let comentarios = JSON.parse(localStorage.getItem(storageKey)) || [];
  function renderComentarios() {
    containerEl.innerHTML = '';
    comentarios.forEach(texto => {
      const div = document.createElement('div');
      div.classList.add('comentario-item');
      div.textContent = texto;
      containerEl.appendChild(div);
    });
    updateCommentCount(containerSelector, countSelector);
  }
  renderComentarios();
  formEl.addEventListener('submit', e => {
    e.preventDefault();
    const texto = textareaEl.value.trim();
    if (!texto) return;
    comentarios.push(texto);
    localStorage.setItem(storageKey, JSON.stringify(comentarios));
    renderComentarios();
    textareaEl.value = '';
  });
}

// 7) Copiar enlace compartido
function initCompartir(logoSelector, messageSelector, url, timeout = 3000) {
  const logoEl = document.querySelector(logoSelector);
  const msgEl = document.querySelector(messageSelector);
  if (!logoEl || !msgEl) return;
  logoEl.style.cursor = 'pointer';
  logoEl.addEventListener('click', () => {
    navigator.clipboard.writeText(url)
      .then(() => {
        msgEl.textContent = 'Enlace copiado';
        setTimeout(() => { msgEl.textContent = ''; }, timeout);
      })
      .catch(err => {
        console.error('Error copiando enlace:', err);
        msgEl.textContent = 'Error al copiar enlace';
        setTimeout(() => { msgEl.textContent = ''; }, timeout);
      });
  });
}

// 8) Inicialización al DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initMenuToggle();
  initViewsCounter('.entrada .numeroviews', '.entrada1 .link-views', 'views_blog_SInformatico');
  initViewsCounter('.entrada .numeroviews2', '.entrada2 a', 'views_blog_CSeguridad');
  initViewsCounter('.entrada .numeroviews3', '.entrada3 a', 'views_blog_Telecomunicaciones');
  initLikesCounter('.entrada .numerolikes', '.entrada1 .megusta, .entrada1 .numerolikes', 'likes_blog_SInformatico');
  initLikesCounter('.entrada .numerolikes2', '.entrada2 .megusta2, .entrada2 .numerolikes2', 'likes_blog_CSeguridad');
  initLikesCounter('.entrada .numerolikes3', '.entrada3 .megusta3, .entrada3 .numerolikes3', 'likes_blog_Telecomunicaciones');
  initComentarios('.FormularioComen', '#comentario', '.ContenedorComentarios', 'mis_comentarios_storage1', '.numerocomentarios');
  initComentarios('.FormularioComen2', '#comentario2', '.ContenedorComentarios2', 'mis_comentarios_storage2', '.numerocomentarios2');
  initComentarios('.FormularioComen3', '#comentario3', '.ContenedorComentarios3', 'mis_comentarios_storage3', '.numerocomentarios3');
  initCompartir('.Logocompartidos', '.ContenidoCopiado', './blog_SInformatico.html');
  initCompartir('.Logocompartidos2', '.ContenidoCopiado2', './blog_CSeguridad.html');
  initCompartir('.Logocompartidos3', '.ContenidoCopiado3', './blog_Telecomunicacioness.html');
});