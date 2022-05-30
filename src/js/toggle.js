const toggle = document.getElementById('toggle');
const toggle2 = document.getElementById('toggle2');
const toggle3 = document.getElementById('toggle3');
const sidebar = document.getElementById('sidebar');
const closemenu = document.getElementById('closemenu');
const headerButton = document.getElementById('headerbutton');

toggle.onclick = function () {
  toggle.classList.toggle('active');
  sidebar.classList.toggle('active');
  toggle.classList.toggle('is-hidden');
  headerButton.classList.toggle('is-hidden');
};
toggle2.onclick = function () {
  toggle2.classList.toggle2('active');
  sidebar.classList.toggle2('active');
  toggle2.classList.toggle2('is-hidden');
  headerButton.classList.toggle2('is-hidden');
};
toggle3.onclick = function () {
  toggle3.classList.toggle3('active');
  sidebar.classList.toggle3('active');
  toggle3.classList.toggle3('is-hidden');
  headerButton.classList.toggle3('is-hidden');
};
closemenu.onclick = function () {
  toggle.classList.toggle('active');
  sidebar.classList.toggle('active');
  toggle.classList.toggle('is-hidden');
  headerButton.classList.toggle('is-hidden');
};
document.onclick = function (e) {
  if (
    e.target.id !== 'sidebar' &&
    e.target.id !== 'toggle' &&
    e.target.id !== 'toggle' &&
    e.target.id !== 'toggle2' &&
    e.target.id !== 'toggle3' &&
    e.target.id !== 'closemenu'
  ) {
    toggle.classList.remove('active');
    sidebar.classList.remove('active');
    toggle.classList.remove('is-hidden');
    headerButton.classList.remove('is-hidden');
  }
};
