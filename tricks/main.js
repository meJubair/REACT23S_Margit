const backButton = document.querySelector('#backToTop');
const mobButton = document.querySelector('.mobile')
const nav = document.querySelector('nav ul')
const menuItems = document.querySelectorAll('nav ul li a')
const header = document.querySelector('header')

// browser onscroll event triger
window.onscroll = function () { scrollFunction() };

// code form W3S about scrolling, for for two browsers
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backButton.style.display = "block";
  } else {
    backButton.style.display = "none";
  }
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add('bg')
  } else {
    header.classList.remove('bg')
  }
}

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const mobMenu = () => {
  for (const item of menuItems) {
    item.addEventListener('click', mobMenu)
  }

  if (nav.classList.contains('responsive')) {
    nav.classList.remove('responsive')
  } else {
    nav.classList.add('responsive')
  }

}

backButton.addEventListener('click', getToTop)
mobButton.addEventListener('click', mobMenu)
