import {showModal, closeModal} from './modal';
import {postData} from '../services/services';


function formsFunc(formSelector, modalOpenTimer) {

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

      postData('http://localhost:3000/requests', json)
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

    showModal('.modal', modalOpenTimer);

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
      closeModal('.modal');
    }, 2000);


  }
}
  
export default formsFunc;