/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_scrollTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scrollTop */ "./src/js/modules/scrollTop.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/card */ "./src/js/modules/card.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");











window.addEventListener('DOMContentLoaded', () => {
  const modalOpenTimer = setTimeout(() => Object(_modules_modal__WEBPACK_IMPORTED_MODULE_4__["showModal"])('.modal', modalOpenTimer), 300000);

  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  Object(_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])('.timer', '2021-03-01');
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_2__["default"])({
    container: '.offer__slider',
    currentSlides: '#current',
    totalSlides: '#total',
    next: '.offer__slider-next',
    prev: '.offer__slider-prev',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner',
    slide: '.offer__slide'
  });
  Object(_modules_scrollTop__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_4__["default"])('[data-modal]', '.modal', modalOpenTimer);
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_5__["default"])('form' , modalOpenTimer);
  Object(_modules_card__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_modules_calc__WEBPACK_IMPORTED_MODULE_7__["default"])();

  //Конвертер валют

  // const inputUah = document.querySelector('[data-uah]'),
  //       inputUsd = document.querySelector('[data-usd]');

  //       inputUsd.addEventListener('input', () => {
  //         const request = new XMLHttpRequest();

  //         request.open('GET', 'js/current.json');
  //         request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  //         request.send();

  //         request.addEventListener('readystatechange', () => {
  //           if(request.readyState === 4 && request.status === 200) {
  //             const data = JSON.parse(request.response);

  //             inputUah.value = (+inputUsd.value * data.current.usd).toFixed(2);
  //           } else {
  //             inputUah.value = 'Попробуйтое позже';
  //           }
            
  //         });
  //       });

});




