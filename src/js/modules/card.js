import {getInfo} from '../services/services';

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

  getInfo('http://localhost:3000/menu')
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

export default card;