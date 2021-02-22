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

export default modal;
export {showModal, closeModal};
