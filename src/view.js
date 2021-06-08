const generateMarkup = function () {
  const markup = `<div class="todos__item">
    <form class="todos__item-form" action="#">
      <input class="todos__item-checkbox" type="checkbox" name="todo-checkbox" id="todo-checkbox" />
      <label for="todo-checkbox"></label>
      <p class="todo">Example todo</p>
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

const renderToDo = function () {
  //code here
};

const clearInput = function (inputValue) {
  inputValue.value = '';
};
