export const todos = [];
export let remaining = 0;
export const createToDoItem = function (data) {
  const todosCopy = [...todos];
  const newToDo = {
    todo: data,
    id: createUUID(),
    completed: false,
  };

  todos.push(newToDo); //cannot figure out how to update state without modifying it
};

export const completeTodo = function (todo) {
  const item = todos.find(item => item.id === todo.id);
  item.completed = !item.completed;
};

export const calculateRemaining = function () {
  const remainingItems = todos.filter(item => item.completed === true);
  remaining = todos.length - remainingItems.length;
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
