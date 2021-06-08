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

export const renderToDo = function (todos) {
  const lastItem = todos[todos.length - 1];
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

const clearInput = function (inputValue) {
  inputValue.value = '';
};
