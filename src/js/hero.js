const productsBtnMore = document.querySelectorAll('.hero-btn-milk');

productsBtnMore.forEach(btn => btn.addEventListener('click', toggleReadMore));

function toggleReadMore(e) {
  const moreText = e.target.previousElementSibling.querySelector('.hero-text-milc-continuation');
  moreText.classList.toggle('hidden');
  e.target.classList.toggle('back');
}