import * as model from './model.js';
import * as view from './view.js';

const controlAddToDo = function (inputToDo) {
  model.createToDoItem(inputToDo);
  model.calculateRemaining();
  view.renderToDo(model.todos[model.todos.length - 1]);
  view.renderRemaining(model.remaining);
};

const controlCompleteToDo = function (todo) {
  model.completeTodo(todo);
  model.calculateRemaining();
  view.renderRemaining(model.remaining);
};

const controlShowCompleted = function () {
  view.renderCompletedItems();
};

const controlShowNotCompleted = function () {
  view.renderNotCompletedItems();
};

const controlShowAll = function () {
  view.renderAllItems();
};

const controlClearCompleted = function () {
  view.renderClear();
};

const init = function () {
  view.addHandlerToDo(controlAddToDo);
  view.addHandlerCompleteToDo(controlCompleteToDo);
  view.addHandlerShowCompleted(controlShowCompleted);
  view.addHandlerShowNotCompleted(controlShowNotCompleted);
  view.addHandlerShowAll(controlShowAll);
  view.addHandlerClearCompleted(controlClearCompleted);
  view.addHandlerAutoSelectTheme();
  view.addHandlerToggleTheme();
};

init();
