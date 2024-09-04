const body = document.body;
const btnTheme = document.querySelector('.fa-moon');
const btnHamburger = document.querySelector('.fa-bars');
const btnScrollTop = document.querySelector('.scroll-top');

// Function to add theme classes
const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
};

// Retrieve theme settings from localStorage
const getBodyTheme = localStorage.getItem('portfolio-theme');
const getBtnTheme = localStorage.getItem('portfolio-btn-theme');

// Apply stored theme settings
if (getBodyTheme) {
  addThemeClass(getBodyTheme, getBtnTheme);
}

// Check if the current theme is dark
const isDark = () => body.classList.contains('dark');

// Function to set a new theme
const setTheme = (bodyClass, btnClass) => {
  // Remove existing theme classes
  body.classList.remove(localStorage.getItem('portfolio-theme'));
  btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'));

  // Add new theme classes
  addThemeClass(bodyClass, btnClass);

  // Save the new theme settings to localStorage
  localStorage.setItem('portfolio-theme', bodyClass);
  localStorage.setItem('portfolio-btn-theme', btnClass);
};

// Toggle between light and dark themes
const toggleTheme = () =>
  isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun');

btnTheme.addEventListener('click', toggleTheme);

// Function to toggle navigation menu visibility
const displayList = () => {
  const navUl = document.querySelector('.nav__list');

  if (btnHamburger.classList.contains('fa-bars')) {
    btnHamburger.classList.remove('fa-bars');
    btnHamburger.classList.add('fa-times');
    navUl.classList.add('display-nav-list');
  } else {
    btnHamburger.classList.remove('fa-times');
    btnHamburger.classList.add('fa-bars');
    navUl.classList.remove('display-nav-list');
  }
};

btnHamburger.addEventListener('click', displayList);

// Function to show or hide the scroll-to-top button
const scrollUp = () => {
  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnScrollTop.style.display = 'block';
  } else {
    btnScrollTop.style.display = 'none';
  }
};

document.addEventListener('scroll', scrollUp);

// Scroll to top when button is clicked
btnScrollTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Script to toggle the display of coursework in the education section
document.querySelectorAll('.education__item').forEach(item => {
  item.addEventListener('click', () => {
    const coursework = item.querySelector('.education__coursework');
    if (coursework) {
      coursework.classList.toggle('hidden');
    }
  });
});
