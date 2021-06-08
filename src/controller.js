import * as model from './model.js';
import * as view from './view.js';

const controlAddToDo = function (inputToDo) {
  model.addToDo(inputToDo);
};

const init = function () {
  view.addHandlerToDo(controlAddToDo);
};
init();
