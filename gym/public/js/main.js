document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll(".carousel .item");
    const dotsContainer = document.querySelector(".carousel .slider-dots");
    let currentSlide = 0;

    // Mostrar la primera imagen del carrusel cuando se carga la página por primera vez
    carouselItems[currentSlide].style.opacity = 1;

    // Agregar un punto de navegación por cada slide
    carouselItems.forEach((item, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === currentSlide) {
            dot.classList.add("active");
        }
        dot.addEventListener("click", () => {
            goToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });

    // Función para cambiar al siguiente slide
    function nextSlide() {
        currentSlide++;
        if (currentSlide >= carouselItems.length) {
            currentSlide = 0;
        }
        goToSlide(currentSlide);
    }

    // Función para ir a un slide específico
    function goToSlide(index) {
        carouselItems.forEach((item, i) => {
            item.style.opacity = i === index ? 1 : 0;
            dotsContainer.children[i].classList.toggle("active", i === index);
        });
    }

    // Iniciar el slider
    setInterval(nextSlide, 15000); // Cambiar slide cada 15 segundos
});