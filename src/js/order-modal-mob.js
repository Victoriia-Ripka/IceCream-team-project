(() => {
  const refs = {
    openModal_mob_Btn: document.querySelector('[data-modal-open_mob]'),
    closeModal_mob_Btn: document.querySelector('[data-modal-close_mob]'),
    modal_mob: document.querySelector('[data-modal_mob]'),
  };

  refs.openModal_mob_Btn.addEventListener('click', toggleModal_mob);
  refs.closeModal_mob_Btn.addEventListener('click', toggleModal_mob);

  function toggleModal_mob() {
    refs.modal_mob.classList.toggle('is-hidden');
  }
})();