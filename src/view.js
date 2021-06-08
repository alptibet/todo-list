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

export const addHandlerCompleteToDo = function () {
  // const parentElement = document.querySelectorAll('.todos__item-form');
  // parentElement.forEach(item => {
  //   item.addEventListener('click', function (e) {
  //     if (e.target.className !== 'todos__item-checkbox') return;
  //     console.log(e.target);
  //   });
  // });

  const list = document.querySelectorAll('.todos');
  console.log(list);
  list.forEach(element => {
    element.addEventListener('click', function (e) {
      console.log(e.target);
    });
  });
};

const renderComplete = function (item) {
  // console.log(item.id);
};

const clearInput = function (inputValue) {
  inputValue.value = '';
};
