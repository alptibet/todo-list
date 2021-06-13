import * as model from './model.js';
import * as viewAddToDo from './views/viewAddToDo.js';
import * as viewCompleteToDo from './views/viewCompleteToDo.js';
import * as viewDeleteToDo from './views/viewDeleteToDo.js';
import * as viewDragDrop from './views/viewDragDrop.js';
import * as viewFilters from './views/viewFilters.js';
import * as viewTheme from './views/viewTheme.js';

const controlAddToDo = function (todo) {
  model.createToDoItem(todo);
  model.calculateRemaining();
  viewAddToDo.renderToDo(model.todos[model.todos.length - 1]);
  viewCompleteToDo.renderRemaining(model.remaining);
};

const controlCompleteToDo = function (todo) {
  model.completeTodo(todo);
  model.calculateRemaining();
  viewCompleteToDo.renderRemaining(model.remaining);
};

const controlShowCompleted = function () {
  viewFilters.renderCompletedItems();
};

const controlShowNotCompleted = function () {
  viewFilters.renderNotCompletedItems();
};

const controlShowAll = function () {
  viewFilters.renderAllItems();
};

const controlClearCompleted = function () {
  viewFilters.renderClear();
};

const controlDeleteToDo = function (todo) {
  model.deleteToDo(todo);
  viewDeleteToDo.renderDelete(todo);
  model.calculateRemaining();
  viewCompleteToDo.renderRemaining(model.remaining);
};

const init = function () {
  viewAddToDo.addHandlerToDo(controlAddToDo);
  viewCompleteToDo.addHandlerCompleteToDo(controlCompleteToDo);
  viewDeleteToDo.addHandlerDeleteToDo(controlDeleteToDo);
  viewFilters.addHandlerShowCompleted(controlShowCompleted);
  viewFilters.addHandlerShowNotCompleted(controlShowNotCompleted);
  viewFilters.addHandlerShowAll(controlShowAll);
  viewFilters.addHandlerClearCompleted(controlClearCompleted);
  viewTheme.addHandlerAutoSelectTheme();
  viewTheme.addHandlerToggleTheme();
  viewDragDrop.addHandlerDragDrop();
};

init();
