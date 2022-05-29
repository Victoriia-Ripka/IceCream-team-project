const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');
document.onclick = function (e) {
  if (e.target.id !== 'sidebar' && e.target.id !== 'toggle') {
    toggle.classList.remove('active');
    sidebar.classList.remove('active');
  }
};


function (toggle) {
  refs.menu.classList.toggle('is-hidden');
  refs.openMenuBtn.classList.toggle('is-hidden');
  refs.headerButton.classList.toggle('visually-hidden');
}