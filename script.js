/* ================== REVEAL ON SCROLL ================== */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();






const swiper = new Swiper('.swiper', {
  // Podstawowe ustawienia
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true, // slider zapętlony
  
  // Nawigacja (strzałki)
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Kropki (paginacja)
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Responsywność
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});