/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calc() {
  //Calculator

  const result = document.querySelector('.calculating__result span');

  let sex, height, weight, age, ratio;

  if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex');
  } else {
    sex = 'woman';
    localStorage.setItem('sex', 'woman');
  }

  if (localStorage.getItem('ratio')) {
    ratio = +localStorage.getItem('ratio');
  } else {
    ratio = 1.375;
    localStorage.setItem('ratio', 1.375);
  }

  function initLocalSettings(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(elem => {
      elem.classList.remove(activeClass);
      if (elem.getAttribute('id') === localStorage.getItem('sex')) {
        elem.classList.add(activeClass);
      }

      if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
        elem.classList.add(activeClass);
      }
    });
  }

  initLocalSettings('#gender div', 'calculating__choose-item_active');
  initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

  function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = 'XXXX';
      return;
    }

    if (sex === 'woman') {
      result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    } else {
      result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    }
  }

  calcTotal();

  function getStatitcInfo(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(elem => {
      elem.addEventListener('click', (e) => {
        if (e.target.getAttribute('data-ratio')) {
          ratio = +e.target.getAttribute('data-ratio');
          localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
        } else {
          sex = e.target.getAttribute('id');
          localStorage.setItem('sex', e.target.getAttribute('id'));
        }

        elements.forEach(elem => {
          elem.classList.remove(activeClass);
        });

        e.target.classList.add(activeClass);

        calcTotal();
      });
    });
  }

  getStatitcInfo('#gender div', 'calculating__choose-item_active');
  getStatitcInfo('.calculating__choose_big div', 'calculating__choose-item_active');

  function getDinamicInfo(selector) {
    const input = document.querySelector(selector);

    input.addEventListener('input', () => {

      if (input.value.match(/\D/g)) {
        input.style.boxShadow = '0px 0px 15px rgb(255 0 0)';
      } else {
        input.style.border = 'none';
      }

      switch (input.getAttribute('id')) {
        case 'height':
          height = +input.value;
          break;
        case 'weight':
          weight = +input.value;
          break;
        case 'age':
          age = +input.value;
          break;
      }
      calcTotal();
    });
  }

  getDinamicInfo('#height');
  getDinamicInfo('#weight');
  getDinamicInfo('#age');
}

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/modules/card.js":
/*!********************************!*\
  !*** ./src/js/modules/card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");


function card() {
  // My Card

  // class MenuCard {
  //   constructor(img, altimg, title, text, price, parentSelector, ...classes) {
  //     this.img = img;
  //     this.altimg = altimg;
  //     this.title = title;
  //     this.text = text;
  //     this.classes = classes;
  //     this.price = price;
  //     this.change = 28;
  //     this.changeCurrent();
  //     this.parent = document.querySelector(parentSelector);
  //   }

  //   changeCurrent() {
  //     this.price =  this.price * this.change;
  //   }

  //   render() {
  //     const card = document.createElement('div');
  //     if(this.classes.length === 0) {
  //       card.classList.add('menu__item');
  //     } else {
  //       this.classes.forEach(className => card.classList.add(className));
  //     }
  //     card.innerHTML = `
  //       <img src=${this.img} alt=${this.altimg}>
  //                     <h3 class="menu__item-subtitle">"${this.title}"</h3>
  //                     <div class="menu__item-descr">${this.text}</div>
  //                     <div class="menu__item-divider"></div>
  //                     <div class="menu__item-price">
  //                         <div class="menu__item-cost">Цена:</div>
  //                         <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
  //                     </div>
  //     `;
  //     this.parent.append(card);
  //   }
  // }

  //СОЗДАЕМ ВЕРСТКУ ОТ ШАБЛОНА MenuCard
  // getInfo('http://localhost:3000/menu')
  //   .then(data => {
  //     data.forEach(({img, altimg, title, descr, price}) => {
  //       new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
  //     });
  //   });

  //СОЗДАЕМ БЛОКИ НА ЛЕТУ БЕЗ ШАБЛОНОВ

  Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getInfo"])('http://localhost:3000/menu')
    .then(data => createCard(data));

  function createCard(data) {
    data.forEach(({ img, altimg, title, descr, price }) => {
      const elem = document.createElement('div');
      elem.classList.add('menu__item');

      price = Math.floor(price * 28.4);

      elem.innerHTML = `
          <img src=${img} alt=${altimg}>
            <h3 class="menu__item-subtitle">"${title}"</h3>
            <div class="menu__item-descr">${descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${price}</span> грн/день</div>
            </div>
        `;
      document.querySelector('.menu .container').append(elem);
    });
  }

  // new MenuCard(
  //   "img/tabs/vegy.jpg", 
  //   "img", 
  //   'Меню "Фитнес"', 
  //   'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
  //   10,
  //   '.menu .container',
  //   'menu__item',
  //   'big'
  // ).render();

  // new MenuCard(
  //   "img/tabs/elite.jpg",
  //   "img",
  //   'Меню “Премиум”',
  //   'Меню "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
  //   15,
  //   '.menu .container'
  // ).render();

  // new MenuCard(
  //   "img/tabs/post.jpg",
  //   "img",
  //   'Меню "Постное"',
  //   'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
  //   11,
  //   '.menu .container'
  // ).render();
}

/* harmony default export */ __webpack_exports__["default"] = (card);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");




