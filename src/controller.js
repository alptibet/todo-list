import * as model from './model.js';
import * as view from './view.js';

const controlAddToDo = function (inputToDo) {
  model.createToDoItem(inputToDo);
  model.calculateRemaining();
  view.renderToDo(model.todos);
  view.renderRemaining(model.remaining);
};

const controlCompleteToDo = function (todo) {
  model.completeTodo(todo);
  model.calculateRemaining();
  view.renderRemaining(model.remaining);
};

const controlShowCompleted = function () {
  view.renderCompletedItems(model.todos);
};

const controlShowNotCompleted = function () {
  view.renderNotCompletedItems(model.todos);
};

const controlShowAll = function () {
  view.renderAllItems(model.todos);
};

const controlClearCompleted = function () {
  const clearItems = model.clearCompleted();
  view.renderClear(clearItems);
};

const init = function () {
  view.addHandlerToDo(controlAddToDo);
  view.addHandlerCompleteToDo(controlCompleteToDo);
  view.addHandlerShowCompleted(controlShowCompleted);
  view.addHandlerShowNotCompleted(controlShowNotCompleted);
  view.addHandlerShowAll(controlShowAll);
  view.addHandlerClearCompleted(controlClearCompleted);
};

init();
