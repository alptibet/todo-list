const generateMarkup = function (item) {
  const markup = `
  <div class="todos__item" id=divid${item.id}>
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

export const renderToDo = function (todos) {
  const copyTodos = [...todos];
  const lastItem = copyTodos[copyTodos.length - 1];
  const markup = generateMarkup(lastItem);
  const todoList = document.querySelector('.todos');
  todoList.insertAdjacentHTML('beforeend', markup);
};

export const addHandlerCompleteToDo = function (handler) {
  const list = document.querySelectorAll('.todos');
  list.forEach(element => {
    element.addEventListener('click', function (e) {
      if (e.target.className !== 'todos__item-checkbox') return;
      renderComplete(e.target);
      handler(e.target);
    });
  });
};

const renderComplete = function (item) {
  const form = item.closest(' form ');
  const parag = form.querySelector('p');
  if (item.checked) {
    parag.style.textDecoration = 'line-through';
    parag.style.textDecorationThickness = '2px';
  } else {
    parag.style.textDecoration = 'none';
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
