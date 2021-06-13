//DARK MODE PREFERENCE
export let prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

//ITEMS
const todos = document.querySelector('.todos');
const themeSelectorIcon = document.querySelector('.header__icon img');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const todoInfo = document.querySelector('.todo-info__items');
const hidden = document.querySelector('.hidden');

export const addHandlerAutoSelectTheme = function () {
  if (prefersDarkScheme) renderDarkMode();
  if (!prefersDarkScheme) renderLightMode();
};

export const addHandlerToggleTheme = function () {
  themeSelectorIcon.addEventListener('click', () => {
    prefersDarkScheme = !prefersDarkScheme;
    if (prefersDarkScheme) renderDarkMode();
    if (!prefersDarkScheme) renderLightMode();
  });
};

const renderLightMode = function () {
  themeSelectorIcon.src = '/assets/icon-moon.svg';
  header.classList.remove('dark');
  body.classList.remove('dark');
  const headerItems = header.querySelectorAll('*');
  headerItems.forEach(item => item.classList.remove('dark'));
  const todoItems = todos.querySelectorAll('*');
  todoItems.forEach(item => item.classList.remove('dark'));
  todoInfo.classList.remove('dark');
  hidden.classList.remove('dark');
};

const renderDarkMode = function () {
  themeSelectorIcon.src = '/assets/icon-sun.svg';
  header.classList.add('dark');
  body.classList.add('dark');
  const headerItems = header.querySelectorAll('*');
  headerItems.forEach(item => item.classList.add('dark'));
  const todoItems = todos.querySelectorAll('*');
  todoItems.forEach(item => item.classList.add('dark'));
  todoInfo.classList.add('dark');
  hidden.classList.add('dark');
};
