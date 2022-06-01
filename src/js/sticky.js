window.onscroll = function () {
  myFunction();
};
var header = document.getElementById('sticky-header');
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById('sticky-header').style.background = '#ffb8ca';
  } else {
    document.getElementById('sticky-header').style.background = 'transparent';
  }
}
