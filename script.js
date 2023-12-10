// JavaScript para el carrusel de imágenes
document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.getElementById("carousel");
  const images = carousel.getElementsByTagName("img");

  let currentIndex = 0;

  function showImage(index) {
    for (let i = 0; i < images.length; i++) {
      images[i].style.transform = `translateX(${-index * 100}%)`;
    }
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  // Agrega botones para navegar en el carrusel
  const nextButton = document.createElement("button");
  nextButton.innerText = "Siguiente";
  nextButton.addEventListener("click", nextImage);

  const prevButton = document.createElement("button");
  prevButton.innerText = "Anterior";
  prevButton.addEventListener("click", prevImage);

  carousel.appendChild(prevButton);
  carousel.appendChild(nextButton);

  // Inicia el carrusel
  showImage(currentIndex);
});