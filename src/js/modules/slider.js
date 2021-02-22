function slider({container, slide, currentSlides, totalSlides, next, prev, wrapper, field}) {

  //Slider

  const slides = document.querySelectorAll(slide),
    slider = document.querySelector(container),
    currentSlide = document.querySelector(currentSlides),
    currentTotal = document.querySelector(totalSlides),
    btnNextSLide = document.querySelector(next),
    btnPrevSLide = document.querySelector(prev),
    slideField = document.querySelector(field),
    slideWrapper = document.querySelector(wrapper),
    width = window.getComputedStyle(slideWrapper).width;
  let count = 1,
    offset = 0;

  slider.style.position = 'relative';

  const indicators = document.createElement('ul');
  indicators.classList.add('carousel-indicators');
  slider.append(indicators);

  const dots = [];

  function justDigits(str) {
    return +str.replace(/\D/g, '');
  }

  function createDot(i) {
    const dot = document.createElement('li');
    dot.classList.add('dot');
    dot.setAttribute('data-slide-to', i + 1);

    if (i == 0) {
      dot.style.opacity = '1';
    }

    indicators.append(dot);
    dots.push(dot);
  }

  function setActiveDot(i) {
    dots.forEach(dot => {
      dot.style.opacity = '.5';
    });
    dots[i - 1].style.opacity = '1';
  }

  for (let i = 0; i < slides.length; i++) {
    createDot(i);
  }

  if (slides.length < 10) {
    currentTotal.textContent = `0${slides.length}`;
    currentSlide.textContent = `0${count}`;
  } else {
    currentTotal.textContent = slides.length;
    currentSlide.textContent = count;
  }

  slideField.style.display = 'flex';
  slideField.style.transition = '0.5s all';
  slideField.style.width = 100 * slides.length + '%';

  slides.forEach(slide => {
    slide.style.width = width;
  });

  slideWrapper.style.overflow = 'hidden';

  btnNextSLide.addEventListener('click', () => {
    if (offset == justDigits(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += justDigits(width);
    }

    slideField.style.transform = `translateX(-${offset}px)`;

    if (count == slides.length) {
      count = 1;
    } else {
      count++;
    }

    if (slides.length < 10) {
      currentSlide.textContent = `0${count}`;
    } else {
      currentSlide.textContent = count;
    }

    setActiveDot(count);

  });

  btnPrevSLide.addEventListener('click', () => {
    if (offset == 0) {
      offset = justDigits(width) * (slides.length - 1);
    } else {
      offset -= justDigits(width);
    }

    slideField.style.transform = `translateX(-${offset}px)`;

    if (count == 1) {
      count = slides.length;
    } else {
      count--;
    }

    if (slides.length < 10) {
      currentSlide.textContent = `0${count}`;
    } else {
      currentSlide.textContent = count;
    }

    setActiveDot(count);
  });

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');

      count = slideTo;
      offset = justDigits(width) * (slideTo - 1);
      slideField.style.transform = `translateX(-${offset}px)`;

      if (slides.length < 10) {
        currentSlide.textContent = `0${count}`;
      } else {
        currentSlide.textContent = count;
      }

      setActiveDot(count);

    });
  });
}

export default slider;