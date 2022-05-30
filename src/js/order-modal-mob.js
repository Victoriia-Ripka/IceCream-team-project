(() => {
  const refs = {
    openModal1Btn: document.querySelector('[data-modal-open1]'),
    closeModal1Btn: document.querySelector('[data-modal-close1]'),
    modal1: document.querySelector('[data-modal1]'),
  };

  refs.openModal1Btn.addEventListener('click', toggleModal1);
  refs.closeModal1Btn.addEventListener('click', toggleModal1);

  function toggleModal1() {
    refs.modal1.classList.toggle('is-hidden');
  }
})();