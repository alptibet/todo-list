import * as model from './model.js';
import * as view from './view.js';

const controlAddToDo = function (inputToDo) {
  model.createToDoItem(inputToDo);
  view.renderToDo(model.todos);
};

const controlCompleteToDo = function (todo) {
  model.completeTodo(todo);
};

const init = function () {
  view.addHandlerToDo(controlAddToDo);
  view.addHandlerCompleteToDo(controlCompleteToDo);
};
init();
