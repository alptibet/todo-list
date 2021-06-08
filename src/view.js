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

export const renderToDo = function (state) {
  const lastItem = state[state.length - 1];
  const markup = generateMarkup(lastItem);
  const todoList = document.querySelector('.todos');
  todoList.insertAdjacentHTML('beforeend', markup);
};

const clearInput = function (inputValue) {
  inputValue.value = '';
};
