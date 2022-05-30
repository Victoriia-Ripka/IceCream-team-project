(() => {
  const refs = {
    openModal_desk_Btn: document.querySelector('[data-modal-open_desk]'),
    closeModal_desk_Btn: document.querySelector('[data-modal-close_desk]'),
    modal_desk: document.querySelector('[data-modal_desk]'),
  };

  refs.openModal_desk_Btn.addEventListener('click', toggleModal_desk);
  refs.closeModal_desk_Btn.addEventListener('click', toggleModal_desk);

  function toggleModal_desk() {
    refs.modal_desk.classList.toggle('is-hidden');
  }
})();