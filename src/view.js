const generateMarkup = function (item) {
  const markup = `
  <div class="todos__item"  draggable='true'>
    <form class="todos__item-form" action="#">
      <input class="todos__item-checkbox" type="checkbox" name="todo-checkbox" id="${item.id}" />
      <label for="${item.id}"></label>
      <p class="todo">${item.todo}</p>
    </form>
  </div>
    `;
  return markup;
};

export const addHandlerToDo = function (handler) {
  const parentElement = document.querySelector('.header__input-todo');
  parentElement.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputValue = this.parentElement.querySelector('.todo__textbox');
    handler(inputValue.value);
    clearInput(inputValue);
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
      if (e.target.className !== 'todos__item-checkbox') return;
      handler(e.target);
    });
  });
};

export const renderComplete = function (item) {
  const form = item.closest(' form ');
  const parag = form.querySelector('p');
  if (item.checked) {
    parag.style.textDecoration = 'line-through';
    parag.style.textDecorationThickness = '2px';
    parag.style.textDecorationColor = 'hsl(236, 9%, 61%)';
    parag.style.color = 'hsl(236, 9%, 61%)';
  } else {
    parag.style.textDecoration = 'none';
    parag.style.color = 'hsl(235, 19%, 35 %)';
  }
};

export const renderRemaining = function (items) {
  const element = document.querySelector('.items-left > p');
  if (items > 0) element.textContent = `${items} items left`;
  if (items === 0) element.textContent = 'No items left';
};

//FILTERS//
const parentElement = document.querySelector('.todo-info');
const todos = document.querySelector('.todos');

export const addHandlerShowCompleted = function (handler) {
  parentElement.addEventListener('click', function (e) {
    if (e.target.className !== 'completed') return;
    handler();
  });
};

export const addHandlerShowNotCompleted = function (handler) {
  parentElement.addEventListener('click', function (e) {
    if (e.target.className !== 'active') return;
    handler();
  });
};

export const addHandlerShowAll = function (handler) {
  parentElement.addEventListener('click', function (e) {
    if (e.target.className !== 'all') return;
    handler();
  });
};

export const addHandlerClearCompleted = function (handler) {
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
let overrideDarkTheme = false;
const preferDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const themeSelectorIcon = document.querySelector('.header__icon');
themeSelectorIcon.addEventListener('click', function (e) {
  e.preventDefault();
  overrideDarkTheme = !overrideDarkTheme;
  const icon = themeSelectorIcon.querySelector('img');
  if (overrideDarkTheme) icon.src = '/assets/icon-sun.svg';
  if (!overrideDarkTheme) icon.src = '/assets/icon-moon.svg';
  console.log(overrideDarkTheme);
});

if (overrideDarkTheme && preferDarkScheme) {
  //code
}
