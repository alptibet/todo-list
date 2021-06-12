const generateMarkup = function (item) {
  let markup = '';
  if (prefersDarkScheme) {
    markup = `
    <div class="todos__item dark"  draggable='true'>
      <form class="todos__item-form dark" action="#">
        <input class="todos__item-checkbox dark" type="checkbox" name="todo-checkbox" id="${item.id}" />
        <label for="${item.id}" class="dark"></label>
        <p class="todo dark">${item.todo}</p>
      </form>
    </div>
      `;
  } else {
    markup = `
  <div class="todos__item"  draggable='true'>
    <form class="todos__item-form" action="#">
      <input class="todos__item-checkbox" type="checkbox" name="todo-checkbox" id="${item.id}" />
      <label for="${item.id}"></label>
      <p class="todo">${item.todo}</p>
    </form>
  </div>
    `;
  }

  return markup;
};

export const addHandlerToDo = function (handler) {
  const parentElement = document.querySelector('.header__input-todo');
  parentElement.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputElement = this.parentElement.querySelector('.todo__textbox');
    handler(inputElement.value);
    clearInput(inputElement);
  });
};

const clearInput = function (inputValue) {
  inputValue.value = '';
};

export const renderToDo = function (todo) {
  const markup = generateMarkup(todo);
  const todoList = document.querySelector('.todos');
  todoList.insertAdjacentHTML('beforeend', markup);
  addHandlerDragDrop();
};

export const addHandlerCompleteToDo = function (handler) {
  const list = document.querySelectorAll('.todos');
  list.forEach(element => {
    element.addEventListener('click', function (e) {
      if (!e.target.className.includes('todos__item-checkbox')) return;
      handler(e.target);
    });
  });
};

export const renderRemaining = function (items) {
  const element = document.querySelector('.items-left > p');
  if (items > 0) element.textContent = `${items} items left`;
  if (items === 0) element.textContent = 'No items left';
};

//FILTERS//

const todos = document.querySelector('.todos');

export const addHandlerShowCompleted = function (handler) {
  const parentElement = document.querySelector('.todo-info');
  parentElement.addEventListener('click', function (e) {
    if (e.target.className !== 'completed') return;
    handler();
  });
};

export const addHandlerShowNotCompleted = function (handler) {
  const parentElement = document.querySelector('.todo-info');
  parentElement.addEventListener('click', function (e) {
    if (e.target.className !== 'active') return;
    handler();
  });
};

export const addHandlerShowAll = function (handler) {
  const parentElement = document.querySelector('.todo-info');
  parentElement.addEventListener('click', function (e) {
    if (e.target.className !== 'all') return;
    handler();
  });
};

export const addHandlerClearCompleted = function (handler) {
  const parentElement = document.querySelector('.todo-info');
  parentElement.addEventListener('click', function (e) {
    if (e.target.className !== 'clear') return;
    handler();
  });
};

export const renderCompletedItems = function (items) {
  renderAllItems(items);
  const boxes = todos.querySelectorAll('input');
  boxes.forEach(function (box) {
    if (!box.checked) {
      const el = box.closest('.todos__item');
      el.style.display = 'none';
    }
  });
};

export const renderNotCompletedItems = function (items) {
  renderAllItems(items);
  const boxes = todos.querySelectorAll('input');
  boxes.forEach(function (box) {
    if (box.checked) {
      const el = box.closest('.todos__item');
      el.style.display = 'none';
    }
  });
};

export const renderAllItems = function (items) {
  const boxes = todos.querySelectorAll('input');
  boxes.forEach(function (box) {
    const el = box.closest('.todos__item');
    el.style.display = 'block';
  });
};

export const renderClear = function () {
  const boxes = todos.querySelectorAll('input');
  boxes.forEach(function (box) {
    if (box.checked) {
      const el = box.closest('.todos__item');
      todos.removeChild(el);
    }
  });
};

//DRAG AND DROP
let sourceElement = null;
const addHandlerDragDrop = function () {
  const items = document.querySelectorAll('.todos__item');
  items.forEach(item => item.addEventListener('dragstart', handleDragStart));
  items.forEach(item => item.addEventListener('drop', handleDrop));
  items.forEach(item => item.addEventListener('dragover', handleDragOver));
};

const handleDragStart = function (e) {
  sourceElement = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
};

const handleDragOver = function (e) {
  e.preventDefault();
  return false;
};

const handleDrop = function (e) {
  e.stopPropagation();
  if (sourceElement !== this) {
    sourceElement.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
};

//DARK MODE PREFERENCE
let prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

//ITEMS
const themeSelectorIcon = document.querySelector('.header__icon img');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const todoInfo = document.querySelector('.todo-info__items');

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
  body.classList.remove('dark');
  const headerItems = header.querySelectorAll('*');
  headerItems.forEach(item => item.classList.remove('dark'));
  const todoItems = todos.querySelectorAll('*');
  todoItems.forEach(item => item.classList.remove('dark'));
  todoInfo.classList.remove('dark');
};

const renderDarkMode = function () {
  themeSelectorIcon.src = '/assets/icon-sun.svg';
  body.classList.add('dark');
  const headerItems = header.querySelectorAll('*');
  headerItems.forEach(item => item.classList.add('dark'));
  const todoItems = todos.querySelectorAll('*');
  todoItems.forEach(item => item.classList.add('dark'));
  todoInfo.classList.add('dark');
};

/*
Items to change color in dark mode
-header background img
-body background color
-input background color
-input font color
-todos background color
-todos font color
-todos completed font color
*/
