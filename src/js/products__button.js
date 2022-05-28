const productsBtnMore = document.querySelectorAll('.products__button');

productsBtnMore.forEach(btn => btn.addEventListener('click', toggleReadMore));

function toggleReadMore(e) {
  const dots = e.target.previousElementSibling.querySelector('.products__text--dots');
  const moreText = e.target.previousElementSibling.querySelector('.products__text--more');

  dots.classList.toggle('hidden');
  moreText.classList.toggle('hidden');
  e.target.classList.toggle('up');
}