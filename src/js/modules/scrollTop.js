function scrollTop() {
  // ScrollTOP

  function animateScroll() {
    let timerAnimate = setInterval(() => {
      document.documentElement.scrollTop -= 50;

      if (document.documentElement.scrollTop <= 0) {
        clearInterval(timerAnimate);
      }
    }, 10);
  }

  document.querySelector('.btn-top').addEventListener('click', animateScroll);
}

export default scrollTop;