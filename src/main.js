const btn = document.getElementById("readMoreBtn");
const text = document.getElementById("moreText");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  text.classList.toggle("hidden");

  btn.textContent = text.classList.contains("hidden") ? "بیشتر" : "کمتر";
});
const carousel = document.querySelector("#mainCarousel");

if (carousel) {
  const slides = [...carousel.querySelectorAll(".carousel-item")];
  const dots = [...document.querySelectorAll("#carouselPagination button")];

  let currentSlide = 0;
  let autoplay = null;
  let scrollTimer = null;

  const autoplayDelay = 3000;

  // Update pagination appearance
  function updatePagination(index) {
    currentSlide = index;

    dots.forEach((dot, i) => {
      const active = i === index;

      dot.classList.toggle("w-[25px]", active);
      dot.classList.toggle("w-[10px]", !active);

      dot.classList.add("border-black");
      dot.classList.remove("border-white");

      dot.classList.toggle("bg-white", active);
      dot.classList.toggle("bg-black/50", !active);
    });
  }

  // Go to selected slide
  function goToSlide(index) {
    currentSlide = index;

    carousel.scrollTo({
      left: slides[index].offsetLeft - slides[0].offsetLeft,
      behavior: "smooth",
    });

    updatePagination(index);
  }

  // Detect current slide based on its actual position
  function detectActiveSlide() {
    const carouselRect = carousel.getBoundingClientRect();

    let closestIndex = 0;
    let minDistance = Infinity;

    slides.forEach((slide, index) => {
      const slideRect = slide.getBoundingClientRect();

      const distance = Math.abs(slideRect.left - carouselRect.left);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    updatePagination(closestIndex);
  }

  // Sync pagination when scrolling
  carousel.addEventListener("scroll", () => {
    clearTimeout(scrollTimer);

    scrollTimer = setTimeout(() => {
      detectActiveSlide();
    }, 3000);
  });

  // Next slide
  function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    goToSlide(nextIndex);
  }

  // Autoplay
  function stopAutoplay() {
    clearInterval(autoplay);
  }

  function startAutoplay() {
    stopAutoplay();

    autoplay = setInterval(() => {
      nextSlide();
    }, autoplayDelay);
  }

  // Pagination click
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
      startAutoplay();
    });
  });

  // Pause on hover
  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);

  // Pause while touching
  carousel.addEventListener("touchstart", stopAutoplay, {
    passive: true,
  });

  carousel.addEventListener("touchend", startAutoplay, {
    passive: true,
  });

  // Initial setup
  updatePagination(0);
  startAutoplay();
}
