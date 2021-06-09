const generateMarkup = function (item) {
  const markup = `
  <div class="todos__item">
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

export const addHandlerShowCompleted = function (handler) {
  const parentElement = document.querySelector('.items-status');
  parentElement.addEventListener('click', function (e) {
    if (e.target.className !== 'completed') return;
    handler();
  });
};

export const addHandlerShowNotCompleted = function (handler) {
  const parentElement = document.querySelector('.items-status');
  parentElement.addEventListener('click', function (e) {
    if (e.target.className !== 'active') return;
    handler();
  });
};

export const addHandlerShowAll = function (handler) {
  const parentElement = document.querySelector('.items-status');
  parentElement.addEventListener('click', function (e) {
    if (e.target.className !== 'all') return;
    handler();
  });
};

export const addHandlerClearCompleted = function (handler) {
  const parentElement = document.querySelector('.items-clear');
  parentElement.addEventListener('click', function (e) {
    if (e.target.className !== 'clear') return;
    handler();
  });
};

export const renderCompletedItems = function (items) {
  renderAllItems(items);
  const notCompleteTodos = items.filter(item => item.completed !== true);
  const elements = notCompleteTodos.forEach(function (item) {
    const element = document.querySelector('#' + CSS.escape(item.id));
    const items = element.closest('.todos__item');
    items.style.display = 'none';
  });
};

export const renderNotCompletedItems = function (items) {
  renderAllItems(items);
  const completeTodos = items.filter(item => item.completed === true);
  const elements = completeTodos.forEach(function (item) {
    const element = document.querySelector('#' + CSS.escape(item.id));
    const items = element.closest('.todos__item');
    items.style.display = 'none';
  });
};

export const renderAllItems = function (items) {
  const elements = items.forEach(function (item) {
    const element = document.querySelector('#' + CSS.escape(item.id));
    const items = element.closest('.todos__item');
    items.style.display = 'block';
  });
};

export const renderClear = function (items) {
  const parentElement = document.querySelector('.todos');
  const elements = items.forEach(function (item) {
    const element = document.querySelector('#' + CSS.escape(item.id));
    console.log(element);
    const itemToDelete = element.closest('.todos__item');
    parentElement.removeChild(itemToDelete);
  });
};
