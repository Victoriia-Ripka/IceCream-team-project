const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');
const closemenu = document.getElementById('closemenu');
const headerButton = document.getElementById('headerbutton');

toggle.onclick = function () {
  toggle.classList.toggle('active');
  sidebar.classList.toggle('active');
  toggle.classList.toggle('is-hidden');
  headerButton.classList.toggle('is-hidden');
};
closemenu.onclick = function () {
  toggle.classList.toggle('active');
  sidebar.classList.toggle('active');
  toggle.classList.toggle('is-hidden');
  headerButton.classList.toggle('is-hidden');
};
document.onclick = function (e) {
  if (e.target.id !== 'sidebar' && e.target.id !== 'toggle' && e.target.id !== 'closemenu') {
    toggle.classList.remove('active');
    sidebar.classList.remove('active');
    toggle.classList.remove('is-hidden');
    headerButton.classList.remove('is-hidden');
  }
};
