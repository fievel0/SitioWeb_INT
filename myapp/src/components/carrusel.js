// carousel.js
export function initCarousel(slidesContainerId, prevBtnId, nextBtnId, dotsContainerId, intervalTime = 5000) {
  const slidesContainer = document.getElementById(slidesContainerId);
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);
  const dotsContainer = document.getElementById(dotsContainerId);

  if (!slidesContainer || !prevBtn || !nextBtn || !dotsContainer) return;

const slides = Array.from(slidesContainer.children).filter(child => child.classList.contains("slide"));  let currentSlide = 0;
  const totalSlides = slides.length;
  dotsContainer.innerHTML = "";

  // Crear dots
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      showSlide(i);
    });
    dotsContainer.appendChild(dot);
  }

  const dots = dotsContainer.children;

  function showSlide(index) {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  for (let i = 0; i < totalSlides; i++) {
    dots[i].classList.remove("active");
  }
  dots[index].classList.add("active");
  currentSlide = index;
}

  function nextSlide() {
    showSlide((currentSlide + 1) % totalSlides);
  }

  function prevSlide() {
    showSlide((currentSlide - 1 + totalSlides) % totalSlides);
  }

  // Botones
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Mostrar primer slide
  showSlide(0);

  // Cambio automático
  const autoSlide = setInterval(nextSlide, intervalTime);

  // Retornar función para detener autoSlide si se desea
  return () => clearInterval(autoSlide);
}
