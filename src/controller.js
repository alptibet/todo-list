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

const init = function () {
  view.addHandlerToDo(controlAddToDo);
  view.addHandlerCompleteToDo(controlCompleteToDo);
};
init();
