document.addEventListener("DOMContentLoaded", () => {
  const slidesContainerLogin = document.querySelector('.slides-login');
  const slideLogin = slidesContainerLogin.querySelector('.slide');
  const slideWidthLogin = slideLogin ? slideLogin.clientWidth : 0;

  let currentScrollLogin = 0;

  function autoSlideLogin() {
    const maxScroll = slidesContainerLogin.scrollWidth - slidesContainerLogin.clientWidth;
    if (currentScrollLogin + slideWidthLogin <= maxScroll) {
      currentScrollLogin += slideWidthLogin;
    } else {
      currentScrollLogin = 0;
    }

    slidesContainerLogin.scrollTo({
      left: currentScrollLogin,
      behavior: 'smooth'
    });
  }

  // Auto-slide every 3 seconds
  setInterval(autoSlideLogin, 3000);
});
