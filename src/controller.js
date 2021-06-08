import * as model from './model.js';
import * as view from './view.js';

const controlAddToDo = function (inputToDo) {
  model.createToDoItem(inputToDo);
  view.renderToDo(model.state);
  // view.addHandlerCompleteToDo(controlCompleteToDo);
};

const controlCompleteToDo = function () {
  // view.addHandlerCompleteToDo(model.state);
};

const init = function () {
  view.addHandlerToDo(controlAddToDo);
  view.addHandlerCompleteToDo(controlCompleteToDo);
};
init();
