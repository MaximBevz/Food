'use strict';
import tabs from './modules/tabs';
import timer from './modules/timer';
import slider from './modules/slider';
import scrollTop from './modules/scrollTop';
import modal from './modules/modal';
import forms from './modules/forms';
import card from './modules/card';
import calc from './modules/calc';
import {showModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
  const modalOpenTimer = setTimeout(() => showModal('.modal', modalOpenTimer), 300000);

  tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  timer('.timer', '2021-03-01');
  slider({
    container: '.offer__slider',
    currentSlides: '#current',
    totalSlides: '#total',
    next: '.offer__slider-next',
    prev: '.offer__slider-prev',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner',
    slide: '.offer__slide'
  });
  scrollTop();
  modal('[data-modal]', '.modal', modalOpenTimer);
  forms('form' , modalOpenTimer);
  card();
  calc();

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


