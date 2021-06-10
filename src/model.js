export const todos = [];
export let remaining = 0;
export const createToDoItem = function (data) {
  const newToDo = {
    todo: data,
    id: createUUID(),
    completed: false,
  };

  todos.push(newToDo); //cannot figure out how to update state without modifying it
};

const createUUID = function () {
  let dt = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};

export const completeTodo = function (todo) {
  const copyTodos = [...todos];
  const item = copyTodos.find(item => item.id === todo.id);
  item.completed = !item.completed;
};

export const calculateRemaining = function () {
  const copyTodos = [...todos];
  const remainingItems = copyTodos.filter(item => item.completed === true);
  remaining = copyTodos.length - remainingItems.length;
};

export const clearCompleted = function () {
  const copyTodos = [...todos];
  const toClear = copyTodos.filter(item => item.completed === true);
  return toClear;
};
