(() => {
  const refs = {
    openModal2Btn: document.querySelector("[data-modal-open2]"),
    closeModal2Btn: document.querySelector("[data-modal-close2]"),
    modal2: document.querySelector("[data-modal2]"),
  };

  refs.openModal2Btn.addEventListener("click", toggleModal2);
  refs.closeModal2Btn.addEventListener("click", toggleModal2);

  function toggleModal2() {
    refs.modal2.classList.toggle("is-hidden");
  }
})();