function formsFunc(formSelector, modalOpenTimer) {

  // Forms

  const forms = document.querySelectorAll(formSelector);

  forms.forEach(form => {
    bindPostData(form);
  });

  const message = {
    loading: 'img/spinner.svg',
    success: 'Успех!',
    failure: 'Ошибка!'
  };

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;
      form.insertAdjacentElement('afterend', statusMessage);

      //ОТПРАВЛЯЕМ ДАНЫЕ ЧЕРЕЗ XMLHttpRequest()

      // const request = new XMLHttpRequest();

      // request.open('POST', '../server.php');
      // request.setRequestHeader('content-type', 'application/json');

      const formData = new FormData(form);

      //ПРЕОБРАЗОВУЕМ formData В ПРОСТОЙ ОБЬЕКТ
      // const obj = {};

      // formData.forEach((key, value) => {
      //   obj[key] = value;
      // });

      //ПРЕОБРАЗОВУЕМ formData В ПРОСТОЙ ОБЬЕКТ НОВЫЙ СПОСОБ

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      // fetch('../server1.php', {
      //   method: 'POST',
      //   headers: {
      //     'Content-type': 'aplication/json'
      //   },
      //   body: JSON.stringify(obj)
      // })

      //ПОСТИМ ДАННЫЕ НА СЕРВЕР

      Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["postData"])('http://localhost:3000/requests', json)
        // .then(data => data.text())
        .then(data => {
          console.log(data);
          thanksModal(message.success);
          statusMessage.remove();
        }).catch(() => {
          thanksModal(message.failure);
        }).finally(() => {
          form.reset();
        });

      // request.send(json);

      // request.addEventListener('load', () => {
      //   if(request.status === 200) {
      //     console.log(request.response);
      //     thanksModal(message.success);

      //     form.reset();

      //     statusMessage.remove();
      //   } else {
      //     thanksModal(message.failure);

      //   }
      // });

    });
  }

  function thanksModal(message) {
    const prevModal = document.querySelector('.modal__dialog');

    prevModal.classList.remove('show');
    prevModal.classList.add('hide');

    Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showModal"])('.modal', modalOpenTimer);

    const newModal = document.createElement('div');
    newModal.classList.add('modal__dialog');
    newModal.innerHTML = `
      <div class="modal__content">
        <div class="modal__close" data-close>x</div>
        <div class="modal__title">${message}</div>
      </div>
    `;

    document.querySelector('.modal').append(newModal);
    setTimeout(() => {
      newModal.remove();

      prevModal.classList.remove('hide');
      prevModal.classList.add('show');
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])('.modal');
    }, 2000);


  }
}
  
/* harmony default export */ __webpack_exports__["default"] = (formsFunc);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default, showModal, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return showModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
function showModal(modalSelector, modalOpenTimer) {
  const modal = document.querySelector(modalSelector);

  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';

  if (modalOpenTimer) {
    clearTimeout(modalOpenTimer);
  }

}

function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);

  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function modal(triggerSelector, modalSelector, modalOpenTimer) {

  const modalBtns = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);

  modalBtns.forEach(btn => {
    btn.addEventListener('click', () => showModal(modalSelector, modalOpenTimer));
  });

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      showModal(modalSelector, modalOpenTimer);
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll);

  modal.addEventListener('click', (e) => {
    if (e.target == modal || e.target.getAttribute('data-close') == '') {
      closeModal(modalSelector);
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.code == 'Escape') {
      closeModal(modalSelector);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (modal);



/***/ }),

/***/ "./src/js/modules/scrollTop.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrollTop.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (scrollTop);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(tabsSelector, tabContent, tabParent, tabsActive) {

  //Tabs

  const tabsContent = document.querySelectorAll(tabContent),
    tabs = document.querySelectorAll(tabsSelector),
    tabsParent = document.querySelector(tabParent);

  function hideContent() {
    tabs.forEach(tab => {
      tab.classList.remove(tabsActive);
    });
    tabsContent.forEach(cont => {
      cont.classList.remove('show', 'fade');
      cont.classList.add('hide');

    });
  }

  function showTabContent(i = 0) {
    tabs[i].classList.add(tabsActive);

    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
  }

  hideContent();
  showTabContent();

  tabsParent.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideContent();
          showTabContent(i);
        }
      });
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(id, deadline) {
  // Timer

  function setTimeRemaning(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor(t / (1000 * 60 * 60) % 24),
      minutes = Math.floor(t / (1000 * 60) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timerId = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = setTimeRemaning(endtime);

      days.innerHTML = setZero(t.days);
      hours.innerHTML = setZero(t.hours);
      minutes.innerHTML = setZero(t.minutes);
      seconds.innerHTML = setZero(t.seconds);
    }

    if (endtime <= 0) {
      clearInterval(timerId);
    }
  }

  setClock(id, deadline);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/*! exports provided: postData, getInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfo", function() { return getInfo; });
const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: data
  });
  return await res.json();
};

const getInfo = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url} status: ${res.status}`);
  }

  return await res.json();
};




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map