(() => {
  const refs = {
    openModal3Btn: document.querySelector('[data-modal-open3]'),
    closeModal3Btn: document.querySelector('[data-modal-close3]'),
    modal3: document.querySelector('[data-modal3]'),
  };

  refs.openModal3Btn.addEventListener('click', toggleModal3);
  refs.closeModal3Btn.addEventListener('click', toggleModal3);

  function toggleModal3() {
    refs.modal3.classList.toggle('is-hidden');
  }
})();