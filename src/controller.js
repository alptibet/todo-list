import * as model from './model.js';
import * as view from './view.js';

const controlAddToDo = function (inputToDo) {
  model.createToDoItem(inputToDo);
  view.renderToDo(model.state);
};

const init = function () {
  view.addHandlerToDo(controlAddToDo);
};
init();
