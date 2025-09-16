document.addEventListener("DOMContentLoaded", () => {
  const allSlides = document.querySelectorAll('.projects-slider');

  allSlides.forEach(slider => {
    const slidesContainer = slider.querySelector('.slides');
    const images = slidesContainer.querySelectorAll('img');
    let index = 0;

    setInterval(() => {
      index++;
      if (index >= images.length) index = 0;
      slidesContainer.scrollTo({
        left: images[index].offsetLeft,
        behavior: 'smooth'
      });
    }, 3000); // Slide every 3 seconds
  });
});
 