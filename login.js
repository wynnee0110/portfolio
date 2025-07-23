document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector('.slides-login');
  const nextBtn = document.querySelector('.next-btn-login');
  const prevBtn = document.querySelector('.prev-btn-login');

  if (!slidesContainer || !nextBtn || !prevBtn) {
    console.error("Login slider elements not found");
    return;
  }

  let currentScroll = 0;
  const slide = slidesContainer.querySelector('img');
  const slideWidth = slide ? slide.clientWidth + 10 : 0;

  nextBtn.addEventListener('click', () => {
    const maxScroll = slidesContainer.scrollWidth - slidesContainer.clientWidth;
    if (currentScroll + slideWidth <= maxScroll) {
      currentScroll += slideWidth;
      slidesContainer.scrollTo({
        left: currentScroll,
        behavior: 'smooth'
      });
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentScroll - slideWidth >= 0) {
      currentScroll -= slideWidth;
      slidesContainer.scrollTo({
        left: currentScroll,
        behavior: 'smooth'
      });
    }
  });
});
