import { prefersDarkScheme } from './viewTheme.js';
import { addHandlerDragDrop } from './viewDragDrop.js';
import { addHandlerCompleteToDo } from './viewCompleteToDo.js';

const generateMarkup = function (item) {
  let markup = '';
  if (prefersDarkScheme) {
    markup = `
    <div class="todos__item dark" draggable='true'>
      <form class="todos__item-form dark" action="#">
        <input class="todos__item-checkbox dark" type="checkbox" name="todo-checkbox" id="${item.id}" />
        <label for="${item.id}" class="dark"></label>
        <p class="todo dark">${item.todo}</p>
        <img id="${item.id}" class="todos__item-cross" src="/assets//icon-cross.svg" 
      </form>
    </div>
      `;
  } else {
    markup = `
  <div class="todos__item" draggable='true'>
    <form class="todos__item-form" action="#">
      <input class="todos__item-checkbox" type="checkbox" name="todo-checkbox" id="${item.id}" />
      <label for="${item.id}"></label>
      <p class="todo">${item.todo}</p>
      <img class="todos__item-cross" id="${item.id}" src="/assets//icon-cross.svg" 
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
